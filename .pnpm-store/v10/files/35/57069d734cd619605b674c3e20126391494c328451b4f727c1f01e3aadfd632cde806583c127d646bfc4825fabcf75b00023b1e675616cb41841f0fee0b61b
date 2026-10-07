# sirv ![CI](https://github.com/lukeed/sirv/workflows/CI/badge.svg)

> The optimized and lightweight middleware for serving requests to static assets

You may use `sirv` as a *very* fast and lightweight alternative to [`serve-static`](https://www.npmjs.com/package/serve-static).

The massive performance advantage over `serve-static` is explained by **not** relying on the file system for existence checks on every request. These are expensive interactions and must be avoided whenever possible! Instead, when not in "dev" mode, `sirv` performs all its file-system operations upfront and then relies on its cache for future operations.

This middleware will work out of the box for [Polka](https://github.com/lukeed/polka), Express, and other Express-like frameworks. It will also work with the native `http`, `https` and `http2` modules. It requires _very_ little effort to modify/wrap it for servers that don't accept the `(req, res, next)` signature.

:bulb: For a feature-complete CLI application, check out the sibling [`sirv-cli`](https://github.com/lukeed/sirv/tree/master/packages/sirv-cli) package as an alternative to [`zeit/serve`](https://github.com/zeit/serve)~!

## Install

```
$ npm install --save sirv
```


## Usage

```js
const sirv = require('sirv');
const polka = require('polka');
const compress = require('compression')();

// Init `sirv` handler
const assets = sirv('public', {
  maxAge: 31536000, // 1Y
  immutable: true
});

polka()
  .use(compress, assets)
  .use('/api', require('./api'))
  .listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on localhost:3000~!');
  });
```


## API

### sirv(dir, opts={})

Returns: `Function`

The returned function is a middleware in the standard Express-like signature: `(req, res, next)`, where `req` is the [`http.IncomingMessage`](https://nodejs.org/api/http.html#http_class_http_incomingmessage), `res` is the [`http.ServerResponse`](https://nodejs.org/dist/latest-v9.x/docs/api/http.html#http_class_http_serverresponse), and `next` (in this case) is the function to call if no file was found for the given path.

When defined, a `next()` callback is always called _instead of_ the [`opts.onNoMatch`](#optsonnomatch) callback. However, unlike `onNoMatch`, your `next()` is given no arguments.

#### dir
Type: `String`<br>
Default: `.`

The directory from which to read and serve assets. It is resolved to an absolute path &mdash; you must provide an absolute path yourself if `process.cwd()` is not the correct assumption.

#### opts.dev
Type: `Boolean`<br>
Default: `false`

Enable "dev" mode, which disables/skips caching. Instead, `sirv` will traverse the file system ***on every request***.

Additionally, `dev` mode will ignore `maxAge` and `immutable` as these options generate a production-oriented `Cache-Control` header value.

> **Important:** Do not use `dev` mode in production!

#### opts.etag
Type: `Boolean`<br>
Default: `false`

Generate and attach an `ETag` header to responses.

> **Note:** If an incoming request's [`If-None-Match` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) matches the `ETag` value, a `304` response is given.

#### opts.dotfiles
Type: `Boolean`<br>
Default: `false`

Allow requests to dotfiles (files or directories beginning with a `.`).

> **Note:** Requests to [`/.well-known/*`](https://tools.ietf.org/html/rfc8615) are always allowed.

#### opts.extensions
Type: `Array<String>`<br>
Default: `['html', 'htm']`

The file extension fallbacks to check for if a pathame is not initially found. For example, if a `/login` request cannot find a `login` filename, it will then look for `login.html` and `login.htm` before giving up~!

> **Important:** Actually, `sirv` will **also** look for `login/index.html` and `login/index.htm` before giving up.

#### opts.gzip
Type: `Boolean`<br>
Default: `false`

Determine if `sirv` look for **precompiled** `*.gz` files.<br>
Must be enabled _and_ the incoming request's [`Accept Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) must include "gzip" in order for `sirv` to search for the gzip'd alternative.

> **Note:** The `.gz` assumption also applies to the `opts.extensions` list.

```js
// NOTE: PSEUDO CODE
// Showing lookup logic

// Request: [Accept-Encoding: gzip] "/foobar.jpg"
lookup([
  '/foobar.jpg.gz', '/foobar.jpg',
  '/foobar.jpg.html.gz', '/foobar.jpg/index.html.gz',
  '/foobar.jpg.htm.gz', '/foobar.jpg/index.htm.gz',
  '/foobar.jpg.html', '/foobar.jpg/index.html',
  '/foobar.jpg.htm', '/foobar.jpg/index.htm',
]);

// Request: [Accept-Encoding: gzip] "/"
lookup([
  '/index.html.gz',
  '/index.htm.gz',
  '/index.html',
  '/index.htm',
]);
```


#### opts.brotli
Type: `Boolean`<br>
Default: `false`

Determine if `sirv` look for **precompiled** `*.br` files.<br>
Must be enabled _and_ the incoming request's [`Accept Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding) must include either "br" or "brotli" in order for `sirv` to search for the brotli-compressed alternative.

> **Note:** The `.br` assumption also applies to the `opts.extensions` list.

When both `opts.broli` and `opts.gzip` are enabled &mdash; and all conditions are equal &mdash; then the brotli variant always takes priority.

```js
// NOTE: PSEUDO CODE
// Showing lookup logic

// Request: [Accept-Encoding: br] "/foobar.jpg"
lookup([
  '/foobar.jpg.br', '/foobar.jpg',
  '/foobar.jpg.html.br', '/foobar.jpg/index.html.br',
  '/foobar.jpg.htm.br', '/foobar.jpg/index.htm.br',
  '/foobar.jpg.html', '/foobar.jpg/index.html',
  '/foobar.jpg.htm', '/foobar.jpg/index.htm',
]);

// Request: [Accept-Encoding: br,gz] "/"
lookup([
  '/index.html.br'
  '/index.htm.br'
  '/index.html.gz'
  '/index.htm.gz'
  '/index.html'
  '/index.htm'
]);
```

#### opts.maxAge
Type: `Number`<br>
Default: `undefined`

Enables the `Cache-Control` header on responses and sets the `max-age` value (in seconds).<br>
For example, `maxAge: 31536000` is equivalent to one year.

#### opts.immutable
Type: `Boolean`<br>
Default: `false`

Appends the [`immutable` directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#Revalidation_and_reloading) on your `Cache-Control` header, used for uniquely-named assets that will not change!

> **Important:** Will only work if `opts.maxAge` has a value defined!

#### opts.single
Type: `Boolean` or `String`<br>
Default: `false`

Treat the directory as a single-page application.

When `true`, the directory's index page (default `index.html`) will be sent if the request asset does not exist.<br>
You may pass a `string` value to use a file _instead of_ `index.html` as your fallback.

For example, if "/about" is requested but no variants of that file exist, then the response for "/" is sent instead:

```js
// Note: This is psuedo code to illustrate what's happening

// Request: "/about"
let file = find(['/about', '/about.html', '/about.htm', '/about/index.html', '/about.htm']);
if (file) {
  send(file);
} else if (opts.single === true) {
  file = find(['/', '/index.html', '/index.htm']);
  send(file);
} else if (typeof opts.single === 'string') {
  file = find([opts.single]);
  send(file);
} else {
  // next() or 404
}
```

#### opts.ignores
Type: `false` or `Array<String | RegExp>`

Specify paths/patterns that should ignore the fallback behavior that `opts.single` provides.

By default, any asset-like path (URLs that end with an extension) will be ignored. This means that, for example, if `/foobar.jpg` is not found, a `404` response is sent instead of the `index.html` fallback.

Additionally, any `/.well-known/*` pathname ignores the fallback – as do all other dotfile requests when `opts.dotfiles` is enabled.

Any string value(s) will be passed through `new RegExp(value, 'i')` directly.

Finally, you may set `ignores: false` to disable ***all*** ignores, including the defaults. Put differently, this will fallback ***all*** unknown pathnames to your `index.html` (or custom `opts.single` value).

> **Important:** Only has an effect if `opts.single` is enabled.

#### opts.onNoMatch
Type: `Function`

A custom function to run if a file cannot be found for a given request. <br>By default, `sirv` will send a basic `(404) Not found` response.

The function receives the current `req <IncomingMessage>, res <ServerResponse>` pair for as its two arguments.

> **Note:** This won't run if a `next` callback has been provided to the middleware; see [`sirv`](#sirvdir-opts) description.

#### opts.setHeaders
Type: `Function`

A custom function to append or change any headers on the outgoing response. There is no default.

Its signature is `(res, pathname, stats)`, where `res` is the `ServerResponse`, `pathname` is incoming request path (stripped of queries), and `stats` is the file's result from [`fs.statSync`](https://nodejs.org/api/fs.html#fs_fs_statsync_path).


## License

MIT © [Luke Edwards](https://lukeed.com)
