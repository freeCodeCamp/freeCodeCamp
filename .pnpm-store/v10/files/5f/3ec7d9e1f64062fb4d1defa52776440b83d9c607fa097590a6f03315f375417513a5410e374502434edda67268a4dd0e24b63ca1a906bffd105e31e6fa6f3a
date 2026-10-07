# @fastify/static

[![CI](https://github.com/fastify/fastify-static/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify-static/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/@fastify/static.svg?style=flat)](https://www.npmjs.com/package/@fastify/static)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)

Plugin for serving static files as fast as possible.

## Install
```
npm i @fastify/static
```

### Compatibility

| Plugin version | Fastify version |
| ---------------|-----------------|
| `>=8.x`        | `^5.x`          |
| `>=7.x <8.x`   | `^4.x`          |
| `>=5.x <7.x`   | `^3.x`          |
| `>=2.x <5.x`   | `^2.x`          |
| `^1.x`         | `^1.x`          |


Please note that if a Fastify version is out of support, then so are the corresponding versions of this plugin
in the table above.
See [Fastify's LTS policy](https://github.com/fastify/fastify/blob/main/docs/Reference/LTS.md) for more details.

## Usage

```js
const fastify = require('fastify')({logger: true})
const path = require('node:path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
  constraints: { host: 'example.com' } // optional: default {}
})

fastify.get('/another/path', function (req, reply) {
  reply.sendFile('myHtml.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

fastify.get('/another/patch-async', async function (req, reply) {
  return reply.sendFile('myHtml.html')
})

fastify.get('/path/with/different/root', function (req, reply) {
  reply.sendFile('myHtml.html', path.join(__dirname, 'build')) // serving a file from a different root location
})

fastify.get('/another/path', function (req, reply) {
  reply.sendFile('myHtml.html', { cacheControl: false }) // overriding the options disabling cache-control headers
})

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})
```

### Multiple prefixed roots

```js
const fastify = require('fastify')()
const fastifyStatic = require('@fastify/static')
const path = require('node:path')
// first plugin
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public')
})

// second plugin
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'node_modules'),
  prefix: '/node_modules/',
  decorateReply: false // the reply decorator has been added by the first plugin registration
})

```

### Sending a file with `content-disposition` header

```js
const fastify = require('fastify')()
const path = require('node:path')

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/', // optional: default '/'
})

fastify.get('/another/path', function (req, reply) {
  reply.download('myHtml.html', 'custom-filename.html') // sending path.join(__dirname, 'public', 'myHtml.html') directly with custom filename
})

fastify.get('another/patch-async', async function (req, reply) {
  // an async handler must always return the reply object
  return reply.download('myHtml.html', 'custom-filename.html')
})

fastify.get('/path/without/cache/control', function (req, reply) {
  reply.download('myHtml.html', { cacheControl: false }) // serving a file disabling cache-control headers
})

fastify.get('/path/without/cache/control', function (req, reply) {
  reply.download('myHtml.html', 'custom-filename.html', { cacheControl: false })
})

```

### Managing cache-control headers

Production sites should use a reverse-proxy to manage caching headers.
However, here is an example of using fastify-static to host a Single Page Application (for example a [vite.js](https://vite.dev/) build) with sane caching.

```js
fastify.register(require('@fastify/static'), {
  root: path.join(import.meta.dirname, 'dist'), // import.meta.dirname node.js >= v20.11.0
  // By default all assets are immutable and can be cached for a long period due to cache bursting techniques
  maxAge: '30d',
  immutable: true,
})

// Explicitly reduce caching of assets that don't use cache bursting techniques
fastify.get('/', function (req, reply) {
  // index.html should never be cached
  reply.sendFile('index.html', {maxAge: 0, immutable: false})
})

fastify.get('/favicon.ico', function (req, reply) {
  // favicon can be cached for a short period
  reply.sendFile('favicon.ico', {maxAge: '1d', immutable: false})
})
```

### Options

#### `serve`
Default: `true`

If set to `false`, the plugin will not serve files from the `root` directory.

#### `root` (required if `serve` is not false)

The absolute path of the directory containing the files to serve.
The file to serve is determined by combining `req.url` with the
root directory.

An array of directories can be provided to serve multiple static directories
under a single prefix. Files are served in a "first found, first served" manner,
so list directories in order of priority. Duplicate paths will raise an error.

#### `prefix`

Default: `'/'`

A URL path prefix used to create a virtual mount path for the static directory.

#### `constraints`

Default: `{}`

Constraints to add to registered routes. See Fastify's documentation for
[route constraints](https://fastify.dev/docs/latest/Reference/Routes/#constraints).

#### `logLevel`

Default: `info`

Set log level for registered routes.

#### `prefixAvoidTrailingSlash`

Default: `false`

If `false`, the prefix gets a trailing "/". If `true`, no trailing "/" is added to the prefix.

#### `schemaHide`

Default: `true`

A flag that defines if the fastify route hide-schema attribute is hidden or not.

#### `setHeaders`

Default: `undefined`

A function to set custom headers on the response. Alterations to the headers
must be done synchronously. The function is called as `fn(res, path, stat)`,
with the arguments:

- `res` The response object.
- `path` The path of the file that is being sent.
- `stat` The stat object of the file that is being sent.

#### `send` Options

The following options are also supported and will be passed directly to the
[`@fastify/send`](https://www.npmjs.com/package/@fastify/send) module:

- [`acceptRanges`](https://www.npmjs.com/package/@fastify/send#acceptranges)
- [`contentType`](https://www.npmjs.com/package/@fastify/send#contenttype)
- [`cacheControl`](https://www.npmjs.com/package/@fastify/send#cachecontrol) - Enable or disable setting Cache-Control response header (defaults to `true`). To provide a custom Cache-Control header, set this option to false
- [`dotfiles`](https://www.npmjs.com/package/@fastify/send#dotfiles)
- [`etag`](https://www.npmjs.com/package/@fastify/send#etag)
- [`extensions`](https://www.npmjs.com/package/@fastify/send#extensions)
- [`immutable`](https://www.npmjs.com/package/@fastify/send#immutable)
- [`index`](https://www.npmjs.com/package/@fastify/send#index)
- [`lastModified`](https://www.npmjs.com/package/@fastify/send#lastmodified)
- [`maxAge`](https://www.npmjs.com/package/@fastify/send#maxage)

These options can be altered when calling `reply.sendFile('filename.html', options)` or `reply.sendFile('filename.html', 'otherfilename.html', options)` on each response.

#### `redirect`

Default: `false`

If set to `true`, `@fastify/static` redirects to the directory with a trailing slash.

This option cannot be `true` if `wildcard` is `false` and `ignoreTrailingSlash` is `true`.

If `false`, requesting directories without a trailing slash triggers the app's 404 handler using `reply.callNotFound()`.

#### `wildcard`

Default: `true`

If `true`, `@fastify/static` adds a wildcard route to serve files.
If `false`, it globs the filesystem for all defined files in the
served folder (`${root}/**/**`) and creates the necessary routes,
but will not serve newly added files.

The default options of [`glob`](https://www.npmjs.com/package/glob)
are applied for getting the file list.

This option cannot be `false` if `redirect` is `true` and `ignoreTrailingSlash` is `true`.

#### `globIgnore`

Default: `undefined`

This is passed to [`glob`](https://www.npmjs.com/package/glob)
as the `ignore` option. It can be used to ignore files or directories
when using the `wildcard: false` option.

#### `allowedPath`

Default: `(pathName, root, request) => true`

This function filters served files. Using the request object, complex path authentication is possible.
Returning `true` serves the file; returning `false` calls Fastify's 404 handler.

#### `index`

Default: `undefined`

Under the hood, [`@fastify/send`](https://www.npmjs.com/package/@fastify/send) supports "index.html" files by default.
To disable this, set `false`, or supply a new index by passing a string or an array in preferred order.

#### `serveDotFiles`

Default: `false`

If `true`, serves files in hidden directories (e.g., `.foo`).

#### `list`

Default: `undefined`

If set, provides the directory list by calling the directory path.
Default response is JSON.

Multi-root is not supported within the `list` option.

If `dotfiles` is `deny` or `ignore`, dotfiles are excluded.

Example:

```js
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
  index: false,
  list: true
})
```

Request

```bash
GET /public
```

Response

```json
{ "dirs": ["dir1", "dir2"], "files": ["file1.png", "file2.txt"] }
```

#### `list.format`

Default: `json`

Options: `html`, `json`

Directory list can be in `html` format; in that case, `list.render` function is required.

This option can be overridden by the URL parameter `format`. Options are `html` and `json`.

```bash
GET /public/assets?format=json
```

Returns the response as JSON, regardless of `list.format`.

Example:

```js
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
  list: {
    format: 'html',
    render: (dirs, files) => {
      return `
<html><body>
<ul>
  ${dirs.map(dir => `<li><a href="${dir.href}">${dir.name}</a></li>`).join('\n  ')}
</ul>
<ul>
  ${files.map(file => `<li><a href="${file.href}" target="_blank">${file.name}</a></li>`).join('\n  ')}
</ul>
</body></html>
`
      },
  }
})
```

Request

```bash
GET /public
```

Response

```html
<html><body>
<ul>
  <li><a href="/dir1">dir1</a></li>
  <li><a href="/dir1">dir2</a></li>
</ul>
<ul>
  <li><a href="/foo.html" target="_blank">foo.html</a></li>
  <li><a href="/foobar.html" target="_blank">foobar.html</a></li>
  <li><a href="/index.css" target="_blank">index.css</a></li>
  <li><a href="/index.html" target="_blank">index.html</a></li>
</ul>
</body></html>
```

#### `list.names`

Default: `['']`

Directory list can respond to different routes declared in `list.names`.

> ℹ️ Note: If a file with the same name exists, the actual file is sent.

Example:

```js
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, '/static'),
  prefix: '/public',
  prefixAvoidTrailingSlash: true,
  list: {
    format: 'json',
    names: ['index', 'index.json', '/']
  }
})
```

Dir list respond with the same content to:

```bash
GET /public
GET /public/
GET /public/index
GET /public/index.json
```

#### `list.extendedFolderInfo`

Default: `undefined`

If `true`, extended information for folders will be accessible in `list.render` and the JSON response.

```js
render(dirs, files) {
  const dir = dirs[0];
  dir.fileCount // number of files in this folder
  dir.totalFileCount // number of files in this folder (recursive)
  dir.folderCount // number of folders in this folder
  dir.totalFolderCount // number of folders in this folder (recursive)
  dir.totalSize // size of all files in this folder (recursive)
  dir.lastModified // most recent last modified timestamp of all files in this folder (recursive)
}
```

> ⚠ Warning: This will slightly decrease the performance, especially for deeply nested file structures.

#### `list.jsonFormat`

Default: `names`

Options: `names`, `extended`

Determines the output format when `json` is selected.

`names`:
```json
{
  "dirs": [
    "dir1",
    "dir2"
  ],
  "files": [
    "file1.txt",
    "file2.txt"
  ]
}
```

`extended`:
```json
{
  "dirs": [
    {
      "name": "dir1",
      "stats": {
        "dev": 2100,
        "size": 4096
      },
      "extendedInfo": {
        "fileCount": 4,
        "totalSize": 51233
      }
    }
  ],
  "files": [
    {
      "name": "file1.txt",
      "stats": {
        "dev": 2200,
        "size": 554
      }
    }
  ]
}
```

#### `preCompressed`

Default: `false`

First, try to send the brotli encoded asset (if supported by `Accept-Encoding` headers), then gzip, and finally the original `pathname`. Skip compression for smaller files that do not benefit from it.

Assume this structure with the compressed asset as a sibling of the uncompressed counterpart:

```
./public
├── main.js
├── main.js.br
├── main.js.gz
├── crit.css
├── crit.css.gz
└── index.html
```

#### Disable serving

To use only the reply decorator without serving directories, pass `{ serve: false }`.
This prevents the plugin from serving everything under `root`.

#### Disabling reply decorator

The reply object is decorated with a `sendFile` function by default. To disable this,
pass `{ decorateReply: false }`. If `@fastify/static` is registered to multiple prefixes
in the same route, only one can initialize reply decorators.

#### Handling 404s

If a request matches the URL `prefix` but no file is found, Fastify's 404
handler is called. Set a custom 404 handler with [`fastify.setNotFoundHandler()`](https://fastify.dev/docs/latest/Reference/Server/#setnotfoundhandler).

When registering `@fastify/static` within an encapsulated context, the `wildcard` option may need to be set to `false` to support index resolution and nested not-found-handler:

```js
const app = require('fastify')();

app.register((childContext, _, done) => {
    childContext.register(require('@fastify/static'), {
        root: path.join(__dirname, 'docs'), // docs is a folder that contains `index.html` and `404.html`
        wildcard: false
    });
    childContext.setNotFoundHandler((_, reply) => {
        return reply.code(404).type('text/html').sendFile('404.html');
    });
    done();
}, { prefix: 'docs' });
```

This code will send the `index.html` for the paths `docs`, `docs/`, and `docs/index.html`. For all other `docs/<undefined-routes>` it will reply with `404.html`.

### Handling Errors

If an error occurs while sending a file, it is passed to Fastify's error handler.
Set a custom handler with [`fastify.setErrorHandler()`](https://fastify.dev/docs/latest/Reference/Server/#seterrorhandler).

### Payload `stream.path`

Access the file path inside the `onSend` hook using `payload.path`.

```js
fastify.addHook('onSend', function (req, reply, payload, next) {
  console.log(payload.path)
  next()
})
```

## License

Licensed under [MIT](./LICENSE).
