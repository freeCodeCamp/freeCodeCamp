# set-cookie-parser 

[![Node.js CI](https://github.com/nfriedly/set-cookie-parser/actions/workflows/node.js.yml/badge.svg)](https://github.com/nfriedly/set-cookie-parser/actions/workflows/node.js.yml)
[![NPM version][npm-image]][npm-url] 
[![npm downloads](https://img.shields.io/npm/dm/set-cookie-parser)][npm-url]

---

Parses set-cookie headers into JavaScript objects

Accepts a single `set-cookie` header value, an array of `set-cookie` header values, a Node.js response object, or a `fetch()` `Response` object that may have 0 or more `set-cookie` headers.

Returns either an array of cookie objects or a map of name => cookie object with options set `{map: true}`. Each cookie object will have, at a minimum `name` and `value` properties, and may have additional properties depending on the set-cookie header:

* `name` - cookie name (string)
* `value` - cookie value (string)
* `path` - URL path to limit the scope to (string or undefined)
* `domain` - domain to expand the scope to (string or undefined, may begin with "." to indicate the named domain or any subdomain of it)
* `expires` - absolute expiration date for the cookie (Date object or undefined)
* `maxAge` - relative expiration time of the cookie in seconds from when the client receives it (integer or undefined)
  * Note: when using with [express's res.cookie() method](http://expressjs.com/en/4x/api.html#res.cookie), multiply `maxAge` by 1000 to convert to milliseconds.
* `secure` - indicates cookie should only be sent over HTTPs (true or undefined)
* `httpOnly` - indicates cookie should *not* be accessible to client-side JavaScript (true or undefined)
* `sameSite` - indicates if cookie should be included in cross-site requests ([more info](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)) (string or undefined)
  * Note: valid values are `"Strict"`, `"Lax"`, and `"None"`, but set-cookie-parser copies the value verbatim and does *not* perform any validation.
* `partitioned` - indicates cookie should be scoped to the combination of 3rd party domain + top page domain ([more info](https://developer.mozilla.org/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)) (true or undefined)

(The output format is loosely based on the input format of https://www.npmjs.com/package/cookie)

## Install

```sh
$ npm install --save set-cookie-parser
```


## Usage

### Get array of cookie objects

```js
import * as http from 'node:http';
import { parseSetCookie } from 'set-cookie-parser';
// or const { parseSetCookie } = require('set-cookie-parser');

http.get('http://example.com', function(res) {
  const cookies = parseSetCookie(res, {
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
import * as http from 'node:http';
import { parseSetCookie } from 'set-cookie-parser';
// or const { parseSetCookie } = require('set-cookie-parser');

http.get('http://example.com', function(res) {
  const cookies = parseSetCookie(res, {
    decodeValues: true,  // default: true
    map: true            // default: false
  });

  const desiredCookie = cookies['session'];
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
import * as libCookie from 'cookie';
import { parseSetCookie } from 'set-cookie-parser';
// or const { parseSetCookie } = require('set-cookie-parser');

function modifySetCookie(res){
  // parse the set-cookie headers with this library
  const cookies = parseSetCookie(res);
  
  // modify the cookies here
  // ...
  
  // create new set-cookie headers using the cookie library
  res.headers['set-cookie'] = cookies.map(function(cookie) {
      return libCookie.serialize(cookie.name, cookie.value, cookie);
  });
}
```

See a real-world example of this in [unblocker](https://github.com/nfriedly/node-unblocker/blob/08a89ec27274b46dcd80d0a324a59406f2bdad3d/lib/cookies.js#L67-L85)

## API

### parseSetCookie(input, [options])

Parses cookies from a string, array of strings, or a http response object. 
Always returns an array, regardless of input format. (Unless the `map` option is set, in which case it always returns an object.)

Also accepts an optional options object. Defaults:

```js
{
    decodeValues: true, // Calls decodeURIComponent on each value - default: true
    map: false,         // Return an object instead of an array - default: false
    silent: false,      // Suppress the warning that is logged when called on a request instead of a response - default: false
    split: 'auto',      // Separate combined cookie headers. Valid options are true/false/'auto'. 'auto' splits strings but not arrays.
}
```

## References

* [RFC 6265: HTTP State Management Mechanism](https://tools.ietf.org/html/rfc6265)
* [draft-ietf-httpbis-rfc6265bis-10](https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html)

## License

MIT © [Nathan Friedly](http://www.nfriedly.com/)


[npm-image]: https://badge.fury.io/js/set-cookie-parser.svg
[npm-url]: https://npmjs.org/package/set-cookie-parser
