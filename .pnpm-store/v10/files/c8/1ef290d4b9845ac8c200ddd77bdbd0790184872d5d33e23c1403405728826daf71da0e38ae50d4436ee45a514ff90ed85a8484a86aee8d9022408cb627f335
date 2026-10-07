0.5.0 / 2022-04-11
==================

  * Add `priority` option
  * Fix `expires` option to reject invalid dates
  * pref: improve default decode speed
  * pref: remove slow string split in parse

0.4.2 / 2022-02-02
==================

  * pref: read value only when assigning in parse
  * pref: remove unnecessary regexp in parse

0.4.1 / 2020-04-21
==================

  * Fix `maxAge` option to reject invalid values

0.4.0 / 2019-05-15
==================

  * Add `SameSite=None` support

0.3.1 / 2016-05-26
==================

  * Fix `sameSite: true` to work with draft-7 clients
    - `true` now sends `SameSite=Strict` instead of `SameSite`

0.3.0 / 2016-05-26
==================

  * Add `sameSite` option
    - Replaces `firstPartyOnly` option, never implemented by browsers
  * Improve error message when `encode` is not a function
  * Improve error message when `expires` is not a `Date`

0.2.4 / 2016-05-20
==================

  * perf: enable strict mode
  * perf: use for loop in parse
  * perf: use string concatination for serialization

0.2.3 / 2015-10-25
==================

  * Fix cookie `Max-Age` to never be a floating point number

0.2.2 / 2015-09-17
==================

  * Fix regression when setting empty cookie value
    - Ease the new restriction, which is just basic header-level validation
  * Fix typo in invalid value errors

0.2.1 / 2015-09-17
==================

  * Throw on invalid values provided to `serialize`
    - Ensures the resulting string is a valid HTTP header value

0.2.0 / 2015-08-13
==================

  * Add `firstPartyOnly` option
  * Throw better error for invalid argument to parse
  * perf: hoist regular expression

0.1.5 / 2015-09-17
==================

  * Fix regression when setting empty cookie value
    - Ease the new restriction, which is just basic header-level validation
  * Fix typo in invalid value errors

0.1.4 / 2015-09-17
==================

  * Throw better error for invalid argument to parse
  * Throw on invalid values provided to `serialize`
    - Ensures the resulting string is a valid HTTP header value

0.1.3 / 2015-05-19
==================

  * Reduce the scope of try-catch deopt
  * Remove argument reassignments

0.1.2 / 2014-04-16
==================

  * Remove unnecessary files from npm package

0.1.1 / 2014-02-23
==================

  * Fix bad parse when cookie value contained a comma
  * Fix support for `maxAge` of `0`

0.1.0 / 2013-05-01
==================

  * Add `decode` option
  * Add `encode` option

0.0.6 / 2013-04-08
==================

  * Ignore cookie parts missing `=`

0.0.5 / 2012-10-29
==================

  * Return raw cookie value if value unescape errors

0.0.4 / 2012-06-21
==================

  * Use encode/decodeURIComponent for cookie encoding/decoding
    - Improve server/client interoperability

0.0.3 / 2012-06-06
==================

  * Only escape special characters per the cookie RFC

0.0.2 / 2012-06-01
==================

  * Fix `maxAge` option to not throw error

0.0.1 / 2012-05-28
==================

  * Add more tests

0.0.0 / 2012-05-28
==================

  * Initial release
