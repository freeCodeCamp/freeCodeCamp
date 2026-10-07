# media-typer

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Simple RFC 6838 media type parser.

This module will parse a given media type into it's component parts, like type,
subtype, and suffix. A formatter is also provided to put them back together and
the two can be combined to normalize media types into a canonical form.

If you are looking to parse the string that represents a media type and it's
parameters in HTTP (for example, the `Content-Type` header), use the
[content-type module](https://www.npmjs.com/package/content-type).

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install media-typer
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var typer = require('media-typer')
```

### typer.parse(string)

<!-- eslint-disable no-undef, no-unused-vars -->

```js
var obj = typer.parse('image/svg+xml')
```

Parse a media type string. This will return an object with the following
properties (examples are shown for the string `'image/svg+xml; charset=utf-8'`):

 - `type`: The type of the media type (always lower case). Example: `'image'`

 - `subtype`: The subtype of the media type (always lower case). Example: `'svg'`

 - `suffix`: The suffix of the media type (always lower case). Example: `'xml'`

If the given type string is invalid, then a `TypeError` is thrown.

### typer.format(obj)

<!-- eslint-disable no-undef, no-unused-vars -->

```js
var obj = typer.format({ type: 'image', subtype: 'svg', suffix: 'xml' })
```

Format an object into a media type string. This will return a string of the
mime type for the given object. For the properties of the object, see the
documentation for `typer.parse(string)`.

If any of the given object values are invalid, then a `TypeError` is thrown.

### typer.test(string)

<!-- eslint-disable no-undef, no-unused-vars -->

```js
var valid = typer.test('image/svg+xml')
```

Validate a media type string. This will return `true` is the string is a well-
formatted media type, or `false` otherwise.

## License

[MIT](LICENSE)

[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/media-typer/master
[coveralls-url]: https://coveralls.io/r/jshttp/media-typer?branch=master
[node-version-image]: https://badgen.net/npm/node/media-typer
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/media-typer
[npm-url]: https://npmjs.org/package/media-typer
[npm-version-image]: https://badgen.net/npm/v/media-typer
[travis-image]: https://badgen.net/travis/jshttp/media-typer/master
[travis-url]: https://travis-ci.org/jshttp/media-typer
