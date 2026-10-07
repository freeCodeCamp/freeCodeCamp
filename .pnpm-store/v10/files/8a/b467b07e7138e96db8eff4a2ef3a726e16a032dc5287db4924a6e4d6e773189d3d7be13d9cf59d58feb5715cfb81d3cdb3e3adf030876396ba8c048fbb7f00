# tough-cookie

[RFC 6265](https://tools.ietf.org/html/rfc6265) Cookies and CookieJar for Node.js

[![npm package](https://nodei.co/npm/tough-cookie.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tough-cookie/)

[![Build Status](https://travis-ci.org/salesforce/tough-cookie.svg?branch=master)](https://travis-ci.org/salesforce/tough-cookie)

## Synopsis

```javascript
var tough = require("tough-cookie");
var Cookie = tough.Cookie;
var cookie = Cookie.parse(header);
cookie.value = "somethingdifferent";
header = cookie.toString();
var cookiejar = new tough.CookieJar();

// Asynchronous!
var cookie = await cookiejar.setCookie(
  cookie,
  "https://currentdomain.example.com/path"
);
var cookies = await cookiejar.getCookies("https://example.com/otherpath");

// Or with callbacks!
cookiejar.setCookie(
  cookie,
  "https://currentdomain.example.com/path",
  function (err, cookie) {
    /* ... */
  }
);
cookiejar.getCookies("http://example.com/otherpath", function (err, cookies) {
  /* ... */
});
```

Why the name? NPM modules `cookie`, `cookies` and `cookiejar` were already taken.

## Installation

It's _so_ easy! Install with `npm` or your preferred package manager.

```sh
npm install tough-cookie
```

## Node.js Version Support

We follow the [node.js release schedule](https://github.com/nodejs/Release#release-schedule) and support all versions that are in Active LTS or Maintenance. We will always do a major release when dropping support for older versions of node, and we will do so in consultation with our community.

## API

### tough

The top-level exports from `require('tough-cookie')` can all be used as pure functions and don't need to be bound.

#### `parseDate(string)`

Parse a cookie date string into a `Date`. Parses according to [RFC 6265 Section 5.1.1](https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.1), not `Date.parse()`.

#### `formatDate(date)`

Format a `Date` into an [RFC 822](https://datatracker.ietf.org/doc/html/rfc822#section-5) string (the RFC 6265 recommended format).

#### `canonicalDomain(str)`

Transforms a domain name into a canonical domain name. The canonical domain name is a domain name that has been trimmed, lowercased, stripped of leading dot, and optionally punycode-encoded ([Section 5.1.2 of RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.2)). For the most part, this function is idempotent (calling the function with the output from a previous call returns the same output).

#### `domainMatch(str, domStr[, canonicalize=true])`

Answers "does this real domain match the domain in a cookie?". The `str` is the "current" domain name and the `domStr` is the "cookie" domain name. Matches according to [RFC 6265 Section 5.1.3](https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.3), but it helps to think of it as a "suffix match".

The `canonicalize` parameter toggles whether the domain parameters get normalized with `canonicalDomain` or not.

#### `defaultPath(path)`

Given a current request/response path, gives the path appropriate for storing in a cookie. This is basically the "directory" of a "file" in the path, but is specified by [Section 5.1.4 of the RFC](https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4).

The `path` parameter MUST be _only_ the pathname part of a URI (excluding the hostname, query, fragment, and so on). This is the `.pathname` property of node's `uri.parse()` output.

#### `pathMatch(reqPath, cookiePath)`

Answers "does the request-path path-match a given cookie-path?" as per [RFC 6265 Section 5.1.4](https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.4). Returns a boolean.

This is essentially a prefix-match where `cookiePath` is a prefix of `reqPath`.

#### `parse(cookieString[, options])`

Alias for [`Cookie.parse(cookieString[, options])`](#cookieparsecookiestring-options).

#### `fromJSON(string)`

Alias for [`Cookie.fromJSON(string)`](#cookiefromjsonstrorobj).

#### `getPublicSuffix(hostname)`

Returns the public suffix of this hostname. The public suffix is the shortest domain name upon which a cookie can be set. Returns `null` if the hostname cannot have cookies set for it.

For example: `www.example.com` and `www.subdomain.example.com` both have public suffix `example.com`.

For further information, see the [Public Suffix List](http://publicsuffix.org/). This module derives its list from that site. This call is a wrapper around [`psl`](https://www.npmjs.com/package/psl)'s [`get` method](https://www.npmjs.com/package/psl##pslgetdomain).

#### `cookieCompare(a, b)`

For use with `.sort()`, sorts a list of cookies into the recommended order given in step 2 of ([RFC 6265 Section 5.4](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4)). The sort algorithm is, in order of precedence:

- Longest `.path`
- oldest `.creation` (which has a 1-ms precision, same as `Date`)
- lowest `.creationIndex` (to get beyond the 1-ms precision)

```javascript
var cookies = [
  /* unsorted array of Cookie objects */
];
cookies = cookies.sort(cookieCompare);
```

> **Note**: Since the JavaScript `Date` is limited to a 1-ms precision, cookies within the same millisecond are entirely possible. This is especially true when using the `now` option to `.setCookie()`. The `.creationIndex` property is a per-process global counter, assigned during construction with `new Cookie()`, which preserves the spirit of the RFC sorting: older cookies go first. This works great for `MemoryCookieStore` since `Set-Cookie` headers are parsed in order, but is not so great for distributed systems. Sophisticated `Store`s may wish to set this to some other _logical clock_ so that if cookies A and B are created in the same millisecond, but cookie A is created before cookie B, then `A.creationIndex < B.creationIndex`. If you want to alter the global counter, which you probably _shouldn't_ do, it's stored in `Cookie.cookiesCreated`.

#### `permuteDomain(domain)`

Generates a list of all possible domains that `domainMatch()` the parameter. Can be handy for implementing cookie stores.

#### `permutePath(path)`

Generates a list of all possible paths that `pathMatch()` the parameter. Can be handy for implementing cookie stores.

### Cookie

Exported via `tough.Cookie`.

#### `Cookie.parse(cookieString[, options])`

Parses a single Cookie or Set-Cookie HTTP header into a `Cookie` object. Returns `undefined` if the string can't be parsed.

The options parameter is not required and currently has only one property:

- _loose_ - boolean - if `true` enable parsing of keyless cookies like `=abc` and `=`, which are not RFC-compliant.

If options is not an object it is ignored, which means it can be used with [`Array#map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

To process the Set-Cookie header(s) on a node HTTP/HTTPS response:

```javascript
if (Array.isArray(res.headers["set-cookie"]))
  cookies = res.headers["set-cookie"].map(Cookie.parse);
else cookies = [Cookie.parse(res.headers["set-cookie"])];
```

_Note:_ In version 2.3.3, tough-cookie limited the number of spaces before the `=` to 256 characters. This limitation was removed in version 2.3.4.
For more details, see [issue #92](https://github.com/salesforce/tough-cookie/issues/92).

#### Properties

Cookie object properties:

- _key_ - string - the name or key of the cookie (default `""`)
- _value_ - string - the value of the cookie (default `""`)
- _expires_ - `Date` - if set, the `Expires=` attribute of the cookie (defaults to the string `"Infinity"`). See `setExpires()`
- _maxAge_ - seconds - if set, the `Max-Age=` attribute _in seconds_ of the cookie. Can also be set to strings `"Infinity"` and `"-Infinity"` for non-expiry and immediate-expiry, respectively. See `setMaxAge()`
- _domain_ - string - the `Domain=` attribute of the cookie
- _path_ - string - the `Path=` of the cookie
- _secure_ - boolean - the `Secure` cookie flag
- _httpOnly_ - boolean - the `HttpOnly` cookie flag
- _sameSite_ - string - the `SameSite` cookie attribute (from [RFC 6265bis](#rfc-6265bis)); must be one of `none`, `lax`, or `strict`
- _extensions_ - `Array` - any unrecognized cookie attributes as strings (even if equal-signs inside)
- _creation_ - `Date` - when this cookie was constructed
- _creationIndex_ - number - set at construction, used to provide greater sort precision (see `cookieCompare(a,b)` for a full explanation)

After a cookie has been passed through `CookieJar.setCookie()` it has the following additional attributes:

- _hostOnly_ - boolean - is this a host-only cookie (that is, no Domain field was set, but was instead implied).
- _pathIsDefault_ - boolean - if true, there was no Path field on the cookie and `defaultPath()` was used to derive one.
- _creation_ - `Date` - **modified** from construction to when the cookie was added to the jar.
- _lastAccessed_ - `Date` - last time the cookie got accessed. Affects cookie cleaning after it is implemented. Using `cookiejar.getCookies(...)` updates this attribute.

#### `new Cookie([properties])`

Receives an options object that can contain any of the above Cookie properties. Uses the default for unspecified properties.

#### `.toString()`

Encodes to a Set-Cookie header value. The Expires cookie field is set using `formatDate()`, but is omitted entirely if `.expires` is `Infinity`.

#### `.cookieString()`

Encodes to a Cookie header value (specifically, the `.key` and `.value` properties joined with `"="`).

#### `.setExpires(string)`

Sets the expiry based on a date-string passed through `parseDate()`. If parseDate returns `null` (that is, can't parse this date string), `.expires` is set to `"Infinity"` (a string).

#### `.setMaxAge(number)`

Sets the maxAge in seconds. Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it correctly serializes to JSON.

#### `.expiryDate([now=Date.now()])`

`expiryTime()` computes the absolute unix-epoch milliseconds that this cookie expires. `expiryDate()` works similarly, except it returns a `Date` object. Note that in both cases the `now` parameter should be milliseconds.

Max-Age takes precedence over Expires (as per the RFC). The `.creation` attribute -- or, by default, the `now` parameter -- is used to offset the `.maxAge` attribute.

If Expires (`.expires`) is set, that's returned.

Otherwise, `expiryTime()` returns `Infinity` and `expiryDate()` returns a `Date` object for "Tue, 19 Jan 2038 03:14:07 GMT" (latest date that can be expressed by a 32-bit `time_t`; the common limit for most user-agents).

#### `.TTL([now=Date.now()])`

Computes the TTL relative to `now` (milliseconds). The same precedence rules as for `expiryTime`/`expiryDate` apply.

`Infinity` is returned for cookies without an explicit expiry and `0` is returned if the cookie is expired. Otherwise a time-to-live in milliseconds is returned.

#### `.canonicalizedDomain()`

#### `.cdomain()`

Returns the canonicalized `.domain` field. This is lower-cased and punycode ([RFC 3490](https://datatracker.ietf.org/doc/html/rfc3490)) encoded if the domain has any non-ASCII characters.

#### `.toJSON()`

For convenience in using `JSON.serialize(cookie)`. Returns a plain-old `Object` that can be JSON-serialized.

Any `Date` properties (such as `.expires`, `.creation`, and `.lastAccessed`) are exported in ISO format (`.toISOString()`).

> **NOTE**: Custom `Cookie` properties are discarded. In tough-cookie 1.x, since there was no `.toJSON` method explicitly defined, all enumerable properties were captured. If you want a property to be serialized, add the property name to the `Cookie.serializableProperties` Array.

#### `Cookie.fromJSON(strOrObj)`

Does the reverse of `cookie.toJSON()`. If passed a string, will `JSON.parse()` that first.

Any `Date` properties (such as `.expires`, `.creation`, and `.lastAccessed`) are parsed via [`Date.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse), not tough-cookie's `parseDate`, since ISO timestamps are being handled at this layer.

Returns `null` upon a JSON parsing error.

#### `.clone()`

Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.

#### `.validate()`

Status: _IN PROGRESS_. Works for a few things, but is by no means comprehensive.

Validates cookie attributes for semantic correctness. Useful for "lint" checking any Set-Cookie headers you generate. For now, it returns a boolean, but eventually could return a reason string. Future-proof with this construct:

```javascript
if (cookie.validate() === true) {
  // it's tasty
} else {
  // yuck!
}
```

### CookieJar

Exported via `tough.CookieJar`.

#### `CookieJar([store][, options])`

Simply use `new CookieJar()`. If a custom store is not passed to the constructor, a [`MemoryCookieStore`](#memorycookiestore) is created and used.

The `options` object can be omitted and can have the following properties:

- _rejectPublicSuffixes_ - boolean - default `true` - reject cookies with domains like "com" and "co.uk"
- _looseMode_ - boolean - default `false` - accept malformed cookies like `bar` and `=bar`, which have an implied empty name.
- _prefixSecurity_ - string - default `silent` - set to `'unsafe-disabled'`, `'silent'`, or `'strict'`. See [Cookie Prefixes](#cookie-prefixes) below.
- _allowSpecialUseDomain_ - boolean - default `true` - accepts special-use domain suffixes, such as `local`. Useful for testing purposes.
  This is not in the standard, but is used sometimes on the web and is accepted by most browsers.

#### `.setCookie(cookieOrString, currentUrl[, options][, callback(err, cookie)])`

Attempt to set the cookie in the cookie jar. The cookie has updated `.creation`, `.lastAccessed` and `.hostOnly` properties. And returns a promise if a callback is not provided.

The `options` object can be omitted and can have the following properties:

- _http_ - boolean - default `true` - indicates if this is an HTTP or non-HTTP API. Affects `HttpOnly` cookies.
- _secure_ - boolean - autodetect from URL - indicates if this is a "Secure" API. If the currentUrl starts with `https:` or `wss:` this defaults to `true`, otherwise `false`.
- _now_ - Date - default `new Date()` - what to use for the creation or access time of cookies.
- _ignoreError_ - boolean - default `false` - silently ignore things like parse errors and invalid domains. `Store` errors aren't ignored by this option.
- _sameSiteContext_ - string - default unset - set to `'none'`, `'lax'`, or `'strict'` See [SameSite Cookies](#samesite-cookies) below.

As per the RFC, the `.hostOnly` property is set if there was no "Domain=" parameter in the cookie string (or `.domain` was null on the Cookie object). The `.domain` property is set to the fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an exact hostname match (not a `domainMatch` as per usual).

#### `.setCookieSync(cookieOrString, currentUrl[, options])`

Synchronous version of [`setCookie`](#setcookiecookieorstring-currenturl-options-callbackerr-cookie); only works with synchronous stores (that is, the default `MemoryCookieStore`).

#### `.getCookies(currentUrl[, options][, callback(err, cookies)])`

Retrieve the list of cookies that can be sent in a Cookie header for the current URL. Returns a promise if a callback is not provided.

Returns an array of `Cookie` objects, sorted by default using [`cookieCompare`](#cookiecomparea-b).

If an error is encountered it's passed as `err` to the callback, otherwise an array of `Cookie` objects is passed. The array is sorted with `cookieCompare()` unless the `{sort:false}` option is given.

The `options` object can be omitted and can have the following properties:

- _http_ - boolean - default `true` - indicates if this is an HTTP or non-HTTP API. Affects `HttpOnly` cookies.
- _secure_ - boolean - autodetect from URL - indicates if this is a "Secure" API. If the currentUrl starts with `https:` or `wss:` then this is defaulted to `true`, otherwise `false`.
- _now_ - Date - default `new Date()` - what to use for the creation or access time of cookies
- _expire_ - boolean - default `true` - perform expiry-time checking of cookies and asynchronously remove expired cookies from the store. Using `false` returns expired cookies and does **not** remove them from the store (which is potentially useful for replaying Set-Cookie headers).
- _allPaths_ - boolean - default `false` - if `true`, do not scope cookies by path. The default uses RFC-compliant path scoping. **Note**: may not be supported by the underlying store (the default `MemoryCookieStore` supports it).
- _sameSiteContext_ - string - default unset - Set this to `'none'`, `'lax'`, or `'strict'` to enforce SameSite cookies upon retrieval. See [SameSite Cookies](#samesite-cookies) below.
- _sort_ - boolean - whether to sort the list of cookies.

The `.lastAccessed` property of the returned cookies will have been updated.

#### `.getCookiesSync(currentUrl, [{options}])`

Synchronous version of [`getCookies`](#getcookiescurrenturl-options-callbackerr-cookies); only works with synchronous stores (for example, the default `MemoryCookieStore`).

#### `.getCookieString(...)`

Accepts the same options as [`.getCookies()`](#getcookiescurrenturl-options-callbackerr-cookies) but returns a string suitable for a Cookie header rather than an Array.

#### `.getCookieStringSync(...)`

Synchronous version of [`getCookieString`](#getcookiestring); only works with synchronous stores (for example, the default `MemoryCookieStore`).

#### `.getSetCookieStrings(...)`

Returns an array of strings suitable for **Set-Cookie** headers. Accepts the same options as [`.getCookies()`](#getcookiescurrenturl-options-callbackerr-cookies). Simply maps the cookie array via `.toString()`.

#### `.getSetCookieStringsSync(...)`

Synchronous version of [`getSetCookieStrings`](#getsetcookiestrings); only works with synchronous stores (for example, the default `MemoryCookieStore`).

#### `.serialize([callback(err, serializedObject)])`

Returns a promise if a callback is not provided.

Serialize the Jar if the underlying store supports `.getAllCookies`.

> **NOTE**: Custom `Cookie` properties are discarded. If you want a property to be serialized, add the property name to the `Cookie.serializableProperties` Array.

See [Serialization Format](#serialization-format).

#### `.serializeSync()`

Synchronous version of [`serialize`](#serializecallbackerr-serializedobject); only works with synchronous stores (for example, the default `MemoryCookieStore`).

#### `.toJSON()`

Alias of [`.serializeSync()`](#serializesync) for the convenience of `JSON.stringify(cookiejar)`.

#### `CookieJar.deserialize(serialized[, store][, callback(err, object)])`

A new Jar is created and the serialized Cookies are added to the underlying store. Each `Cookie` is added via `store.putCookie` in the order in which they appear in the serialization. A promise is returned if a callback is not provided.

The `store` argument is optional, but should be an instance of `Store`. By default, a new instance of `MemoryCookieStore` is created.

As a convenience, if `serialized` is a string, it is passed through `JSON.parse` first.

#### `CookieJar.deserializeSync(serialized[, store])`

Sync version of [`.deserialize`](#cookiejardeserializeserialized-store-callbackerr-object); only works with synchronous stores (for example, the default `MemoryCookieStore`).

#### `CookieJar.fromJSON(string)`

Alias of [`.deserializeSync`](#cookiejardeserializesyncserialized-store) to provide consistency with [`Cookie.fromJSON()`](#cookiefromjsonstrorobj).

#### `.clone([store][, callback(err, cloned))`

Produces a deep clone of this jar. Modifications to the original do not affect the clone, and vice versa. Returns a promise if a callback is not provided.

The `store` argument is optional, but should be an instance of `Store`. By default, a new instance of `MemoryCookieStore` is created. Transferring between store types is supported so long as the source implements `.getAllCookies()` and the destination implements `.putCookie()`.

#### `.cloneSync([store])`

Synchronous version of [`.clone`](#clonestore-callbackerr-cloned), returning a new `CookieJar` instance.

The `store` argument is optional, but must be a _synchronous_ `Store` instance if specified. If not passed, a new instance of `MemoryCookieStore` is used.

The _source_ and _destination_ must both be synchronous `Store`s. If one or both stores are asynchronous, use `.clone` instead. Recall that `MemoryCookieStore` supports both synchronous and asynchronous API calls.

#### `.removeAllCookies([callback(err)])`

Removes all cookies from the jar. Returns a promise if a callback is not provided.

This is a new backwards-compatible feature of `tough-cookie` version 2.5, so not all Stores will implement it efficiently. For Stores that do not implement `removeAllCookies`, the fallback is to call `removeCookie` after `getAllCookies`. If `getAllCookies` fails or isn't implemented in the Store, that error is returned. If one or more of the `removeCookie` calls fail, only the first error is returned.

#### `.removeAllCookiesSync()`

Sync version of [`.removeAllCookies()`](#removeallcookiescallbackerr); only works with synchronous stores (for example, the default `MemoryCookieStore`).

### Store

Base class for CookieJar stores. Available as `tough.Store`.

### Store API

The storage model for each `CookieJar` instance can be replaced with a custom implementation. The default is `MemoryCookieStore` which can be found in [`lib/memstore.js`](https://github.com/salesforce/tough-cookie/blob/master/lib/memstore.js). The API uses continuation-passing-style to allow for asynchronous stores.

Stores should inherit from the base `Store` class, which is available as a top-level export.

Stores are asynchronous by default, but if `store.synchronous` is set to `true`, then the `*Sync` methods of the containing `CookieJar` can be used.

All `domain` parameters are normalized before calling.

The Cookie store must have all of the following methods. Note that asynchronous implementations **must** support callback parameters.

#### `store.findCookie(domain, path, key, callback(err, cookie))`

Retrieve a cookie with the given domain, path, and key (name). The RFC maintains that exactly one of these cookies should exist in a store. If the store is using versioning, this means that the latest or newest such cookie should be returned.

Callback takes an error and the resulting `Cookie` object. If no cookie is found then `null` MUST be passed instead (that is, not an error).

#### `store.findCookies(domain, path, allowSpecialUseDomain, callback(err, cookies))`

Locates cookies matching the given domain and path. This is most often called in the context of [`cookiejar.getCookies()`](#getcookiescurrenturl-options-callbackerr-cookies).

If no cookies are found, the callback MUST be passed an empty array.

The resulting list is checked for applicability to the current request according to the RFC (domain-match, path-match, http-only-flag, secure-flag, expiry, and so on), so it's OK to use an optimistic search algorithm when implementing this method. However, the search algorithm used SHOULD try to find cookies that `domainMatch()` the domain and `pathMatch()` the path in order to limit the amount of checking that needs to be done.

As of version 0.9.12, the `allPaths` option to `cookiejar.getCookies()` above causes the path here to be `null`. If the path is `null`, path-matching MUST NOT be performed (that is, domain-matching only).

#### `store.putCookie(cookie, callback(err))`

Adds a new cookie to the store. The implementation SHOULD replace any existing cookie with the same `.domain`, `.path`, and `.key` properties. Depending on the nature of the implementation, it's possible that between the call to `fetchCookie` and `putCookie` that a duplicate `putCookie` can occur.

The `cookie` object MUST NOT be modified; as the caller has already updated the `.creation` and `.lastAccessed` properties.

Pass an error if the cookie cannot be stored.

#### `store.updateCookie(oldCookie, newCookie, callback(err))`

Update an existing cookie. The implementation MUST update the `.value` for a cookie with the same `domain`, `.path`, and `.key`. The implementation SHOULD check that the old value in the store is equivalent to `oldCookie` - how the conflict is resolved is up to the store.

The `.lastAccessed` property is always different between the two objects (to the precision possible via JavaScript's clock). Both `.creation` and `.creationIndex` are guaranteed to be the same. Stores MAY ignore or defer the `.lastAccessed` change at the cost of affecting how cookies are selected for automatic deletion (for example, least-recently-used, which is up to the store to implement).

Stores may wish to optimize changing the `.value` of the cookie in the store versus storing a new cookie. If the implementation doesn't define this method, a stub that calls [`putCookie`](#storeputcookiecookie-callbackerr) is added to the store object.

The `newCookie` and `oldCookie` objects MUST NOT be modified.

Pass an error if the newCookie cannot be stored.

#### `store.removeCookie(domain, path, key, callback(err))`

Remove a cookie from the store (see notes on [`findCookie`](#storefindcookiedomain-path-key-callbackerr-cookie) about the uniqueness constraint).

The implementation MUST NOT pass an error if the cookie doesn't exist, and only pass an error due to the failure to remove an existing cookie.

#### `store.removeCookies(domain, path, callback(err))`

Removes matching cookies from the store. The `path` parameter is optional and if missing, means all paths in a domain should be removed.

Pass an error ONLY if removing any existing cookies failed.

#### `store.removeAllCookies(callback(err))`

_Optional_. Removes all cookies from the store.

Pass an error if one or more cookies can't be removed.

#### `store.getAllCookies(callback(err, cookies))`

_Optional_. Produces an `Array` of all cookies during [`jar.serialize()`](#serializecallbackerr-serializedobject). The items in the array can be true `Cookie` objects or generic `Object`s with the [Serialization Format](#serialization-format) data structure.

Cookies SHOULD be returned in creation order to preserve sorting via [`compareCookie()`](#cookiecomparea-b). For reference, `MemoryCookieStore` sorts by `.creationIndex` since it uses true `Cookie` objects internally. If you don't return the cookies in creation order, they'll still be sorted by creation time, but this only has a precision of 1-ms. See `cookieCompare` for more detail.

Pass an error if retrieval fails.

**Note**: Not all Stores can implement this due to technical limitations, so it is optional.

### MemoryCookieStore

Inherits from `Store`.

A just-in-memory CookieJar synchronous store implementation, used by default. Despite being a synchronous implementation, it's usable with both the synchronous and asynchronous forms of the `CookieJar` API. Supports serialization, `getAllCookies`, and `removeAllCookies`.

### Community Cookie Stores

These are some Store implementations authored and maintained by the community. They aren't official and we don't vouch for them but you may be interested to have a look:

- [`db-cookie-store`](https://github.com/JSBizon/db-cookie-store): SQL including SQLite-based databases
- [`file-cookie-store`](https://github.com/JSBizon/file-cookie-store): Netscape cookie file format on disk
- [`redis-cookie-store`](https://github.com/benkroeger/redis-cookie-store): Redis
- [`tough-cookie-filestore`](https://github.com/mitsuru/tough-cookie-filestore): JSON on disk
- [`tough-cookie-web-storage-store`](https://github.com/exponentjs/tough-cookie-web-storage-store): DOM localStorage and sessionStorage

## Serialization Format

**NOTE**: If you want to have custom `Cookie` properties serialized, add the property name to `Cookie.serializableProperties`.

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

## RFC 6265bis

Support for RFC 6265bis revision 02 is being developed. Since this is a bit of an omnibus revision to the RFC 6252, support is broken up into the functional areas.

### Leave Secure Cookies Alone

Not yet supported.

This change makes it so that if a cookie is sent from the server to the client with a `Secure` attribute, the channel must also be secure or the cookie is ignored.

### SameSite Cookies

Supported.

This change makes it possible for servers, and supporting clients, to mitigate certain types of CSRF attacks by disallowing `SameSite` cookies from being sent cross-origin.

On the Cookie object itself, you can get or set the `.sameSite` attribute, which is serialized into the `SameSite=` cookie attribute. When unset or `undefined`, no `SameSite=` attribute is serialized. The valid values of this attribute are `'none'`, `'lax'`, or `'strict'`. Other values are serialized as-is.

When parsing cookies with a `SameSite` cookie attribute, values other than `'lax'` or `'strict'` are parsed as `'none'`. For example, `SomeCookie=SomeValue; SameSite=garbage` parses so that `cookie.sameSite === 'none'`.

In order to support SameSite cookies, you must provide a `sameSiteContext` option to _both_ `setCookie` and `getCookies`. Valid values for this option are just like for the Cookie object, but have particular meanings:

1. `'strict'` mode - If the request is on the same "site for cookies" (see the RFC draft for more information), pass this option to add a layer of defense against CSRF.
2. `'lax'` mode - If the request is from another site, _but_ is directly because of navigation by the user, such as, `<link type=prefetch>` or `<a href="...">`, pass `sameSiteContext: 'lax'`.
3. `'none'` - Otherwise, pass `sameSiteContext: 'none'` (this indicates a cross-origin request).
4. unset/`undefined` - SameSite **is not** be enforced! This can be a valid use-case for when CSRF isn't in the threat model of the system being built.

It is highly recommended that you read RFC 6265bis for fine details on SameSite cookies. In particular [Section 8.8](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-02##section-8.8) discusses security considerations and defense in depth.

### Cookie Prefixes

Supported.

Cookie prefixes are a way to indicate that a given cookie was set with a set of attributes simply by inspecting the first few characters of the cookie's name.

Cookie prefixes are defined in [Section 4.1.3 of 6265bis](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03##section-4.1.3).

Two prefixes are defined:

1. `"__Secure-" Prefix`: If a cookie's name begins with a case-sensitive match for the string "\_\_Secure-", then the cookie was set with a "Secure" attribute.
2. `"__Host-" Prefix`: If a cookie's name begins with a case-sensitive match for the string "\_\_Host-", then the cookie was set with a "Secure" attribute, a "Path" attribute with a value of "/", and no "Domain" attribute.

If `prefixSecurity` is enabled for `CookieJar`, then cookies that match the prefixes defined above but do not obey the attribute restrictions are not added.

You can define this functionality by passing in the `prefixSecurity` option to `CookieJar`. It can be one of 3 values:

1. `silent`: Enable cookie prefix checking but silently fail to add the cookie if conditions are not met. Default.
2. `strict`: Enable cookie prefix checking and error out if conditions are not met.
3. `unsafe-disabled`: Disable cookie prefix checking.

Note that if `ignoreError` is passed in as `true` then the error is silent regardless of the `prefixSecurity` option (assuming it's enabled).

## Copyright and License

BSD-3-Clause:

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
