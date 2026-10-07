# set-cookie-parser 

[![Node.js CI](https://github.com/nfriedly/set-cookie-parser/actions/workflows/node.js.yml/badge.svg)](https://github.com/nfriedly/set-cookie-parser/actions/workflows/node.js.yml)
[![NPM version][npm-image]][npm-url] 
[![npm downloads](https://img.shields.io/npm/dm/set-cookie-parser)][npm-url]

Parses set-cookie headers into objects

Accepts a single `set-cookie` header value, an array of `set-cookie` header values, a Node.js response object, or a `fetch()` `Response` object that may have 0 or more `set-cookie` headers.

Also accepts an optional options object. Defaults:

```js
{
    decodeValues: true,  // Calls decodeURIComponent on each value - default: true
    map: false,          // Return an object instead of an array - default: false
    silent: false,       // Suppress the warning that is logged when called on a request instead of a response - default: false
}
```

Returns either an array of cookie objects or a map of name => cookie object with `{map: true}`. Each cookie object will have, at a minimum `name` and `value` properties, and may have additional properties depending on the set-cookie header:

* `name` - cookie name (string)
* `value` - cookie value (string)
* `path` - cookie path (string or undefined)
* `domain` - domain for the cookie (string or undefined, may begin with "." to indicate the named domain or any subdomain of it)
* `expires` - absolute expiration date for the cookie (Date object or undefined)
* `maxAge` - relative max age of the cookie in seconds from when the client receives it (integer or undefined)
  * Note: when using with [express's res.cookie() method](http://expressjs.com/en/4x/api.html#res.cookie), multiply `maxAge` by 1000 to convert to milliseconds.
* `secure` - indicates that this cookie should only be sent over HTTPs (true or undefined)
* `httpOnly` - indicates that this cookie should *not* be accessible to client-side JavaScript (true or undefined)
* `sameSite` - indicates a cookie ought not to be sent along with cross-site requests (string or undefined)

(The output format is loosely based on the input format of https://www.npmjs.com/package/cookie)

## Install

```sh
$ npm install --save set-cookie-parser
```


## Usage

### Get array of cookie objects

```js
var http = require('http');
var setCookie = require('set-cookie-parser');

http.get('http://example.com', function(res) {
  var cookies = setCookie.parse(res, {
    decodeValues: true  // default: true
  });

  cookies.forEach(console.log);
}
```

Example output:

```js
[
    {
        name: 'bam',
        value: 'baz'
    },
    {
        name: 'foo',
        value: 'bar',
        path: '/',
        expires: new Date('Tue Jul 01 2025 06:01:11 GMT-0400 (EDT)'),
        maxAge: 1000,
        domain: '.example.com',
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    }
]
```

### Get map of cookie objects

```js
var http = require('http');
var setCookie = require('set-cookie-parser');

http.get('http://example.com', function(res) {
  var cookies = setCookie.parse(res, {
    decodeValues: true,  // default: true
    map: true            // default: false
  });

  var desiredCookie = cookies['session'];
  console.log(desiredCookie);
});
```
Example output:
```js
{
    bam: {
        name: 'bam',
        value: 'baz'
    },
    foo: {
        name: 'foo',
        value: 'bar',
        path: '/',
        expires: new Date('Tue Jul 01 2025 06:01:11 GMT-0400 (EDT)'),
        maxAge: 1000,
        domain: '.example.com',
        secure: true,
        httpOnly: true,
        sameSite: 'lax'
    }
}
```

### Creating a new, modified set-cookie header

This library can be used in conjunction with the [cookie](https://www.npmjs.com/package/cookie) library to modify and replace set-cookie headers:

```js
const libCookie = require('cookie');
const setCookie = require('set-cookie-parser');

function modifySetCookie(res){
  // parse the set-cookie headers with this library
  let cookies = setCookie.parse(res);
  
  // modify the cookies here
  // ...
  
  // create new set-cookie headers using the cookie library
  res.headers['set-cookie'] = cookies.map(function(cookie) {
      return libCookie.serialize(cookie.name, cookie.value, cookie);
  });
}
```

See a real-world example of this in [unblocker](https://github.com/nfriedly/node-unblocker/blob/08a89ec27274b46dcd80d0a324a59406f2bdad3d/lib/cookies.js#L67-L85)

## Usage in React Native (and with some other fetch implementations)

React Native follows the Fetch spec more closely and combines all of the Set-Cookie header values into a single string.
The `splitCookiesString` method reverses this.

```js
var setCookie = require('set-cookie-parser');

var response = fetch(/*...*/);

// This is mainly for React Native; Node.js does not combine set-cookie headers.
var combinedCookieHeader = response.headers.get('Set-Cookie');
var splitCookieHeaders = setCookie.splitCookiesString(combinedCookieHeader)
var cookies = setCookie.parse(splitCookieHeaders);

console.log(cookies); // should be an array of cookies
```

This behavior may become a default part of parse in the next major release, but requires the extra step for now.

Note that the `fetch()` spec now includes a `getSetCookie()` method that provides un-combined `Set-Cookie` headers. This library will automatically use that method if it is present.

## API

### parse(input, [options])

Parses cookies from a string, array of strings, or a http response object. 
Always returns an array, regardless of input format. (Unless the `map` option is set, in which case it always returns an object.)

### parseString(individualSetCookieHeader, [options])

Parses a single set-cookie header value string. Options default is `{decodeValues: true}`. Used under-the-hood by `parse()`. 
Returns an object.

### splitCookiesString(combinedSetCookieHeader)

It's uncommon, but the HTTP spec does allow for multiple of the same header to have their values combined (comma-separated) into a single header. 
This method splits apart a combined header without choking on commas that appear within a cookie's value (or expiration date).
Returns an array of strings that may be passed to `parse()`.

## V2 Changes

* Added decodeValues option (calls `decodeURIComponent()` on each cookie value), enabled by default.
* Added `splitCookiesString` method.

## References

* [RFC 6265: HTTP State Management Mechanism](https://tools.ietf.org/html/rfc6265)
* [draft-ietf-httpbis-rfc6265bis-10](https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html)

## License

MIT © [Nathan Friedly](http://www.nfriedly.com/)


[npm-image]: https://badge.fury.io/js/set-cookie-parser.svg
[npm-url]: https://npmjs.org/package/set-cookie-parser
