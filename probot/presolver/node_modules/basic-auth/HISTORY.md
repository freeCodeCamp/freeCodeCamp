2.0.1 / 2018-09-19
==================

  * deps: safe-buffer@5.1.2

2.0.0 / 2017-09-12
==================

  * Drop support for Node.js below 0.8
  * Remove `auth(ctx)` signature -- pass in header or `auth(ctx.req)`
  * Use `safe-buffer` for improved Buffer API

1.1.0 / 2016-11-18
==================

  * Add `auth.parse` for low-level string parsing

1.0.4 / 2016-05-10
==================

  * Improve error message when `req` argument is not an object
  * Improve error message when `req` missing `headers` property

1.0.3 / 2015-07-01
==================

  * Fix regression accepting a Koa context

1.0.2 / 2015-06-12
==================

  * Improve error message when `req` argument missing
  * perf: enable strict mode
  * perf: hoist regular expression
  * perf: parse with regular expressions
  * perf: remove argument reassignment

1.0.1 / 2015-05-04
==================

  * Update readme

1.0.0 / 2014-07-01
==================

  * Support empty password
  * Support empty username

0.0.1 / 2013-11-30
==================

  * Initial release
