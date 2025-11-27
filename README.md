## The use case

I write our newsletters in Markdown or Google Docs (which exports to Markdown).

Inspired by [Josh W Comeau](https://www.joshwcomeau.com/react/wonderful-emails-with-mjml-and-mdx/#composing-emails-with-mdx), I wanted a way to write once, in Markdown, and convert to a blog post and an email.

## What it does

- Takes an `.mdx` file as input.
- Uses a library of components, sections and snippets.
- Renders `.mjml` and then `.html` files.

Difference between each type of element:
- **Component:** low-level building block, like `<p>`.
- **Section:** MJML is divided into "sections". These elements support the use of sections.
- **Snippet:** A pre-built design "snippet" that makes use of several components (or potentially sections).

## Install and run

Install [Bun](https://bun.sh) with their install script.

Install dependencies:

```
bun install
```

Run it:

```
bun main.js
```

## Things I'd like to do in the future

- Specify input file on the command line.
- Re-architect away from one large `main.js` file.
- Support different "themes".
  - These could be different folders of components, with the styles coded into the components.
  - If inlining works properly, the components might be similar but the styles stored globally in a `.css` file (I've started with this but not nailed it).
- Support [React Email](https://react.email). I am familiar with MJML but React Email might be simpler with `.mdx`. 
  - Supporting both might be cool. I.e. choose whether a "theme" is in Markdown or React Email.
- Automatically detect which components have an `MjmlSection` component as these need to be handled differently.