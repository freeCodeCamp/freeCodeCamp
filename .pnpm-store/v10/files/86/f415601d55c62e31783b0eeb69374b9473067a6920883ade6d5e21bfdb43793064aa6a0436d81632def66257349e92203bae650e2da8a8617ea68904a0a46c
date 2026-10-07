# on-headers

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Execute a listener when a response is about to write headers.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install on-headers
```

## API

<!-- eslint-disable no-unused-vars -->

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

function addPoweredBy () {
  // set if not set by end of request
  if (!this.getHeader('X-Powered-By')) {
    this.setHeader('X-Powered-By', 'Node.js')
  }
}

function onRequest (req, res) {
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

[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/on-headers/master
[coveralls-url]: https://coveralls.io/r/jshttp/on-headers?branch=master
[node-version-image]: https://badgen.net/npm/node/on-headers
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/on-headers
[npm-url]: https://npmjs.org/package/on-headers
[npm-version-image]: https://badgen.net/npm/v/on-headers
[travis-image]: https://badgen.net/travis/jshttp/on-headers/master
[travis-url]: https://travis-ci.org/jshttp/on-headers
