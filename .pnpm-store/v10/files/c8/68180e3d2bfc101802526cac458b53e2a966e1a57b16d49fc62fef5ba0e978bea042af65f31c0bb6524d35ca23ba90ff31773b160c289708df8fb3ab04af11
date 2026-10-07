1.20.1 / 2022-10-06
===================

  * deps: qs@6.11.0
  * perf: remove unnecessary object clone

1.20.0 / 2022-04-02
===================

  * Fix error message for json parse whitespace in `strict`
  * Fix internal error when inflated body exceeds limit
  * Prevent loss of async hooks context
  * Prevent hanging when request already read
  * deps: depd@2.0.0
    - Replace internal `eval` usage with `Function` constructor
    - Use instance methods on `process` to check for listeners
  * deps: http-errors@2.0.0
    - deps: depd@2.0.0
    - deps: statuses@2.0.1
  * deps: on-finished@2.4.1
  * deps: qs@6.10.3
  * deps: raw-body@2.5.1
    - deps: http-errors@2.0.0

1.19.2 / 2022-02-15
===================

  * deps: bytes@3.1.2
  * deps: qs@6.9.7
    * Fix handling of `__proto__` keys
  * deps: raw-body@2.4.3
    - deps: bytes@3.1.2

1.19.1 / 2021-12-10
===================

  * deps: bytes@3.1.1
  * deps: http-errors@1.8.1
    - deps: inherits@2.0.4
    - deps: toidentifier@1.0.1
    - deps: setprototypeof@1.2.0
  * deps: qs@6.9.6
  * deps: raw-body@2.4.2
    - deps: bytes@3.1.1
    - deps: http-errors@1.8.1
  * deps: safe-buffer@5.2.1
  * deps: type-is@~1.6.18

1.19.0 / 2019-04-25
===================

  * deps: bytes@3.1.0
    - Add petabyte (`pb`) support
  * deps: http-errors@1.7.2
    - Set constructor name when possible
    - deps: setprototypeof@1.1.1
    - deps: statuses@'>= 1.5.0 < 2'
  * deps: iconv-lite@0.4.24
    - Added encoding MIK
  * deps: qs@6.7.0
    - Fix parsing array brackets after index
  * deps: raw-body@2.4.0
    - deps: bytes@3.1.0
    - deps: http-errors@1.7.2
    - deps: iconv-lite@0.4.24
  * deps: type-is@~1.6.17
    - deps: mime-types@~2.1.24
    - perf: prevent internal `throw` on invalid type

1.18.3 / 2018-05-14
===================

  * Fix stack trace for strict json parse error
  * deps: depd@~1.1.2
    - perf: remove argument reassignment
  * deps: http-errors@~1.6.3
    - deps: depd@~1.1.2
    - deps: setprototypeof@1.1.0
    - deps: statuses@'>= 1.3.1 < 2'
  * deps: iconv-lite@0.4.23
    - Fix loading encoding with year appended
    - Fix deprecation warnings on Node.js 10+
  * deps: qs@6.5.2
  * deps: raw-body@2.3.3
    - deps: http-errors@1.6.3
    - deps: iconv-lite@0.4.23
  * deps: type-is@~1.6.16
    - deps: mime-types@~2.1.18

1.18.2 / 2017-09-22
===================

  * deps: debug@2.6.9
  * perf: remove argument reassignment

1.18.1 / 2017-09-12
===================

  * deps: content-type@~1.0.4
    - perf: remove argument reassignment
    - perf: skip parameter parsing when no parameters
  * deps: iconv-lite@0.4.19
    - Fix ISO-8859-1 regression
    - Update Windows-1255
  * deps: qs@6.5.1
    - Fix parsing & compacting very deep objects
  * deps: raw-body@2.3.2
    - deps: iconv-lite@0.4.19

1.18.0 / 2017-09-08
===================

  * Fix JSON strict violation error to match native parse error
  * Include the `body` property on verify errors
  * Include the `type` property on all generated errors
  * Use `http-errors` to set status code on errors
  * deps: bytes@3.0.0
  * deps: debug@2.6.8
  * deps: depd@~1.1.1
    - Remove unnecessary `Buffer` loading
  * deps: http-errors@~1.6.2
    - deps: depd@1.1.1
  * deps: iconv-lite@0.4.18
    - Add support for React Native
    - Add a warning if not loaded as utf-8
    - Fix CESU-8 decoding in Node.js 8
    - Improve speed of ISO-8859-1 encoding
  * deps: qs@6.5.0
  * deps: raw-body@2.3.1
    - Use `http-errors` for standard emitted errors
    - deps: bytes@3.0.0
    - deps: iconv-lite@0.4.18
    - perf: skip buffer decoding on overage chunk
  * perf: prevent internal `throw` when missing charset

1.17.2 / 2017-05-17
===================

  * deps: debug@2.6.7
    - Fix `DEBUG_MAX_ARRAY_LENGTH`
    - deps: ms@2.0.0
  * deps: type-is@~1.6.15
    - deps: mime-types@~2.1.15

1.17.1 / 2017-03-06
===================

  * deps: qs@6.4.0
    - Fix regression parsing keys starting with `[`

1.17.0 / 2017-03-01
===================

  * deps: http-errors@~1.6.1
    - Make `message` property enumerable for `HttpError`s
    - deps: setprototypeof@1.0.3
  * deps: qs@6.3.1
    - Fix compacting nested arrays

1.16.1 / 2017-02-10
===================

  * deps: debug@2.6.1
    - Fix deprecation messages in WebStorm and other editors
    - Undeprecate `DEBUG_FD` set to `1` or `2`

1.16.0 / 2017-01-17
===================

  * deps: debug@2.6.0
    - Allow colors in workers
    - Deprecated `DEBUG_FD` environment variable
    - Fix error when running under React Native
    - Use same color for same namespace
    - deps: ms@0.7.2
  * deps: http-errors@~1.5.1
    - deps: inherits@2.0.3
    - deps: setprototypeof@1.0.2
    - deps: statuses@'>= 1.3.1 < 2'
  * deps: iconv-lite@0.4.15
    - Added encoding MS-31J
    - Added encoding MS-932
    - Added encoding MS-936
    - Added encoding MS-949
    - Added encoding MS-950
    - Fix GBK/GB18030 handling of Euro character
  * deps: qs@6.2.1
    - Fix array parsing from skipping empty values
  * deps: raw-body@~2.2.0
    - deps: iconv-lite@0.4.15
  * deps: type-is@~1.6.14
    - deps: mime-types@~2.1.13

1.15.2 / 2016-06-19
===================

  * deps: bytes@2.4.0
  * deps: content-type@~1.0.2
    - perf: enable strict mode
  * deps: http-errors@~1.5.0
    - Use `setprototypeof` module to replace `__proto__` setting
    - deps: statuses@'>= 1.3.0 < 2'
    - perf: enable strict mode
  * deps: qs@6.2.0
  * deps: raw-body@~2.1.7
    - deps: bytes@2.4.0
    - perf: remove double-cleanup on happy path
  * deps: type-is@~1.6.13
    - deps: mime-types@~2.1.11

1.15.1 / 2016-05-05
===================

  * deps: bytes@2.3.0
    - Drop partial bytes on all parsed units
    - Fix parsing byte string that looks like hex
  * deps: raw-body@~2.1.6
    - deps: bytes@2.3.0
  * deps: type-is@~1.6.12
    - deps: mime-types@~2.1.10

1.15.0 / 2016-02-10
===================

  * deps: http-errors@~1.4.0
    - Add `HttpError` export, for `err instanceof createError.HttpError`
    - deps: inherits@2.0.1
    - deps: statuses@'>= 1.2.1 < 2'
  * deps: qs@6.1.0
  * deps: type-is@~1.6.11
    - deps: mime-types@~2.1.9

1.14.2 / 2015-12-16
===================

  * deps: bytes@2.2.0
  * deps: iconv-lite@0.4.13
  * deps: qs@5.2.0
  * deps: raw-body@~2.1.5
    - deps: bytes@2.2.0
    - deps: iconv-lite@0.4.13
  * deps: type-is@~1.6.10
    - deps: mime-types@~2.1.8

1.14.1 / 2015-09-27
===================

  * Fix issue where invalid charset results in 400 when `verify` used
  * deps: iconv-lite@0.4.12
    - Fix CESU-8 decoding in Node.js 4.x
  * deps: raw-body@~2.1.4
    - Fix masking critical errors from `iconv-lite`
    - deps: iconv-lite@0.4.12
  * deps: type-is@~1.6.9
    - deps: mime-types@~2.1.7

1.14.0 / 2015-09-16
===================

  * Fix JSON strict parse error to match syntax errors
  * Provide static `require` analysis in `urlencoded` parser
  * deps: depd@~1.1.0
    - Support web browser loading
  * deps: qs@5.1.0
  * deps: raw-body@~2.1.3
    - Fix sync callback when attaching data listener causes sync read
  * deps: type-is@~1.6.8
    - Fix type error when given invalid type to match against
    - deps: mime-types@~2.1.6

1.13.3 / 2015-07-31
===================

  * deps: type-is@~1.6.6
    - deps: mime-types@~2.1.4

1.13.2 / 2015-07-05
===================

  * deps: iconv-lite@0.4.11
  * deps: qs@4.0.0
    - Fix dropping parameters like `hasOwnProperty`
    - Fix user-visible incompatibilities from 3.1.0
    - Fix various parsing edge cases
  * deps: raw-body@~2.1.2
    - Fix error stack traces to skip `makeError`
    - deps: iconv-lite@0.4.11
  * deps: type-is@~1.6.4
    - deps: mime-types@~2.1.2
    - perf: enable strict mode
    - perf: remove argument reassignment

1.13.1 / 2015-06-16
===================

  * deps: qs@2.4.2
    - Downgraded from 3.1.0 because of user-visible incompatibilities

1.13.0 / 2015-06-14
===================

  * Add `statusCode` property on `Error`s, in addition to `status`
  * Change `type` default to `application/json` for JSON parser
  * Change `type` default to `application/x-www-form-urlencoded` for urlencoded parser
  * Provide static `require` analysis
  * Use the `http-errors` module to generate errors
  * deps: bytes@2.1.0
    - Slight optimizations
  * deps: iconv-lite@0.4.10
    - The encoding UTF-16 without BOM now defaults to UTF-16LE when detection fails
    - Leading BOM is now removed when decoding
  * deps: on-finished@~2.3.0
    - Add defined behavior for HTTP `CONNECT` requests
    - Add defined behavior for HTTP `Upgrade` requests
    - deps: ee-first@1.1.1
  * deps: qs@3.1.0
    - Fix dropping parameters like `hasOwnProperty`
    - Fix various parsing edge cases
    - Parsed object now has `null` prototype
  * deps: raw-body@~2.1.1
    - Use `unpipe` module for unpiping requests
    - deps: iconv-lite@0.4.10
  * deps: type-is@~1.6.3
    - deps: mime-types@~2.1.1
    - perf: reduce try block size
    - perf: remove bitwise operations
  * perf: enable strict mode
  * perf: remove argument reassignment
  * perf: remove delete call

1.12.4 / 2015-05-10
===================

  * deps: debug@~2.2.0
  * deps: qs@2.4.2
    - Fix allowing parameters like `constructor`
  * deps: on-finished@~2.2.1
  * deps: raw-body@~2.0.1
    - Fix a false-positive when unpiping in Node.js 0.8
    - deps: bytes@2.0.1
  * deps: type-is@~1.6.2
    - deps: mime-types@~2.0.11

1.12.3 / 2015-04-15
===================

  * Slight efficiency improvement when not debugging
  * deps: depd@~1.0.1
  * deps: iconv-lite@0.4.8
    - Add encoding alias UNICODE-1-1-UTF-7
  * deps: raw-body@1.3.4
    - Fix hanging callback if request aborts during read
    - deps: iconv-lite@0.4.8

1.12.2 / 2015-03-16
===================

  * deps: qs@2.4.1
    - Fix error when parameter `hasOwnProperty` is present

1.12.1 / 2015-03-15
===================

  * deps: debug@~2.1.3
    - Fix high intensity foreground color for bold
    - deps: ms@0.7.0
  * deps: type-is@~1.6.1
    - deps: mime-types@~2.0.10

1.12.0 / 2015-02-13
===================

  * add `debug` messages
  * accept a function for the `type` option
  * use `content-type` to parse `Content-Type` headers
  * deps: iconv-lite@0.4.7
    - Gracefully support enumerables on `Object.prototype`
  * deps: raw-body@1.3.3
    - deps: iconv-lite@0.4.7
  * deps: type-is@~1.6.0
    - fix argument reassignment
    - fix false-positives in `hasBody` `Transfer-Encoding` check
    - support wildcard for both type and subtype (`*/*`)
    - deps: mime-types@~2.0.9

1.11.0 / 2015-01-30
===================

  * make internal `extended: true` depth limit infinity
  * deps: type-is@~1.5.6
    - deps: mime-types@~2.0.8

1.10.2 / 2015-01-20
===================

  * deps: iconv-lite@0.4.6
    - Fix rare aliases of single-byte encodings
  * deps: raw-body@1.3.2
    - deps: iconv-lite@0.4.6

1.10.1 / 2015-01-01
===================

  * deps: on-finished@~2.2.0
  * deps: type-is@~1.5.5
    - deps: mime-types@~2.0.7

1.10.0 / 2014-12-02
===================

  * make internal `extended: true` array limit dynamic

1.9.3 / 2014-11-21
==================

  * deps: iconv-lite@0.4.5
    - Fix Windows-31J and X-SJIS encoding support
  * deps: qs@2.3.3
    - Fix `arrayLimit` behavior
  * deps: raw-body@1.3.1
    - deps: iconv-lite@0.4.5
  * deps: type-is@~1.5.3
    - deps: mime-types@~2.0.3

1.9.2 / 2014-10-27
==================

  * deps: qs@2.3.2
    - Fix parsing of mixed objects and values

1.9.1 / 2014-10-22
==================

  * deps: on-finished@~2.1.1
    - Fix handling of pipelined requests
  * deps: qs@2.3.0
    - Fix parsing of mixed implicit and explicit arrays
  * deps: type-is@~1.5.2
    - deps: mime-types@~2.0.2

1.9.0 / 2014-09-24
==================

  * include the charset in "unsupported charset" error message
  * include the encoding in "unsupported content encoding" error message
  * deps: depd@~1.0.0

1.8.4 / 2014-09-23
==================

  * fix content encoding to be case-insensitive

1.8.3 / 2014-09-19
==================

  * deps: qs@2.2.4
    - Fix issue with object keys starting with numbers truncated

1.8.2 / 2014-09-15
==================

  * deps: depd@0.4.5

1.8.1 / 2014-09-07
==================

  * deps: media-typer@0.3.0
  * deps: type-is@~1.5.1

1.8.0 / 2014-09-05
==================

  * make empty-body-handling consistent between chunked requests
    - empty `json` produces `{}`
    - empty `raw` produces `new Buffer(0)`
    - empty `text` produces `''`
    - empty `urlencoded` produces `{}`
  * deps: qs@2.2.3
    - Fix issue where first empty value in array is discarded
  * deps: type-is@~1.5.0
    - fix `hasbody` to be true for `content-length: 0`

1.7.0 / 2014-09-01
==================

  * add `parameterLimit` option to `urlencoded` parser
  * change `urlencoded` extended array limit to 100
  * respond with 413 when over `parameterLimit` in `urlencoded`

1.6.7 / 2014-08-29
==================

  * deps: qs@2.2.2
    - Remove unnecessary cloning

1.6.6 / 2014-08-27
==================

  * deps: qs@2.2.0
    - Array parsing fix
    - Performance improvements

1.6.5 / 2014-08-16
==================

  * deps: on-finished@2.1.0

1.6.4 / 2014-08-14
==================

  * deps: qs@1.2.2

1.6.3 / 2014-08-10
==================

  * deps: qs@1.2.1

1.6.2 / 2014-08-07
==================

  * deps: qs@1.2.0
    - Fix parsing array of objects

1.6.1 / 2014-08-06
==================

  * deps: qs@1.1.0
    - Accept urlencoded square brackets
    - Accept empty values in implicit array notation

1.6.0 / 2014-08-05
==================

  * deps: qs@1.0.2
    - Complete rewrite
    - Limits array length to 20
    - Limits object depth to 5
    - Limits parameters to 1,000

1.5.2 / 2014-07-27
==================

  * deps: depd@0.4.4
    - Work-around v8 generating empty stack traces

1.5.1 / 2014-07-26
==================

  * deps: depd@0.4.3
    - Fix exception when global `Error.stackTraceLimit` is too low

1.5.0 / 2014-07-20
==================

  * deps: depd@0.4.2
    - Add `TRACE_DEPRECATION` environment variable
    - Remove non-standard grey color from color output
    - Support `--no-deprecation` argument
    - Support `--trace-deprecation` argument
  * deps: iconv-lite@0.4.4
    - Added encoding UTF-7
  * deps: raw-body@1.3.0
    - deps: iconv-lite@0.4.4
    - Added encoding UTF-7
    - Fix `Cannot switch to old mode now` error on Node.js 0.10+
  * deps: type-is@~1.3.2

1.4.3 / 2014-06-19
==================

  * deps: type-is@1.3.1
    - fix global variable leak

1.4.2 / 2014-06-19
==================

  * deps: type-is@1.3.0
    - improve type parsing

1.4.1 / 2014-06-19
==================

  * fix urlencoded extended deprecation message

1.4.0 / 2014-06-19
==================

  * add `text` parser
  * add `raw` parser
  * check accepted charset in content-type (accepts utf-8)
  * check accepted encoding in content-encoding (accepts identity)
  * deprecate `bodyParser()` middleware; use `.json()` and `.urlencoded()` as needed
  * deprecate `urlencoded()` without provided `extended` option
  * lazy-load urlencoded parsers
  * parsers split into files for reduced mem usage
  * support gzip and deflate bodies
    - set `inflate: false` to turn off
  * deps: raw-body@1.2.2
    - Support all encodings from `iconv-lite`

1.3.1 / 2014-06-11
==================

  * deps: type-is@1.2.1
    - Switch dependency from mime to mime-types@1.0.0

1.3.0 / 2014-05-31
==================

  * add `extended` option to urlencoded parser

1.2.2 / 2014-05-27
==================

  * deps: raw-body@1.1.6
    - assert stream encoding on node.js 0.8
    - assert stream encoding on node.js < 0.10.6
    - deps: bytes@1

1.2.1 / 2014-05-26
==================

  * invoke `next(err)` after request fully read
    - prevents hung responses and socket hang ups

1.2.0 / 2014-05-11
==================

  * add `verify` option
  * deps: type-is@1.2.0
    - support suffix matching

1.1.2 / 2014-05-11
==================

  * improve json parser speed

1.1.1 / 2014-05-11
==================

  * fix repeated limit parsing with every request

1.1.0 / 2014-05-10
==================

  * add `type` option
  * deps: pin for safety and consistency

1.0.2 / 2014-04-14
==================

  * use `type-is` module

1.0.1 / 2014-03-20
==================

  * lower default limits to 100kb
