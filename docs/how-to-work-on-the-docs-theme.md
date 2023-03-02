# How to work on documentation

## Work on the content of the docs

To work on the contributing guidelines, you can edit or add files in the `docs` directory [available here](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/docs). When your changes are merged, they will be made available automatically at the documentation site.

When adding a new file to the `docs` directory, you should evaluate if the file should also be added to the sidebar navigation. We typically create a link in the [`_sidebar.md`](_sidebar.md) file for new and independent guides. Alternatively, You may follow the instructions below on creating an internal link for supporting guides.

### How to create an internal link

If you want to create a link targeting a different section of the contributing guidelines, follow this format:

```md
[Link text](target-file-name.md#target-section-heading-id)

// If the target section is within the same page, you can omit the file name
[Link text](#target-section-heading-id)
```

Make sure you include the file extension (`.md`). Don't specify the full URL or append `/` before the file name.

This is necessary to make these links work for the translated version of the document. Otherwise, they will redirect to the English version of the page regardless of the language.

#### Translating docs with internal links

When you work on translating docs on Crowdin, make sure to replace the `#target-section-heading-id` with the id on the translated document. [Learn more about translating docs here](how-to-translate-files.md#translate-documentation).

## Work on the docs theme

> [!NOTE]
> A quick reminder that you do not need to set up anything for working on the content for the documentation site.
>
> To work on the contributing guidelines, see [work on the docs content](#work-on-the-docs-content) section.

### Structure of the docs website

The site is generated using [`docsify`](https://docsify.js.org) and served using GitHub pages.

Typically you would not need to change any configuration or build the site locally. In case you are interested, here is how it works:

- The homepage's source for this site is available in [`docs/index.html`](index.html).
- We serve this file as a SPA using `docsify` and GitHub Pages.
- The `docsify` script generates the content of `markdown` files in the `docs` directory on demand.
- The homepage is generated from the [`_coverpage.md`](_coverpage.md).
- The sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

### Serving the documentation site locally

Install freeCodeCamp locally ([see the local setup guide](how-to-setup-freecodecamp-locally)), we bundled the CLI with the development tools so you can run any of the below commands as needed from the root of the repo:

#### Serve and launch the documentation site only

```console
pnpm run docs:serve
```

#### Serve the documentation site alongside freeCodeCamp locally:

```console
pnpm run develop
```

> The documentation site should be available at <http://localhost:3400>
