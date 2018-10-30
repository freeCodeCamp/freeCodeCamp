4.16.4 / 2018-10-10
===================

  * Fix issue where `"Request aborted"` may be logged in `res.sendfile`
  * Fix JSDoc for `Router` constructor
  * deps: body-parser@1.18.3
    - Fix deprecation warnings on Node.js 10+
    - Fix stack trace for strict json parse error
    - deps: depd@~1.1.2
    - deps: http-errors@~1.6.3
    - deps: iconv-lite@0.4.23
    - deps: qs@6.5.2
    - deps: raw-body@2.3.3
    - deps: type-is@~1.6.16
  * deps: proxy-addr@~2.0.4
    - deps: ipaddr.js@1.8.0
  * deps: qs@6.5.2
  * deps: safe-buffer@5.1.2

4.16.3 / 2018-03-12
===================

  * deps: accepts@~1.3.5
    - deps: mime-types@~2.1.18
  * deps: depd@~1.1.2
    - perf: remove argument reassignment
  * deps: encodeurl@~1.0.2
    - Fix encoding `%` as last character
  * deps: finalhandler@1.1.1
    - Fix 404 output for bad / missing pathnames
    - deps: encodeurl@~1.0.2
    - deps: statuses@~1.4.0
  * deps: proxy-addr@~2.0.3
    - deps: ipaddr.js@1.6.0
  * deps: send@0.16.2
    - Fix incorrect end tag in default error & redirects
    - deps: depd@~1.1.2
    - deps: encodeurl@~1.0.2
    - deps: statuses@~1.4.0
  * deps: serve-static@1.13.2
    - Fix incorrect end tag in redirects
    - deps: encodeurl@~1.0.2
    - deps: send@0.16.2
  * deps: statuses@~1.4.0
  * deps: type-is@~1.6.16
    - deps: mime-types@~2.1.18

4.16.2 / 2017-10-09
===================

  * Fix `TypeError` in `res.send` when given `Buffer` and `ETag` header set
  * perf: skip parsing of entire `X-Forwarded-Proto` header

4.16.1 / 2017-09-29
===================

  * deps: send@0.16.1
  * deps: serve-static@1.13.1
    - Fix regression when `root` is incorrectly set to a file
    - deps: send@0.16.1

4.16.0 / 2017-09-28
===================

  * Add `"json escape"` setting for `res.json` and `res.jsonp`
  * Add `express.json` and `express.urlencoded` to parse bodies
  * Add `options` argument to `res.download`
  * Improve error message when autoloading invalid view engine
  * Improve error messages when non-function provided as middleware
  * Skip `Buffer` encoding when not generating ETag for small response
  * Use `safe-buffer` for improved Buffer API
  * deps: accepts@~1.3.4
    - deps: mime-types@~2.1.16
  * deps: content-type@~1.0.4
    - perf: remove argument reassignment
    - perf: skip parameter parsing when no parameters
  * deps: etag@~1.8.1
    - perf: replace regular expression with substring
  * deps: finalhandler@1.1.0
    - Use `res.headersSent` when available
  * deps: parseurl@~1.3.2
    - perf: reduce overhead for full URLs
    - perf: unroll the "fast-path" `RegExp`
  * deps: proxy-addr@~2.0.2
    - Fix trimming leading / trailing OWS in `X-Forwarded-For`
    - deps: forwarded@~0.1.2
    - deps: ipaddr.js@1.5.2
    - perf: reduce overhead when no `X-Forwarded-For` header
  * deps: qs@6.5.1
    - Fix parsing & compacting very deep objects
  * deps: send@0.16.0
    - Add 70 new types for file extensions
    - Add `immutable` option
    - Fix missing `</html>` in default error & redirects
    - Set charset as "UTF-8" for .js and .json
    - Use instance methods on steam to check for listeners
    - deps: mime@1.4.1
    - perf: improve path validation speed
  * deps: serve-static@1.13.0
    - Add 70 new types for file extensions
    - Add `immutable` option
    - Set charset as "UTF-8" for .js and .json
    - deps: send@0.16.0
  * deps: setprototypeof@1.1.0
  * deps: utils-merge@1.0.1
  * deps: vary@~1.1.2
    - perf: improve header token parsing speed
  * perf: re-use options object when generating ETags
  * perf: remove dead `.charset` set in `res.jsonp`

4.15.5 / 2017-09-24
===================

  * deps: debug@2.6.9
  * deps: finalhandler@~1.0.6
    - deps: debug@2.6.9
    - deps: parseurl@~1.3.2
  * deps: fresh@0.5.2
    - Fix handling of modified headers with invalid dates
    - perf: improve ETag match loop
    - perf: improve `If-None-Match` token parsing
  * deps: send@0.15.6
    - Fix handling of modified headers with invalid dates
    - deps: debug@2.6.9
    - deps: etag@~1.8.1
    - deps: fresh@0.5.2
    - perf: improve `If-Match` token parsing
  * deps: serve-static@1.12.6
    - deps: parseurl@~1.3.2
    - deps: send@0.15.6
    - perf: improve slash collapsing

4.15.4 / 2017-08-06
===================

  * deps: debug@2.6.8
  * deps: depd@~1.1.1
    - Remove unnecessary `Buffer` loading
  * deps: finalhandler@~1.0.4
    - deps: debug@2.6.8
  * deps: proxy-addr@~1.1.5
    - Fix array argument being altered
    - deps: ipaddr.js@1.4.0
  * deps: qs@6.5.0
  * deps: send@0.15.4
    - deps: debug@2.6.8
    - deps: depd@~1.1.1
    - deps: http-errors@~1.6.2
  * deps: serve-static@1.12.4
    - deps: send@0.15.4

4.15.3 / 2017-05-16
===================

  * Fix error when `res.set` cannot add charset to `Content-Type`
  * deps: debug@2.6.7
    - Fix `DEBUG_MAX_ARRAY_LENGTH`
    - deps: ms@2.0.0
  * deps: finalhandler@~1.0.3
    - Fix missing `</html>` in HTML document
    - deps: debug@2.6.7
  * deps: proxy-addr@~1.1.4
    - deps: ipaddr.js@1.3.0
  * deps: send@0.15.3
    - deps: debug@2.6.7
    - deps: ms@2.0.0
  * deps: serve-static@1.12.3
    - deps: send@0.15.3
  * deps: type-is@~1.6.15
    - deps: mime-types@~2.1.15
  * deps: vary@~1.1.1
    - perf: hoist regular expression

4.15.2 / 2017-03-06
===================

  * deps: qs@6.4.0
    - Fix regression parsing keys starting with `[`

4.15.1 / 2017-03-05
===================

  * deps: send@0.15.1
    - Fix issue when `Date.parse` does not return `NaN` on invalid date
    - Fix strict violation in broken environments
  * deps: serve-static@1.12.1
    - Fix issue when `Date.parse` does not return `NaN` on invalid date
    - deps: send@0.15.1

4.15.0 / 2017-03-01
===================

  * Add debug message when loading view engine
  * Add `next("router")` to exit from router
  * Fix case where `router.use` skipped requests routes did not
  * Remove usage of `res._headers` private field
    - Improves compatibility with Node.js 8 nightly
  * Skip routing when `req.url` is not set
  * Use `%o` in path debug to tell types apart
  * Use `Object.create` to setup request & response prototypes
  * Use `setprototypeof` module to replace `__proto__` setting
  * Use `statuses` instead of `http` module for status messages
  * deps: debug@2.6.1
    - Allow colors in workers
    - Deprecated `DEBUG_FD` environment variable set to `3` or higher
    - Fix error when running under React Native
    - Use same color for same namespace
    - deps: ms@0.7.2
  * deps: etag@~1.8.0
    - Use SHA1 instead of MD5 for ETag hashing
    - Works with FIPS 140-2 OpenSSL configuration
  * deps: finalhandler@~1.0.0
    - Fix exception when `err` cannot be converted to a string
    - Fully URL-encode the pathname in the 404
    - Only include the pathname in the 404 message
    - Send complete HTML document
    - Set `Content-Security-Policy: default-src 'self'` header
    - deps: debug@2.6.1
  * deps: fresh@0.5.0
    - Fix false detection of `no-cache` request directive
    - Fix incorrect result when `If-None-Match` has both `*` and ETags
    - Fix weak `ETag` matching to match spec
    - perf: delay reading header values until needed
    - perf: enable strict mode
    - perf: hoist regular expressions
    - perf: remove duplicate conditional
    - perf: remove unnecessary boolean coercions
    - perf: skip checking modified time if ETag check failed
    - perf: skip parsing `If-None-Match` when no `ETag` header
    - perf: use `Date.parse` instead of `new Date`
  * deps: qs@6.3.1
    - Fix array parsing from skipping empty values
    - Fix compacting nested arrays
  * deps: send@0.15.0
    - Fix false detection of `no-cache` request directive
    - Fix incorrect result when `If-None-Match` has both `*` and ETags
    - Fix weak `ETag` matching to match spec
    - Remove usage of `res._headers` private field
    - Support `If-Match` and `If-Unmodified-Since` headers
    - Use `res.getHeaderNames()` when available
    - Use `res.headersSent` when available
    - deps: debug@2.6.1
    - deps: etag@~1.8.0
    - deps: fresh@0.5.0
    - deps: http-errors@~1.6.1
  * deps: serve-static@1.12.0
    - Fix false detection of `no-cache` request directive
    - Fix incorrect result when `If-None-Match` has both `*` and ETags
    - Fix weak `ETag` matching to match spec
    - Remove usage of `res._headers` private field
    - Send complete HTML document in redirect response
    - Set default CSP header in redirect response
    - Support `If-Match` and `If-Unmodified-Since` headers
    - Use `res.getHeaderNames()` when available
    - Use `res.headersSent` when available
    - deps: send@0.15.0
  * perf: add fast match path for `*` route
  * perf: improve `req.ips` performance

4.14.1 / 2017-01-28
===================

  * deps: content-disposition@0.5.2
  * deps: finalhandler@0.5.1
    - Fix exception when `err.headers` is not an object
    - deps: statuses@~1.3.1
    - perf: hoist regular expressions
    - perf: remove duplicate validation path
  * deps: proxy-addr@~1.1.3
    - deps: ipaddr.js@1.2.0
  * deps: send@0.14.2
    - deps: http-errors@~1.5.1
    - deps: ms@0.7.2
    - deps: statuses@~1.3.1
  * deps: serve-static@~1.11.2
    - deps: send@0.14.2
  * deps: type-is@~1.6.14
    - deps: mime-types@~2.1.13

4.14.0 / 2016-06-16
===================

  * Add `acceptRanges` option to `res.sendFile`/`res.sendfile`
  * Add `cacheControl` option to `res.sendFile`/`res.sendfile`
  * Add `options` argument to `req.range`
    - Includes the `combine` option
  * Encode URL in `res.location`/`res.redirect` if not already encoded
  * Fix some redirect handling in `res.sendFile`/`res.sendfile`
  * Fix Windows absolute path check using forward slashes
  * Improve error with invalid arguments to `req.get()`
  * Improve performance for `res.json`/`res.jsonp` in most cases
  * Improve `Range` header handling in `res.sendFile`/`res.sendfile`
  * deps: accepts@~1.3.3
    - Fix including type extensions in parameters in `Accept` parsing
    - Fix parsing `Accept` parameters with quoted equals
    - Fix parsing `Accept` parameters with quoted semicolons
    - Many performance improvments
    - deps: mime-types@~2.1.11
    - deps: negotiator@0.6.1
  * deps: content-type@~1.0.2
    - perf: enable strict mode
  * deps: cookie@0.3.1
    - Add `sameSite` option
    - Fix cookie `Max-Age` to never be a floating point number
    - Improve error message when `encode` is not a function
    - Improve error message when `expires` is not a `Date`
    - Throw better error for invalid argument to parse
    - Throw on invalid values provided to `serialize`
    - perf: enable strict mode
    - perf: hoist regular expression
    - perf: use for loop in parse
    - perf: use string concatination for serialization
  * deps: finalhandler@0.5.0
    - Change invalid or non-numeric status code to 500
    - Overwrite status message to match set status code
    - Prefer `err.statusCode` if `err.status` is invalid
    - Set response headers from `err.headers` object
    - Use `statuses` instead of `http` module for status messages
  * deps: proxy-addr@~1.1.2
    - Fix accepting various invalid netmasks
    - Fix IPv6-mapped IPv4 validation edge cases
    - IPv4 netmasks must be contingous
    - IPv6 addresses cannot be used as a netmask
    - deps: ipaddr.js@1.1.1
  * deps: qs@6.2.0
    - Add `decoder` option in `parse` function
  * deps: range-parser@~1.2.0
    - Add `combine` option to combine overlapping ranges
    - Fix incorrectly returning -1 when there is at least one valid range
    - perf: remove internal function
  * deps: send@0.14.1
    - Add `acceptRanges` option
    - Add `cacheControl` option
    - Attempt to combine multiple ranges into single range
    - Correctly inherit from `Stream` class
    - Fix `Content-Range` header in 416 responses when using `start`/`end` options
    - Fix `Content-Range` header missing from default 416 responses
    - Fix redirect error when `path` contains raw non-URL characters
    - Fix redirect when `path` starts with multiple forward slashes
    - Ignore non-byte `Range` headers
    - deps: http-errors@~1.5.0
    - deps: range-parser@~1.2.0
    - deps: statuses@~1.3.0
    - perf: remove argument reassignment
  * deps: serve-static@~1.11.1
    - Add `acceptRanges` option
    - Add `cacheControl` option
    - Attempt to combine multiple ranges into single range
    - Fix redirect error when `req.url` contains raw non-URL characters
    - Ignore non-byte `Range` headers
    - Use status code 301 for redirects
    - deps: send@0.14.1
  * deps: type-is@~1.6.13
    - Fix type error when given invalid type to match against
    - deps: mime-types@~2.1.11
  * deps: vary@~1.1.0
    - Only accept valid field names in the `field` argument
  * perf: use strict equality when possible

4.13.4 / 2016-01-21
===================

  * deps: content-disposition@0.5.1
    - perf: enable strict mode
  * deps: cookie@0.1.5
    - Throw on invalid values provided to `serialize`
  * deps: depd@~1.1.0
    - Support web browser loading
    - perf: enable strict mode
  * deps: escape-html@~1.0.3
    - perf: enable strict mode
    - perf: optimize string replacement
    - perf: use faster string coercion
  * deps: finalhandler@0.4.1
    - deps: escape-html@~1.0.3
  * deps: merge-descriptors@1.0.1
    - perf: enable strict mode
  * deps: methods@~1.1.2
    - perf: enable strict mode
  * deps: parseurl@~1.3.1
    - perf: enable strict mode
  * deps: proxy-addr@~1.0.10
    - deps: ipaddr.js@1.0.5
    - perf: enable strict mode
  * deps: range-parser@~1.0.3
    - perf: enable strict mode
  * deps: send@0.13.1
    - deps: depd@~1.1.0
    - deps: destroy@~1.0.4
    - deps: escape-html@~1.0.3
    - deps: range-parser@~1.0.3
  * deps: serve-static@~1.10.2
    - deps: escape-html@~1.0.3
    - deps: parseurl@~1.3.0
    - deps: send@0.13.1

4.13.3 / 2015-08-02
===================

  * Fix infinite loop condition using `mergeParams: true`
  * Fix inner numeric indices incorrectly altering parent `req.params`

4.13.2 / 2015-07-31
===================

  * deps: accepts@~1.2.12
    - deps: mime-types@~2.1.4
  * deps: array-flatten@1.1.1
    - perf: enable strict mode
  * deps: path-to-regexp@0.1.7
    - Fix regression with escaped round brackets and matching groups
  * deps: type-is@~1.6.6
    - deps: mime-types@~2.1.4

4.13.1 / 2015-07-05
===================

  * deps: accepts@~1.2.10
    - deps: mime-types@~2.1.2
  * deps: qs@4.0.0
    - Fix dropping parameters like `hasOwnProperty`
    - Fix various parsing edge cases
  * deps: type-is@~1.6.4
    - deps: mime-types@~2.1.2
    - perf: enable strict mode
    - perf: remove argument reassignment

4.13.0 / 2015-06-20
===================

  * Add settings to debug output
  * Fix `res.format` error when only `default` provided
  * Fix issue where `next('route')` in `app.param` would incorrectly skip values
  * Fix hiding platform issues with `decodeURIComponent`
    - Only `URIError`s are a 400
  * Fix using `*` before params in routes
  * Fix using capture groups before params in routes
  * Simplify `res.cookie` to call `res.append`
  * Use `array-flatten` module for flattening arrays
  * deps: accepts@~1.2.9
    - deps: mime-types@~2.1.1
    - perf: avoid argument reassignment & argument slice
    - perf: avoid negotiator recursive construction
    - perf: enable strict mode
    - perf: remove unnecessary bitwise operator
  * deps: cookie@0.1.3
    - perf: deduce the scope of try-catch deopt
    - perf: remove argument reassignments
  * deps: escape-html@1.0.2
  * deps: etag@~1.7.0
    - Always include entity length in ETags for hash length extensions
    - Generate non-Stats ETags using MD5 only (no longer CRC32)
    - Improve stat performance by removing hashing
    - Improve support for JXcore
    - Remove base64 padding in ETags to shorten
    - Support "fake" stats objects in environments without fs
    - Use MD5 instead of MD4 in weak ETags over 1KB
  * deps: finalhandler@0.4.0
    - Fix a false-positive when unpiping in Node.js 0.8
    - Support `statusCode` property on `Error` objects
    - Use `unpipe` module for unpiping requests
    - deps: escape-html@1.0.2
    - deps: on-finished@~2.3.0
    - perf: enable strict mode
    - perf: remove argument reassignment
  * deps: fresh@0.3.0
    - Add weak `ETag` matching support
  * deps: on-finished@~2.3.0
    - Add defined behavior for HTTP `CONNECT` requests
    - Add defined behavior for HTTP `Upgrade` requests
    - deps: ee-first@1.1.1
  * deps: path-to-regexp@0.1.6
  * deps: send@0.13.0
    - Allow Node.js HTTP server to set `Date` response header
    - Fix incorrectly removing `Content-Location` on 304 response
    - Improve the default redirect response headers
    - Send appropriate headers on default error response
    - Use `http-errors` for standard emitted errors
    - Use `statuses` instead of `http` module for status messages
    - deps: escape-html@1.0.2
    - deps: etag@~1.7.0
    - deps: fresh@0.3.0
    - deps: on-finished@~2.3.0
    - perf: enable strict mode
    - perf: remove unnecessary array allocations
  * deps: serve-static@~1.10.0
    - Add `fallthrough` option
    - Fix reading options from options prototype
    - Improve the default redirect response headers
    - Malformed URLs now `next()` instead of 400
    - deps: escape-html@1.0.2
    - deps: send@0.13.0
    - perf: enable strict mode
    - perf: remove argument reassignment
  * deps: type-is@~1.6.3
    - deps: mime-types@~2.1.1
    - perf: reduce try block size
    - perf: remove bitwise operations
  * perf: enable strict mode
  * perf: isolate `app.render` try block
  * perf: remove argument reassignments in application
  * perf: remove argument reassignments in request prototype
  * perf: remove argument reassignments in response prototype
  * perf: remove argument reassignments in routing
  * perf: remove argument reassignments in `View`
  * perf: skip attempting to decode zero length string
  * perf: use saved reference to `http.STATUS_CODES`

4.12.4 / 2015-05-17
===================

  * deps: accepts@~1.2.7
    - deps: mime-types@~2.0.11
    - deps: negotiator@0.5.3
  * deps: debug@~2.2.0
    - deps: ms@0.7.1
  * deps: depd@~1.0.1
  * deps: etag@~1.6.0
    - Improve support for JXcore
    - Support "fake" stats objects in environments without `fs`
  * deps: finalhandler@0.3.6
    - deps: debug@~2.2.0
    - deps: on-finished@~2.2.1
  * deps: on-finished@~2.2.1
    - Fix `isFinished(req)` when data buffered
  * deps: proxy-addr@~1.0.8
    - deps: ipaddr.js@1.0.1
  * deps: qs@2.4.2
   - Fix allowing parameters like `constructor`
  * deps: send@0.12.3
    - deps: debug@~2.2.0
    - deps: depd@~1.0.1
    - deps: etag@~1.6.0
    - deps: ms@0.7.1
    - deps: on-finished@~2.2.1
  * deps: serve-static@~1.9.3
    - deps: send@0.12.3
  * deps: type-is@~1.6.2
    - deps: mime-types@~2.0.11

4.12.3 / 2015-03-17
===================

  * deps: accepts@~1.2.5
    - deps: mime-types@~2.0.10
  * deps: debug@~2.1.3
    - Fix high intensity foreground color for bold
    - deps: ms@0.7.0
  * deps: finalhandler@0.3.4
    - deps: debug@~2.1.3
  * deps: proxy-addr@~1.0.7
    - deps: ipaddr.js@0.1.9
  * deps: qs@2.4.1
    - Fix error when parameter `hasOwnProperty` is present
  * deps: send@0.12.2
    - Throw errors early for invalid `extensions` or `index` options
    - deps: debug@~2.1.3
  * deps: serve-static@~1.9.2
    - deps: send@0.12.2
  * deps: type-is@~1.6.1
    - deps: mime-types@~2.0.10

4.12.2 / 2015-03-02
===================

  * Fix regression where `"Request aborted"` is logged using `res.sendFile`

4.12.1 / 2015-03-01
===================

  * Fix constructing application with non-configurable prototype properties
  * Fix `ECONNRESET` errors from `res.sendFile` usage
  * Fix `req.host` when using "trust proxy" hops count
  * Fix `req.protocol`/`req.secure` when using "trust proxy" hops count
  * Fix wrong `code` on aborted connections from `res.sendFile`
  * deps: merge-descriptors@1.0.0

4.12.0 / 2015-02-23
===================

  * Fix `"trust proxy"` setting to inherit when app is mounted
  * Generate `ETag`s for all request responses
    - No longer restricted to only responses for `GET` and `HEAD` requests
  * Use `content-type` to parse `Content-Type` headers
  * deps: accepts@~1.2.4
    - Fix preference sorting to be stable for long acceptable lists
    - deps: mime-types@~2.0.9
    - deps: negotiator@0.5.1
  * deps: cookie-signature@1.0.6
  * deps: send@0.12.1
    - Always read the stat size from the file
    - Fix mutating passed-in `options`
    - deps: mime@1.3.4
  * deps: serve-static@~1.9.1
    - deps: send@0.12.1
  * deps: type-is@~1.6.0
    - fix argument reassignment
    - fix false-positives in `hasBody` `Transfer-Encoding` check
    - support wildcard for both type and subtype (`*/*`)
    - deps: mime-types@~2.0.9

4.11.2 / 2015-02-01
===================

  * Fix `res.redirect` double-calling `res.end` for `HEAD` requests
  * deps: accepts@~1.2.3
    - deps: mime-types@~2.0.8
  * deps: proxy-addr@~1.0.6
    - deps: ipaddr.js@0.1.8
  * deps: type-is@~1.5.6
    - deps: mime-types@~2.0.8

4.11.1 / 2015-01-20
===================

  * deps: send@0.11.1
    - Fix root path disclosure
  * deps: serve-static@~1.8.1
    - Fix redirect loop in Node.js 0.11.14
    - Fix root path disclosure
    - deps: send@0.11.1

4.11.0 / 2015-01-13
===================

  * Add `res.append(field, val)` to append headers
  * Deprecate leading `:` in `name` for `app.param(name, fn)`
  * Deprecate `req.param()` -- use `req.params`, `req.body`, or `req.query` instead
  * Deprecate `app.param(fn)`
  * Fix `OPTIONS` responses to include the `HEAD` method properly
  * Fix `res.sendFile` not always detecting aborted connection
  * Match routes iteratively to prevent stack overflows
  * deps: accepts@~1.2.2
    - deps: mime-types@~2.0.7
    - deps: negotiator@0.5.0
  * deps: send@0.11.0
    - deps: debug@~2.1.1
    - deps: etag@~1.5.1
    - deps: ms@0.7.0
    - deps: on-finished@~2.2.0
  * deps: serve-static@~1.8.0
    - deps: send@0.11.0

4.10.8 / 2015-01-13
===================

  * Fix crash from error within `OPTIONS` response handler
  * deps: proxy-addr@~1.0.5
    - deps: ipaddr.js@0.1.6

4.10.7 / 2015-01-04
===================

  * Fix `Allow` header for `OPTIONS` to not contain duplicate methods
  * Fix incorrect "Request aborted" for `res.sendFile` when `HEAD` or 304
  * deps: debug@~2.1.1
  * deps: finalhandler@0.3.3
    - deps: debug@~2.1.1
    - deps: on-finished@~2.2.0
  * deps: methods@~1.1.1
  * deps: on-finished@~2.2.0
  * deps: serve-static@~1.7.2
    - Fix potential open redirect when mounted at root
  * deps: type-is@~1.5.5
    - deps: mime-types@~2.0.7

4.10.6 / 2014-12-12
===================

  * Fix exception in `req.fresh`/`req.stale` without response headers

4.10.5 / 2014-12-10
===================

  * Fix `res.send` double-calling `res.end` for `HEAD` requests
  * deps: accepts@~1.1.4
    - deps: mime-types@~2.0.4
  * deps: type-is@~1.5.4
    - deps: mime-types@~2.0.4

4.10.4 / 2014-11-24
===================

  * Fix `res.sendfile` logging standard write errors

4.10.3 / 2014-11-23
===================

  * Fix `res.sendFile` logging standard write errors
  * deps: etag@~1.5.1
  * deps: proxy-addr@~1.0.4
    - deps: ipaddr.js@0.1.5
  * deps: qs@2.3.3
    - Fix `arrayLimit` behavior

4.10.2 / 2014-11-09
===================

  * Correctly invoke async router callback asynchronously
  * deps: accepts@~1.1.3
    - deps: mime-types@~2.0.3
  * deps: type-is@~1.5.3
    - deps: mime-types@~2.0.3

4.10.1 / 2014-10-28
===================

  * Fix handling of URLs containing `://` in the path
  * deps: qs@2.3.2
    - Fix parsing of mixed objects and values

4.10.0 / 2014-10-23
===================

  * Add support for `app.set('views', array)`
    - Views are looked up in sequence in array of directories
  * Fix `res.send(status)` to mention `res.sendStatus(status)`
  * Fix handling of invalid empty URLs
  * Use `content-disposition` module for `res.attachment`/`res.download`
    - Sends standards-compliant `Content-Disposition` header
    - Full Unicode support
  * Use `path.resolve` in view lookup
  * deps: debug@~2.1.0
    - Implement `DEBUG_FD` env variable support
  * deps: depd@~1.0.0
  * deps: etag@~1.5.0
    - Improve string performance
    - Slightly improve speed for weak ETags over 1KB
  * deps: finalhandler@0.3.2
    - Terminate in progress response only on error
    - Use `on-finished` to determine request status
    - deps: debug@~2.1.0
    - deps: on-finished@~2.1.1
  * deps: on-finished@~2.1.1
    - Fix handling of pipelined requests
  * deps: qs@2.3.0
    - Fix parsing of mixed implicit and explicit arrays
  * deps: send@0.10.1
    - deps: debug@~2.1.0
    - deps: depd@~1.0.0
    - deps: etag@~1.5.0
    - deps: on-finished@~2.1.1
  * deps: serve-static@~1.7.1
    - deps: send@0.10.1

4.9.8 / 2014-10-17
==================

  * Fix `res.redirect` body when redirect status specified
  * deps: accepts@~1.1.2
    - Fix error when media type has invalid parameter
    - deps: negotiator@0.4.9

4.9.7 / 2014-10-10
==================

  * Fix using same param name in array of paths

4.9.6 / 2014-10-08
==================

  * deps: accepts@~1.1.1
    - deps: mime-types@~2.0.2
    - deps: negotiator@0.4.8
  * deps: serve-static@~1.6.4
    - Fix redirect loop when index file serving disabled
  * deps: type-is@~1.5.2
    - deps: mime-types@~2.0.2

4.9.5 / 2014-09-24
==================

  * deps: etag@~1.4.0
  * deps: proxy-addr@~1.0.3
    - Use `forwarded` npm module
  * deps: send@0.9.3
    - deps: etag@~1.4.0
  * deps: serve-static@~1.6.3
    - deps: send@0.9.3

4.9.4 / 2014-09-19
==================

  * deps: qs@2.2.4
    - Fix issue with object keys starting with numbers truncated

4.9.3 / 2014-09-18
==================

  * deps: proxy-addr@~1.0.2
    - Fix a global leak when multiple subnets are trusted
    - deps: ipaddr.js@0.1.3

4.9.2 / 2014-09-17
==================

  * Fix regression for empty string `path` in `app.use`
  * Fix `router.use` to accept array of middleware without path
  * Improve error message for bad `app.use` arguments

4.9.1 / 2014-09-16
==================

  * Fix `app.use` to accept array of middleware without path
  * deps: depd@0.4.5
  * deps: etag@~1.3.1
  * deps: send@0.9.2
    - deps: depd@0.4.5
    - deps: etag@~1.3.1
    - deps: range-parser@~1.0.2
  * deps: serve-static@~1.6.2
    - deps: send@0.9.2

4.9.0 / 2014-09-08
==================

  * Add `res.sendStatus`
  * Invoke callback for sendfile when client aborts
    - Applies to `res.sendFile`, `res.sendfile`, and `res.download`
    - `err` will be populated with request aborted error
  * Support IP address host in `req.subdomains`
  * Use `etag` to generate `ETag` headers
  * deps: accepts@~1.1.0
    - update `mime-types`
  * deps: cookie-signature@1.0.5
  * deps: debug@~2.0.0
  * deps: finalhandler@0.2.0
    - Set `X-Content-Type-Options: nosniff` header
    - deps: debug@~2.0.0
  * deps: fresh@0.2.4
  * deps: media-typer@0.3.0
    - Throw error when parameter format invalid on parse
  * deps: qs@2.2.3
    - Fix issue where first empty value in array is discarded
  * deps: range-parser@~1.0.2
  * deps: send@0.9.1
    - Add `lastModified` option
    - Use `etag` to generate `ETag` header
    - deps: debug@~2.0.0
    - deps: fresh@0.2.4
  * deps: serve-static@~1.6.1
    - Add `lastModified` option
    - deps: send@0.9.1
  * deps: type-is@~1.5.1
    - fix `hasbody` to be true for `content-length: 0`
    - deps: media-typer@0.3.0
    - deps: mime-types@~2.0.1
  * deps: vary@~1.0.0
    - Accept valid `Vary` header string as `field`

4.8.8 / 2014-09-04
==================

  * deps: send@0.8.5
    - Fix a path traversal issue when using `root`
    - Fix malicious path detection for empty string path
  * deps: serve-static@~1.5.4
    - deps: send@0.8.5

4.8.7 / 2014-08-29
==================

  * deps: qs@2.2.2
    - Remove unnecessary cloning

4.8.6 / 2014-08-27
==================

  * deps: qs@2.2.0
    - Array parsing fix
    - Performance improvements

4.8.5 / 2014-08-18
==================

  * deps: send@0.8.3
    - deps: destroy@1.0.3
    - deps: on-finished@2.1.0
  * deps: serve-static@~1.5.3
    - deps: send@0.8.3

4.8.4 / 2014-08-14
==================

  * deps: qs@1.2.2
  * deps: send@0.8.2
    - Work around `fd` leak in Node.js 0.10 for `fs.ReadStream`
  * deps: serve-static@~1.5.2
    - deps: send@0.8.2

4.8.3 / 2014-08-10
==================

  * deps: parseurl@~1.3.0
  * deps: qs@1.2.1
  * deps: serve-static@~1.5.1
    - Fix parsing of weird `req.originalUrl` values
    - deps: parseurl@~1.3.0
    - deps: utils-merge@1.0.0

4.8.2 / 2014-08-07
==================

  * deps: qs@1.2.0
    - Fix parsing array of objects

4.8.1 / 2014-08-06
==================

  * fix incorrect deprecation warnings on `res.download`
  * deps: qs@1.1.0
    - Accept urlencoded square brackets
    - Accept empty values in implicit array notation

4.8.0 / 2014-08-05
==================

  * add `res.sendFile`
    - accepts a file system path instead of a URL
    - requires an absolute path or `root` option specified
  * deprecate `res.sendfile` -- use `res.sendFile` instead
  * support mounted app as any argument to `app.use()`
  * deps: qs@1.0.2
    - Complete rewrite
    - Limits array length to 20
    - Limits object depth to 5
    - Limits parameters to 1,000
  * deps: send@0.8.1
    - Add `extensions` option
  * deps: serve-static@~1.5.0
    - Add `extensions` option
    - deps: send@0.8.1

4.7.4 / 2014-08-04
==================

  * fix `res.sendfile` regression for serving directory index files
  * deps: send@0.7.4
    - Fix incorrect 403 on Windows and Node.js 0.11
    - Fix serving index files without root dir
  * deps: serve-static@~1.4.4
    - deps: send@0.7.4

4.7.3 / 2014-08-04
==================

  * deps: send@0.7.3
    - Fix incorrect 403 on Windows and Node.js 0.11
  * deps: serve-static@~1.4.3
    - Fix incorrect 403 on Windows and Node.js 0.11
    - deps: send@0.7.3

4.7.2 / 2014-07-27
==================

  * deps: depd@0.4.4
    - Work-around v8 generating empty stack traces
  * deps: send@0.7.2
    - deps: depd@0.4.4
  * deps: serve-static@~1.4.2

4.7.1 / 2014-07-26
==================

  * deps: depd@0.4.3
    - Fix exception when global `Error.stackTraceLimit` is too low
  * deps: send@0.7.1
    - deps: depd@0.4.3
  * deps: serve-static@~1.4.1

4.7.0 / 2014-07-25
==================

  * fix `req.protocol` for proxy-direct connections
  * configurable query parser with `app.set('query parser', parser)`
    - `app.set('query parser', 'extended')` parse with "qs" module
    - `app.set('query parser', 'simple')` parse with "querystring" core module
    - `app.set('query parser', false)` disable query string parsing
    - `app.set('query parser', true)` enable simple parsing
  * deprecate `res.json(status, obj)` -- use `res.status(status).json(obj)` instead
  * deprecate `res.jsonp(status, obj)` -- use `res.status(status).jsonp(obj)` instead
  * deprecate `res.send(status, body)` -- use `res.status(status).send(body)` instead
  * deps: debug@1.0.4
  * deps: depd@0.4.2
    - Add `TRACE_DEPRECATION` environment variable
    - Remove non-standard grey color from color output
    - Support `--no-deprecation` argument
    - Support `--trace-deprecation` argument
  * deps: finalhandler@0.1.0
    - Respond after request fully read
    - deps: debug@1.0.4
  * deps: parseurl@~1.2.0
    - Cache URLs based on original value
    - Remove no-longer-needed URL mis-parse work-around
    - Simplify the "fast-path" `RegExp`
  * deps: send@0.7.0
    - Add `dotfiles` option
    - Cap `maxAge` value to 1 year
    - deps: debug@1.0.4
    - deps: depd@0.4.2
  * deps: serve-static@~1.4.0
    - deps: parseurl@~1.2.0
    - deps: send@0.7.0
  * perf: prevent multiple `Buffer` creation in `res.send`

4.6.1 / 2014-07-12
==================

  * fix `subapp.mountpath` regression for `app.use(subapp)`

4.6.0 / 2014-07-11
==================

  * accept multiple callbacks to `app.use()`
  * add explicit "Rosetta Flash JSONP abuse" protection
    - previous versions are not vulnerable; this is just explicit protection
  * catch errors in multiple `req.param(name, fn)` handlers
  * deprecate `res.redirect(url, status)` -- use `res.redirect(status, url)` instead
  * fix `res.send(status, num)` to send `num` as json (not error)
  * remove unnecessary escaping when `res.jsonp` returns JSON response
  * support non-string `path` in `app.use(path, fn)`
    - supports array of paths
    - supports `RegExp`
  * router: fix optimization on router exit
  * router: refactor location of `try` blocks
  * router: speed up standard `app.use(fn)`
  * deps: debug@1.0.3
    - Add support for multiple wildcards in namespaces
  * deps: finalhandler@0.0.3
    - deps: debug@1.0.3
  * deps: methods@1.1.0
    - add `CONNECT`
  * deps: parseurl@~1.1.3
    - faster parsing of href-only URLs
  * deps: path-to-regexp@0.1.3
  * deps: send@0.6.0
    - deps: debug@1.0.3
  * deps: serve-static@~1.3.2
    - deps: parseurl@~1.1.3
    - deps: send@0.6.0
  * perf: fix arguments reassign deopt in some `res` methods

4.5.1 / 2014-07-06
==================

 * fix routing regression when altering `req.method`

4.5.0 / 2014-07-04
==================

 * add deprecation message to non-plural `req.accepts*`
 * add deprecation message to `res.send(body, status)`
 * add deprecation message to `res.vary()`
 * add `headers` option to `res.sendfile`
   - use to set headers on successful file transfer
 * add `mergeParams` option to `Router`
   - merges `req.params` from parent routes
 * add `req.hostname` -- correct name for what `req.host` returns
 * deprecate things with `depd` module
 * deprecate `req.host` -- use `req.hostname` instead
 * fix behavior when handling request without routes
 * fix handling when `route.all` is only route
 * invoke `router.param()` only when route matches
 * restore `req.params` after invoking router
 * use `finalhandler` for final response handling
 * use `media-typer` to alter content-type charset
 * deps: accepts@~1.0.7
 * deps: send@0.5.0
   - Accept string for `maxage` (converted by `ms`)
   - Include link in default redirect response
 * deps: serve-static@~1.3.0
   - Accept string for `maxAge` (converted by `ms`)
   - Add `setHeaders` option
   - Include HTML link in redirect response
   - deps: send@0.5.0
 * deps: type-is@~1.3.2

4.4.5 / 2014-06-26
==================

 * deps: cookie-signature@1.0.4
   - fix for timing attacks

4.4.4 / 2014-06-20
==================

 * fix `res.attachment` Unicode filenames in Safari
 * fix "trim prefix" debug message in `express:router`
 * deps: accepts@~1.0.5
 * deps: buffer-crc32@0.2.3

4.4.3 / 2014-06-11
==================

 * fix persistence of modified `req.params[name]` from `app.param()`
 * deps: accepts@1.0.3
   - deps: negotiator@0.4.6
 * deps: debug@1.0.2
 * deps: send@0.4.3
   - Do not throw un-catchable error on file open race condition
   - Use `escape-html` for HTML escaping
   - deps: debug@1.0.2
   - deps: finished@1.2.2
   - deps: fresh@0.2.2
 * deps: serve-static@1.2.3
   - Do not throw un-catchable error on file open race condition
   - deps: send@0.4.3

4.4.2 / 2014-06-09
==================

 * fix catching errors from top-level handlers
 * use `vary` module for `res.vary`
 * deps: debug@1.0.1
 * deps: proxy-addr@1.0.1
 * deps: send@0.4.2
   - fix "event emitter leak" warnings
   - deps: debug@1.0.1
   - deps: finished@1.2.1
 * deps: serve-static@1.2.2
   - fix "event emitter leak" warnings
   - deps: send@0.4.2
 * deps: type-is@1.2.1

4.4.1 / 2014-06-02
==================

 * deps: methods@1.0.1
 * deps: send@0.4.1
   - Send `max-age` in `Cache-Control` in correct format
 * deps: serve-static@1.2.1
   - use `escape-html` for escaping
   - deps: send@0.4.1

4.4.0 / 2014-05-30
==================

 * custom etag control with `app.set('etag', val)`
   - `app.set('etag', function(body, encoding){ return '"etag"' })` custom etag generation
   - `app.set('etag', 'weak')` weak tag
   - `app.set('etag', 'strong')` strong etag
   - `app.set('etag', false)` turn off
   - `app.set('etag', true)` standard etag
 * mark `res.send` ETag as weak and reduce collisions
 * update accepts to 1.0.2
   - Fix interpretation when header not in request
 * update send to 0.4.0
   - Calculate ETag with md5 for reduced collisions
   - Ignore stream errors after request ends
   - deps: debug@0.8.1
 * update serve-static to 1.2.0
   - Calculate ETag with md5 for reduced collisions
   - Ignore stream errors after request ends
   - deps: send@0.4.0

4.3.2 / 2014-05-28
==================

 * fix handling of errors from `router.param()` callbacks

4.3.1 / 2014-05-23
==================

 * revert "fix behavior of multiple `app.VERB` for the same path"
   - this caused a regression in the order of route execution

4.3.0 / 2014-05-21
==================

 * add `req.baseUrl` to access the path stripped from `req.url` in routes
 * fix behavior of multiple `app.VERB` for the same path
 * fix issue routing requests among sub routers
 * invoke `router.param()` only when necessary instead of every match
 * proper proxy trust with `app.set('trust proxy', trust)`
   - `app.set('trust proxy', 1)` trust first hop
   - `app.set('trust proxy', 'loopback')` trust loopback addresses
   - `app.set('trust proxy', '10.0.0.1')` trust single IP
   - `app.set('trust proxy', '10.0.0.1/16')` trust subnet
   - `app.set('trust proxy', '10.0.0.1, 10.0.0.2')` trust list
   - `app.set('trust proxy', false)` turn off
   - `app.set('trust proxy', true)` trust everything
 * set proper `charset` in `Content-Type` for `res.send`
 * update type-is to 1.2.0
   - support suffix matching

4.2.0 / 2014-05-11
==================

 * deprecate `app.del()` -- use `app.delete()` instead
 * deprecate `res.json(obj, status)` -- use `res.json(status, obj)` instead
   - the edge-case `res.json(status, num)` requires `res.status(status).json(num)`
 * deprecate `res.jsonp(obj, status)` -- use `res.jsonp(status, obj)` instead
   - the edge-case `res.jsonp(status, num)` requires `res.status(status).jsonp(num)`
 * fix `req.next` when inside router instance
 * include `ETag` header in `HEAD` requests
 * keep previous `Content-Type` for `res.jsonp`
 * support PURGE method
   - add `app.purge`
   - add `router.purge`
   - include PURGE in `app.all`
 * update debug to 0.8.0
   - add `enable()` method
   - change from stderr to stdout
 * update methods to 1.0.0
   - add PURGE

4.1.2 / 2014-05-08
==================

 * fix `req.host` for IPv6 literals
 * fix `res.jsonp` error if callback param is object

4.1.1 / 2014-04-27
==================

 * fix package.json to reflect supported node version

4.1.0 / 2014-04-24
==================

 * pass options from `res.sendfile` to `send`
 * preserve casing of headers in `res.header` and `res.set`
 * support unicode file names in `res.attachment` and `res.download`
 * update accepts to 1.0.1
   - deps: negotiator@0.4.0
 * update cookie to 0.1.2
   - Fix for maxAge == 0
   - made compat with expires field
 * update send to 0.3.0
   - Accept API options in options object
   - Coerce option types
   - Control whether to generate etags
   - Default directory access to 403 when index disabled
   - Fix sending files with dots without root set
   - Include file path in etag
   - Make "Can't set headers after they are sent." catchable
   - Send full entity-body for multi range requests
   - Set etags to "weak"
   - Support "If-Range" header
   - Support multiple index paths
   - deps: mime@1.2.11
 * update serve-static to 1.1.0
   - Accept options directly to `send` module
   - Resolve relative paths at middleware setup
   - Use parseurl to parse the URL from request
   - deps: send@0.3.0
 * update type-is to 1.1.0
   - add non-array values support
   - add `multipart` as a shorthand

4.0.0 / 2014-04-09
==================

 * remove:
   - node 0.8 support
   - connect and connect's patches except for charset handling
   - express(1) - moved to [express-generator](https://github.com/expressjs/generator)
   - `express.createServer()` - it has been deprecated for a long time. Use `express()`
   - `app.configure` - use logic in your own app code
   - `app.router` - is removed
   - `req.auth` - use `basic-auth` instead
   - `req.accepted*` - use `req.accepts*()` instead
   - `res.location` - relative URL resolution is removed
   - `res.charset` - include the charset in the content type when using `res.set()`
   - all bundled middleware except `static`
 * change:
   - `app.route` -> `app.mountpath` when mounting an express app in another express app
   - `json spaces` no longer enabled by default in development
   - `req.accepts*` -> `req.accepts*s` - i.e. `req.acceptsEncoding` -> `req.acceptsEncodings`
   - `req.params` is now an object instead of an array
   - `res.locals` is no longer a function. It is a plain js object. Treat it as such.
   - `res.headerSent` -> `res.headersSent` to match node.js ServerResponse object
 * refactor:
   - `req.accepts*` with [accepts](https://github.com/expressjs/accepts)
   - `req.is` with [type-is](https://github.com/expressjs/type-is)
   - [path-to-regexp](https://github.com/component/path-to-regexp)
 * add:
   - `app.router()` - returns the app Router instance
   - `app.route()` - Proxy to the app's `Router#route()` method to create a new route
   - Router & Route - public API

3.21.2 / 2015-07-31
===================

  * deps: connect@2.30.2
    - deps: body-parser@~1.13.3
    - deps: compression@~1.5.2
    - deps: errorhandler@~1.4.2
    - deps: method-override@~2.3.5
    - deps: serve-index@~1.7.2
    - deps: type-is@~1.6.6
    - deps: vhost@~3.0.1
  * deps: vary@~1.0.1
    - Fix setting empty header from empty `field`
    - perf: enable strict mode
    - perf: remove argument reassignments

3.21.1 / 2015-07-05
===================

  * deps: basic-auth@~1.0.3
  * deps: connect@2.30.1
    - deps: body-parser@~1.13.2
    - deps: compression@~1.5.1
    - deps: errorhandler@~1.4.1
    - deps: morgan@~1.6.1
    - deps: pause@0.1.0
    - deps: qs@4.0.0
    - deps: serve-index@~1.7.1
    - deps: type-is@~1.6.4

3.21.0 / 2015-06-18
===================

  * deps: basic-auth@1.0.2
    - perf: enable strict mode
    - perf: hoist regular expression
    - perf: parse with regular expressions
    - perf: remove argument reassignment
  * deps: connect@2.30.0
    - deps: body-parser@~1.13.1
    - deps: bytes@2.1.0
    - deps: compression@~1.5.0
    - deps: cookie@0.1.3
    - deps: cookie-parser@~1.3.5
    - deps: csurf@~1.8.3
    - deps: errorhandler@~1.4.0
    - deps: express-session@~1.11.3
    - deps: finalhandler@0.4.0
    - deps: fresh@0.3.0
    - deps: morgan@~1.6.0
    - deps: serve-favicon@~2.3.0
    - deps: serve-index@~1.7.0
    - deps: serve-static@~1.10.0
    - deps: type-is@~1.6.3
  * deps: cookie@0.1.3
    - perf: deduce the scope of try-catch deopt
    - perf: remove argument reassignments
  * deps: escape-html@1.0.2
  * deps: etag@~1.7.0
    - Always include entity length in ETags for hash length extensions
    - Generate non-Stats ETags using MD5 only (no longer CRC32)
    - Improve stat performance by removing hashing
    - Improve support for JXcore
    - Remove base64 padding in ETags to shorten
    - Support "fake" stats objects in environments without fs
    - Use MD5 instead of MD4 in weak ETags over 1KB
  * deps: fresh@0.3.0
    - Add weak `ETag` matching support
  * deps: mkdirp@0.5.1
    - Work in global strict mode
  * deps: send@0.13.0
    - Allow Node.js HTTP server to set `Date` response header
    - Fix incorrectly removing `Content-Location` on 304 response
    - Improve the default redirect response headers
    - Send appropriate headers on default error response
    - Use `http-errors` for standard emitted errors
    - Use `statuses` instead of `http` module for status messages
    - deps: escape-html@1.0.2
    - deps: etag@~1.7.0
    - deps: fresh@0.3.0
    - deps: on-finished@~2.3.0
    - perf: enable strict mode
    - perf: remove unnecessary array allocations

3.20.3 / 2015-05-17
===================

  * deps: connect@2.29.2
    - deps: body-parser@~1.12.4
    - deps: compression@~1.4.4
    - deps: connect-timeout@~1.6.2
    - deps: debug@~2.2.0
    - deps: depd@~1.0.1
    - deps: errorhandler@~1.3.6
    - deps: finalhandler@0.3.6
    - deps: method-override@~2.3.3
    - deps: morgan@~1.5.3
    - deps: qs@2.4.2
    - deps: response-time@~2.3.1
    - deps: serve-favicon@~2.2.1
    - deps: serve-index@~1.6.4
    - deps: serve-static@~1.9.3
    - deps: type-is@~1.6.2
  * deps: debug@~2.2.0
    - deps: ms@0.7.1
  * deps: depd@~1.0.1
  * deps: proxy-addr@~1.0.8
    - deps: ipaddr.js@1.0.1
  * deps: send@0.12.3
    - deps: debug@~2.2.0
    - deps: depd@~1.0.1
    - deps: etag@~1.6.0
    - deps: ms@0.7.1
    - deps: on-finished@~2.2.1

3.20.2 / 2015-03-16
===================

  * deps: connect@2.29.1
    - deps: body-parser@~1.12.2
    - deps: compression@~1.4.3
    - deps: connect-timeout@~1.6.1
    - deps: debug@~2.1.3
    - deps: errorhandler@~1.3.5
    - deps: express-session@~1.10.4
    - deps: finalhandler@0.3.4
    - deps: method-override@~2.3.2
    - deps: morgan@~1.5.2
    - deps: qs@2.4.1
    - deps: serve-index@~1.6.3
    - deps: serve-static@~1.9.2
    - deps: type-is@~1.6.1
  * deps: debug@~2.1.3
    - Fix high intensity foreground color for bold
    - deps: ms@0.7.0
  * deps: merge-descriptors@1.0.0
  * deps: proxy-addr@~1.0.7
    - deps: ipaddr.js@0.1.9
  * deps: send@0.12.2
    - Throw errors early for invalid `extensions` or `index` options
    - deps: debug@~2.1.3

3.20.1 / 2015-02-28
===================

  * Fix `req.host` when using "trust proxy" hops count
  * Fix `req.protocol`/`req.secure` when using "trust proxy" hops count

3.20.0 / 2015-02-18
===================

  * Fix `"trust proxy"` setting to inherit when app is mounted
  * Generate `ETag`s for all request responses
    - No longer restricted to only responses for `GET` and `HEAD` requests
  * Use `content-type` to parse `Content-Type` headers
  * deps: connect@2.29.0
    - Use `content-type` to parse `Content-Type` headers
    - deps: body-parser@~1.12.0
    - deps: compression@~1.4.1
    - deps: connect-timeout@~1.6.0
    - deps: cookie-parser@~1.3.4
    - deps: cookie-signature@1.0.6
    - deps: csurf@~1.7.0
    - deps: errorhandler@~1.3.4
    - deps: express-session@~1.10.3
    - deps: http-errors@~1.3.1
    - deps: response-time@~2.3.0
    - deps: serve-index@~1.6.2
    - deps: serve-static@~1.9.1
    - deps: type-is@~1.6.0
  * deps: cookie-signature@1.0.6
  * deps: send@0.12.1
    - Always read the stat size from the file
    - Fix mutating passed-in `options`
    - deps: mime@1.3.4

3.19.2 / 2015-02-01
===================

  * deps: connect@2.28.3
    - deps: compression@~1.3.1
    - deps: csurf@~1.6.6
    - deps: errorhandler@~1.3.3
    - deps: express-session@~1.10.2
    - deps: serve-index@~1.6.1
    - deps: type-is@~1.5.6
  * deps: proxy-addr@~1.0.6
    - deps: ipaddr.js@0.1.8

3.19.1 / 2015-01-20
===================

  * deps: connect@2.28.2
    - deps: body-parser@~1.10.2
    - deps: serve-static@~1.8.1
  * deps: send@0.11.1
    - Fix root path disclosure

3.19.0 / 2015-01-09
===================

  * Fix `OPTIONS` responses to include the `HEAD` method property
  * Use `readline` for prompt in `express(1)`
  * deps: commander@2.6.0
  * deps: connect@2.28.1
    - deps: body-parser@~1.10.1
    - deps: compression@~1.3.0
    - deps: connect-timeout@~1.5.0
    - deps: csurf@~1.6.4
    - deps: debug@~2.1.1
    - deps: errorhandler@~1.3.2
    - deps: express-session@~1.10.1
    - deps: finalhandler@0.3.3
    - deps: method-override@~2.3.1
    - deps: morgan@~1.5.1
    - deps: serve-favicon@~2.2.0
    - deps: serve-index@~1.6.0
    - deps: serve-static@~1.8.0
    - deps: type-is@~1.5.5
  * deps: debug@~2.1.1
  * deps: methods@~1.1.1
  * deps: proxy-addr@~1.0.5
    - deps: ipaddr.js@0.1.6
  * deps: send@0.11.0
    - deps: debug@~2.1.1
    - deps: etag@~1.5.1
    - deps: ms@0.7.0
    - deps: on-finished@~2.2.0

3.18.6 / 2014-12-12
===================

  * Fix exception in `req.fresh`/`req.stale` without response headers

3.18.5 / 2014-12-11
===================

  * deps: connect@2.27.6
    - deps: compression@~1.2.2
    - deps: express-session@~1.9.3
    - deps: http-errors@~1.2.8
    - deps: serve-index@~1.5.3
    - deps: type-is@~1.5.4

3.18.4 / 2014-11-23
===================

  * deps: connect@2.27.4
    - deps: body-parser@~1.9.3
    - deps: compression@~1.2.1
    - deps: errorhandler@~1.2.3
    - deps: express-session@~1.9.2
    - deps: qs@2.3.3
    - deps: serve-favicon@~2.1.7
    - deps: serve-static@~1.5.1
    - deps: type-is@~1.5.3
  * deps: etag@~1.5.1
  * deps: proxy-addr@~1.0.4
    - deps: ipaddr.js@0.1.5

3.18.3 / 2014-11-09
===================

  * deps: connect@2.27.3
    - Correctly invoke async callback asynchronously
    - deps: csurf@~1.6.3

3.18.2 / 2014-10-28
===================

  * deps: connect@2.27.2
    - Fix handling of URLs containing `://` in the path
    - deps: body-parser@~1.9.2
    - deps: qs@2.3.2

3.18.1 / 2014-10-22
===================

  * Fix internal `utils.merge` deprecation warnings
  * deps: connect@2.27.1
    - deps: body-parser@~1.9.1
    - deps: express-session@~1.9.1
    - deps: finalhandler@0.3.2
    - deps: morgan@~1.4.1
    - deps: qs@2.3.0
    - deps: serve-static@~1.7.1
  * deps: send@0.10.1
    - deps: on-finished@~2.1.1

3.18.0 / 2014-10-17
===================

  * Use `content-disposition` module for `res.attachment`/`res.download`
    - Sends standards-compliant `Content-Disposition` header
    - Full Unicode support
  * Use `etag` module to generate `ETag` headers
  * deps: connect@2.27.0
    - Use `http-errors` module for creating errors
    - Use `utils-merge` module for merging objects
    - deps: body-parser@~1.9.0
    - deps: compression@~1.2.0
    - deps: connect-timeout@~1.4.0
    - deps: debug@~2.1.0
    - deps: depd@~1.0.0
    - deps: express-session@~1.9.0
    - deps: finalhandler@0.3.1
    - deps: method-override@~2.3.0
    - deps: morgan@~1.4.0
    - deps: response-time@~2.2.0
    - deps: serve-favicon@~2.1.6
    - deps: serve-index@~1.5.0
    - deps: serve-static@~1.7.0
  * deps: debug@~2.1.0
    - Implement `DEBUG_FD` env variable support
  * deps: depd@~1.0.0
  * deps: send@0.10.0
    - deps: debug@~2.1.0
    - deps: depd@~1.0.0
    - deps: etag@~1.5.0

3.17.8 / 2014-10-15
===================

  * deps: connect@2.26.6
    - deps: compression@~1.1.2
    - deps: csurf@~1.6.2
    - deps: errorhandler@~1.2.2

3.17.7 / 2014-10-08
===================

  * deps: connect@2.26.5
    - Fix accepting non-object arguments to `logger`
    - deps: serve-static@~1.6.4

3.17.6 / 2014-10-02
===================

  * deps: connect@2.26.4
    - deps: morgan@~1.3.2
    - deps: type-is@~1.5.2

3.17.5 / 2014-09-24
===================

  * deps: connect@2.26.3
    - deps: body-parser@~1.8.4
    - deps: serve-favicon@~2.1.5
    - deps: serve-static@~1.6.3
  * deps: proxy-addr@~1.0.3
    - Use `forwarded` npm module
  * deps: send@0.9.3
    - deps: etag@~1.4.0

3.17.4 / 2014-09-19
===================

  * deps: connect@2.26.2
    - deps: body-parser@~1.8.3
    - deps: qs@2.2.4

3.17.3 / 2014-09-18
===================

  * deps: proxy-addr@~1.0.2
    - Fix a global leak when multiple subnets are trusted
    - deps: ipaddr.js@0.1.3

3.17.2 / 2014-09-15
===================

  * Use `crc` instead of `buffer-crc32` for speed
  * deps: connect@2.26.1
    - deps: body-parser@~1.8.2
    - deps: depd@0.4.5
    - deps: express-session@~1.8.2
    - deps: morgan@~1.3.1
    - deps: serve-favicon@~2.1.3
    - deps: serve-static@~1.6.2
  * deps: depd@0.4.5
  * deps: send@0.9.2
    - deps: depd@0.4.5
    - deps: etag@~1.3.1
    - deps: range-parser@~1.0.2

3.17.1 / 2014-09-08
===================

  * Fix error in `req.subdomains` on empty host

3.17.0 / 2014-09-08
===================

  * Support `X-Forwarded-Host` in `req.subdomains`
  * Support IP address host in `req.subdomains`
  * deps: connect@2.26.0
    - deps: body-parser@~1.8.1
    - deps: compression@~1.1.0
    - deps: connect-timeout@~1.3.0
    - deps: cookie-parser@~1.3.3
    - deps: cookie-signature@1.0.5
    - deps: csurf@~1.6.1
    - deps: debug@~2.0.0
    - deps: errorhandler@~1.2.0
    - deps: express-session@~1.8.1
    - deps: finalhandler@0.2.0
    - deps: fresh@0.2.4
    - deps: media-typer@0.3.0
    - deps: method-override@~2.2.0
    - deps: morgan@~1.3.0
    - deps: qs@2.2.3
    - deps: serve-favicon@~2.1.3
    - deps: serve-index@~1.2.1
    - deps: serve-static@~1.6.1
    - deps: type-is@~1.5.1
    - deps: vhost@~3.0.0
  * deps: cookie-signature@1.0.5
  * deps: debug@~2.0.0
  * deps: fresh@0.2.4
  * deps: media-typer@0.3.0
    - Throw error when parameter format invalid on parse
  * deps: range-parser@~1.0.2
  * deps: send@0.9.1
    - Add `lastModified` option
    - Use `etag` to generate `ETag` header
    - deps: debug@~2.0.0
    - deps: fresh@0.2.4
  * deps: vary@~1.0.0
    - Accept valid `Vary` header string as `field`

3.16.10 / 2014-09-04
====================

  * deps: connect@2.25.10
    - deps: serve-static@~1.5.4
  * deps: send@0.8.5
    - Fix a path traversal issue when using `root`
    - Fix malicious path detection for empty string path

3.16.9 / 2014-08-29
===================

  * deps: connect@2.25.9
    - deps: body-parser@~1.6.7
    - deps: qs@2.2.2

3.16.8 / 2014-08-27
===================

  * deps: connect@2.25.8
    - deps: body-parser@~1.6.6
    - deps: csurf@~1.4.1
    - deps: qs@2.2.0

3.16.7 / 2014-08-18
===================

  * deps: connect@2.25.7
    - deps: body-parser@~1.6.5
    - deps: express-session@~1.7.6
    - deps: morgan@~1.2.3
    - deps: serve-static@~1.5.3
  * deps: send@0.8.3
    - deps: destroy@1.0.3
    - deps: on-finished@2.1.0

3.16.6 / 2014-08-14
===================

  * deps: connect@2.25.6
    - deps: body-parser@~1.6.4
    - deps: qs@1.2.2
    - deps: serve-static@~1.5.2
  * deps: send@0.8.2
    - Work around `fd` leak in Node.js 0.10 for `fs.ReadStream`

3.16.5 / 2014-08-11
===================

  * deps: connect@2.25.5
    - Fix backwards compatibility in `logger`

3.16.4 / 2014-08-10
===================

  * Fix original URL parsing in `res.location`
  * deps: connect@2.25.4
    - Fix `query` middleware breaking with argument
    - deps: body-parser@~1.6.3
    - deps: compression@~1.0.11
    - deps: connect-timeout@~1.2.2
    - deps: express-session@~1.7.5
    - deps: method-override@~2.1.3
    - deps: on-headers@~1.0.0
    - deps: parseurl@~1.3.0
    - deps: qs@1.2.1
    - deps: response-time@~2.0.1
    - deps: serve-index@~1.1.6
    - deps: serve-static@~1.5.1
  * deps: parseurl@~1.3.0

3.16.3 / 2014-08-07
===================

  * deps: connect@2.25.3
    - deps: multiparty@3.3.2

3.16.2 / 2014-08-07
===================

  * deps: connect@2.25.2
    - deps: body-parser@~1.6.2
    - deps: qs@1.2.0

3.16.1 / 2014-08-06
===================

  * deps: connect@2.25.1
    - deps: body-parser@~1.6.1
    - deps: qs@1.1.0

3.16.0 / 2014-08-05
===================

  * deps: connect@2.25.0
    - deps: body-parser@~1.6.0
    - deps: compression@~1.0.10
    - deps: csurf@~1.4.0
    - deps: express-session@~1.7.4
    - deps: qs@1.0.2
    - deps: serve-static@~1.5.0
  * deps: send@0.8.1
    - Add `extensions` option

3.15.3 / 2014-08-04
===================

  * fix `res.sendfile` regression for serving directory index files
  * deps: connect@2.24.3
    - deps: serve-index@~1.1.5
    - deps: serve-static@~1.4.4
  * deps: send@0.7.4
    - Fix incorrect 403 on Windows and Node.js 0.11
    - Fix serving index files without root dir

3.15.2 / 2014-07-27
===================

  * deps: connect@2.24.2
    - deps: body-parser@~1.5.2
    - deps: depd@0.4.4
    - deps: express-session@~1.7.2
    - deps: morgan@~1.2.2
    - deps: serve-static@~1.4.2
  * deps: depd@0.4.4
    - Work-around v8 generating empty stack traces
  * deps: send@0.7.2
    - deps: depd@0.4.4

3.15.1 / 2014-07-26
===================

  * deps: connect@2.24.1
    - deps: body-parser@~1.5.1
    - deps: depd@0.4.3
    - deps: express-session@~1.7.1
    - deps: morgan@~1.2.1
    - deps: serve-index@~1.1.4
    - deps: serve-static@~1.4.1
  * deps: depd@0.4.3
    - Fix exception when global `Error.stackTraceLimit` is too low
  * deps: send@0.7.1
    - deps: depd@0.4.3

3.15.0 / 2014-07-22
===================

  * Fix `req.protocol` for proxy-direct connections
  * Pass options from `res.sendfile` to `send`
  * deps: connect@2.24.0
    - deps: body-parser@~1.5.0
    - deps: compression@~1.0.9
    - deps: connect-timeout@~1.2.1
    - deps: debug@1.0.4
    - deps: depd@0.4.2
    - deps: express-session@~1.7.0
    - deps: finalhandler@0.1.0
    - deps: method-override@~2.1.2
    - deps: morgan@~1.2.0
    - deps: multiparty@3.3.1
    - deps: parseurl@~1.2.0
    - deps: serve-static@~1.4.0
  * deps: debug@1.0.4
  * deps: depd@0.4.2
    - Add `TRACE_DEPRECATION` environment variable
    - Remove non-standard grey color from color output
    - Support `--no-deprecation` argument
    - Support `--trace-deprecation` argument
  * deps: parseurl@~1.2.0
    - Cache URLs based on original value
    - Remove no-longer-needed URL mis-parse work-around
    - Simplify the "fast-path" `RegExp`
  * deps: send@0.7.0
    - Add `dotfiles` option
    - Cap `maxAge` value to 1 year
    - deps: debug@1.0.4
    - deps: depd@0.4.2

3.14.0 / 2014-07-11
===================

 * add explicit "Rosetta Flash JSONP abuse" protection
   - previous versions are not vulnerable; this is just explicit protection
 * deprecate `res.redirect(url, status)` -- use `res.redirect(status, url)` instead
 * fix `res.send(status, num)` to send `num` as json (not error)
 * remove unnecessary escaping when `res.jsonp` returns JSON response
 * deps: basic-auth@1.0.0
   - support empty password
   - support empty username
 * deps: connect@2.23.0
   - deps: debug@1.0.3
   - deps: express-session@~1.6.4
   - deps: method-override@~2.1.0
   - deps: parseurl@~1.1.3
   - deps: serve-static@~1.3.1
  * deps: debug@1.0.3
    - Add support for multiple wildcards in namespaces
  * deps: methods@1.1.0
    - add `CONNECT`
  * deps: parseurl@~1.1.3
    - faster parsing of href-only URLs

3.13.0 / 2014-07-03
===================

 * add deprecation message to `app.configure`
 * add deprecation message to `req.auth`
 * use `basic-auth` to parse `Authorization` header
 * deps: connect@2.22.0
   - deps: csurf@~1.3.0
   - deps: express-session@~1.6.1
   - deps: multiparty@3.3.0
   - deps: serve-static@~1.3.0
 * deps: send@0.5.0
   - Accept string for `maxage` (converted by `ms`)
   - Include link in default redirect response

3.12.1 / 2014-06-26
===================

 * deps: connect@2.21.1
   - deps: cookie-parser@1.3.2
   - deps: cookie-signature@1.0.4
   - deps: express-session@~1.5.2
   - deps: type-is@~1.3.2
 * deps: cookie-signature@1.0.4
   - fix for timing attacks

3.12.0 / 2014-06-21
===================

 * use `media-typer` to alter content-type charset
 * deps: connect@2.21.0
   - deprecate `connect(middleware)` -- use `app.use(middleware)` instead
   - deprecate `connect.createServer()` -- use `connect()` instead
   - fix `res.setHeader()` patch to work with with get -> append -> set pattern
   - deps: compression@~1.0.8
   - deps: errorhandler@~1.1.1
   - deps: express-session@~1.5.0
   - deps: serve-index@~1.1.3

3.11.0 / 2014-06-19
===================

 * deprecate things with `depd` module
 * deps: buffer-crc32@0.2.3
 * deps: connect@2.20.2
   - deprecate `verify` option to `json` -- use `body-parser` npm module instead
   - deprecate `verify` option to `urlencoded` -- use `body-parser` npm module instead
   - deprecate things with `depd` module
   - use `finalhandler` for final response handling
   - use `media-typer` to parse `content-type` for charset
   - deps: body-parser@1.4.3
   - deps: connect-timeout@1.1.1
   - deps: cookie-parser@1.3.1
   - deps: csurf@1.2.2
   - deps: errorhandler@1.1.0
   - deps: express-session@1.4.0
   - deps: multiparty@3.2.9
   - deps: serve-index@1.1.2
   - deps: type-is@1.3.1
   - deps: vhost@2.0.0

3.10.5 / 2014-06-11
===================

 * deps: connect@2.19.6
   - deps: body-parser@1.3.1
   - deps: compression@1.0.7
   - deps: debug@1.0.2
   - deps: serve-index@1.1.1
   - deps: serve-static@1.2.3
 * deps: debug@1.0.2
 * deps: send@0.4.3
   - Do not throw un-catchable error on file open race condition
   - Use `escape-html` for HTML escaping
   - deps: debug@1.0.2
   - deps: finished@1.2.2
   - deps: fresh@0.2.2

3.10.4 / 2014-06-09
===================

 * deps: connect@2.19.5
   - fix "event emitter leak" warnings
   - deps: csurf@1.2.1
   - deps: debug@1.0.1
   - deps: serve-static@1.2.2
   - deps: type-is@1.2.1
 * deps: debug@1.0.1
 * deps: send@0.4.2
   - fix "event emitter leak" warnings
   - deps: finished@1.2.1
   - deps: debug@1.0.1

3.10.3 / 2014-06-05
===================

 * use `vary` module for `res.vary`
 * deps: connect@2.19.4
   - deps: errorhandler@1.0.2
   - deps: method-override@2.0.2
   - deps: serve-favicon@2.0.1
 * deps: debug@1.0.0

3.10.2 / 2014-06-03
===================

 * deps: connect@2.19.3
   - deps: compression@1.0.6

3.10.1 / 2014-06-03
===================

 * deps: connect@2.19.2
   - deps: compression@1.0.4
 * deps: proxy-addr@1.0.1

3.10.0 / 2014-06-02
===================

 * deps: connect@2.19.1
   - deprecate `methodOverride()` -- use `method-override` npm module instead
   - deps: body-parser@1.3.0
   - deps: method-override@2.0.1
   - deps: multiparty@3.2.8
   - deps: response-time@2.0.0
   - deps: serve-static@1.2.1
 * deps: methods@1.0.1
 * deps: send@0.4.1
   - Send `max-age` in `Cache-Control` in correct format

3.9.0 / 2014-05-30
==================

 * custom etag control with `app.set('etag', val)`
   - `app.set('etag', function(body, encoding){ return '"etag"' })` custom etag generation
   - `app.set('etag', 'weak')` weak tag
   - `app.set('etag', 'strong')` strong etag
   - `app.set('etag', false)` turn off
   - `app.set('etag', true)` standard etag
 * Include ETag in HEAD requests
 * mark `res.send` ETag as weak and reduce collisions
 * update connect to 2.18.0
   - deps: compression@1.0.3
   - deps: serve-index@1.1.0
   - deps: serve-static@1.2.0
 * update send to 0.4.0
   - Calculate ETag with md5 for reduced collisions
   - Ignore stream errors after request ends
   - deps: debug@0.8.1

3.8.1 / 2014-05-27
==================

 * update connect to 2.17.3
   - deps: body-parser@1.2.2
   - deps: express-session@1.2.1
   - deps: method-override@1.0.2

3.8.0 / 2014-05-21
==================

 * keep previous `Content-Type` for `res.jsonp`
 * set proper `charset` in `Content-Type` for `res.send`
 * update connect to 2.17.1
   - fix `res.charset` appending charset when `content-type` has one
   - deps: express-session@1.2.0
   - deps: morgan@1.1.1
   - deps: serve-index@1.0.3

3.7.0 / 2014-05-18
==================

 * proper proxy trust with `app.set('trust proxy', trust)`
   - `app.set('trust proxy', 1)` trust first hop
   - `app.set('trust proxy', 'loopback')` trust loopback addresses
   - `app.set('trust proxy', '10.0.0.1')` trust single IP
   - `app.set('trust proxy', '10.0.0.1/16')` trust subnet
   - `app.set('trust proxy', '10.0.0.1, 10.0.0.2')` trust list
   - `app.set('trust proxy', false)` turn off
   - `app.set('trust proxy', true)` trust everything
 * update connect to 2.16.2
   - deprecate `res.headerSent` -- use `res.headersSent`
   - deprecate `res.on("header")` -- use on-headers module instead
   - fix edge-case in `res.appendHeader` that would append in wrong order
   - json: use body-parser
   - urlencoded: use body-parser
   - dep: bytes@1.0.0
   - dep: cookie-parser@1.1.0
   - dep: csurf@1.2.0
   - dep: express-session@1.1.0
   - dep: method-override@1.0.1

3.6.0 / 2014-05-09
==================

 * deprecate `app.del()` -- use `app.delete()` instead
 * deprecate `res.json(obj, status)` -- use `res.json(status, obj)` instead
   - the edge-case `res.json(status, num)` requires `res.status(status).json(num)`
 * deprecate `res.jsonp(obj, status)` -- use `res.jsonp(status, obj)` instead
   - the edge-case `res.jsonp(status, num)` requires `res.status(status).jsonp(num)`
 * support PURGE method
   - add `app.purge`
   - add `router.purge`
   - include PURGE in `app.all`
 * update connect to 2.15.0
   * Add `res.appendHeader`
   * Call error stack even when response has been sent
   * Patch `res.headerSent` to return Boolean
   * Patch `res.headersSent` for node.js 0.8
   * Prevent default 404 handler after response sent
   * dep: compression@1.0.2
   * dep: connect-timeout@1.1.0
   * dep: debug@^0.8.0
   * dep: errorhandler@1.0.1
   * dep: express-session@1.0.4
   * dep: morgan@1.0.1
   * dep: serve-favicon@2.0.0
   * dep: serve-index@1.0.2
 * update debug to 0.8.0
   * add `enable()` method
   * change from stderr to stdout
 * update methods to 1.0.0
   - add PURGE
 * update mkdirp to 0.5.0

3.5.3 / 2014-05-08
==================

 * fix `req.host` for IPv6 literals
 * fix `res.jsonp` error if callback param is object

3.5.2 / 2014-04-24
==================

 * update connect to 2.14.5
 * update cookie to 0.1.2
 * update mkdirp to 0.4.0
 * update send to 0.3.0

3.5.1 / 2014-03-25
==================

 * pin less-middleware in generated app

3.5.0 / 2014-03-06
==================

 * bump deps

3.4.8 / 2014-01-13
==================

 * prevent incorrect automatic OPTIONS responses #1868 @dpatti
 * update binary and examples for jade 1.0 #1876 @yossi, #1877 @reqshark, #1892 @matheusazzi
 * throw 400 in case of malformed paths @rlidwka

3.4.7 / 2013-12-10
==================

 * update connect

3.4.6 / 2013-12-01
==================

 * update connect (raw-body)

3.4.5 / 2013-11-27
==================

 * update connect
 * res.location: remove leading ./ #1802 @kapouer
 * res.redirect: fix `res.redirect('toString') #1829 @michaelficarra
 * res.send: always send ETag when content-length > 0
 * router: add Router.all() method

3.4.4 / 2013-10-29
==================

 * update connect
 * update supertest
 * update methods
 * express(1): replace bodyParser() with urlencoded() and json() #1795 @chirag04

3.4.3 / 2013-10-23
==================

 * update connect

3.4.2 / 2013-10-18
==================

 * update connect
 * downgrade commander

3.4.1 / 2013-10-15
==================

 * update connect
 * update commander
 * jsonp: check if callback is a function
 * router: wrap encodeURIComponent in a try/catch #1735 (@lxe)
 * res.format: now includes charset @1747 (@sorribas)
 * res.links: allow multiple calls @1746 (@sorribas)

3.4.0 / 2013-09-07
==================

 * add res.vary(). Closes #1682
 * update connect

3.3.8 / 2013-09-02
==================

 * update connect

3.3.7 / 2013-08-28
==================

 * update connect

3.3.6 / 2013-08-27
==================

 * Revert "remove charset from json responses. Closes #1631" (causes issues in some clients)
 * add: req.accepts take an argument list

3.3.4 / 2013-07-08
==================

 * update send and connect

3.3.3 / 2013-07-04
==================

 * update connect

3.3.2 / 2013-07-03
==================

 * update connect
 * update send
 * remove .version export

3.3.1 / 2013-06-27
==================

 * update connect

3.3.0 / 2013-06-26
==================

 * update connect
 * add support for multiple X-Forwarded-Proto values. Closes #1646
 * change: remove charset from json responses. Closes #1631
 * change: return actual booleans from req.accept* functions
 * fix jsonp callback array throw

3.2.6 / 2013-06-02
==================

 * update connect

3.2.5 / 2013-05-21
==================

 * update connect
 * update node-cookie
 * add: throw a meaningful error when there is no default engine
 * change generation of ETags with res.send() to GET requests only. Closes #1619

3.2.4 / 2013-05-09
==================

  * fix `req.subdomains` when no Host is present
  * fix `req.host` when no Host is present, return undefined

3.2.3 / 2013-05-07
==================

  * update connect / qs

3.2.2 / 2013-05-03
==================

  * update qs

3.2.1 / 2013-04-29
==================

  * add app.VERB() paths array deprecation warning
  * update connect
  * update qs and remove all ~ semver crap
  * fix: accept number as value of Signed Cookie

3.2.0 / 2013-04-15
==================

  * add "view" constructor setting to override view behaviour
  * add req.acceptsEncoding(name)
  * add req.acceptedEncodings
  * revert cookie signature change causing session race conditions
  * fix sorting of Accept values of the same quality

3.1.2 / 2013-04-12
==================

  * add support for custom Accept parameters
  * update cookie-signature

3.1.1 / 2013-04-01
==================

  * add X-Forwarded-Host support to `req.host`
  * fix relative redirects
  * update mkdirp
  * update buffer-crc32
  * remove legacy app.configure() method from app template.

3.1.0 / 2013-01-25
==================

  * add support for leading "." in "view engine" setting
  * add array support to `res.set()`
  * add node 0.8.x to travis.yml
  * add "subdomain offset" setting for tweaking `req.subdomains`
  * add `res.location(url)` implementing `res.redirect()`-like setting of Location
  * use app.get() for x-powered-by setting for inheritance
  * fix colons in passwords for `req.auth`

3.0.6 / 2013-01-04
==================

  * add http verb methods to Router
  * update connect
  * fix mangling of the `res.cookie()` options object
  * fix jsonp whitespace escape. Closes #1132

3.0.5 / 2012-12-19
==================

  * add throwing when a non-function is passed to a route
  * fix: explicitly remove Transfer-Encoding header from 204 and 304 responses
  * revert "add 'etag' option"

3.0.4 / 2012-12-05
==================

  * add 'etag' option to disable `res.send()` Etags
  * add escaping of urls in text/plain in `res.redirect()`
    for old browsers interpreting as html
  * change crc32 module for a more liberal license
  * update connect

3.0.3 / 2012-11-13
==================

  * update connect
  * update cookie module
  * fix cookie max-age

3.0.2 / 2012-11-08
==================

  * add OPTIONS to cors example. Closes #1398
  * fix route chaining regression. Closes #1397

3.0.1 / 2012-11-01
==================

  * update connect

3.0.0 / 2012-10-23
==================

  * add `make clean`
  * add "Basic" check to req.auth
  * add `req.auth` test coverage
  * add cb && cb(payload) to `res.jsonp()`. Closes #1374
  * add backwards compat for `res.redirect()` status. Closes #1336
  * add support for `res.json()` to retain previously defined Content-Types. Closes #1349
  * update connect
  * change `res.redirect()` to utilize a pathname-relative Location again. Closes #1382
  * remove non-primitive string support for `res.send()`
  * fix view-locals example. Closes #1370
  * fix route-separation example

3.0.0rc5 / 2012-09-18
==================

  * update connect
  * add redis search example
  * add static-files example
  * add "x-powered-by" setting (`app.disable('x-powered-by')`)
  * add "application/octet-stream" redirect Accept test case. Closes #1317

3.0.0rc4 / 2012-08-30
==================

  * add `res.jsonp()`. Closes #1307
  * add "verbose errors" option to error-pages example
  * add another route example to express(1) so people are not so confused
  * add redis online user activity tracking example
  * update connect dep
  * fix etag quoting. Closes #1310
  * fix error-pages 404 status
  * fix jsonp callback char restrictions
  * remove old OPTIONS default response

3.0.0rc3 / 2012-08-13
==================

  * update connect dep
  * fix signed cookies to work with `connect.cookieParser()` ("s:" prefix was missing) [tnydwrds]
  * fix `res.render()` clobbering of "locals"

3.0.0rc2 / 2012-08-03
==================

  * add CORS example
  * update connect dep
  * deprecate `.createServer()` & remove old stale examples
  * fix: escape `res.redirect()` link
  * fix vhost example

3.0.0rc1 / 2012-07-24
==================

  * add more examples to view-locals
  * add scheme-relative redirects (`res.redirect("//foo.com")`) support
  * update cookie dep
  * update connect dep
  * update send dep
  * fix `express(1)` -h flag, use -H for hogan. Closes #1245
  * fix `res.sendfile()` socket error handling regression

3.0.0beta7 / 2012-07-16
==================

  * update connect dep for `send()` root normalization regression

3.0.0beta6 / 2012-07-13
==================

  * add `err.view` property for view errors. Closes #1226
  * add "jsonp callback name" setting
  * add support for "/foo/:bar*" non-greedy matches
  * change `res.sendfile()` to use `send()` module
  * change `res.send` to use "response-send" module
  * remove `app.locals.use` and `res.locals.use`, use regular middleware

3.0.0beta5 / 2012-07-03
==================

  * add "make check" support
  * add route-map example
  * add `res.json(obj, status)` support back for BC
  * add "methods" dep, remove internal methods module
  * update connect dep
  * update auth example to utilize cores pbkdf2
  * updated tests to use "supertest"

3.0.0beta4 / 2012-06-25
==================

  * Added `req.auth`
  * Added `req.range(size)`
  * Added `res.links(obj)`
  * Added `res.send(body, status)` support back for backwards compat
  * Added `.default()` support to `res.format()`
  * Added 2xx / 304 check to `req.fresh`
  * Revert "Added + support to the router"
  * Fixed `res.send()` freshness check, respect res.statusCode

3.0.0beta3 / 2012-06-15
==================

  * Added hogan `--hjs` to express(1) [nullfirm]
  * Added another example to content-negotiation
  * Added `fresh` dep
  * Changed: `res.send()` always checks freshness
  * Fixed: expose connects mime module. Closes #1165

3.0.0beta2 / 2012-06-06
==================

  * Added `+` support to the router
  * Added `req.host`
  * Changed `req.param()` to check route first
  * Update connect dep

3.0.0beta1 / 2012-06-01
==================

  * Added `res.format()` callback to override default 406 behaviour
  * Fixed `res.redirect()` 406. Closes #1154

3.0.0alpha5 / 2012-05-30
==================

  * Added `req.ip`
  * Added `{ signed: true }` option to `res.cookie()`
  * Removed `res.signedCookie()`
  * Changed: dont reverse `req.ips`
  * Fixed "trust proxy" setting check for `req.ips`

3.0.0alpha4 / 2012-05-09
==================

  * Added: allow `[]` in jsonp callback. Closes #1128
  * Added `PORT` env var support in generated template. Closes #1118 [benatkin]
  * Updated: connect 2.2.2

3.0.0alpha3 / 2012-05-04
==================

  * Added public `app.routes`. Closes #887
  * Added _view-locals_ example
  * Added _mvc_ example
  * Added `res.locals.use()`. Closes #1120
  * Added conditional-GET support to `res.send()`
  * Added: coerce `res.set()` values to strings
  * Changed: moved `static()` in generated apps below router
  * Changed: `res.send()` only set ETag when not previously set
  * Changed connect 2.2.1 dep
  * Changed: `make test` now runs unit / acceptance tests
  * Fixed req/res proto inheritance

3.0.0alpha2 / 2012-04-26
==================

  * Added `make benchmark` back
  * Added `res.send()` support for `String` objects
  * Added client-side data exposing example
  * Added `res.header()` and `req.header()` aliases for BC
  * Added `express.createServer()` for BC
  * Perf: memoize parsed urls
  * Perf: connect 2.2.0 dep
  * Changed: make `expressInit()` middleware self-aware
  * Fixed: use app.get() for all core settings
  * Fixed redis session example
  * Fixed session example. Closes #1105
  * Fixed generated express dep. Closes #1078

3.0.0alpha1 / 2012-04-15
==================

  * Added `app.locals.use(callback)`
  * Added `app.locals` object
  * Added `app.locals(obj)`
  * Added `res.locals` object
  * Added `res.locals(obj)`
  * Added `res.format()` for content-negotiation
  * Added `app.engine()`
  * Added `res.cookie()` JSON cookie support
  * Added "trust proxy" setting
  * Added `req.subdomains`
  * Added `req.protocol`
  * Added `req.secure`
  * Added `req.path`
  * Added `req.ips`
  * Added `req.fresh`
  * Added `req.stale`
  * Added comma-delimited / array support for `req.accepts()`
  * Added debug instrumentation
  * Added `res.set(obj)`
  * Added `res.set(field, value)`
  * Added `res.get(field)`
  * Added `app.get(setting)`. Closes #842
  * Added `req.acceptsLanguage()`
  * Added `req.acceptsCharset()`
  * Added `req.accepted`
  * Added `req.acceptedLanguages`
  * Added `req.acceptedCharsets`
  * Added "json replacer" setting
  * Added "json spaces" setting
  * Added X-Forwarded-Proto support to `res.redirect()`. Closes #92
  * Added `--less` support to express(1)
  * Added `express.response` prototype
  * Added `express.request` prototype
  * Added `express.application` prototype
  * Added `app.path()`
  * Added `app.render()`
  * Added `res.type()` to replace `res.contentType()`
  * Changed: `res.redirect()` to add relative support
  * Changed: enable "jsonp callback" by default
  * Changed: renamed "case sensitive routes" to "case sensitive routing"
  * Rewrite of all tests with mocha
  * Removed "root" setting
  * Removed `res.redirect('home')` support
  * Removed `req.notify()`
  * Removed `app.register()`
  * Removed `app.redirect()`
  * Removed `app.is()`
  * Removed `app.helpers()`
  * Removed `app.dynamicHelpers()`
  * Fixed `res.sendfile()` with non-GET. Closes #723
  * Fixed express(1) public dir for windows. Closes #866

2.5.9/ 2012-04-02
==================

  * Added support for PURGE request method [pbuyle]
  * Fixed `express(1)` generated app `app.address()` before `listening` [mmalecki]

2.5.8 / 2012-02-08
==================

  * Update mkdirp dep. Closes #991

2.5.7 / 2012-02-06
==================

  * Fixed `app.all` duplicate DELETE requests [mscdex]

2.5.6 / 2012-01-13
==================

  * Updated hamljs dev dep. Closes #953

2.5.5 / 2012-01-08
==================

  * Fixed: set `filename` on cached templates [matthewleon]

2.5.4 / 2012-01-02
==================

  * Fixed `express(1)` eol on 0.4.x. Closes #947

2.5.3 / 2011-12-30
==================

  * Fixed `req.is()` when a charset is present

2.5.2 / 2011-12-10
==================

  * Fixed: express(1) LF -> CRLF for windows

2.5.1 / 2011-11-17
==================

  * Changed: updated connect to 1.8.x
  * Removed sass.js support from express(1)

2.5.0 / 2011-10-24
==================

  * Added ./routes dir for generated app by default
  * Added npm install reminder to express(1) app gen
  * Added 0.5.x support
  * Removed `make test-cov` since it wont work with node 0.5.x
  * Fixed express(1) public dir for windows. Closes #866

2.4.7 / 2011-10-05
==================

  * Added mkdirp to express(1). Closes #795
  * Added simple _json-config_ example
  * Added  shorthand for the parsed request's pathname via `req.path`
  * Changed connect dep to 1.7.x to fix npm issue...
  * Fixed `res.redirect()` __HEAD__ support. [reported by xerox]
  * Fixed `req.flash()`, only escape args
  * Fixed absolute path checking on windows. Closes #829 [reported by andrewpmckenzie]

2.4.6 / 2011-08-22
==================

  * Fixed multiple param callback regression. Closes #824 [reported by TroyGoode]

2.4.5 / 2011-08-19
==================

  * Added support for routes to handle errors. Closes #809
  * Added `app.routes.all()`. Closes #803
  * Added "basepath" setting to work in conjunction with reverse proxies etc.
  * Refactored `Route` to use a single array of callbacks
  * Added support for multiple callbacks for `app.param()`. Closes #801
Closes #805
  * Changed: removed .call(self) for route callbacks
  * Dependency: `qs >= 0.3.1`
  * Fixed `res.redirect()` on windows due to `join()` usage. Closes #808

2.4.4 / 2011-08-05
==================

  * Fixed `res.header()` intention of a set, even when `undefined`
  * Fixed `*`, value no longer required
  * Fixed `res.send(204)` support. Closes #771

2.4.3 / 2011-07-14
==================

  * Added docs for `status` option special-case. Closes #739
  * Fixed `options.filename`, exposing the view path to template engines

2.4.2. / 2011-07-06
==================

  * Revert "removed jsonp stripping" for XSS

2.4.1 / 2011-07-06
==================

  * Added `res.json()` JSONP support. Closes #737
  * Added _extending-templates_ example. Closes #730
  * Added "strict routing" setting for trailing slashes
  * Added support for multiple envs in `app.configure()` calls. Closes #735
  * Changed: `res.send()` using `res.json()`
  * Changed: when cookie `path === null` don't default it
  * Changed; default cookie path to "home" setting. Closes #731
  * Removed _pids/logs_ creation from express(1)

2.4.0 / 2011-06-28
==================

  * Added chainable `res.status(code)`
  * Added `res.json()`, an explicit version of `res.send(obj)`
  * Added simple web-service example

2.3.12 / 2011-06-22
==================

  * \#express is now on freenode! come join!
  * Added `req.get(field, param)`
  * Added links to Japanese documentation, thanks @hideyukisaito!
  * Added; the `express(1)` generated app outputs the env
  * Added `content-negotiation` example
  * Dependency: connect >= 1.5.1 < 2.0.0
  * Fixed view layout bug. Closes #720
  * Fixed; ignore body on 304. Closes #701

2.3.11 / 2011-06-04
==================

  * Added `npm test`
  * Removed generation of dummy test file from `express(1)`
  * Fixed; `express(1)` adds express as a dep
  * Fixed; prune on `prepublish`

2.3.10 / 2011-05-27
==================

  * Added `req.route`, exposing the current route
  * Added _package.json_ generation support to `express(1)`
  * Fixed call to `app.param()` function for optional params. Closes #682

2.3.9 / 2011-05-25
==================

  * Fixed bug-ish with `../' in `res.partial()` calls

2.3.8 / 2011-05-24
==================

  * Fixed `app.options()`

2.3.7 / 2011-05-23
==================

  * Added route `Collection`, ex: `app.get('/user/:id').remove();`
  * Added support for `app.param(fn)` to define param logic
  * Removed `app.param()` support for callback with return value
  * Removed module.parent check from express(1) generated app. Closes #670
  * Refactored router. Closes #639

2.3.6 / 2011-05-20
==================

  * Changed; using devDependencies instead of git submodules
  * Fixed redis session example
  * Fixed markdown example
  * Fixed view caching, should not be enabled in development

2.3.5 / 2011-05-20
==================

  * Added export `.view` as alias for `.View`

2.3.4 / 2011-05-08
==================

  * Added `./examples/say`
  * Fixed `res.sendfile()` bug preventing the transfer of files with spaces

2.3.3 / 2011-05-03
==================

  * Added "case sensitive routes" option.
  * Changed; split methods supported per rfc [slaskis]
  * Fixed route-specific middleware when using the same callback function several times

2.3.2 / 2011-04-27
==================

  * Fixed view hints

2.3.1 / 2011-04-26
==================

  * Added `app.match()` as `app.match.all()`
  * Added `app.lookup()` as `app.lookup.all()`
  * Added `app.remove()` for `app.remove.all()`
  * Added `app.remove.VERB()`
  * Fixed template caching collision issue. Closes #644
  * Moved router over from connect and started refactor

2.3.0 / 2011-04-25
==================

  * Added options support to `res.clearCookie()`
  * Added `res.helpers()` as alias of `res.locals()`
  * Added; json defaults to UTF-8 with `res.send()`. Closes #632. [Daniel   * Dependency `connect >= 1.4.0`
  * Changed; auto set Content-Type in res.attachement [Aaron Heckmann]
  * Renamed "cache views" to "view cache". Closes #628
  * Fixed caching of views when using several apps. Closes #637
  * Fixed gotcha invoking `app.param()` callbacks once per route middleware.
Closes #638
  * Fixed partial lookup precedence. Closes #631
Shaw]

2.2.2 / 2011-04-12
==================

  * Added second callback support for `res.download()` connection errors
  * Fixed `filename` option passing to template engine

2.2.1 / 2011-04-04
==================

  * Added `layout(path)` helper to change the layout within a view. Closes #610
  * Fixed `partial()` collection object support.
    Previously only anything with `.length` would work.
    When `.length` is present one must still be aware of holes,
    however now `{ collection: {foo: 'bar'}}` is valid, exposes
    `keyInCollection` and `keysInCollection`.

  * Performance improved with better view caching
  * Removed `request` and `response` locals
  * Changed; errorHandler page title is now `Express` instead of `Connect`

2.2.0 / 2011-03-30
==================

  * Added `app.lookup.VERB()`, ex `app.lookup.put('/user/:id')`. Closes #606
  * Added `app.match.VERB()`, ex `app.match.put('/user/12')`. Closes #606
  * Added `app.VERB(path)` as alias of `app.lookup.VERB()`.
  * Dependency `connect >= 1.2.0`

2.1.1 / 2011-03-29
==================

  * Added; expose `err.view` object when failing to locate a view
  * Fixed `res.partial()` call `next(err)` when no callback is given [reported by aheckmann]
  * Fixed; `res.send(undefined)` responds with 204 [aheckmann]

2.1.0 / 2011-03-24
==================

  * Added `<root>/_?<name>` partial lookup support. Closes #447
  * Added `request`, `response`, and `app` local variables
  * Added `settings` local variable, containing the app's settings
  * Added `req.flash()` exception if `req.session` is not available
  * Added `res.send(bool)` support (json response)
  * Fixed stylus example for latest version
  * Fixed; wrap try/catch around `res.render()`

2.0.0 / 2011-03-17
==================

  * Fixed up index view path alternative.
  * Changed; `res.locals()` without object returns the locals

2.0.0rc3 / 2011-03-17
==================

  * Added `res.locals(obj)` to compliment `res.local(key, val)`
  * Added `res.partial()` callback support
  * Fixed recursive error reporting issue in `res.render()`

2.0.0rc2 / 2011-03-17
==================

  * Changed; `partial()` "locals" are now optional
  * Fixed `SlowBuffer` support. Closes #584 [reported by tyrda01]
  * Fixed .filename view engine option [reported by drudge]
  * Fixed blog example
  * Fixed `{req,res}.app` reference when mounting [Ben Weaver]

2.0.0rc / 2011-03-14
==================

  * Fixed; expose `HTTPSServer` constructor
  * Fixed express(1) default test charset. Closes #579 [reported by secoif]
  * Fixed; default charset to utf-8 instead of utf8 for lame IE [reported by NickP]

2.0.0beta3 / 2011-03-09
==================

  * Added support for `res.contentType()` literal
    The original `res.contentType('.json')`,
    `res.contentType('application/json')`, and `res.contentType('json')`
    will work now.
  * Added `res.render()` status option support back
  * Added charset option for `res.render()`
  * Added `.charset` support (via connect 1.0.4)
  * Added view resolution hints when in development and a lookup fails
  * Added layout lookup support relative to the page view.
    For example while rendering `./views/user/index.jade` if you create
    `./views/user/layout.jade` it will be used in favour of the root layout.
  * Fixed `res.redirect()`. RFC states absolute url [reported by unlink]
  * Fixed; default `res.send()` string charset to utf8
  * Removed `Partial` constructor (not currently used)

2.0.0beta2 / 2011-03-07
==================

  * Added res.render() `.locals` support back to aid in migration process
  * Fixed flash example

2.0.0beta / 2011-03-03
==================

  * Added HTTPS support
  * Added `res.cookie()` maxAge support
  * Added `req.header()` _Referrer_ / _Referer_ special-case, either works
  * Added mount support for `res.redirect()`, now respects the mount-point
  * Added `union()` util, taking place of `merge(clone())` combo
  * Added stylus support to express(1) generated app
  * Added secret to session middleware used in examples and generated app
  * Added `res.local(name, val)` for progressive view locals
  * Added default param support to `req.param(name, default)`
  * Added `app.disabled()` and `app.enabled()`
  * Added `app.register()` support for omitting leading ".", either works
  * Added `res.partial()`, using the same interface as `partial()` within a view. Closes #539
  * Added `app.param()` to map route params to async/sync logic
  * Added; aliased `app.helpers()` as `app.locals()`. Closes #481
  * Added extname with no leading "." support to `res.contentType()`
  * Added `cache views` setting, defaulting to enabled in "production" env
  * Added index file partial resolution, eg: partial('user') may try _views/user/index.jade_.
  * Added `req.accepts()` support for extensions
  * Changed; `res.download()` and `res.sendfile()` now utilize Connect's
    static file server `connect.static.send()`.
  * Changed; replaced `connect.utils.mime()` with npm _mime_ module
  * Changed; allow `req.query` to be pre-defined (via middleware or other parent
  * Changed view partial resolution, now relative to parent view
  * Changed view engine signature. no longer `engine.render(str, options, callback)`, now `engine.compile(str, options) -> Function`, the returned function accepts `fn(locals)`.
  * Fixed `req.param()` bug returning Array.prototype methods. Closes #552
  * Fixed; using `Stream#pipe()` instead of `sys.pump()` in `res.sendfile()`
  * Fixed; using _qs_ module instead of _querystring_
  * Fixed; strip unsafe chars from jsonp callbacks
  * Removed "stream threshold" setting

1.0.8 / 2011-03-01
==================

  * Allow `req.query` to be pre-defined (via middleware or other parent app)
  * "connect": ">= 0.5.0 < 1.0.0". Closes #547
  * Removed the long deprecated __EXPRESS_ENV__ support

1.0.7 / 2011-02-07
==================

  * Fixed `render()` setting inheritance.
    Mounted apps would not inherit "view engine"

1.0.6 / 2011-02-07
==================

  * Fixed `view engine` setting bug when period is in dirname

1.0.5 / 2011-02-05
==================

  * Added secret to generated app `session()` call

1.0.4 / 2011-02-05
==================

  * Added `qs` dependency to _package.json_
  * Fixed namespaced `require()`s for latest connect support

1.0.3 / 2011-01-13
==================

  * Remove unsafe characters from JSONP callback names [Ryan Grove]

1.0.2 / 2011-01-10
==================

  * Removed nested require, using `connect.router`

1.0.1 / 2010-12-29
==================

  * Fixed for middleware stacked via `createServer()`
    previously the `foo` middleware passed to `createServer(foo)`
    would not have access to Express methods such as `res.send()`
    or props like `req.query` etc.

1.0.0 / 2010-11-16
==================

  * Added; deduce partial object names from the last segment.
    For example by default `partial('forum/post', postObject)` will
    give you the _post_ object, providing a meaningful default.
  * Added http status code string representation to `res.redirect()` body
  * Added; `res.redirect()` supporting _text/plain_ and _text/html_ via __Accept__.
  * Added `req.is()` to aid in content negotiation
  * Added partial local inheritance [suggested by masylum]. Closes #102
    providing access to parent template locals.
  * Added _-s, --session[s]_ flag to express(1) to add session related middleware
  * Added _--template_ flag to express(1) to specify the
    template engine to use.
  * Added _--css_ flag to express(1) to specify the
    stylesheet engine to use (or just plain css by default).
  * Added `app.all()` support [thanks aheckmann]
  * Added partial direct object support.
    You may now `partial('user', user)` providing the "user" local,
    vs previously `partial('user', { object: user })`.
  * Added _route-separation_ example since many people question ways
    to do this with CommonJS modules. Also view the _blog_ example for
    an alternative.
  * Performance; caching view path derived partial object names
  * Fixed partial local inheritance precedence. [reported by Nick Poulden] Closes #454
  * Fixed jsonp support; _text/javascript_ as per mailinglist discussion

1.0.0rc4 / 2010-10-14
==================

  * Added _NODE_ENV_ support, _EXPRESS_ENV_ is deprecated and will be removed in 1.0.0
  * Added route-middleware support (very helpful, see the [docs](http://expressjs.com/guide.html#Route-Middleware))
  * Added _jsonp callback_ setting to enable/disable jsonp autowrapping [Dav Glass]
  * Added callback query check on response.send to autowrap JSON objects for simple webservice implementations [Dav Glass]
  * Added `partial()` support for array-like collections. Closes #434
  * Added support for swappable querystring parsers
  * Added session usage docs. Closes #443
  * Added dynamic helper caching. Closes #439 [suggested by maritz]
  * Added authentication example
  * Added basic Range support to `res.sendfile()` (and `res.download()` etc)
  * Changed; `express(1)` generated app using 2 spaces instead of 4
  * Default env to "development" again [aheckmann]
  * Removed _context_ option is no more, use "scope"
  * Fixed; exposing _./support_ libs to examples so they can run without installs
  * Fixed mvc example

1.0.0rc3 / 2010-09-20
==================

  * Added confirmation for `express(1)` app generation. Closes #391
  * Added extending of flash formatters via `app.flashFormatters`
  * Added flash formatter support. Closes #411
  * Added streaming support to `res.sendfile()` using `sys.pump()` when >= "stream threshold"
  * Added _stream threshold_ setting for `res.sendfile()`
  * Added `res.send()` __HEAD__ support
  * Added `res.clearCookie()`
  * Added `res.cookie()`
  * Added `res.render()` headers option
  * Added `res.redirect()` response bodies
  * Added `res.render()` status option support. Closes #425 [thanks aheckmann]
  * Fixed `res.sendfile()` responding with 403 on malicious path
  * Fixed `res.download()` bug; when an error occurs remove _Content-Disposition_
  * Fixed; mounted apps settings now inherit from parent app [aheckmann]
  * Fixed; stripping Content-Length / Content-Type when 204
  * Fixed `res.send()` 204. Closes #419
  * Fixed multiple _Set-Cookie_ headers via `res.header()`. Closes #402
  * Fixed bug messing with error handlers when `listenFD()` is called instead of `listen()`. [thanks guillermo]


1.0.0rc2 / 2010-08-17
==================

  * Added `app.register()` for template engine mapping. Closes #390
  * Added `res.render()` callback support as second argument (no options)
  * Added callback support to `res.download()`
  * Added callback support for `res.sendfile()`
  * Added support for middleware access via `express.middlewareName()` vs `connect.middlewareName()`
  * Added "partials" setting to docs
  * Added default expresso tests to `express(1)` generated app. Closes #384
  * Fixed `res.sendfile()` error handling, defer via `next()`
  * Fixed `res.render()` callback when a layout is used [thanks guillermo]
  * Fixed; `make install` creating ~/.node_libraries when not present
  * Fixed issue preventing error handlers from being defined anywhere. Closes #387

1.0.0rc / 2010-07-28
==================

  * Added mounted hook. Closes #369
  * Added connect dependency to _package.json_

  * Removed "reload views" setting and support code
    development env never caches, production always caches.

  * Removed _param_ in route callbacks, signature is now
    simply (req, res, next), previously (req, res, params, next).
    Use _req.params_ for path captures, _req.query_ for GET params.

  * Fixed "home" setting
  * Fixed middleware/router precedence issue. Closes #366
  * Fixed; _configure()_ callbacks called immediately. Closes #368

1.0.0beta2 / 2010-07-23
==================

  * Added more examples
  * Added; exporting `Server` constructor
  * Added `Server#helpers()` for view locals
  * Added `Server#dynamicHelpers()` for dynamic view locals. Closes #349
  * Added support for absolute view paths
  * Added; _home_ setting defaults to `Server#route` for mounted apps. Closes #363
  * Added Guillermo Rauch to the contributor list
  * Added support for "as" for non-collection partials. Closes #341
  * Fixed _install.sh_, ensuring _~/.node_libraries_ exists. Closes #362 [thanks jf]
  * Fixed `res.render()` exceptions, now passed to `next()` when no callback is given [thanks guillermo]
  * Fixed instanceof `Array` checks, now `Array.isArray()`
  * Fixed express(1) expansion of public dirs. Closes #348
  * Fixed middleware precedence. Closes #345
  * Fixed view watcher, now async [thanks aheckmann]

1.0.0beta / 2010-07-15
==================

  * Re-write
    - much faster
    - much lighter
    - Check [ExpressJS.com](http://expressjs.com) for migration guide and updated docs

0.14.0 / 2010-06-15
==================

  * Utilize relative requires
  * Added Static bufferSize option [aheckmann]
  * Fixed caching of view and partial subdirectories [aheckmann]
  * Fixed mime.type() comments now that ".ext" is not supported
  * Updated haml submodule
  * Updated class submodule
  * Removed bin/express

0.13.0 / 2010-06-01
==================

  * Added node v0.1.97 compatibility
  * Added support for deleting cookies via Request#cookie('key', null)
  * Updated haml submodule
  * Fixed not-found page, now using using charset utf-8
  * Fixed show-exceptions page, now using using charset utf-8
  * Fixed view support due to fs.readFile Buffers
  * Changed; mime.type() no longer accepts ".type" due to node extname() changes

0.12.0 / 2010-05-22
==================

  * Added node v0.1.96 compatibility
  * Added view `helpers` export which act as additional local variables
  * Updated haml submodule
  * Changed ETag; removed inode, modified time only
  * Fixed LF to CRLF for setting multiple cookies
  * Fixed cookie complation; values are now urlencoded
  * Fixed cookies parsing; accepts quoted values and url escaped cookies

0.11.0 / 2010-05-06
==================

  * Added support for layouts using different engines
    - this.render('page.html.haml', { layout: 'super-cool-layout.html.ejs' })
    - this.render('page.html.haml', { layout: 'foo' }) // assumes 'foo.html.haml'
    - this.render('page.html.haml', { layout: false }) // no layout
  * Updated ext submodule
  * Updated haml submodule
  * Fixed EJS partial support by passing along the context. Issue #307

0.10.1 / 2010-05-03
==================

  * Fixed binary uploads.

0.10.0 / 2010-04-30
==================

  * Added charset support via Request#charset (automatically assigned to 'UTF-8' when respond()'s
    encoding is set to 'utf8' or 'utf-8'.
  * Added "encoding" option to Request#render(). Closes #299
  * Added "dump exceptions" setting, which is enabled by default.
  * Added simple ejs template engine support
  * Added error response support for text/plain, application/json. Closes #297
  * Added callback function param to Request#error()
  * Added Request#sendHead()
  * Added Request#stream()
  * Added support for Request#respond(304, null) for empty response bodies
  * Added ETag support to Request#sendfile()
  * Added options to Request#sendfile(), passed to fs.createReadStream()
  * Added filename arg to Request#download()
  * Performance enhanced due to pre-reversing plugins so that plugins.reverse() is not called on each request
  * Performance enhanced by preventing several calls to toLowerCase() in Router#match()
  * Changed; Request#sendfile() now streams
  * Changed; Renamed Request#halt() to Request#respond(). Closes #289
  * Changed; Using sys.inspect() instead of JSON.encode() for error output
  * Changed; run() returns the http.Server instance. Closes #298
  * Changed; Defaulting Server#host to null (INADDR_ANY)
  * Changed; Logger "common" format scale of 0.4f
  * Removed Logger "request" format
  * Fixed; Catching ENOENT in view caching, preventing error when "views/partials" is not found
  * Fixed several issues with http client
  * Fixed Logger Content-Length output
  * Fixed bug preventing Opera from retaining the generated session id. Closes #292

0.9.0 / 2010-04-14
==================

  * Added DSL level error() route support
  * Added DSL level notFound() route support
  * Added Request#error()
  * Added Request#notFound()
  * Added Request#render() callback function. Closes #258
  * Added "max upload size" setting
  * Added "magic" variables to collection partials (\_\_index\_\_, \_\_length\_\_, \_\_isFirst\_\_, \_\_isLast\_\_). Closes #254
  * Added [haml.js](http://github.com/visionmedia/haml.js) submodule; removed haml-js
  * Added callback function support to Request#halt() as 3rd/4th arg
  * Added preprocessing of route param wildcards using param(). Closes #251
  * Added view partial support (with collections etc)
  * Fixed bug preventing falsey params (such as ?page=0). Closes #286
  * Fixed setting of multiple cookies. Closes #199
  * Changed; view naming convention is now NAME.TYPE.ENGINE (for example page.html.haml)
  * Changed; session cookie is now httpOnly
  * Changed; Request is no longer global
  * Changed; Event is no longer global
  * Changed; "sys" module is no longer global
  * Changed; moved Request#download to Static plugin where it belongs
  * Changed; Request instance created before body parsing. Closes #262
  * Changed; Pre-caching views in memory when "cache view contents" is enabled. Closes #253
  * Changed; Pre-caching view partials in memory when "cache view partials" is enabled
  * Updated support to node --version 0.1.90
  * Updated dependencies
  * Removed set("session cookie") in favour of use(Session, { cookie: { ... }})
  * Removed utils.mixin(); use Object#mergeDeep()

0.8.0 / 2010-03-19
==================

  * Added coffeescript example app. Closes #242
  * Changed; cache api now async friendly. Closes #240
  * Removed deprecated 'express/static' support. Use 'express/plugins/static'

0.7.6 / 2010-03-19
==================

  * Added Request#isXHR. Closes #229
  * Added `make install` (for the executable)
  * Added `express` executable for setting up simple app templates
  * Added "GET /public/*" to Static plugin, defaulting to <root>/public
  * Added Static plugin
  * Fixed; Request#render() only calls cache.get() once
  * Fixed; Namespacing View caches with "view:"
  * Fixed; Namespacing Static caches with "static:"
  * Fixed; Both example apps now use the Static plugin
  * Fixed set("views"). Closes #239
  * Fixed missing space for combined log format
  * Deprecated Request#sendfile() and 'express/static'
  * Removed Server#running

0.7.5 / 2010-03-16
==================

  * Added Request#flash() support without args, now returns all flashes
  * Updated ext submodule

0.7.4 / 2010-03-16
==================

  * Fixed session reaper
  * Changed; class.js replacing js-oo Class implementation (quite a bit faster, no browser cruft)

0.7.3 / 2010-03-16
==================

  * Added package.json
  * Fixed requiring of haml / sass due to kiwi removal

0.7.2 / 2010-03-16
==================

  * Fixed GIT submodules (HAH!)

0.7.1 / 2010-03-16
==================

  * Changed; Express now using submodules again until a PM is adopted
  * Changed; chat example using millisecond conversions from ext

0.7.0 / 2010-03-15
==================

  * Added Request#pass() support (finds the next matching route, or the given path)
  * Added Logger plugin (default "common" format replaces CommonLogger)
  * Removed Profiler plugin
  * Removed CommonLogger plugin

0.6.0 / 2010-03-11
==================

  * Added seed.yml for kiwi package management support
  * Added HTTP client query string support when method is GET. Closes #205

  * Added support for arbitrary view engines.
    For example "foo.engine.html" will now require('engine'),
    the exports from this module are cached after the first require().

  * Added async plugin support

  * Removed usage of RESTful route funcs as http client
    get() etc, use http.get() and friends

  * Removed custom exceptions

0.5.0 / 2010-03-10
==================

  * Added ext dependency (library of js extensions)
  * Removed extname() / basename() utils. Use path module
  * Removed toArray() util. Use arguments.values
  * Removed escapeRegexp() util. Use RegExp.escape()
  * Removed process.mixin() dependency. Use utils.mixin()
  * Removed Collection
  * Removed ElementCollection
  * Shameless self promotion of ebook "Advanced JavaScript" (http://dev-mag.com)  ;)

0.4.0 / 2010-02-11
==================

  * Added flash() example to sample upload app
  * Added high level restful http client module (express/http)
  * Changed; RESTful route functions double as HTTP clients. Closes #69
  * Changed; throwing error when routes are added at runtime
  * Changed; defaulting render() context to the current Request. Closes #197
  * Updated haml submodule

0.3.0 / 2010-02-11
==================

  * Updated haml / sass submodules. Closes #200
  * Added flash message support. Closes #64
  * Added accepts() now allows multiple args. fixes #117
  * Added support for plugins to halt. Closes #189
  * Added alternate layout support. Closes #119
  * Removed Route#run(). Closes #188
  * Fixed broken specs due to use(Cookie) missing

0.2.1 / 2010-02-05
==================

  * Added "plot" format option for Profiler (for gnuplot processing)
  * Added request number to Profiler plugin
  * Fixed binary encoding for multi-part file uploads, was previously defaulting to UTF8
  * Fixed issue with routes not firing when not files are present. Closes #184
  * Fixed process.Promise -> events.Promise

0.2.0 / 2010-02-03
==================

  * Added parseParam() support for name[] etc. (allows for file inputs with "multiple" attr) Closes #180
  * Added Both Cache and Session option "reapInterval" may be "reapEvery". Closes #174
  * Added expiration support to cache api with reaper. Closes #133
  * Added cache Store.Memory#reap()
  * Added Cache; cache api now uses first class Cache instances
  * Added abstract session Store. Closes #172
  * Changed; cache Memory.Store#get() utilizing Collection
  * Renamed MemoryStore -> Store.Memory
  * Fixed use() of the same plugin several time will always use latest options. Closes #176

0.1.0 / 2010-02-03
==================

  * Changed; Hooks (before / after) pass request as arg as well as evaluated in their context
  * Updated node support to 0.1.27 Closes #169
  * Updated dirname(__filename) -> __dirname
  * Updated libxmljs support to v0.2.0
  * Added session support with memory store / reaping
  * Added quick uid() helper
  * Added multi-part upload support
  * Added Sass.js support / submodule
  * Added production env caching view contents and static files
  * Added static file caching. Closes #136
  * Added cache plugin with memory stores
  * Added support to StaticFile so that it works with non-textual files.
  * Removed dirname() helper
  * Removed several globals (now their modules must be required)

0.0.2 / 2010-01-10
==================

  * Added view benchmarks; currently haml vs ejs
  * Added Request#attachment() specs. Closes #116
  * Added use of node's parseQuery() util. Closes #123
  * Added `make init` for submodules
  * Updated Haml
  * Updated sample chat app to show messages on load
  * Updated libxmljs parseString -> parseHtmlString
  * Fixed `make init` to work with older versions of git
  * Fixed specs can now run independent specs for those who cant build deps. Closes #127
  * Fixed issues introduced by the node url module changes. Closes 126.
  * Fixed two assertions failing due to Collection#keys() returning strings
  * Fixed faulty Collection#toArray() spec due to keys() returning strings
  * Fixed `make test` now builds libxmljs.node before testing

0.0.1 / 2010-01-03
==================

  * Initial release
