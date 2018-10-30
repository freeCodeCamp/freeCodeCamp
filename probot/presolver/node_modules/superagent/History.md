
# 3.8.3 (2018-04-29)

 * Add flags for 201 & 422 responses (Nikhil Fadnis)
 * Emit progress event while uploading Node `Buffer` via send method (Sergey Akhalkov)
 * Fixed setting correct cookies for redirects (Damien Clark)
 * Replace .catch with ['catch'] for IE9 Support (Miguel Stevens)

# 3.8.2 (2017-12-09)

 * Fixed handling of exceptions thrown from callbacks
 * Stricter matching of `+json` MIME types.

# 3.8.1 (2017-11-08)

 * Clear authorization header on cross-domain redirect

# 3.8.0

 * Added support for "globally" defined headers and event handlers via `superagent.agent()`. It now remembers default settings for all its requests.
 * Added optional callback to `.retry()` (Alexander Murphy)
 * Unified auth args handling in node/browser (Edmundo Alvarez)
 * Fixed error handling in zlib pipes (Kornel)
 * Documented that 3xx status codes are errors (Mickey Reiss)

# 3.7.0 (2017-10-17)

 * Limit maximum response size. Prevents zip bombs (Kornel)
 * Catch and pass along errors in `.ok()` callback (Jeremy Ruppel)
 * Fixed parsing of XHR headers without a newline (nsf)

# 3.6.2 (2017-10-02)

 * Upgrade MIME type dependency to a newer, secure version
 * Recognize PDF MIME as binary
 * Fix for error in subsequent require() calls (Steven de Salas)

# 3.6.0 (2017-08-20)

 * Support disabling TCP_NODELAY option (#1240) (xiamengyu)
 * Send payload in query string for GET and HEAD shorthand API (Peter Lyons)
 * Support passphrase with pfx certificate (Paul Westerdale (ABRS Limited))
 * Documentation improvements (Peter Lyons)
 * Fixed duplicated query string params (#1200) (Kornel)

# 3.5.1 (2017-03-18)

 * Allow crossDomain errors to be retried (#1194) (Michael Olson)
 * Read responseType property from the correct object (Julien Dupouy)
 * Check for ownProperty before adding header (Lucas Vieira)

# 3.5.0 (2017-02-23)

 * Add errno to distinguish between request timeout and body download timeout (#1184) (Kornel Lesiński)
 * Warn about bogus timeout options (#1185) (Kornel Lesiński)

# 3.4.4 (2017-02-17)

 * Treat videos like images (Kornel Lesiński)
 * Avoid renaming module (Kornel Lesiński)

# 3.4.3 (2017-02-14)

 * Fixed being able to define own parsers when their mime type starts with `text/` (Damien Clark)
 * `withCredentials(false)` (Andy Woods)
 * Use `formData.on` instead of `.once` (Kornel Lesiński)
 * Ignore `attach("file",null)` (Kornel Lesiński)

# 3.4.1 (2017-01-29)

 * Allow `retry()` and `retry(0)` (Alexander Pope)
 * Allow optional body/data in DELETE requests (Alpha Shuro)
 * Fixed query string on retried requests (Kornel Lesiński)

# 3.4.0 (2017-01-25)

 * New `.retry(n)` method and `err.retries` (Alexander Pope)
 * Docs for HTTPS request (Jun Wan Goh)

# 3.3.1 (2016-12-17)

  * Fixed "double callback bug" warning on timeouts of gzipped responses

# 3.3.0 (2016-12-14)

 * Added `.ok(callback)` that allows customizing which responses are errors (Kornel Lesiński)
 * Added `.responseType()` to Node version (Kornel Lesiński)
 * Added `.parse()` to browser version (jakepearson)
 * Fixed parse error when using `responseType('blob')` (Kornel Lesiński)

# 3.2.0 (2016-12-11)

 * Added `.timeout({response:ms})`, which allows limiting maximum response time independently from total download time (Kornel Lesiński)
 * Added warnings when `.end()` is called more than once (Kornel Lesiński)
 * Added `response.links` to browser version (Lukas Eipert)
 * `btoa` is no longer required in IE9 (Kornel Lesiński)
 * Fixed `.sortQuery()` on URLs without query strings (Kornel Lesiński)
 * Refactored common response code into `ResponseBase` (Lukas Eipert)

# 3.1.0 (2016-11-28)

 * Added `.sortQuery()` (vicanso)
 * Added support for arrays and bools in `.field()` (Kornel Lesiński)
 * Made `superagent.Request` subclassable without need to patch all static methods (Kornel Lesiński)

# 3.0.0 (2016-11-19)

 * Dropped support for Node 0.x. Please upgrade to at least Node 4.
 * Dropped support for componentjs (Damien Caselli)
 * Removed deprecated `.part()`/`superagent.Part` APIs.
 * Removed unreliable `.body` property on internal response object used by unbuffered parsers.
   Note: the normal `response.body` is unaffected.
 * Multiple `.send()` calls mixing `Buffer`/`Blob` and JSON data are not possible and will now throw instead of messing up the data.
 * Improved `.send()` data object type check (Fernando Mendes)
 * Added common prototype for Node and browser versions (Andreas Helmberger)
 * Added `http+unix:` schema to support Unix sockets (Yuki KAN)
 * Added full `attach` options parameter in the Node version (Lapo Luchini)
 * Added `pfx` TLS option with new `pfx()` method. (Reid Burke)
 * Internally changed `.on` to `.once` to prevent possible memory leaks (Matt Blair)
 * Made all errors reported as an event (Kornel Lesiński)

# 2.3.0 (2016-09-20)

 * Enabled `.field()` to handle objects (Affan Shahid)
 * Added authentication with client certificates (terusus)
 * Added `.catch()` for more Promise-like interface (Maxim Samoilov, Kornel Lesiński)
 * Silenced errors from incomplete gzip streams for compatibility with web browsers (Kornel Lesiński)
 * Fixed `event.direction` in uploads (Kornel Lesiński)
 * Fixed returned value of overwritten response object's `on()` method (Juan Dopazo)

# 2.2.0 (2016-08-13)

 * Added `timedout` property to node Request instance (Alexander Pope)
 * Unified `null` querystring values in node and browser environments. (George Chung)

# 2.1.0 (2016-06-14)

 * Refactored async parsers. Now the `end` callback waits for async parsers to finish (Kornel Lesiński)
 * Errors thrown in `.end()` callback don't cause the callback to be called twice (Kornel Lesiński)
 * Added `headers` to `toJSON()` (Tao)

# 2.0.0 (2016-05-29)

## Breaking changes

Breaking changes are in rarely used functionality, so we hope upgrade will be smooth for most users.

  * Browser: The `.parse()` method has been renamed to `.serialize()` for consistency with NodeJS version.
  * Browser: Query string keys without a value used to be parsed as `'undefined'`, now their value is `''` (empty string) (shura, Kornel Lesiński).
  * NodeJS: The `redirect` event is called after new query string and headers have been set and is allowed to override the request URL (Kornel Lesiński)
  * `.then()` returns a real `Promise`. Note that use of superagent with promises now requires a global `Promise` object.
    If you target Internet Explorer or Node 0.10, you'll need `require('es6-promise').polyfill()` or similar.
  * Upgraded all dependencies (Peter Lyons)
  * Renamed properties documented as `@api private` to have `_prefixed` names (Kornel Lesiński)

## Probably not breaking changes:

  * Extracted common functions to request-base (Peter Lyons)
  * Fixed race condition in pipe tests (Peter Lyons)
  * Handle `FormData` error events (scriptype)
  * Fixed wrong jsdoc of Request#attach (George Chung)
  * Updated and improved tests (Peter Lyons)
  * `request.head()` supports `.redirects(5)` call (Kornel Lesiński)
  * `response` event is also emitted when using `.pipe()`

# 1.8.2 (2016-03-20)

  * Fixed handling of HTTP status 204 with content-encoding: gzip (Andrew Shelton)
  * Handling of FormData error events (scriptype)
  * Fixed parsing of `vnd+json` MIME types (Kornel Lesiński)
  * Aliased browser implementation of `.parse()` as `.serialize()` for forward compatibility

# 1.8.1 (2016-03-14)

  * Fixed form-data incompatibility with IE9

# 1.8.0 (2016-03-09)

 * Extracted common code into request-base class (Peter Lyons)
   * It does not affect the public API, but please let us know if you notice any plugins/subclasses breaking!
 * Added option `{type:'auto'}` to `auth` method, which enables browser-native auth types (Jungle, Askar Yusupov)
 * Added `responseType()` to set XHR `responseType` (chris)
 * Switched to form-data for browserify-compatible `FormData` (Peter Lyons)
 * Added `statusCode` to error response when JSON response is malformed (mattdell)
 * Prevented TCP port conflicts in all tests (Peter Lyons)
 * Updated form-data dependency

# 1.7.2 (2016-01-26)

 * Fix case-sensitivity of header fields introduced by a4ddd6a. (Edward J. Jinotti)
 * bump extend dependency, as former version did not contain any license information (Lukas Eipert)

# 1.7.1 (2016-01-21)

 * Fixed a conflict with express when using npm 3.x (Glenn)
 * Fixed redirects after a multipart/form-data POST request (cyclist2)

# 1.7.0 (2016-01-18)

 * When attaching files, read default filename from the `File` object (JD Isaacks)
 * Add `direction` property to `progress` events (Joseph Dykstra)
 * Update component-emitter & formidable (Kornel Lesiński)
 * Don't re-encode query string needlessly (Ruben Verborgh)
 * ensure querystring is appended when doing `stream.pipe(request)` (Keith Grennan)
 * change set header function, not call `this.request()` until call `this.end()` (vicanso)
 * Add no-op `withCredentials` to Node API (markdalgleish)
 * fix `delete` breaking on ie8 (kenjiokabe)
 * Don't let request error override responses (Clay Reimann)
 * Increased number of tests shared between node and client (Kornel Lesiński)

# 1.6.0/1.6.1 (2015-12-09)

 * avoid misleading CORS error message
 * added 'progress' event on file/form upload in Node (Olivier Lalonde)
 * return raw response if the response parsing fails (Rei Colina)
 * parse content-types ending with `+json` as JSON (Eiryyy)
 * fix to avoid throwing errors on aborted requests (gjurgens)
 * retain cookies on redirect when hosts match (Tom Conroy)
 * added Bower manifest (Johnny Freeman)
 * upgrade to latest cookiejar (Andy Burke)

# 1.5.0 (2015-11-30)

 * encode array values as `key=1&key=2&key=3` etc... (aalpern, Davis Kim)
 * avoid the error which is omitted from 'socket hang up'
 * faster JSON parsing, handling of zlib errors (jbellenger)
 * fix IE11 sends 'undefined' string if data was undefined (Vadim Goncharov)
 * alias `del()` method as `delete()` (Aaron Krause)
 * revert Request#parse since it was actually Response#parse

# 1.4.0 (2015-09-14)

 * add Request#parse method to client library
 * add missing statusCode in client response
 * don't apply JSON heuristics if a valid parser is found
 * fix detection of root object for webworkers

# 1.3.0 (2015-08-05)

 * fix incorrect content-length of data set to buffer
 * serialize request data takes into account charsets
 * add basic promise support via a `then` function

# 1.2.0 (2015-04-13)

 * add progress events to downlodas
 * make usable in webworkers
 * add support for 308 redirects
 * update node-form-data dependency
 * update to work in react native
 * update node-mime dependency

# 1.1.0 (2015-03-13)

 * Fix responseType checks without xhr2 and ie9 tests (rase-)
 * errors have .status and .response fields if applicable (defunctzombie)
 * fix end callback called before saving cookies (rase-)

1.0.0 / 2015-03-08
==================

 * All non-200 responses are treated as errors now. (The callback is called with an error when the response has a status < 200 or >= 300 now. In previous versions this would not have raised an error and the client would have to check the `res` object. See [#283](https://github.com/visionmedia/superagent/issues/283).
 * keep timeouts intact across redirects (hopkinsth)
 * handle falsy json values (themaarten)
 * fire response events in browser version (Schoonology)
 * getXHR exported in client version (KidsKilla)
 * remove arity check on `.end()` callbacks (defunctzombie)
 * avoid setting content-type for host objects (rexxars)
 * don't index array strings in querystring (travisjeffery)
 * fix pipe() with redirects (cyrilis)
 * add xhr2 file download (vstirbu)
 * set default response type to text/plain if not specified (warrenseine)

0.21.0 / 2014-11-11
==================

 * Trim text before parsing json (gjohnson)
 * Update tests to express 4 (gaastonsr)
 * Prevent double callback when error is thrown (pgn-vole)
 * Fix missing clearTimeout (nickdima)
 * Update debug (TooTallNate)

0.20.0 / 2014-10-02
==================

 * Add toJSON() to request and response instances. (yields)
 * Prevent HEAD requests from getting parsed. (gjohnson)
 * Update debug. (TooTallNate)

0.19.1 / 2014-09-24
==================

 * Fix basic auth issue when password is falsey value. (gjohnson)

0.19.0 / 2014-09-24
==================

 * Add unset() to browser. (shesek)
 * Prefer XHR over ActiveX. (omeid)
 * Catch parse errors. (jacwright)
 * Update qs dependency. (wercker)
 * Add use() to node. (Financial-Times)
 * Add response text to errors. (yields)
 * Don't send empty cookie headers. (undoZen)
 * Don't parse empty response bodies. (DveMac)
 * Use hostname when setting cookie host. (prasunsultania)

0.18.2 / 2014-07-12
==================

 * Handle parser errors. (kof)
 * Ensure not to use default parsers when there is a user defined one. (kof)

0.18.1 / 2014-07-05
==================

 * Upgrade cookiejar dependency (juanpin)
 * Support image mime types (nebulade)
 * Make .agent chainable (kof)
 * Upgrade debug (TooTallNate)
 * Fix docs (aheckmann)

0.18.0 / 2014-04-29
===================

* Use "form-data" module for the multipart/form-data implementation. (TooTallNate)
* Add basic `field()` and `attach()` functions for HTML5 FormData. (TooTallNate)
* Deprecate `part()`. (TooTallNate)
* Set default user-agent header. (bevacqua)
* Add `unset()` method for removing headers. (bevacqua)
* Update cookiejar. (missinglink)
* Fix response error formatting. (shesek)

0.17.0 / 2014-03-06
===================

 * supply uri malformed error to the callback (yields)
 * add request event (yields)
 * allow simple auth (yields)
 * add request event (yields)
 * switch to component/reduce (visionmedia)
 * fix part content-disposition (mscdex)
 * add browser testing via zuul (defunctzombie)
 * adds request.use() (johntron)

0.16.0 / 2014-01-07
==================

 * remove support for 0.6 (superjoe30)
 * fix CORS withCredentials (wejendorp)
 * add "test" script (superjoe30)
 * add request .accept() method (nickl-)
 * add xml to mime types mappings (nickl-)
 * fix parse body error on HEAD requests (gjohnson)
 * fix documentation typos (matteofigus)
 * fix content-type + charset (bengourley)
 * fix null values on query parameters (cristiandouce)

0.15.7 / 2013-10-19
==================

 * pin should.js to 1.3.0 due to breaking change in 2.0.x
 * fix browserify regression

0.15.5 / 2013-10-09
==================

 * add browser field to support browserify
 * fix .field() value number support

0.15.4 / 2013-07-09
==================

 * node: add a Request#agent() function to set the http Agent to use

0.15.3 / 2013-07-05
==================

 * fix .pipe() unzipping on more recent nodes. Closes #240
 * fix passing an empty object to .query() no longer appends "?"
 * fix formidable error handling
 * update formidable

0.15.2 / 2013-07-02
==================

 * fix: emit 'end' when piping.

0.15.1 / 2013-06-26
==================

 * add try/catch around parseLinks

0.15.0 / 2013-06-25
==================

 * make `Response#toError()` have a more meaningful `message`

0.14.9 / 2013-06-15
==================

 * add debug()s to the node client
 * add .abort() method to node client

0.14.8 / 2013-06-13
==================

 * set .agent = false always
 * remove X-Requested-With. Closes #189

0.14.7 / 2013-06-06
==================

 * fix unzip error handling

0.14.6 / 2013-05-23
==================

 * fix HEAD unzip bug

0.14.5 / 2013-05-23
==================

 * add flag to ensure the callback is __never__ invoked twice

0.14.4 / 2013-05-22
==================

 * add superagent.js build output
 * update qs
 * update emitter-component
 * revert "add browser field to support browserify" see GH-221

0.14.3 / 2013-05-18
==================

 * add browser field to support browserify

0.14.2/ 2013-05-07
==================

  * add host object check to fix serialization of File/Blobs etc as json

0.14.1 / 2013-04-09
==================

  * update qs

0.14.0 / 2013-04-02
==================

  * add client-side basic auth
  * fix retaining of .set() header field case

0.13.0 / 2013-03-13
==================

  * add progress events to client
  * add simple example
  * add res.headers as alias of res.header for browser client
  * add res.get(field) to node/client

0.12.4 / 2013-02-11
==================

  * fix get content-type even if can't get other headers in firefox. fixes #181

0.12.3 / 2013-02-11
==================

  * add quick "progress" event support

0.12.2 / 2013-02-04
==================

  * add test to check if response acts as a readable stream
  * add ReadableStream in the Response prototype.
  * add test to assert correct redirection when the host changes in the location header.
  * add default Accept-Encoding. Closes #155
  * fix req.pipe() return value of original stream for node parity. Closes #171
  * remove the host header when cleaning headers to properly follow the redirection.

0.12.1 / 2013-01-10
==================

  * add x-domain error handling

0.12.0 / 2013-01-04
==================

  * add header persistence on redirects

0.11.0 / 2013-01-02
==================

  * add .error Error object. Closes #156
  * add forcing of res.text removal for FF HEAD responses. Closes #162
  * add reduce component usage. Closes #90
  * move better-assert dep to development deps

0.10.0 / 2012-11-14
==================

  * add req.timeout(ms) support for the client

0.9.10 / 2012-11-14
==================

  * fix client-side .query(str) support

0.9.9 / 2012-11-14
==================

  * add .parse(fn) support
  * fix socket hangup with dates in querystring. Closes #146
  * fix socket hangup "error" event when a callback of arity 2 is provided

0.9.8 / 2012-11-03
==================

  * add emission of error from `Request#callback()`
  * add a better fix for nodes weird socket hang up error
  * add PUT/POST/PATCH data support to client short-hand functions
  * add .license property to component.json
  * change client portion to build using component(1)
  * fix GET body support [guille]

0.9.7 / 2012-10-19
==================

  * fix `.buffer()` `res.text` when no parser matches

0.9.6 / 2012-10-17
==================

  * change: use `this` when `window` is undefined
  * update to new component spec [juliangruber]
  * fix emission of "data" events for compressed responses without encoding. Closes #125

0.9.5 / 2012-10-01
==================

  * add field name to .attach()
  * add text "parser"
  * refactor isObject()
  * remove wtf isFunction() helper

0.9.4 / 2012-09-20
==================

  * fix `Buffer` responses [TooTallNate]
  * fix `res.type` when a "type" param is present [TooTallNate]

0.9.3 / 2012-09-18
==================

  * remove __GET__ `.send()` == `.query()` special-case (__API__ change !!!)

0.9.2 / 2012-09-17
==================

  * add `.aborted` prop
  * add `.abort()`. Closes #115

0.9.1 / 2012-09-07
==================

  * add `.forbidden` response property
  * add component.json
  * change emitter-component to 0.0.5
  * fix client-side tests

0.9.0 / 2012-08-28
==================

  * add `.timeout(ms)`. Closes #17

0.8.2 / 2012-08-28
==================

  * fix pathname relative redirects. Closes #112

0.8.1 / 2012-08-21
==================

  * fix redirects when schema is specified

0.8.0 / 2012-08-19
==================

  * add `res.buffered` flag
  * add buffering of text/*, json and forms only by default. Closes #61
  * add `.buffer(false)` cancellation
  * add cookie jar support [hunterloftis]
  * add agent functionality [hunterloftis]

0.7.0 / 2012-08-03
==================

  * allow `query()` to be called after the internal `req` has been created [tootallnate]

0.6.0 / 2012-07-17
==================

  * add `res.send('foo=bar')` default of "application/x-www-form-urlencoded"

0.5.1 / 2012-07-16
==================

  * add "methods" dep
  * add `.end()` arity check to node callbacks
  * fix unzip support due to weird node internals

0.5.0 / 2012-06-16
==================

  * Added "Link" response header field parsing, exposing `res.links`

0.4.3 / 2012-06-15
==================

  * Added 303, 305 and 307 as redirect status codes [slaskis]
  * Fixed passing an object as the url

0.4.2 / 2012-06-02
==================

  * Added component support
  * Fixed redirect data

0.4.1 / 2012-04-13
==================

  * Added HTTP PATCH support
  * Fixed: GET / HEAD when following redirects. Closes #86
  * Fixed Content-Length detection for multibyte chars

0.4.0 / 2012-03-04
==================

  * Added `.head()` method [browser]. Closes #78
  * Added `make test-cov` support
  * Added multipart request support. Closes #11
  * Added all methods that node supports. Closes #71
  * Added "response" event providing a Response object. Closes #28
  * Added `.query(obj)`. Closes #59
  * Added `res.type` (browser). Closes #54
  * Changed: default `res.body` and `res.files` to {}
  * Fixed: port existing query-string fix (browser). Closes #57

0.3.0 / 2012-01-24
==================

  * Added deflate/gzip support [guillermo]
  * Added `res.type` (Content-Type void of params)
  * Added `res.statusCode` to mirror node
  * Added `res.headers` to mirror node
  * Changed: parsers take callbacks
  * Fixed optional schema support. Closes #49

0.2.0 / 2012-01-05
==================

  * Added url auth support
  * Added `.auth(username, password)`
  * Added basic auth support [node]. Closes #41
  * Added `make test-docs`
  * Added guillermo's EventEmitter. Closes #16
  * Removed `Request#data()` for SS, renamed to `send()`
  * Removed `Request#data()` from client, renamed to `send()`
  * Fixed array support. [browser]
  * Fixed array support. Closes #35 [node]
  * Fixed `EventEmitter#emit()`

0.1.3 / 2011-10-25
==================

  * Added error to callback
  * Bumped node dep for 0.5.x

0.1.2 / 2011-09-24
==================

  * Added markdown documentation
  * Added `request(url[, fn])` support to the client
  * Added `qs` dependency to package.json
  * Added options for `Request#pipe()`
  * Added support for `request(url, callback)`
  * Added `request(url)` as shortcut for `request.get(url)`
  * Added `Request#pipe(stream)`
  * Added inherit from `Stream`
  * Added multipart support
  * Added ssl support (node)
  * Removed Content-Length field from client
  * Fixed buffering, `setEncoding()` to utf8 [reported by stagas]
  * Fixed "end" event when piping

0.1.1 / 2011-08-20
==================

  * Added `res.redirect` flag (node)
  * Added redirect support (node)
  * Added `Request#redirects(n)` (node)
  * Added `.set(object)` header field support
  * Fixed `Content-Length` support

0.1.0 / 2011-08-09
==================

  * Added support for multiple calls to `.data()`
  * Added support for `.get(uri, obj)`
  * Added GET `.data()` querystring support
  * Added IE{6,7,8} support [alexyoung]

0.0.1 / 2011-08-05
==================

  * Initial commit

