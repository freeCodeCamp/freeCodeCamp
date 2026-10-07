# statuses

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][ci-image]][ci-url]
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

### status(code)

Returns the status message string for a known HTTP status code. The code
may be a number or a string. An error is thrown for an unknown status code.

<!-- eslint-disable no-undef -->

```js
status(403) // => 'Forbidden'
status('403') // => 'Forbidden'
status(306) // throws
```

### status(msg)

Returns the numeric status code for a known HTTP status message. The message
is case-insensitive. An error is thrown for an unknown status message.

<!-- eslint-disable no-undef -->

```js
status('forbidden') // => 403
status('Forbidden') // => 403
status('foo') // throws
```

### status.codes

Returns an array of all the status codes as `Integer`s.

### status.code[msg]

Returns the numeric status code for a known status message (in lower-case),
otherwise `undefined`.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status['not found'] // => 404
```

### status.empty[code]

Returns `true` if a status code expects an empty body.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status.empty[200] // => undefined
status.empty[204] // => true
status.empty[304] // => true
```

### status.message[code]

Returns the string message for a known numeric status code, otherwise
`undefined`. This object is the same format as the
[Node.js http module `http.STATUS_CODES`](https://nodejs.org/dist/latest/docs/api/http.html#http_http_status_codes).

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status.message[404] // => 'Not Found'
```

### status.redirect[code]

Returns `true` if a status code is a valid redirect status.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status.redirect[200] // => undefined
status.redirect[301] // => true
```

### status.retry[code]

Returns `true` if you should retry the rest.

<!-- eslint-disable no-undef, no-unused-expressions -->

```js
status.retry[501] // => undefined
status.retry[503] // => true
```

## License

[MIT](LICENSE)

[ci-image]: https://badgen.net/github/checks/jshttp/statuses/master?label=ci
[ci-url]: https://github.com/jshttp/statuses/actions?query=workflow%3Aci
[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/statuses/master
[coveralls-url]: https://coveralls.io/r/jshttp/statuses?branch=master
[node-version-image]: https://badgen.net/npm/node/statuses
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/statuses
[npm-url]: https://npmjs.org/package/statuses
[npm-version-image]: https://badgen.net/npm/v/statuses
