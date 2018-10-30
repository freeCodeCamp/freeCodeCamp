1.9.1 / 2018-09-10
==================

  * Fix using special characters in format
  * deps: depd@~1.1.2
    - perf: remove argument reassignment

1.9.0 / 2017-09-26
==================

  * Use `res.headersSent` when available
  * deps: basic-auth@~2.0.0
     - Use `safe-buffer` for improved Buffer API
  * deps: debug@2.6.9
  * deps: depd@~1.1.1
    - Remove unnecessary `Buffer` loading

1.8.2 / 2017-05-23
==================

  * deps: debug@2.6.8
    - Fix `DEBUG_MAX_ARRAY_LENGTH`
    - deps: ms@2.0.0

1.8.1 / 2017-02-04
==================

  * deps: debug@2.6.1
    - Fix deprecation messages in WebStorm and other editors
    - Undeprecate `DEBUG_FD` set to `1` or `2`

1.8.0 / 2017-02-04
==================

  * Fix sending unnecessary `undefined` argument to token functions
  * deps: basic-auth@~1.1.0
  * deps: debug@2.6.0
    - Allow colors in workers
    - Deprecated `DEBUG_FD` environment variable
    - Fix error when running under React Native
    - Use same color for same namespace
    - deps: ms@0.7.2
  * perf: enable strict mode in compiled functions

1.7.0 / 2016-02-18
==================

  * Add `digits` argument to `response-time` token
  * deps: depd@~1.1.0
    - Enable strict mode in more places
    - Support web browser loading
  * deps: on-headers@~1.0.1
    - perf: enable strict mode

1.6.1 / 2015-07-03
==================

  * deps: basic-auth@~1.0.3

1.6.0 / 2015-06-12
==================

  * Add `morgan.compile(format)` export
  * Do not color 1xx status codes in `dev` format
  * Fix `response-time` token to not include response latency
  * Fix `status` token incorrectly displaying before response in `dev` format
  * Fix token return values to be `undefined` or a string
  * Improve representation of multiple headers in `req` and `res` tokens
  * Use `res.getHeader` in `res` token
  * deps: basic-auth@~1.0.2
    - perf: enable strict mode
    - perf: hoist regular expression
    - perf: parse with regular expressions
    - perf: remove argument reassignment
  * deps: on-finished@~2.3.0
    - Add defined behavior for HTTP `CONNECT` requests
    - Add defined behavior for HTTP `Upgrade` requests
    - deps: ee-first@1.1.1
  * pref: enable strict mode
  * pref: reduce function closure scopes
  * pref: remove dynamic compile on every request for `dev` format
  * pref: remove an argument reassignment
  * pref: skip function call without `skip` option

1.5.3 / 2015-05-10
==================

  * deps: basic-auth@~1.0.1
  * deps: debug@~2.2.0
    - deps: ms@0.7.1
  * deps: depd@~1.0.1
  * deps: on-finished@~2.2.1
    - Fix `isFinished(req)` when data buffered

1.5.2 / 2015-03-15
==================

  * deps: debug@~2.1.3
    - Fix high intensity foreground color for bold
    - deps: ms@0.7.0

1.5.1 / 2014-12-31
==================

  * deps: debug@~2.1.1
  * deps: on-finished@~2.2.0

1.5.0 / 2014-11-06
==================

  * Add multiple date formats
    - `clf` for the common log format
    - `iso` for the common ISO 8601 date time format
    - `web` for the common RFC 1123 date time format
  * Deprecate `buffer` option
  * Fix date format in `common` and `combined` formats
  * Fix token arguments to accept values with `"`

1.4.1 / 2014-10-22
==================

  * deps: on-finished@~2.1.1
    - Fix handling of pipelined requests

1.4.0 / 2014-10-16
==================

  * Add `debug` messages
  * deps: depd@~1.0.0

1.3.2 / 2014-09-27
==================

  * Fix `req.ip` integration when `immediate: false`

1.3.1 / 2014-09-14
==================

  * Remove un-used `bytes` dependency
  * deps: depd@0.4.5

1.3.0 / 2014-09-01
==================

  * Assert if `format` is not a function or string

1.2.3 / 2014-08-16
==================

  * deps: on-finished@2.1.0

1.2.2 / 2014-07-27
==================

  * deps: depd@0.4.4
    - Work-around v8 generating empty stack traces

1.2.1 / 2014-07-26
==================

  * deps: depd@0.4.3
    - Fix exception when global `Error.stackTraceLimit` is too low

1.2.0 / 2014-07-19
==================

  * Add `:remote-user` token
  * Add `combined` log format
  * Add `common` log format
  * Add `morgan(format, options)` function signature
  * Deprecate `default` format -- use `combined` format instead
  * Deprecate not providing a format
  * Remove non-standard grey color from `dev` format

1.1.1 / 2014-05-20
==================

  * simplify method to get remote address

1.1.0 / 2014-05-18
==================

  * "dev" format will use same tokens as other formats
  * `:response-time` token is now empty when immediate used
  * `:response-time` token is now monotonic
  * `:response-time` token has precision to 1 μs
  * fix `:status` + immediate output in node.js 0.8
  * improve `buffer` option to prevent indefinite event loop holding
  * deps: bytes@1.0.0
    - add negative support

1.0.1 / 2014-05-04
==================

  * Make buffer unique per morgan instance
  * deps: bytes@0.3.0
    * added terabyte support

1.0.0 / 2014-02-08
==================

  * Initial release
