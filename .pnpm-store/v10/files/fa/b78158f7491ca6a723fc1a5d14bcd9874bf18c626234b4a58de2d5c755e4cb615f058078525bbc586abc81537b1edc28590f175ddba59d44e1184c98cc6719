# cookie

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]

Basic HTTP cookie parser and serializer for HTTP servers.

## Installation

```sh
$ npm install cookie
```

## API

```js
const cookie = require("cookie");
// import * as cookie from 'cookie';
```

### cookie.parseCookie(str, options)

Parse an HTTP `Cookie` header string and return an [object](#cookie-object) of all cookie name-value pairs.
The `str` argument is the string representing a `Cookie` header value and `options` is an
optional object containing additional parsing options.

```js
const cookieObject = cookie.parseCookie("foo=bar; equation=E%3Dmc%5E2");
// { foo: 'bar', equation: 'E=mc^2' }
```

#### Options

- `decode` Specifies the function to decode a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1). Defaults to [`decodeURIComponent`](#encode-and-decode).

### cookie.stringifyCookie(cookieObj, options)

Stringifies a [cookie object](#cookie-object) into an HTTP `Cookie` header.

```js
const cookieHeader = cookie.stringify({ a: "foo", b: "bar" });
// a=foo; b=bar
```

#### Options

- `encode` Specifies the function to encode a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1). Defaults to [`encodeURIComponent`](#encode-and-decode).

### cookie.parseSetCookie(str, options)

Parse an HTTP `Set-Cookie` header string and return an [object](#set-cookie-object) of the options.

```js
const setCookieObject = cookie.parseSetCookie("foo=bar; httpOnly");
// { name: "foo", value: "bar", httpOnly: true }
```

**Note:** Cookie follows the specification and ignores invalid attributes, but does not attempt to normalize or modify any attributes as a browser might. For example:

```js
cookie.parseSetCookie(
  "session=abc; max-age=1.5; expires=invalid; custom=value; domain=example.com",
);
// { name: "session", value: "abc", domain: "example.com" }
```

#### Options

- `decode` Specifies the function to decode a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1). Defaults to [`decodeURIComponent`](#encode-and-decode).

### cookie.stringifySetCookie(setCookieObj, options)

Stringifies a [`Set-Cookie` object](#set-cookie-object) into a `Set-Cookie` header string.

```js
const setCookieHeader = cookie.stringifySetCookie({
  name: "foo",
  value: "bar",
});
// foo=bar
```

#### Options

- `encode` Specifies the function to encode a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1). Defaults to [`encodeURIComponent`](#encode-and-decode).

## Cookie object

The cookie object represents all cookie name-value pairs in a `Cookie` header, where `{ name: "value" }` is used for `name=value`.

## `Set-Cookie` object

The `Set-Cookie` object represents all the options in a `Set-Cookie` header.

### name

The name of the cookie.

### value

The value of a cookie after it has been [decoded](#encode-and-decode).

### maxAge

Specifies the `number` (in seconds) to be the value for the [`Max-Age` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.2).

The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and
`maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
so if both are set, they should point to the same date and time.

### expires

Specifies the `Date` object to be the value for the [`Expires` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.1).
When no expiration is set, clients consider this a "non-persistent cookie" and delete it when the current session is over.

The [cookie storage model specification](https://tools.ietf.org/html/rfc6265#section-5.3) states that if both `expires` and
`maxAge` are set, then `maxAge` takes precedence, but it is possible not all clients by obey this,
so if both are set, they should point to the same date and time.

### domain

Specifies the value for the [`Domain` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.3).
When no domain is set, clients consider the cookie to apply to the current domain only.

### path

Specifies the value for the [`Path` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.4).
When no path is set, the path is considered the ["default path"](https://tools.ietf.org/html/rfc6265#section-5.1.4).

### httpOnly

Enables the [`HttpOnly` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.6).
When enabled, clients will not allow client-side JavaScript to see the cookie in `document.cookie`.

### secure

Enables the [`Secure` `Set-Cookie` attribute](https://tools.ietf.org/html/rfc6265#section-5.2.5).
When enabled, clients will only send the cookie back if the browser has an HTTPS connection.

### partitioned

Enables the [`Partitioned` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-cutler-httpbis-partitioned-cookies/).
When enabled, clients will only send the cookie back when the current domain _and_ top-level domain matches.

This is an attribute that has not yet been fully standardized, and may change in the future.
This also means clients may ignore this attribute until they understand it. More information
about can be found in [the proposal](https://github.com/privacycg/CHIPS).

### priority

Specifies the value for the [`Priority` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).

- `'low'` will set the `Priority` attribute to `Low`.
- `'medium'` will set the `Priority` attribute to `Medium`, the default priority when not set.
- `'high'` will set the `Priority` attribute to `High`.

More information about priority levels can be found in [the specification](https://tools.ietf.org/html/draft-west-cookie-priority-00#section-4.1).

### sameSite

Specifies the value for the [`SameSite` `Set-Cookie` attribute](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).

- `true` will set the `SameSite` attribute to `Strict` for strict same site enforcement.
- `'lax'` will set the `SameSite` attribute to `Lax` for lax same site enforcement.
- `'none'` will set the `SameSite` attribute to `None` for an explicit cross-site cookie.
- `'strict'` will set the `SameSite` attribute to `Strict` for strict same site enforcement.

More information about enforcement levels can be found in [the specification](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7).

## Encode and decode

Cookie accepts `encode` or `decode` options for processing a [cookie-value](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1).
Since the value of a cookie has a limited character set (and must be a simple string), these functions are used to transform values into strings suitable for a cookies value.

The default `encode` function is the global `encodeURIComponent`.

The default `decode` function is the global `decodeURIComponent`, wrapped in a `try..catch`. If an error
is thrown it will return the cookie's original value. If you provide your own encode/decode
scheme you must ensure errors are appropriately handled.

## Example

The following example uses this module in conjunction with the Node.js core HTTP server
to prompt a user for their name and display it back on future visits.

```js
var cookie = require("cookie");
var escapeHtml = require("escape-html");
var http = require("http");
var url = require("url");

function onRequest(req, res) {
  // Parse the query string
  var query = url.parse(req.url, true, true).query;

  if (query && query.name) {
    // Set a new cookie with the name
    res.setHeader(
      "Set-Cookie",
      cookie.stringifySetCookie({
        name: "name",
        value: String(query.name),
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
      }),
    );

    // Redirect back after setting cookie
    res.statusCode = 302;
    res.setHeader("Location", req.headers.referer || "/");
    res.end();
    return;
  }

  // Parse the cookies on the request
  var cookies = cookie.parseCookie(req.headers.cookie || "");

  // Get the visitor name set in the cookie
  var name = cookies.name;

  res.setHeader("Content-Type", "text/html; charset=UTF-8");

  if (name) {
    res.write("<p>Welcome back, <b>" + escapeHtml(name) + "</b>!</p>");
  } else {
    res.write("<p>Hello, new visitor!</p>");
  }

  res.write('<form method="GET">');
  res.write(
    '<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name">',
  );
  res.end("</form>");
}

http.createServer(onRequest).listen(3000);
```

## Testing

```sh
npm test
```

## Benchmark

```sh
npm run bench
```

```
     name                   hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · simple       8,566,313.09  0.0000  0.3694  0.0001  0.0001  0.0002  0.0002  0.0003  ±0.64%  4283157   fastest
   · decode       3,834,348.85  0.0001  0.2465  0.0003  0.0003  0.0003  0.0004  0.0006  ±0.38%  1917175
   · unquote      8,315,355.96  0.0000  0.3824  0.0001  0.0001  0.0002  0.0002  0.0003  ±0.72%  4157880
   · duplicates   1,944,765.97  0.0004  0.2959  0.0005  0.0005  0.0006  0.0006  0.0008  ±0.24%   972384
   · 10 cookies     675,345.67  0.0012  0.4328  0.0015  0.0015  0.0019  0.0020  0.0058  ±0.75%   337673
   · 100 cookies     61,040.71  0.0152  0.4092  0.0164  0.0160  0.0196  0.0228  0.2260  ±0.71%    30521   slowest
   ✓ parse top-sites (15) 22945ms
     name                                  hz     min     max    mean     p75     p99    p995    p999     rme   samples
   · parse accounts.google.com   7,164,349.17  0.0000  0.0929  0.0001  0.0002  0.0002  0.0002  0.0003  ±0.09%   3582184
   · parse apple.com             7,817,686.84  0.0000  0.6048  0.0001  0.0001  0.0002  0.0002  0.0003  ±1.05%   3908844
   · parse cloudflare.com        7,189,841.70  0.0000  0.0390  0.0001  0.0002  0.0002  0.0002  0.0003  ±0.06%   3594921
   · parse docs.google.com       7,051,765.61  0.0000  0.0296  0.0001  0.0002  0.0002  0.0002  0.0003  ±0.06%   3525883
   · parse drive.google.com      7,349,104.77  0.0000  0.0368  0.0001  0.0001  0.0002  0.0002  0.0003  ±0.05%   3674553
   · parse en.wikipedia.org      1,929,909.49  0.0004  0.3598  0.0005  0.0005  0.0007  0.0007  0.0012  ±0.16%    964955
   · parse linkedin.com          2,225,658.01  0.0003  0.0595  0.0004  0.0005  0.0005  0.0005  0.0006  ±0.06%   1112830
   · parse maps.google.com       4,423,511.68  0.0001  0.0942  0.0002  0.0003  0.0003  0.0003  0.0005  ±0.08%   2211756
   · parse microsoft.com         3,387,601.88  0.0002  0.0725  0.0003  0.0003  0.0004  0.0004  0.0005  ±0.09%   1693801
   · parse play.google.com       7,375,980.86  0.0000  0.1994  0.0001  0.0001  0.0002  0.0002  0.0003  ±0.12%   3687991
   · parse support.google.com    4,912,267.94  0.0001  2.8958  0.0002  0.0002  0.0003  0.0003  0.0005  ±1.28%   2456134
   · parse www.google.com        3,443,035.87  0.0002  0.2783  0.0003  0.0003  0.0004  0.0004  0.0007  ±0.51%   1721518
   · parse youtu.be              1,910,492.87  0.0004  0.3490  0.0005  0.0005  0.0007  0.0007  0.0011  ±0.46%    955247
   · parse youtube.com           1,895,082.62  0.0004  0.7454  0.0005  0.0005  0.0006  0.0007  0.0013  ±0.64%    947542   slowest
   · parse example.com          21,582,835.27  0.0000  0.1095  0.0000  0.0000  0.0001  0.0001  0.0001  ±0.13%  10791418
```

## References

- [RFC 6265: HTTP State Management Mechanism](https://tools.ietf.org/html/rfc6265)
- [Same-site Cookies](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-09#section-5.4.7)

## License

[MIT](LICENSE)

[ci-image]: https://img.shields.io/github/actions/workflow/status/jshttp/cookie/ci.yml
[ci-url]: https://github.com/jshttp/cookie/actions/workflows/ci.yml?query=branch%3Amaster
[coverage-image]: https://img.shields.io/codecov/c/github/jshttp/cookie/master
[coverage-url]: https://app.codecov.io/gh/jshttp/cookie
[npm-downloads-image]: https://img.shields.io/npm/dm/cookie
[npm-url]: https://npmjs.org/package/cookie
[npm-version-image]: https://img.shields.io/npm/v/cookie
