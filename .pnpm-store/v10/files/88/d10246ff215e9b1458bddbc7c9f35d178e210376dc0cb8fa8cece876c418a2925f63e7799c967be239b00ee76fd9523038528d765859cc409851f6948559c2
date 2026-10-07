# simple-get [![ci][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[ci-image]: https://img.shields.io/github/workflow/status/feross/simple-get/ci/master
[ci-url]: https://github.com/feross/simple-get/actions
[npm-image]: https://img.shields.io/npm/v/simple-get.svg
[npm-url]: https://npmjs.org/package/simple-get
[downloads-image]: https://img.shields.io/npm/dm/simple-get.svg
[downloads-url]: https://npmjs.org/package/simple-get
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Simplest way to make http get requests

## features

This module is the lightest possible wrapper on top of node.js `http`, but supporting these essential features:

- follows redirects
- automatically handles gzip/deflate responses
- supports HTTPS
- supports specifying a timeout
- supports convenience `url` key so there's no need to use `url.parse` on the url when specifying options
- composes well with npm packages for features like cookies, proxies, form data, & OAuth

All this in < 100 lines of code.

## install

```
npm install simple-get
```

## usage

Note, all these examples also work in the browser with [browserify](http://browserify.org/).

### simple GET request

Doesn't get easier than this:

```js
const get = require('simple-get')

get('http://example.com', function (err, res) {
  if (err) throw err
  console.log(res.statusCode) // 200
  res.pipe(process.stdout) // `res` is a stream
})
```

### even simpler GET request

If you just want the data, and don't want to deal with streams:

```js
const get = require('simple-get')

get.concat('http://example.com', function (err, res, data) {
  if (err) throw err
  console.log(res.statusCode) // 200
  console.log(data) // Buffer('this is the server response')
})
```

### POST, PUT, PATCH, HEAD, DELETE support

For `POST`, call `get.post` or use option `{ method: 'POST' }`.

```js
const get = require('simple-get')

const opts = {
  url: 'http://example.com',
  body: 'this is the POST body'
}
get.post(opts, function (err, res) {
  if (err) throw err
  res.pipe(process.stdout) // `res` is a stream
})
```

#### A more complex example:

```js
const get = require('simple-get')

get({
  url: 'http://example.com',
  method: 'POST',
  body: 'this is the POST body',

  // simple-get accepts all options that node.js `http` accepts
  // See: http://nodejs.org/api/http.html#http_http_request_options_callback
  headers: {
    'user-agent': 'my cool app'
  }
}, function (err, res) {
  if (err) throw err

  // All properties/methods from http.IncomingResponse are available,
  // even if a gunzip/inflate transform stream was returned.
  // See: http://nodejs.org/api/http.html#http_http_incomingmessage
  res.setTimeout(10000)
  console.log(res.headers)

  res.on('data', function (chunk) {
    // `chunk` is the decoded response, after it's been gunzipped or inflated
    // (if applicable)
    console.log('got a chunk of the response: ' + chunk)
  }))

})
```

### JSON

You can serialize/deserialize request and response with JSON:

```js
const get = require('simple-get')

const opts = {
  method: 'POST',
  url: 'http://example.com',
  body: {
    key: 'value'
  },
  json: true
}
get.concat(opts, function (err, res, data) {
  if (err) throw err
  console.log(data.key) // `data` is an object
})
```

### Timeout

You can set a timeout (in milliseconds) on the request with the `timeout` option.
If the request takes longer than `timeout` to complete, then the entire request
will fail with an `Error`.

```js
const get = require('simple-get')

const opts = {
  url: 'http://example.com',
  timeout: 2000 // 2 second timeout
}

get(opts, function (err, res) {})
```

### One Quick Tip

It's a good idea to set the `'user-agent'` header so the provider can more easily
see how their resource is used.

```js
const get = require('simple-get')
const pkg = require('./package.json')

get('http://example.com', {
  headers: {
    'user-agent': `my-module/${pkg.version} (https://github.com/username/my-module)`
  }
})
```

### Proxies

You can use the [`tunnel`](https://github.com/koichik/node-tunnel) module with the
`agent` option to work with proxies:

```js
const get = require('simple-get')
const tunnel = require('tunnel')

const opts = {
  url: 'http://example.com',
  agent: tunnel.httpOverHttp({
    proxy: {
      host: 'localhost'
    }
  })
}

get(opts, function (err, res) {})
```

### Cookies

You can use the [`cookie`](https://github.com/jshttp/cookie) module to include
cookies in a request:

```js
const get = require('simple-get')
const cookie = require('cookie')

const opts = {
  url: 'http://example.com',
  headers: {
    cookie: cookie.serialize('foo', 'bar')
  }
}

get(opts, function (err, res) {})
```

### Form data

You can use the [`form-data`](https://github.com/form-data/form-data) module to
create POST request with form data:

```js
const fs = require('fs')
const get = require('simple-get')
const FormData = require('form-data')
const form = new FormData()

form.append('my_file', fs.createReadStream('/foo/bar.jpg'))

const opts = {
  url: 'http://example.com',
  body: form
}

get.post(opts, function (err, res) {})
```

#### Or, include `application/x-www-form-urlencoded` form data manually:

```js
const get = require('simple-get')

const opts = {
  url: 'http://example.com',
  form: {
    key: 'value'
  }
}
get.post(opts, function (err, res) {})
```

### Specifically disallowing redirects

```js
const get = require('simple-get')

const opts = {
  url: 'http://example.com/will-redirect-elsewhere',
  followRedirects: false
}
// res.statusCode will be 301, no error thrown
get(opts, function (err, res) {})
```

### Basic Auth

```js
const user = 'someuser'
const pass = 'pa$$word'
const encodedAuth = Buffer.from(`${user}:${pass}`).toString('base64')

get('http://example.com', {
  headers: {
    authorization: `Basic ${encodedAuth}`
  }
})
```

### OAuth

You can use the [`oauth-1.0a`](https://github.com/ddo/oauth-1.0a) module to create
a signed OAuth request:

```js
const get = require('simple-get')
const crypto  = require('crypto')
const OAuth = require('oauth-1.0a')

const oauth = OAuth({
  consumer: {
    key: process.env.CONSUMER_KEY,
    secret: process.env.CONSUMER_SECRET
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
})

const token = {
  key: process.env.ACCESS_TOKEN,
  secret: process.env.ACCESS_TOKEN_SECRET
}

const url = 'https://api.twitter.com/1.1/statuses/home_timeline.json'

const opts = {
  url: url,
  headers: oauth.toHeader(oauth.authorize({url, method: 'GET'}, token)),
  json: true
}

get(opts, function (err, res) {})
```

### Throttle requests

You can use [limiter](https://github.com/jhurliman/node-rate-limiter) to throttle requests. This is useful when calling an API that is rate limited.

```js
const simpleGet = require('simple-get')
const RateLimiter = require('limiter').RateLimiter
const limiter = new RateLimiter(1, 'second')

const get = (opts, cb) => limiter.removeTokens(1, () => simpleGet(opts, cb))
get.concat = (opts, cb) => limiter.removeTokens(1, () => simpleGet.concat(opts, cb))

var opts = {
  url: 'http://example.com'
}

get.concat(opts, processResult)
get.concat(opts, processResult)

function processResult (err, res, data) {
  if (err) throw err
  console.log(data.toString())
}
```

## license

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
