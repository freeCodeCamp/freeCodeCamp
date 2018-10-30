# http-errors

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Create HTTP errors for Express, Koa, Connect, etc. with ease.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install http-errors
```

## Example

```js
var createError = require('http-errors')
var express = require('express')
var app = express()

app.use(function (req, res, next) {
  if (!req.user) return next(createError(401, 'Please login to view this page.'))
  next()
})
```

## API

This is the current API, currently extracted from Koa and subject to change.

All errors inherit from JavaScript `Error` and the exported `createError.HttpError`.

### Error Properties

- `expose` - can be used to signal if `message` should be sent to the client,
  defaulting to `false` when `status` >= 500
- `headers` - can be an object of header names to values to be sent to the
  client, defaulting to `undefined`. When defined, the key names should all
  be lower-cased
- `message` - the traditional error message, which should be kept short and all
  single line
- `status` - the status code of the error, mirroring `statusCode` for general
  compatibility
- `statusCode` - the status code of the error, defaulting to `500`

### createError([status], [message], [properties])

<!-- eslint-disable no-undef, no-unused-vars -->

```js
var err = createError(404, 'This video does not exist!')
```

- `status: 500` - the status code as a number
- `message` - the message of the error, defaulting to node's text for that status code.
- `properties` - custom properties to attach to the object

### new createError\[code || name\](\[msg]\))

<!-- eslint-disable no-undef, no-unused-vars -->

```js
var err = new createError.NotFound()
```

- `code` - the status code as a number
- `name` - the name of the error as a "bumpy case", i.e. `NotFound` or `InternalServerError`.

#### List of all constructors

|Status Code|Constructor Name             |
|-----------|-----------------------------|
|400        |BadRequest                   |
|401        |Unauthorized                 |
|402        |PaymentRequired              |
|403        |Forbidden                    |
|404        |NotFound                     |
|405        |MethodNotAllowed             |
|406        |NotAcceptable                |
|407        |ProxyAuthenticationRequired  |
|408        |RequestTimeout               |
|409        |Conflict                     |
|410        |Gone                         |
|411        |LengthRequired               |
|412        |PreconditionFailed           |
|413        |PayloadTooLarge              |
|414        |URITooLong                   |
|415        |UnsupportedMediaType         |
|416        |RangeNotSatisfiable          |
|417        |ExpectationFailed            |
|418        |ImATeapot                    |
|421        |MisdirectedRequest           |
|422        |UnprocessableEntity          |
|423        |Locked                       |
|424        |FailedDependency             |
|425        |UnorderedCollection          |
|426        |UpgradeRequired              |
|428        |PreconditionRequired         |
|429        |TooManyRequests              |
|431        |RequestHeaderFieldsTooLarge  |
|451        |UnavailableForLegalReasons   |
|500        |InternalServerError          |
|501        |NotImplemented               |
|502        |BadGateway                   |
|503        |ServiceUnavailable           |
|504        |GatewayTimeout               |
|505        |HTTPVersionNotSupported      |
|506        |VariantAlsoNegotiates        |
|507        |InsufficientStorage          |
|508        |LoopDetected                 |
|509        |BandwidthLimitExceeded       |
|510        |NotExtended                  |
|511        |NetworkAuthenticationRequired|

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/http-errors.svg
[npm-url]: https://npmjs.org/package/http-errors
[node-version-image]: https://img.shields.io/node/v/http-errors.svg
[node-version-url]: https://nodejs.org/en/download/
[travis-image]: https://img.shields.io/travis/jshttp/http-errors.svg
[travis-url]: https://travis-ci.org/jshttp/http-errors
[coveralls-image]: https://img.shields.io/coveralls/jshttp/http-errors.svg
[coveralls-url]: https://coveralls.io/r/jshttp/http-errors
[downloads-image]: https://img.shields.io/npm/dm/http-errors.svg
[downloads-url]: https://npmjs.org/package/http-errors
