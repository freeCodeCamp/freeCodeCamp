# basic-auth

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Generic basic auth Authorization header field parser for whatever.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
$ npm install basic-auth
```

## API

<!-- eslint-disable no-unused-vars -->

```js
var auth = require('basic-auth')
```

### auth(req)

Get the basic auth credentials from the given request. The `Authorization`
header is parsed and if the header is invalid, `undefined` is returned,
otherwise an object with `name` and `pass` properties.

### auth.parse(string)

Parse a basic auth authorization header string. This will return an object
with `name` and `pass` properties, or `undefined` if the string is invalid.

## Example

Pass a Node.js request object to the module export. If parsing fails
`undefined` is returned, otherwise an object with `.name` and `.pass`.

<!-- eslint-disable no-unused-vars, no-undef -->

```js
var auth = require('basic-auth')
var user = auth(req)
// => { name: 'something', pass: 'whatever' }
```

A header string from any other location can also be parsed with
`auth.parse`, for example a `Proxy-Authorization` header:

<!-- eslint-disable no-unused-vars, no-undef -->

```js
var auth = require('basic-auth')
var user = auth.parse(req.getHeader('Proxy-Authorization'))
```

### With vanilla node.js http server

```js
var http = require('http')
var auth = require('basic-auth')
var compare = require('tsscmp')

// Create server
var server = http.createServer(function (req, res) {
  var credentials = auth(req)

  // Check credentials
  // The "check" function will typically be against your user store
  if (!credentials || !check(credentials.name, credentials.pass)) {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="example"')
    res.end('Access denied')
  } else {
    res.end('Access granted')
  }
})

// Basic function to validate credentials for example
function check (name, pass) {
  var valid = true

  // Simple method to prevent short-circut and use timing-safe compare
  valid = compare(name, 'john') && valid
  valid = compare(pass, 'secret') && valid

  return valid
}

// Listen
server.listen(3000)
```

# License

[MIT](LICENSE)

[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/basic-auth/master
[coveralls-url]: https://coveralls.io/r/jshttp/basic-auth?branch=master
[downloads-image]: https://badgen.net/npm/dm/basic-auth
[downloads-url]: https://npmjs.org/package/basic-auth
[node-version-image]: https://badgen.net/npm/node/basic-auth
[node-version-url]: https://nodejs.org/en/download
[npm-image]: https://badgen.net/npm/v/basic-auth
[npm-url]: https://npmjs.org/package/basic-auth
[travis-image]: https://badgen.net/travis/jshttp/basic-auth/master
[travis-url]: https://travis-ci.org/jshttp/basic-auth
