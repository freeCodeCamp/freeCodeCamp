# finalhandler

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-image]][node-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Node.js function to invoke as the final step to respond to HTTP request.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install finalhandler
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var finalhandler = require('finalhandler')
```

### finalhandler(req, res, [options])

Returns function to be invoked as the final step for the given `req` and `res`.
This function is to be invoked as `fn(err)`. If `err` is falsy, the handler will
write out a 404 response to the `res`. If it is truthy, an error response will
be written out to the `res`.

When an error is written, the following information is added to the response:

  * The `res.statusCode` is set from `err.status` (or `err.statusCode`). If
    this value is outside the 4xx or 5xx range, it will be set to 500.
  * The `res.statusMessage` is set according to the status code.
  * The body will be the HTML of the status code message if `env` is
    `'production'`, otherwise will be `err.stack`.
  * Any headers specified in an `err.headers` object.

The final handler will also unpipe anything from `req` when it is invoked.

#### options.env

By default, the environment is determined by `NODE_ENV` variable, but it can be
overridden by this option.

#### options.onerror

Provide a function to be called with the `err` when it exists. Can be used for
writing errors to a central location without excessive function generation. Called
as `onerror(err, req, res)`.

## Examples

### always 404

```js
var finalhandler = require('finalhandler')
var http = require('http')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  done()
})

server.listen(3000)
```

### perform simple action

```js
var finalhandler = require('finalhandler')
var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)

  fs.readFile('index.html', function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })
})

server.listen(3000)
```

### use with middleware-style functions

```js
var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

var serve = serveStatic('public')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(3000)
```

### keep log of all errors

```js
var finalhandler = require('finalhandler')
var fs = require('fs')
var http = require('http')

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res, {onerror: logerror})

  fs.readFile('index.html', function (err, buf) {
    if (err) return done(err)
    res.setHeader('Content-Type', 'text/html')
    res.end(buf)
  })
})

server.listen(3000)

function logerror (err) {
  console.error(err.stack || err.toString())
}
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/finalhandler.svg
[npm-url]: https://npmjs.org/package/finalhandler
[node-image]: https://img.shields.io/node/v/finalhandler.svg
[node-url]: https://nodejs.org/en/download
[travis-image]: https://img.shields.io/travis/pillarjs/finalhandler.svg
[travis-url]: https://travis-ci.org/pillarjs/finalhandler
[coveralls-image]: https://img.shields.io/coveralls/pillarjs/finalhandler.svg
[coveralls-url]: https://coveralls.io/r/pillarjs/finalhandler?branch=master
[downloads-image]: https://img.shields.io/npm/dm/finalhandler.svg
[downloads-url]: https://npmjs.org/package/finalhandler
