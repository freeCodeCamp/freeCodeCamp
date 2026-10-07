# encodeurl

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Encode a URL to a percent-encoded form, excluding already-encoded sequences

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install encodeurl
```

## API

```js
var encodeUrl = require('encodeurl')
```

### encodeUrl(url)

Encode a URL to a percent-encoded form, excluding already-encoded sequences.

This function will take an already-encoded URL and encode all the non-URL
code points (as UTF-8 byte sequences). This function will not encode the
"%" character unless it is not part of a valid sequence (`%20` will be
left as-is, but `%foo` will be encoded as `%25foo`).

This encode is meant to be "safe" and does not throw errors. It will try as
hard as it can to properly encode the given URL, including replacing any raw,
unpaired surrogate pairs with the Unicode replacement character prior to
encoding.

This function is _similar_ to the intrinsic function `encodeURI`, except it
will not encode the `%` character if that is part of a valid sequence, will
not encode `[` and `]` (for IPv6 hostnames) and will replace raw, unpaired
surrogate pairs with the Unicode replacement character (instead of throwing).

## Examples

### Encode a URL containing user-controled data

```js
var encodeUrl = require('encodeurl')
var escapeHtml = require('escape-html')

http.createServer(function onRequest (req, res) {
  // get encoded form of inbound url
  var url = encodeUrl(req.url)

  // create html message
  var body = '<p>Location ' + escapeHtml(url) + ' not found</p>'

  // send a 404
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html; charset=UTF-8')
  res.setHeader('Content-Length', String(Buffer.byteLength(body, 'utf-8')))
  res.end(body, 'utf-8')
})
```

### Encode a URL for use in a header field

```js
var encodeUrl = require('encodeurl')
var escapeHtml = require('escape-html')
var url = require('url')

http.createServer(function onRequest (req, res) {
  // parse inbound url
  var href = url.parse(req)

  // set new host for redirect
  href.host = 'localhost'
  href.protocol = 'https:'
  href.slashes = true

  // create location header
  var location = encodeUrl(url.format(href))

  // create html message
  var body = '<p>Redirecting to new site: ' + escapeHtml(location) + '</p>'

  // send a 301
  res.statusCode = 301
  res.setHeader('Content-Type', 'text/html; charset=UTF-8')
  res.setHeader('Content-Length', String(Buffer.byteLength(body, 'utf-8')))
  res.setHeader('Location', location)
  res.end(body, 'utf-8')
})
```

## Testing

```sh
$ npm test
$ npm run lint
```

## References

- [RFC 3986: Uniform Resource Identifier (URI): Generic Syntax][rfc-3986]
- [WHATWG URL Living Standard][whatwg-url]

[rfc-3986]: https://tools.ietf.org/html/rfc3986
[whatwg-url]: https://url.spec.whatwg.org/

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/encodeurl.svg
[npm-url]: https://npmjs.org/package/encodeurl
[node-version-image]: https://img.shields.io/node/v/encodeurl.svg
[node-version-url]: https://nodejs.org/en/download
[travis-image]: https://img.shields.io/travis/pillarjs/encodeurl.svg
[travis-url]: https://travis-ci.org/pillarjs/encodeurl
[coveralls-image]: https://img.shields.io/coveralls/pillarjs/encodeurl.svg
[coveralls-url]: https://coveralls.io/r/pillarjs/encodeurl?branch=master
[downloads-image]: https://img.shields.io/npm/dm/encodeurl.svg
[downloads-url]: https://npmjs.org/package/encodeurl
