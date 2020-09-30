# How to work on the docs theme

> [!NOTE] A quick reminder that you do not need to setup anything for working on the content for the documentation site.
> 
> To work on the contributing guidelines, you can edit or add files in the `docs` directory [available here](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). When your changes are merged, it will be made available automatically at the documentation site.

## Structure of the docs website

The site is generated using [`docsify`](https://docsify.js.org), and served using GitHub pages.

Typically you would not need to change any configuration or build the site locally. In case you are interested, here is how it works:

- The homepage's source for this site is available in [`docs/index.html`](index.html).
- We serve this file as a SPA using `docsify` and GitHub Pages.
- The `docsify` script generates the content of `markdown` files in `docs` directory on demand.
- The homepage is generated from the [`_coverpage.md`](_coverpage.md).
- the sidebar navigation is generated from [`_sidebar.md`](_sidebar.md).

## Serving the documentation site locally

Clone freeCodeCamp:

```sh
git clone https://github.com/freeCodeCamp/freeCodeCamp.git
docsify serve docs
```

Install `docsify`:

```sh
npm install -g docsify
```

and serve the `/docs` directory

```sh
docsify serve docs
```

Alternatively, if you have installed freeCodeCamp locally (see the local setup guide), we bundle the CLI with the development tools so you can run `npm run docs:serve` from the root of the repo.
