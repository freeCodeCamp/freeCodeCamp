# Statuses

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

HTTP status utility for node.

This module provides a list of status codes and messages sourced from
a few different projects:

  * The [IANA Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
  * The [Node.js project](https://nodejs.org/)
  * The [NGINX project](https://www.nginx.com/)
  * The [Apache HTTP Server project](https://httpd.apache.org/)

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install statuses
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var status = require('statuses')
```

### var code = status(Integer || String)

If `Integer` or `String` is a valid HTTP code or status message, then the
appropriate `code` will be returned. Otherwise, an error will be thrown.

<!-- eslint-disable no-undef -->

```js
status(403) // => 403
status('403') // => 403
status('forbidden') // => 403
status('Forbidden') // => 403
status(306) // throws, as it's not supported by node.js
```

### status.STATUS_CODES

Returns an object which maps status codes to status messages, in
the same format as the
[Node.js http module](https://nodejs.org/dist/latest/docs/api/http.html#http_http_status_codes).

### status.codes

Returns an array of all the status codes as `Integer`s.

### var msg = status[code]

Map of `code` to `status message`. `undefined` for invalid `code`s.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status[404] // => 'Not Found'
```

### var code = status[msg]

Map of `status message` to `code`. `msg` can either be title-cased or
lower-cased. `undefined` for invalid `status message`s.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status['not found'] // => 404
status['Not Found'] // => 404
```

### status.redirect[code]

Returns `true` if a status code is a valid redirect status.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status.redirect[200] // => undefined
status.redirect[301] // => true
```

### status.empty[code]

Returns `true` if a status code expects an empty body.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status.empty[200] // => undefined
status.empty[204] // => true
status.empty[304] // => true
```

### status.retry[code]

Returns `true` if you should retry the rest.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status.retry[501] // => undefined
status.retry[503] // => true
```

[npm-image]: https://img.shields.io/npm/v/statuses.svg
[npm-url]: https://npmjs.org/package/statuses
[node-version-image]: https://img.shields.io/node/v/statuses.svg
[node-version-url]: https://nodejs.org/en/download
[travis-image]: https://img.shields.io/travis/jshttp/statuses.svg
[travis-url]: https://travis-ci.org/jshttp/statuses
[coveralls-image]: https://img.shields.io/coveralls/jshttp/statuses.svg
[coveralls-url]: https://coveralls.io/r/jshttp/statuses?branch=master
[downloads-image]: https://img.shields.io/npm/dm/statuses.svg
[downloads-url]: https://npmjs.org/package/statuses
