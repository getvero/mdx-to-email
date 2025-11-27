## The use case

I write our newsletters in Google Docs which exports nicely to Markdown.

Inspired by [Josh W Comeau](https://www.joshwcomeau.com/react/wonderful-emails-with-mjml-and-mdx/#composing-emails-with-mdx), I wanted a way to write in Markdown and generate both a blog post and an email.

This repository generates emails from `.mdx` files.

## What it does

- Takes an `.mdx` file as input.
- References a library of components, sections and snippets.
- Renders `.mjml` and `.html` files.

Difference between each type of element:
- **Component:** low-level building block, like `<p>`.
- **Section:** MJML is divided into "sections". These elements support the creation of different section layouts.
- **Snippet:** A pre-designed "snippet" that makes use of several components.

## Video walkthrough

https://github.com/user-attachments/assets/4409a94d-2e01-4759-a9ef-fd07a3c7a77a

## Install and run

Install [Bun](https://bun.sh) with their install script.

Install dependencies:

```
bun install
```

Run it:

```
bun main.js inputs/name-of-input-file.mdx
```

## Things I'd like to do in the future

- Refactor away from one large `main.js` file.
- Support different themes/brands. This might be as simple as including different `.css` files but the inlining doesn't seem to work as fully as I'd like yet. 
- Automatically detect which components have an `MjmlSection` component as these need to be handled differently during rendering.

## License

MIT license.
