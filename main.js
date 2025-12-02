#!/usr/bin/env bun

import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import { program } from "commander";
import fs from "fs";
import matter from "gray-matter";
import mjml2html from "mjml";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import prettier from "prettier";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";

// Import our source components
import Code from "./src/components/content/Code.jsx";
import Em from "./src/components/content/Em.jsx";
import H1 from "./src/components/content/H1.jsx";
import H2 from "./src/components/content/H2.jsx";
import H3 from "./src/components/content/H3.jsx";
import Hr from "./src/components/content/Hr.jsx";
import Li from "./src/components/content/Li.jsx";
import Ol from "./src/components/content/Ol.jsx";
import Paragraph from "./src/components/content/Paragraph.jsx";
import Pre from "./src/components/content/Pre.jsx";
import Table from "./src/components/content/Table.jsx";
import Td from "./src/components/content/Td.jsx";
import Tr from "./src/components/content/Tr.jsx";
import Ul from "./src/components/content/Ul.jsx";
import Column from "./src/components/sections/Column.jsx";
import MultipleColumns from "./src/components/sections/MultipleColumns.jsx";
import SingleColumn from "./src/components/sections/SingleColumn.jsx";
import Footer from "./src/components/snippets/Footer.jsx";
import Header from "./src/components/snippets/Header.jsx";
import IntroBlueBackground from "./src/components/snippets/IntroBlueBackground.jsx";
import ProductFeature from "./src/components/snippets/ProductFeature.jsx";

// Import our templates
import WeeklyNewsletterTemplate from "./src/templates/WeeklyNewsletterTemplate.jsx";

program
	.name("mdx-to-mjml")
	.description("Convert MDX files to MJML/HTML email templates")
	.argument("<input-file>", "Path to the input MDX file")
	.parse(process.argv);

const inputFilePath = program.args[0];
if (!inputFilePath) {
	console.error("Error: Input file path is required");
	program.help();
	process.exit(1);
}
const inputPath = path.isAbsolute(inputFilePath)
	? inputFilePath
	: path.resolve(process.cwd(), inputFilePath);
if (!fs.existsSync(inputPath)) {
	console.error(`Error: File not found: ${inputPath}`);
	process.exit(1);
}

const inputFile = path.basename(inputPath);
const outputDir = path.resolve(process.cwd(), "outputs");
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}
const mjmlOutputPath = path.join(outputDir, inputFile.replace(".mdx", ".mjml"));
const htmlOutputPath = path.join(outputDir, inputFile.replace(".mdx", ".html"));

const cssPath = "./src/styles/global.css";

const MDX_COMPONENTS = {
	p: Paragraph,
	pre: Pre,
	h1: H1,
	h2: H2,
	h3: H3,
	hr: Hr,
	ul: Ul,
	ol: Ol,
	li: Li,
	code: Code,
	em: Em,
	table: Table,
	tr: Tr,
	td: Td,
	Column,
	SingleColumn,
	MultipleColumns,
	ProductFeature,
	IntroBlueBackground,
	Header,
	Footer,
};

// Define components that contain MjmlSection.
// These will be used to render different MjmlSections correctly.
const COMPONENTS_CONTAINING_SECTION = [
	"SingleColumn",
	"MultipleColumns",
	"Header",
	"Footer",
	"Hr",
	"IntroBlueBackground",
];

// We wrap any components that *do not* have an MjmlSection component in a SingleColumn component.
// The SingleColumn component introduces an MjmlSection wrapper.
// We do all this to enable support for snippets, etc. that require different MjmlSection wrappers.
async function groupAndWrapStandaloneElements(mdxContent) {
	const processor = unified()
		.use(remarkParse)
		.use(remarkMdx)
		.use(() => (tree) => {
			if (!tree.children || tree.children.length === 0) return;

			const newChildren = [];
			let standaloneBuffer = [];

			const flushBuffer = () => {
				if (standaloneBuffer.length > 0) {
					newChildren.push({
						type: "mdxJsxFlowElement",
						name: "SingleColumn",
						attributes: [],
						children: [...standaloneBuffer],
					});
					standaloneBuffer = [];
				}
			};

			tree.children.forEach((node) => {
				// Key: check if this is a component that contains MjmlSection
				const containsMjmlSection =
					node.type === "mdxJsxFlowElement" &&
					COMPONENTS_CONTAINING_SECTION.includes(node.name);

				if (containsMjmlSection) {
					flushBuffer();
					newChildren.push(node);
				} else {
					standaloneBuffer.push(node);
				}
			});

			flushBuffer();

			tree.children = newChildren;
		})
		.use(remarkStringify);

	const result = await processor.process(mdxContent);
	return result.toString();
}

async function convertMdxToHtml() {
	const rawMdxContent = fs.readFileSync(inputPath, "utf8");
	const { data: frontmatter, content: contentWithoutFrontmatter } =
		matter(rawMdxContent);

	const processedMdxContent = await groupAndWrapStandaloneElements(
		contentWithoutFrontmatter,
	);

	const globalCss = fs.readFileSync(cssPath, "utf8");

	const mdxSource = await serialize(processedMdxContent, {
		scope: {
			frontmatter: frontmatter,
		},
		mdxOptions: {
			remarkPlugins: [remarkGfm],
		},
	});

	const mjmlContent = renderToMjml(
		<WeeklyNewsletterTemplate frontmatter={frontmatter} globalCss={globalCss}>
			<MDXRemote {...mdxSource} components={MDX_COMPONENTS} />
		</WeeklyNewsletterTemplate>,
	);

	const prettifiedMjml = await prettier.format(mjmlContent, {
		parser: "html",
		printWidth: 100,
		tabWidth: 2,
		useTabs: false,
		htmlWhitespaceSensitivity: "ignore",
		bracketSameLine: true,
	});

	fs.writeFileSync(mjmlOutputPath, prettifiedMjml);
	console.log(`MJML file created: ${mjmlOutputPath}`);

	// Convert MJML to HTML - let mjml2html handle formatting
	const { html, errors } = await mjml2html(mjmlContent, {
		beautify: true,
		minify: true,
		applyStyleTags: true,
	});

	if (errors && errors.length > 0) {
		console.warn("MJML validation errors:", errors);
	}

	fs.writeFileSync(htmlOutputPath, html);
	console.log(`HTML file created: ${htmlOutputPath}`);
}

convertMdxToHtml();
