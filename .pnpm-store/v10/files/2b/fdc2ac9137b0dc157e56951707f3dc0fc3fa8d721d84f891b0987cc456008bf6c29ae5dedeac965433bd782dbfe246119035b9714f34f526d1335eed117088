# media-typer

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Simple RFC 6838 media type parser

## Installation

```sh
$ npm install media-typer
```

## API

```js
var typer = require('media-typer')
```

### typer.parse(string)

```js
var obj = typer.parse('image/svg+xml; charset=utf-8')
```

Parse a media type string. This will return an object with the following
properties (examples are shown for the string `'image/svg+xml; charset=utf-8'`):

 - `type`: The type of the media type (always lower case). Example: `'image'`

 - `subtype`: The subtype of the media type (always lower case). Example: `'svg'`

 - `suffix`: The suffix of the media type (always lower case). Example: `'xml'`

 - `parameters`: An object of the parameters in the media type (name of parameter always lower case). Example: `{charset: 'utf-8'}`

### typer.parse(req)

```js
var obj = typer.parse(req)
```

Parse the `content-type` header from the given `req`. Short-cut for
`typer.parse(req.headers['content-type'])`.

### typer.parse(res)

```js
var obj = typer.parse(res)
```

Parse the `content-type` header set on the given `res`. Short-cut for
`typer.parse(res.getHeader('content-type'))`.

### typer.format(obj)

```js
var obj = typer.format({type: 'image', subtype: 'svg', suffix: 'xml'})
```

Format an object into a media type string. This will return a string of the
mime type for the given object. For the properties of the object, see the
documentation for `typer.parse(string)`.

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/media-typer.svg?style=flat
[npm-url]: https://npmjs.org/package/media-typer
[node-version-image]: https://img.shields.io/badge/node.js-%3E%3D_0.6-brightgreen.svg?style=flat
[node-version-url]: http://nodejs.org/download/
[travis-image]: https://img.shields.io/travis/jshttp/media-typer.svg?style=flat
[travis-url]: https://travis-ci.org/jshttp/media-typer
[coveralls-image]: https://img.shields.io/coveralls/jshttp/media-typer.svg?style=flat
[coveralls-url]: https://coveralls.io/r/jshttp/media-typer
[downloads-image]: https://img.shields.io/npm/dm/media-typer.svg?style=flat
[downloads-url]: https://npmjs.org/package/media-typer
