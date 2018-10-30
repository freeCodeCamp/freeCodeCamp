# content-type

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Create and parse HTTP Content-Type header according to RFC 7231

## Installation

```sh
$ npm install content-type
```

## API

```js
var contentType = require('content-type')
```

### contentType.parse(string)

```js
var obj = contentType.parse('image/svg+xml; charset=utf-8')
```

Parse a content type string. This will return an object with the following
properties (examples are shown for the string `'image/svg+xml; charset=utf-8'`):

 - `type`: The media type (the type and subtype, always lower case).
   Example: `'image/svg+xml'`

 - `parameters`: An object of the parameters in the media type (name of parameter
   always lower case). Example: `{charset: 'utf-8'}`

Throws a `TypeError` if the string is missing or invalid.

### contentType.parse(req)

```js
var obj = contentType.parse(req)
```

Parse the `content-type` header from the given `req`. Short-cut for
`contentType.parse(req.headers['content-type'])`.

Throws a `TypeError` if the `Content-Type` header is missing or invalid.

### contentType.parse(res)

```js
var obj = contentType.parse(res)
```

Parse the `content-type` header set on the given `res`. Short-cut for
`contentType.parse(res.getHeader('content-type'))`.

Throws a `TypeError` if the `Content-Type` header is missing or invalid.

### contentType.format(obj)

```js
var str = contentType.format({type: 'image/svg+xml'})
```

Format an object into a content type string. This will return a string of the
content type for the given object with the following properties (examples are
shown that produce the string `'image/svg+xml; charset=utf-8'`):

 - `type`: The media type (will be lower-cased). Example: `'image/svg+xml'`

 - `parameters`: An object of the parameters in the media type (name of the
   parameter will be lower-cased). Example: `{charset: 'utf-8'}`

Throws a `TypeError` if the object contains an invalid type or parameter names.

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/content-type.svg
[npm-url]: https://npmjs.org/package/content-type
[node-version-image]: https://img.shields.io/node/v/content-type.svg
[node-version-url]: http://nodejs.org/download/
[travis-image]: https://img.shields.io/travis/jshttp/content-type/master.svg
[travis-url]: https://travis-ci.org/jshttp/content-type
[coveralls-image]: https://img.shields.io/coveralls/jshttp/content-type/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/content-type
[downloads-image]: https://img.shields.io/npm/dm/content-type.svg
[downloads-url]: https://npmjs.org/package/content-type
