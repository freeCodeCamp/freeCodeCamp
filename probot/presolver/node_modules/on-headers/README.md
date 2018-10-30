# on-headers

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Execute a listener when a response is about to write headers.

## Installation

```sh
$ npm install on-headers
```

## API

```js
var onHeaders = require('on-headers')
```

### onHeaders(res, listener)

This will add the listener `listener` to fire when headers are emitted for `res`.
The listener is passed the `response` object as it's context (`this`). Headers are
considered to be emitted only once, right before they are sent to the client.

When this is called multiple times on the same `res`, the `listener`s are fired
in the reverse order they were added.

## Examples

```js
var http = require('http')
var onHeaders = require('on-headers')

http
.createServer(onRequest)
.listen(3000)

function addPoweredBy() {
  // set if not set by end of request
  if (!this.getHeader('X-Powered-By')) {
    this.setHeader('X-Powered-By', 'Node.js')
  }
}

function onRequest(req, res) {
  onHeaders(res, addPoweredBy)

  res.setHeader('Content-Type', 'text/plain')
  res.end('hello!')
}
```

## Testing

```sh
$ npm test
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/on-headers.svg
[npm-url]: https://npmjs.org/package/on-headers
[node-version-image]: https://img.shields.io/node/v/on-headers.svg
[node-version-url]: http://nodejs.org/download/
[travis-image]: https://img.shields.io/travis/jshttp/on-headers/master.svg
[travis-url]: https://travis-ci.org/jshttp/on-headers
[coveralls-image]: https://img.shields.io/coveralls/jshttp/on-headers/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/on-headers?branch=master
[downloads-image]: https://img.shields.io/npm/dm/on-headers.svg
[downloads-url]: https://npmjs.org/package/on-headers
