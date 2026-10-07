# type-is

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Infer the content-type of a request.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install type-is
```

## API

```js
var http = require('http')
var typeis = require('type-is')

http.createServer(function (req, res) {
  var istext = typeis(req, ['text/*'])
  res.end('you ' + (istext ? 'sent' : 'did not send') + ' me text')
})
```

### typeis(request, types)

Checks if the `request` is one of the `types`. If the request has no body,
even if there is a `Content-Type` header, then `null` is returned. If the
`Content-Type` header is invalid or does not matches any of the `types`, then
`false` is returned. Otherwise, a string of the type that matched is returned.

The `request` argument is expected to be a Node.js HTTP request. The `types`
argument is an array of type strings.

Each type in the `types` array can be one of the following:

- A file extension name such as `json`. This name will be returned if matched.
- A mime type such as `application/json`.
- A mime type with a wildcard such as `*/*` or `*/json` or `application/*`.
  The full mime type will be returned if matched.
- A suffix such as `+json`. This can be combined with a wildcard such as
  `*/vnd+json` or `application/*+json`. The full mime type will be returned
  if matched.

Some examples to illustrate the inputs and returned value:

```js
// req.headers.content-type = 'application/json'

typeis(req, ['json']) // => 'json'
typeis(req, ['html', 'json']) // => 'json'
typeis(req, ['application/*']) // => 'application/json'
typeis(req, ['application/json']) // => 'application/json'

typeis(req, ['html']) // => false
```

### typeis.hasBody(request)

Returns a Boolean if the given `request` has a body, regardless of the
`Content-Type` header.

Having a body has no relation to how large the body is (it may be 0 bytes).
This is similar to how file existence works. If a body does exist, then this
indicates that there is data to read from the Node.js request stream.

```js
if (typeis.hasBody(req)) {
  // read the body, since there is one

  req.on('data', function (chunk) {
    // ...
  })
}
```

### typeis.is(mediaType, types)

Checks if the `mediaType` is one of the `types`. If the `mediaType` is invalid
or does not matches any of the `types`, then `false` is returned. Otherwise, a
string of the type that matched is returned.

The `mediaType` argument is expected to be a
[media type](https://tools.ietf.org/html/rfc6838) string. The `types` argument
is an array of type strings.

Each type in the `types` array can be one of the following:

- A file extension name such as `json`. This name will be returned if matched.
- A mime type such as `application/json`.
- A mime type with a wildcard such as `*/*` or `*/json` or `application/*`.
  The full mime type will be returned if matched.
- A suffix such as `+json`. This can be combined with a wildcard such as
  `*/vnd+json` or `application/*+json`. The full mime type will be returned
  if matched.

Some examples to illustrate the inputs and returned value:

```js
var mediaType = 'application/json'

typeis.is(mediaType, ['json']) // => 'json'
typeis.is(mediaType, ['html', 'json']) // => 'json'
typeis.is(mediaType, ['application/*']) // => 'application/json'
typeis.is(mediaType, ['application/json']) // => 'application/json'

typeis.is(mediaType, ['html']) // => false
```

### typeis.match(expected, actual)

Match the type string `expected` with `actual`, taking in to account wildcards.
A wildcard can only be in the type of the subtype part of a media type and only
in the `expected` value (as `actual` should be the real media type to match). A
suffix can still be included even with a wildcard subtype. If an input is
malformed, `false` will be returned.

```js
typeis.match('text/html', 'text/html') // => true
typeis.match('*/html', 'text/html') // => true
typeis.match('text/*', 'text/html') // => true
typeis.match('*/*', 'text/html') // => true
typeis.match('*/*+json', 'application/x-custom+json') // => true
```

### typeis.normalize(type)

Normalize a `type` string. This works by performing the following:

- If the `type` is not a string, `false` is returned.
- If the string starts with `+` (so it is a `+suffix` shorthand like `+json`),
  then it is expanded to contain the complete wildcard notation of `*/*+suffix`.
- If the string contains a `/`, then it is returned as the type.
- Else the string is assumed to be a file extension and the mapped media type is
  returned, or `false` is there is no mapping.

This includes two special mappings:

- `'multipart'` -> `'multipart/*'`
- `'urlencoded'` -> `'application/x-www-form-urlencoded'`

## Examples

### Example body parser

```js
var express = require('express')
var typeis = require('type-is')

var app = express()

app.use(function bodyParser (req, res, next) {
  if (!typeis.hasBody(req)) {
    return next()
  }

  switch (typeis(req, ['urlencoded', 'json', 'multipart'])) {
    case 'urlencoded':
      // parse urlencoded body
      throw new Error('implement urlencoded body parsing')
    case 'json':
      // parse json body
      throw new Error('implement json body parsing')
    case 'multipart':
      // parse multipart body
      throw new Error('implement multipart body parsing')
    default:
      // 415 error code
      res.statusCode = 415
      res.end()
      break
  }
})
```

## License

[MIT](LICENSE)

[ci-image]: https://badgen.net/github/checks/jshttp/type-is/master?label=ci
[ci-url]: https://github.com/jshttp/type-is/actions/workflows/ci.yml
[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/type-is/master
[coveralls-url]: https://coveralls.io/r/jshttp/type-is?branch=master
[node-version-image]: https://badgen.net/npm/node/type-is
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/type-is
[npm-url]: https://npmjs.org/package/type-is
[npm-version-image]: https://badgen.net/npm/v/type-is
[travis-image]: https://badgen.net/travis/jshttp/type-is/master
[travis-url]: https://travis-ci.org/jshttp/type-is
