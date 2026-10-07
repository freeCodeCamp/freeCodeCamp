![](https://assets.vercel.com/image/upload/v1527770721/repositories/serve/serve-repo-banner.png)

<a aria-label="Vercel logo" href="https://vercel.com">
  <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=ZEIT&labelColor=000000&logoWidth=20">
</a>

[![Build Status](https://circleci.com/gh/vercel/serve.svg?&style=shield)](https://circleci.com/gh/vercel/serve)
[![Install Size](https://packagephobia.now.sh/badge?p=serve)](https://packagephobia.now.sh/result?p=serve)

Assuming you would like to serve a static site, single page application or just a static file (no matter if on your device or on the local network), this package is just the right choice for you.

Once it's time to push your site to production, we recommend using [Vercel](https://vercel.com).

In general, `serve` also provides a neat interface for listing the directory's contents:

![Screenshot](https://user-images.githubusercontent.com/6170607/140353065-414bb2a7-33fb-4319-b359-f5e22edb860b.png)

## Usage

The quickest way to get started is to just run `npx serve` in your project's directory.

If you prefer, you can also install the package globally using [Yarn](https://yarnpkg.com/en/) (you'll need at least [Node.js LTS](https://nodejs.org/en/)):

```bash
yarn global add serve
```

Once that's done, you can run this command inside your project's directory...

```bash
serve
```

...or specify which folder you want to serve:

```bash
serve folder_name
```

Finally, run this command to see a list of all available options:

```bash
serve --help
```

Now you understand how the package works! :tada:

## Configuration

To customize `serve`'s behavior, create a `serve.json` file in the public folder and insert any of [these properties](https://github.com/vercel/serve-handler#options).

## API

The core of `serve` is [serve-handler](https://github.com/vercel/serve-handler), which can be used as middleware in existing HTTP servers:

```js
const handler = require('serve-handler');
const http = require('http');

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response);
});

server.listen(3000, () => {
  console.log('Running at http://localhost:3000');
});
```

**NOTE:** You can also replace `http.createServer` with [micro](https://github.com/vercel/micro), if you want.

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Uninstall `serve` if it's already installed: `npm uninstall -g serve`
3. Link it to the global module directory: `npm link`

After that, you can use the `serve` command everywhere. [Here](https://github.com/vercel/serve/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+for+beginners%22)'s a list of issues that are great for beginners.

## Credits

This project used to be called "list" and "micro-list". But thanks to [TJ Holowaychuk](https://github.com/tj) handing us the new name, it's now called "serve" (which is much more definite).

## Author

Leo Lamprecht ([@notquiteleo](https://twitter.com/notquiteleo))
