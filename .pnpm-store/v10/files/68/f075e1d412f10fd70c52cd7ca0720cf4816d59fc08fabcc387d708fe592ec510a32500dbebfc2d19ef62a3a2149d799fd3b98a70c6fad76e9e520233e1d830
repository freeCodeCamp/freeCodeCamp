# cookie

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][github-actions-ci-image]][github-actions-ci-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Basic HTTP cookie parser and serializer for HTTP servers.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install cookie
```

## API

```js
var cookie = require('cookie');
```

### cookie.parse(str, options)

Parse an HTTP `Cookie` header string and returning an object of all cookie name-value pairs.
The `str` argument is the string representing a `Cookie` header value and `options` is an
optional object containing additional parsing options.

```js
var cookies = cookie.parse('foo=bar; equation=E%3Dmc%5E2');
// { foo: 'bar', equation: 'E=mc^2' }
```

#### Options

`cookie.parse` accepts these properties in the options object.

##### decode

Specifies a function that will be used to decode a cookie's value. Since the value of a cookie
has a limited character set (and must be a simple string), this function can be used to decode
a previously-encoded cookie value into a JavaScript string or other object.

The default function is the global `decodeURIComponent`, which will decode any URL-encoded
sequences into their byte representations.

**note** if an error is thrown from this function, the original, non-decoded cookie value will
be returned as the cookie's value.

### cookie.serialize(name, value, options)

Serialize a cookie name-value pair into a `Set-Cookie` header string. The `name` argument is the
name for the cookie, the `value` argument is the value to set the cookie to, and the `options`
argument is an optional object containing additional serialization options.

```js
var setCookie = cookie.serialize('foo', 'bar');
// foo=bar
```

#### Options

`cookie.serialize` accepts these properties in the options object.

##### domain

Specifies the value for the [`Domain` `Set-Cookie` attribute][rfc-6265-5.2.3]. By default, no
domain is set, and most clients will consider the cookie to apply to only the current domain.

##### encode

Specifies a function that will be used to encode a cookie's value. Since value of a cookie
has a limited character set (and must be a simple string), this function can be used to encode
a value into a string suited for a cookie's value.

The default function is the global `encodeURIComponent`, which will encode a JavaScript string
into UTF-8 byte sequences and then URL-encode any that fall outside of the cookie range.

##### expires

Specifies the `Date` object to be the value for the [`Expires` `Set-Cookie` attribute][rfc-6265-5.2.1].
By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and
will delete it on a condition like exiting a web browser application.

**note** the [cookie storage model specification][rfc-6265-5.3] states that if both `expires` and
`maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
so if both are set, they should point to the same date and time.

##### httpOnly

Specifies the `boolean` value for the [`HttpOnly` `Set-Cookie` attribute][rfc-6265-5.2.6]. When truthy,
the `HttpOnly` attribute is set, otherwise it is not. By default, the `HttpOnly` attribute is not set.

**note** be careful when setting this to `true`, as compliant clients will not allow client-side
JavaScript to see the cookie in `document.cookie`.

##### maxAge

Specifies the `number` (in seconds) to be the value for the [`Max-Age` `Set-Cookie` attribute][rfc-6265-5.2.2].
The given number will be converted to an integer by rounding down. By default, no maximum age is set.

**note** the [cookie storage model specification][rfc-6265-5.3] states that if both `expires` and
`maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
so if both are set, they should point to the same date and time.

##### path

Specifies the value for the [`Path` `Set-Cookie` attribute][rfc-6265-5.2.4]. By default, the path
is considered the ["default path"][rfc-6265-5.1.4].

##### priority

Specifies the `string` to be the value for the [`Priority` `Set-Cookie` attribute][rfc-west-cookie-priority-00-4.1].

  - `'low'` will set the `Priority` attribute to `Low`.
  - `'medium'` will set the `Priority` attribute to `Medium`, the default priority when not set.
  - `'high'` will set the `Priority` attribute to `High`.

More information about the different priority levels can be found in
[the specification][rfc-west-cookie-priority-00-4.1].

**note** This is an attribute that has not yet been fully standardized, and may change in the future.
This also means many clients may ignore this attribute until they understand it.

##### sameSite

Specifies the `boolean` or `string` to be the value for the [`SameSite` `Set-Cookie` attribute][rfc-6265bis-09-5.4.7].

  - `true` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
  - `false` will not set the `SameSite` attribute.
  - `'lax'` will set the `SameSite` attribute to `Lax` for lax same site enforcement.
  - `'none'` will set the `SameSite` attribute to `None` for an explicit cross-site cookie.
  - `'strict'` will set the `SameSite` attribute to `Strict` for strict same site enforcement.

More information about the different enforcement levels can be found in
[the specification][rfc-6265bis-09-5.4.7].

**note** This is an attribute that has not yet been fully standardized, and may change in the future.
This also means many clients may ignore this attribute until they understand it.

##### secure

Specifies the `boolean` value for the [`Secure` `Set-Cookie` attribute][rfc-6265-5.2.5]. When truthy,
the `Secure` attribute is set, otherwise it is not. By default, the `Secure` attribute is not set.

**note** be careful when setting this to `true`, as compliant clients will not send the cookie back to
the server in the future if the browser does not have an HTTPS connection.

## Example

The following example uses this module in conjunction with the Node.js core HTTP server
to prompt a user for their name and display it back on future visits.

```js
var cookie = require('cookie');
var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');

function onRequest(req, res) {
  // Parse the query string
  var query = url.parse(req.url, true, true).query;

  if (query && query.name) {
    // Set a new cookie with the name
    res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }));

    // Redirect back after setting cookie
    res.statusCode = 302;
    res.setHeader('Location', req.headers.referer || '/');
    res.end();
    return;
  }

  // Parse the cookies on the request
  var cookies = cookie.parse(req.headers.cookie || '');

  // Get the visitor name set in the cookie
  var name = cookies.name;

  res.setHeader('Content-Type', 'text/html; charset=UTF-8');

  if (name) {
    res.write('<p>Welcome back, <b>' + escapeHtml(name) + '</b>!</p>');
  } else {
    res.write('<p>Hello, new visitor!</p>');
  }

  res.write('<form method="GET">');
  res.write('<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name">');
  res.end('</form>');
}

http.createServer(onRequest).listen(3000);
```

## Testing

```sh
$ npm test
```

## Benchmark

```
$ npm run bench

> cookie@0.4.2 bench
> node benchmark/index.js

  node@16.14.0
  v8@9.4.146.24-node.20
  uv@1.43.0
  zlib@1.2.11
  brotli@1.0.9
  ares@1.18.1
  modules@93
  nghttp2@1.45.1
  napi@8
  llhttp@6.0.4
  openssl@1.1.1m+quic
  cldr@40.0
  icu@70.1
  tz@2021a3
  unicode@14.0
  ngtcp2@0.1.0-DEV
  nghttp3@0.1.0-DEV

> node benchmark/parse-top.js

  cookie.parse - top sites

  15 tests completed.

  parse accounts.google.com x 2,421,245 ops/sec ±0.80% (188 runs sampled)
  parse apple.com           x 2,684,710 ops/sec ±0.59% (189 runs sampled)
  parse cloudflare.com      x 2,231,418 ops/sec ±0.76% (186 runs sampled)
  parse docs.google.com     x 2,316,357 ops/sec ±1.28% (187 runs sampled)
  parse drive.google.com    x 2,363,543 ops/sec ±0.49% (189 runs sampled)
  parse en.wikipedia.org    x   839,414 ops/sec ±0.53% (189 runs sampled)
  parse linkedin.com        x   553,797 ops/sec ±0.63% (190 runs sampled)
  parse maps.google.com     x 1,314,779 ops/sec ±0.72% (189 runs sampled)
  parse microsoft.com       x   153,783 ops/sec ±0.53% (190 runs sampled)
  parse play.google.com     x 2,249,574 ops/sec ±0.59% (187 runs sampled)
  parse plus.google.com     x 2,258,682 ops/sec ±0.60% (188 runs sampled)
  parse sites.google.com    x 2,247,069 ops/sec ±0.68% (189 runs sampled)
  parse support.google.com  x 1,456,840 ops/sec ±0.70% (187 runs sampled)
  parse www.google.com      x 1,046,028 ops/sec ±0.58% (188 runs sampled)
  parse youtu.be            x   937,428 ops/sec ±1.47% (190 runs sampled)
  parse youtube.com         x   963,878 ops/sec ±0.59% (190 runs sampled)

> node benchmark/parse.js

  cookie.parse - generic

  6 tests completed.

  simple      x 2,745,604 ops/sec ±0.77% (185 runs sampled)
  decode      x   557,287 ops/sec ±0.60% (188 runs sampled)
  unquote     x 2,498,475 ops/sec ±0.55% (189 runs sampled)
  duplicates  x   868,591 ops/sec ±0.89% (187 runs sampled)
  10 cookies  x   306,745 ops/sec ±0.49% (190 runs sampled)
  100 cookies x    22,414 ops/sec ±2.38% (182 runs sampled)
```

## References

- [RFC 6265: HTTP State Management Mechanism][rfc-6265]
- [Same-site Cookies][rfc-6265bis-09-5.4.7]

[rfc-west-cookie-priority-00-4.1]: https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1
[rfc-6265bis-09-5.4.7]: https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7
[rfc-6265]: https://tools.ietf.org/html/rfc6265
[rfc-6265-5.1.4]: https://tools.ietf.org/html/rfc6265#section-5.1.4
[rfc-6265-5.2.1]: https://tools.ietf.org/html/rfc6265#section-5.2.1
[rfc-6265-5.2.2]: https://tools.ietf.org/html/rfc6265#section-5.2.2
[rfc-6265-5.2.3]: https://tools.ietf.org/html/rfc6265#section-5.2.3
[rfc-6265-5.2.4]: https://tools.ietf.org/html/rfc6265#section-5.2.4
[rfc-6265-5.2.5]: https://tools.ietf.org/html/rfc6265#section-5.2.5
[rfc-6265-5.2.6]: https://tools.ietf.org/html/rfc6265#section-5.2.6
[rfc-6265-5.3]: https://tools.ietf.org/html/rfc6265#section-5.3

## License

[MIT](LICENSE)

[coveralls-image]: https://badgen.net/coveralls/c/github/jshttp/cookie/master
[coveralls-url]: https://coveralls.io/r/jshttp/cookie?branch=master
[github-actions-ci-image]: https://img.shields.io/github/workflow/status/jshttp/cookie/ci/master?label=ci
[github-actions-ci-url]: https://github.com/jshttp/cookie/actions/workflows/ci.yml
[node-version-image]: https://badgen.net/npm/node/cookie
[node-version-url]: https://nodejs.org/en/download
[npm-downloads-image]: https://badgen.net/npm/dm/cookie
[npm-url]: https://npmjs.org/package/cookie
[npm-version-image]: https://badgen.net/npm/v/cookie
