[RFC6265](https://tools.ietf.org/html/rfc6265) Cookies and CookieJar for Node.js

[![npm package](https://nodei.co/npm/tough-cookie.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tough-cookie/)

[![Build Status](https://travis-ci.org/salesforce/tough-cookie.png?branch=master)](https://travis-ci.org/salesforce/tough-cookie)

# Synopsis

``` javascript
var tough = require('tough-cookie');
var Cookie = tough.Cookie;
var cookie = Cookie.parse(header);
cookie.value = 'somethingdifferent';
header = cookie.toString();

var cookiejar = new tough.CookieJar();
cookiejar.setCookie(cookie, 'http://currentdomain.example.com/path', cb);
// ...
cookiejar.getCookies('http://example.com/otherpath',function(err,cookies) {
  res.headers['cookie'] = cookies.join('; ');
});
```

# Installation

It's _so_ easy!

`npm install tough-cookie`

Why the name?  NPM modules `cookie`, `cookies` and `cookiejar` were already taken.

## Version Support

Support for versions of node.js will follow that of the [request](https://www.npmjs.com/package/request) module.

# API

## tough

Functions on the module you get from `require('tough-cookie')`.  All can be used as pure functions and don't need to be "bound".

**Note**: prior to 1.0.x, several of these functions took a `strict` parameter. This has since been removed from the API as it was no longer necessary.

### `parseDate(string)`

Parse a cookie date string into a `Date`.  Parses according to RFC6265 Section 5.1.1, not `Date.parse()`.

### `formatDate(date)`

Format a Date into a RFC1123 string (the RFC6265-recommended format).

### `canonicalDomain(str)`

Transforms a domain-name into a canonical domain-name.  The canonical domain-name is a trimmed, lowercased, stripped-of-leading-dot and optionally punycode-encoded domain-name (Section 5.1.2 of RFC6265).  For the most part, this function is idempotent (can be run again on its output without ill effects).

### `domainMatch(str,domStr[,canonicalize=true])`

Answers "does this real domain match the domain in a cookie?".  The `str` is the "current" domain-name and the `domStr` is the "cookie" domain-name.  Matches according to RFC6265 Section 5.1.3, but it helps to think of it as a "suffix match".

The `canonicalize` parameter will run the other two parameters through `canonicalDomain` or not.

### `defaultPath(path)`

Given a current request/response path, gives the Path apropriate for storing in a cookie.  This is basically the "directory" of a "file" in the path, but is specified by Section 5.1.4 of the RFC.

The `path` parameter MUST be _only_ the pathname part of a URI (i.e. excludes the hostname, query, fragment, etc.).  This is the `.pathname` property of node's `uri.parse()` output.

### `pathMatch(reqPath,cookiePath)`

Answers "does the request-path path-match a given cookie-path?" as per RFC6265 Section 5.1.4.  Returns a boolean.

This is essentially a prefix-match where `cookiePath` is a prefix of `reqPath`.

### `parse(cookieString[, options])`

alias for `Cookie.parse(cookieString[, options])`

### `fromJSON(string)`

alias for `Cookie.fromJSON(string)`

### `getPublicSuffix(hostname)`

Returns the public suffix of this hostname.  The public suffix is the shortest domain-name upon which a cookie can be set.  Returns `null` if the hostname cannot have cookies set for it.

For example: `www.example.com` and `www.subdomain.example.com` both have public suffix `example.com`.

For further information, see http://publicsuffix.org/.  This module derives its list from that site. This call is currently a wrapper around [`psl`](https://www.npmjs.com/package/psl)'s [get() method](https://www.npmjs.com/package/psl#pslgetdomain).

### `cookieCompare(a,b)`

For use with `.sort()`, sorts a list of cookies into the recommended order given in the RFC (Section 5.4 step 2). The sort algorithm is, in order of precedence:

* Longest `.path`
* oldest `.creation` (which has a 1ms precision, same as `Date`)
* lowest `.creationIndex` (to get beyond the 1ms precision)

``` javascript
var cookies = [ /* unsorted array of Cookie objects */ ];
cookies = cookies.sort(cookieCompare);
```

**Note**: Since JavaScript's `Date` is limited to a 1ms precision, cookies within the same milisecond are entirely possible. This is especially true when using the `now` option to `.setCookie()`. The `.creationIndex` property is a per-process global counter, assigned during construction with `new Cookie()`. This preserves the spirit of the RFC sorting: older cookies go first. This works great for `MemoryCookieStore`, since `Set-Cookie` headers are parsed in order, but may not be so great for distributed systems. Sophisticated `Store`s may wish to set this to some other _logical clock_ such that if cookies A and B are created in the same millisecond, but cookie A is created before cookie B, then `A.creationIndex < B.creationIndex`. If you want to alter the global counter, which you probably _shouldn't_ do, it's stored in `Cookie.cookiesCreated`.

### `permuteDomain(domain)`

Generates a list of all possible domains that `domainMatch()` the parameter.  May be handy for implementing cookie stores.

### `permutePath(path)`

Generates a list of all possible paths that `pathMatch()` the parameter.  May be handy for implementing cookie stores.


## Cookie

Exported via `tough.Cookie`.

### `Cookie.parse(cookieString[, options])`

Parses a single Cookie or Set-Cookie HTTP header into a `Cookie` object.  Returns `undefined` if the string can't be parsed.

The options parameter is not required and currently has only one property:

  * _loose_ - boolean - if `true` enable parsing of key-less cookies like `=abc` and `=`, which are not RFC-compliant.

If options is not an object, it is ignored, which means you can use `Array#map` with it.

Here's how to process the Set-Cookie header(s) on a node HTTP/HTTPS response:

``` javascript
if (res.headers['set-cookie'] instanceof Array)
  cookies = res.headers['set-cookie'].map(Cookie.parse);
else
  cookies = [Cookie.parse(res.headers['set-cookie'])];
```

_Note:_ in version 2.3.3, tough-cookie limited the number of spaces before the `=` to 256 characters. This limitation has since been removed.
See [Issue 92](https://github.com/salesforce/tough-cookie/issues/92)

### Properties

Cookie object properties:

  * _key_ - string - the name or key of the cookie (default "")
  * _value_ - string - the value of the cookie (default "")
  * _expires_ - `Date` - if set, the `Expires=` attribute of the cookie (defaults to the string `"Infinity"`). See `setExpires()`
  * _maxAge_ - seconds - if set, the `Max-Age=` attribute _in seconds_ of the cookie.  May also be set to strings `"Infinity"` and `"-Infinity"` for non-expiry and immediate-expiry, respectively.  See `setMaxAge()`
  * _domain_ - string - the `Domain=` attribute of the cookie
  * _path_ - string - the `Path=` of the cookie
  * _secure_ - boolean - the `Secure` cookie flag
  * _httpOnly_ - boolean - the `HttpOnly` cookie flag
  * _extensions_ - `Array` - any unrecognized cookie attributes as strings (even if equal-signs inside)
  * _creation_ - `Date` - when this cookie was constructed
  * _creationIndex_ - number - set at construction, used to provide greater sort precision (please see `cookieCompare(a,b)` for a full explanation)

After a cookie has been passed through `CookieJar.setCookie()` it will have the following additional attributes:

  * _hostOnly_ - boolean - is this a host-only cookie (i.e. no Domain field was set, but was instead implied)
  * _pathIsDefault_ - boolean - if true, there was no Path field on the cookie and `defaultPath()` was used to derive one.
  * _creation_ - `Date` - **modified** from construction to when the cookie was added to the jar
  * _lastAccessed_ - `Date` - last time the cookie got accessed. Will affect cookie cleaning once implemented.  Using `cookiejar.getCookies(...)` will update this attribute.

### `Cookie([{properties}])`

Receives an options object that can contain any of the above Cookie properties, uses the default for unspecified properties.

### `.toString()`

encode to a Set-Cookie header value.  The Expires cookie field is set using `formatDate()`, but is omitted entirely if `.expires` is `Infinity`.

### `.cookieString()`

encode to a Cookie header value (i.e. the `.key` and `.value` properties joined with '=').

### `.setExpires(String)`

sets the expiry based on a date-string passed through `parseDate()`.  If parseDate returns `null` (i.e. can't parse this date string), `.expires` is set to `"Infinity"` (a string) is set.

### `.setMaxAge(number)`

sets the maxAge in seconds.  Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it JSON serializes correctly.

### `.expiryTime([now=Date.now()])`

### `.expiryDate([now=Date.now()])`

expiryTime() Computes the absolute unix-epoch milliseconds that this cookie expires. expiryDate() works similarly, except it returns a `Date` object.  Note that in both cases the `now` parameter should be milliseconds.

Max-Age takes precedence over Expires (as per the RFC). The `.creation` attribute -- or, by default, the `now` parameter -- is used to offset the `.maxAge` attribute.

If Expires (`.expires`) is set, that's returned.

Otherwise, `expiryTime()` returns `Infinity` and `expiryDate()` returns a `Date` object for "Tue, 19 Jan 2038 03:14:07 GMT" (latest date that can be expressed by a 32-bit `time_t`; the common limit for most user-agents).

### `.TTL([now=Date.now()])`

compute the TTL relative to `now` (milliseconds).  The same precedence rules as for `expiryTime`/`expiryDate` apply.

The "number" `Infinity` is returned for cookies without an explicit expiry and `0` is returned if the cookie is expired.  Otherwise a time-to-live in milliseconds is returned.

### `.canonicalizedDoman()`

### `.cdomain()`

return the canonicalized `.domain` field.  This is lower-cased and punycode (RFC3490) encoded if the domain has any non-ASCII characters.

### `.toJSON()`

For convenience in using `JSON.serialize(cookie)`. Returns a plain-old `Object` that can be JSON-serialized.

Any `Date` properties (i.e., `.expires`, `.creation`, and `.lastAccessed`) are exported in ISO format (`.toISOString()`).

**NOTE**: Custom `Cookie` properties will be discarded. In tough-cookie 1.x, since there was no `.toJSON` method explicitly defined, all enumerable properties were captured. If you want a property to be serialized, add the property name to the `Cookie.serializableProperties` Array.

### `Cookie.fromJSON(strOrObj)`

Does the reverse of `cookie.toJSON()`. If passed a string, will `JSON.parse()` that first.

Any `Date` properties (i.e., `.expires`, `.creation`, and `.lastAccessed`) are parsed via `Date.parse()`, not the tough-cookie `parseDate`, since it's JavaScript/JSON-y timestamps being handled at this layer.

Returns `null` upon JSON parsing error.

### `.clone()`

Does a deep clone of this cookie, exactly implemented as `Cookie.fromJSON(cookie.toJSON())`.

### `.validate()`

Status: *IN PROGRESS*. Works for a few things, but is by no means comprehensive.

validates cookie attributes for semantic correctness.  Useful for "lint" checking any Set-Cookie headers you generate.  For now, it returns a boolean, but eventually could return a reason string -- you can future-proof with this construct:

``` javascript
if (cookie.validate() === true) {
  // it's tasty
} else {
  // yuck!
}
```


## CookieJar

Exported via `tough.CookieJar`.

### `CookieJar([store],[options])`

Simply use `new CookieJar()`.  If you'd like to use a custom store, pass that to the constructor otherwise a `MemoryCookieStore` will be created and used.

The `options` object can be omitted and can have the following properties:

  * _rejectPublicSuffixes_ - boolean - default `true` - reject cookies with domains like "com" and "co.uk"
  * _looseMode_ - boolean - default `false` - accept malformed cookies like `bar` and `=bar`, which have an implied empty name.
    This is not in the standard, but is used sometimes on the web and is accepted by (most) browsers.

Since eventually this module would like to support database/remote/etc. CookieJars, continuation passing style is used for CookieJar methods.

### `.setCookie(cookieOrString, currentUrl, [{options},] cb(err,cookie))`

Attempt to set the cookie in the cookie jar.  If the operation fails, an error will be given to the callback `cb`, otherwise the cookie is passed through.  The cookie will have updated `.creation`, `.lastAccessed` and `.hostOnly` properties.

The `options` object can be omitted and can have the following properties:

  * _http_ - boolean - default `true` - indicates if this is an HTTP or non-HTTP API.  Affects HttpOnly cookies.
  * _secure_ - boolean - autodetect from url - indicates if this is a "Secure" API.  If the currentUrl starts with `https:` or `wss:` then this is defaulted to `true`, otherwise `false`.
  * _now_ - Date - default `new Date()` - what to use for the creation/access time of cookies
  * _ignoreError_ - boolean - default `false` - silently ignore things like parse errors and invalid domains.  `Store` errors aren't ignored by this option.

As per the RFC, the `.hostOnly` property is set if there was no "Domain=" parameter in the cookie string (or `.domain` was null on the Cookie object).  The `.domain` property is set to the fully-qualified hostname of `currentUrl` in this case.  Matching this cookie requires an exact hostname match (not a `domainMatch` as per usual).

### `.setCookieSync(cookieOrString, currentUrl, [{options}])`

Synchronous version of `setCookie`; only works with synchronous stores (e.g. the default `MemoryCookieStore`).

### `.getCookies(currentUrl, [{options},] cb(err,cookies))`

Retrieve the list of cookies that can be sent in a Cookie header for the current url.

If an error is encountered, that's passed as `err` to the callback, otherwise an `Array` of `Cookie` objects is passed.  The array is sorted with `cookieCompare()` unless the `{sort:false}` option is given.

The `options` object can be omitted and can have the following properties:

  * _http_ - boolean - default `true` - indicates if this is an HTTP or non-HTTP API.  Affects HttpOnly cookies.
  * _secure_ - boolean - autodetect from url - indicates if this is a "Secure" API.  If the currentUrl starts with `https:` or `wss:` then this is defaulted to `true`, otherwise `false`.
  * _now_ - Date - default `new Date()` - what to use for the creation/access time of cookies
  * _expire_ - boolean - default `true` - perform expiry-time checking of cookies and asynchronously remove expired cookies from the store.  Using `false` will return expired cookies and **not** remove them from the store (which is useful for replaying Set-Cookie headers, potentially).
  * _allPaths_ - boolean - default `false` - if `true`, do not scope cookies by path. The default uses RFC-compliant path scoping. **Note**: may not be supported by the underlying store (the default `MemoryCookieStore` supports it).

The `.lastAccessed` property of the returned cookies will have been updated.

### `.getCookiesSync(currentUrl, [{options}])`

Synchronous version of `getCookies`; only works with synchronous stores (e.g. the default `MemoryCookieStore`).

### `.getCookieString(...)`

Accepts the same options as `.getCookies()` but passes a string suitable for a Cookie header rather than an array to the callback.  Simply maps the `Cookie` array via `.cookieString()`.

### `.getCookieStringSync(...)`

Synchronous version of `getCookieString`; only works with synchronous stores (e.g. the default `MemoryCookieStore`).

### `.getSetCookieStrings(...)`

Returns an array of strings suitable for **Set-Cookie** headers. Accepts the same options as `.getCookies()`.  Simply maps the cookie array via `.toString()`.

### `.getSetCookieStringsSync(...)`

Synchronous version of `getSetCookieStrings`; only works with synchronous stores (e.g. the default `MemoryCookieStore`).

### `.serialize(cb(err,serializedObject))`

Serialize the Jar if the underlying store supports `.getAllCookies`.

**NOTE**: Custom `Cookie` properties will be discarded. If you want a property to be serialized, add the property name to the `Cookie.serializableProperties` Array.

See [Serialization Format].

### `.serializeSync()`

Sync version of .serialize

### `.toJSON()`

Alias of .serializeSync() for the convenience of `JSON.stringify(cookiejar)`.

### `CookieJar.deserialize(serialized, [store], cb(err,object))`

A new Jar is created and the serialized Cookies are added to the underlying store. Each `Cookie` is added via `store.putCookie` in the order in which they appear in the serialization.

The `store` argument is optional, but should be an instance of `Store`. By default, a new instance of `MemoryCookieStore` is created.

As a convenience, if `serialized` is a string, it is passed through `JSON.parse` first. If that throws an error, this is passed to the callback.

### `CookieJar.deserializeSync(serialized, [store])`

Sync version of `.deserialize`.  _Note_ that the `store` must be synchronous for this to work.

### `CookieJar.fromJSON(string)`

Alias of `.deserializeSync` to provide consistency with `Cookie.fromJSON()`.

### `.clone([store,]cb(err,newJar))`

Produces a deep clone of this jar. Modifications to the original won't affect the clone, and vice versa.

The `store` argument is optional, but should be an instance of `Store`. By default, a new instance of `MemoryCookieStore` is created. Transferring between store types is supported so long as the source implements `.getAllCookies()` and the destination implements `.putCookie()`.

### `.cloneSync([store])`

Synchronous version of `.clone`, returning a new `CookieJar` instance.

The `store` argument is optional, but must be a _synchronous_ `Store` instance if specified. If not passed, a new instance of `MemoryCookieStore` is used.

The _source_ and _destination_ must both be synchronous `Store`s. If one or both stores are asynchronous, use `.clone` instead. Recall that `MemoryCookieStore` supports both synchronous and asynchronous API calls.

## Store

Base class for CookieJar stores. Available as `tough.Store`.

## Store API

The storage model for each `CookieJar` instance can be replaced with a custom implementation.  The default is `MemoryCookieStore` which can be found in the `lib/memstore.js` file.  The API uses continuation-passing-style to allow for asynchronous stores.

Stores should inherit from the base `Store` class, which is available as `require('tough-cookie').Store`.

Stores are asynchronous by default, but if `store.synchronous` is set to `true`, then the `*Sync` methods on the of the containing `CookieJar` can be used (however, the continuation-passing style

All `domain` parameters will have been normalized before calling.

The Cookie store must have all of the following methods.

### `store.findCookie(domain, path, key, cb(err,cookie))`

Retrieve a cookie with the given domain, path and key (a.k.a. name).  The RFC maintains that exactly one of these cookies should exist in a store.  If the store is using versioning, this means that the latest/newest such cookie should be returned.

Callback takes an error and the resulting `Cookie` object.  If no cookie is found then `null` MUST be passed instead (i.e. not an error).

### `store.findCookies(domain, path, cb(err,cookies))`

Locates cookies matching the given domain and path.  This is most often called in the context of `cookiejar.getCookies()` above.

If no cookies are found, the callback MUST be passed an empty array.

The resulting list will be checked for applicability to the current request according to the RFC (domain-match, path-match, http-only-flag, secure-flag, expiry, etc.), so it's OK to use an optimistic search algorithm when implementing this method.  However, the search algorithm used SHOULD try to find cookies that `domainMatch()` the domain and `pathMatch()` the path in order to limit the amount of checking that needs to be done.

As of version 0.9.12, the `allPaths` option to `cookiejar.getCookies()` above will cause the path here to be `null`.  If the path is `null`, path-matching MUST NOT be performed (i.e. domain-matching only).

### `store.putCookie(cookie, cb(err))`

Adds a new cookie to the store.  The implementation SHOULD replace any existing cookie with the same `.domain`, `.path`, and `.key` properties -- depending on the nature of the implementation, it's possible that between the call to `fetchCookie` and `putCookie` that a duplicate `putCookie` can occur.

The `cookie` object MUST NOT be modified; the caller will have already updated the `.creation` and `.lastAccessed` properties.

Pass an error if the cookie cannot be stored.

### `store.updateCookie(oldCookie, newCookie, cb(err))`

Update an existing cookie.  The implementation MUST update the `.value` for a cookie with the same `domain`, `.path` and `.key`.  The implementation SHOULD check that the old value in the store is equivalent to `oldCookie` - how the conflict is resolved is up to the store.

The `.lastAccessed` property will always be different between the two objects (to the precision possible via JavaScript's clock).  Both `.creation` and `.creationIndex` are guaranteed to be the same.  Stores MAY ignore or defer the `.lastAccessed` change at the cost of affecting how cookies are selected for automatic deletion (e.g., least-recently-used, which is up to the store to implement).

Stores may wish to optimize changing the `.value` of the cookie in the store versus storing a new cookie.  If the implementation doesn't define this method a stub that calls `putCookie(newCookie,cb)` will be added to the store object.

The `newCookie` and `oldCookie` objects MUST NOT be modified.

Pass an error if the newCookie cannot be stored.

### `store.removeCookie(domain, path, key, cb(err))`

Remove a cookie from the store (see notes on `findCookie` about the uniqueness constraint).

The implementation MUST NOT pass an error if the cookie doesn't exist; only pass an error due to the failure to remove an existing cookie.

### `store.removeCookies(domain, path, cb(err))`

Removes matching cookies from the store.  The `path` parameter is optional, and if missing means all paths in a domain should be removed.

Pass an error ONLY if removing any existing cookies failed.

### `store.getAllCookies(cb(err, cookies))`

Produces an `Array` of all cookies during `jar.serialize()`. The items in the array can be true `Cookie` objects or generic `Object`s with the [Serialization Format] data structure.

Cookies SHOULD be returned in creation order to preserve sorting via `compareCookies()`. For reference, `MemoryCookieStore` will sort by `.creationIndex` since it uses true `Cookie` objects internally. If you don't return the cookies in creation order, they'll still be sorted by creation time, but this only has a precision of 1ms.  See `compareCookies` for more detail.

Pass an error if retrieval fails.

## MemoryCookieStore

Inherits from `Store`.

A just-in-memory CookieJar synchronous store implementation, used by default. Despite being a synchronous implementation, it's usable with both the synchronous and asynchronous forms of the `CookieJar` API.

## Community Cookie Stores

These are some Store implementations authored and maintained by the community. They aren't official and we don't vouch for them but you may be interested to have a look:

- [`db-cookie-store`](https://github.com/JSBizon/db-cookie-store): SQL including SQLite-based databases
- [`file-cookie-store`](https://github.com/JSBizon/file-cookie-store): Netscape cookie file format on disk
- [`redis-cookie-store`](https://github.com/benkroeger/redis-cookie-store): Redis
- [`tough-cookie-filestore`](https://github.com/mitsuru/tough-cookie-filestore): JSON on disk
- [`tough-cookie-web-storage-store`](https://github.com/exponentjs/tough-cookie-web-storage-store): DOM localStorage and sessionStorage


# Serialization Format

**NOTE**: if you want to have custom `Cookie` properties serialized, add the property name to `Cookie.serializableProperties`.

```js
  {
    // The version of tough-cookie that serialized this jar.
    version: 'tough-cookie@1.x.y',

    // add the store type, to make humans happy:
    storeType: 'MemoryCookieStore',

    // CookieJar configuration:
    rejectPublicSuffixes: true,
    // ... future items go here

    // Gets filled from jar.store.getAllCookies():
    cookies: [
      {
        key: 'string',
        value: 'string',
        // ...
        /* other Cookie.serializableProperties go here */
      }
    ]
  }
```

# Copyright and License

(tl;dr: BSD-3-Clause with some MPL/2.0)

```text
 Copyright (c) 2015, Salesforce.com, Inc.
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

 3. Neither the name of Salesforce.com nor the names of its contributors may
 be used to endorse or promote products derived from this software without
 specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
```
