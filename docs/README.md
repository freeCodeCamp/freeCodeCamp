> ### All our documentation and contributing guidlines are available on a dedicated site here: <https://contribute.freecodecamp.org>.

### Looking to edit the contributing guidelines?

To work on the contributing guidelines, you can edit these files [available here](https://github.com/freeCodeCamp/freeCodeCamp/tree/master/docs). When your changes are merged, it will be made available automatically at the documentation site linked above.

**You do not need to setup anything locally for working on the documentation.**

### How is the documentation site generated?

The documentation site is generated using [`docsify`](https://docsify.js.org), and served using GitHub pages. Typically you would not need to change any configuration, or build the site locally, but incase you are interested here is how it works:

1. The guideline homepage's source is [`index.html`](index.html). GitHub Pages serve this file as a SPA using `docsify`.
2. The `docsify` script generates the content of `markdown` files in `/docs` directory on demand when you are browsing the documentation site.
3. The home page is genrated from the [`index.md`](index.md) and sidebar navigation is generated from [`components/sidebar.md`](components/sidebar.md).
4. To serve the docs locally:

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
