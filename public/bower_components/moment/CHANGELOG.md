Changelog
=========

### 2.10.6

[#2515](https://github.com/moment/moment/pull/2515) Fix regression introduced
in `2.10.5` related to `moment.ISO_8601` parsing.

### 2.10.5 [See full changelog](https://gist.github.com/ichernev/6ec13ac7efc396da44b2)

Important changes:
* [#2357](https://github.com/moment/moment/pull/2357) Improve unit bubbling for ISO dates
  this fixes day to year conversions to work around end-of-year (~365 days). As
  a side effect 365 days is 11 months and 30 days, and 366 days is one year.
* [#2438](https://github.com/moment/moment/pull/2438) Fix inconsistent moment.min and moment.max results
  Return invalid result if any of the inputs is invalid
* [#2494](https://github.com/moment/moment/pull/2494) Fix two digit year parsing with YYYY format
  This brings the benefits of YY to YYYY
* [#2368](https://github.com/moment/moment/pull/2368) perf: use faster form of copying dates, across the board improvement


### 2.10.3 [See full changelog](https://gist.github.com/ichernev/f264b9bed5b00f8b1b7f)

* add `moment.fn.to` and `moment.fn.toNow` (similar to `from` and `fromNow`)
* new locales (Sinhalese (si), Montenegrin (me), Javanese (ja))
* performance improvements

### 2.10.2

* fixed moment-with-locales in browser env caused by esperanto change

### 2.10.1

* regression: Add moment.duration.fn back

### 2.10.0

Ported code to es6 modules.

### 2.9.0 [See full changelog](https://gist.github.com/ichernev/0c9a9b49951111a27ce7)

languages:
* [2104](https://github.com/moment/moment/issues/2104) Frisian (fy) language file with unit test
* [2097](https://github.com/moment/moment/issues/2097) add ar-tn locale

deprecations:
* [2074](https://github.com/moment/moment/issues/2074) Implement `moment.fn.utcOffset`, deprecate `momen.fn.zone`

features:
* [2088](https://github.com/moment/moment/issues/2088) add moment.fn.isBetween
* [2054](https://github.com/moment/moment/issues/2054) Call updateOffset when creating moment (needed for default timezone in
  moment-timezone)
* [1893](https://github.com/moment/moment/issues/1893) Add moment.isDate method
* [1825](https://github.com/moment/moment/issues/1825) Implement toJSON function on Duration
* [1809](https://github.com/moment/moment/issues/1809) Allowing moment.set() to accept a hash of units
* [2128](https://github.com/moment/moment/issues/2128) Add firstDayOfWeek, firstDayOfYear locale getters
* [2131](https://github.com/moment/moment/issues/2131) Add quarter diff support

Some bugfixes and language improvements -- [full changelog](https://gist.github.com/ichernev/0c9a9b49951111a27ce7)

### 2.8.4 [See full changelog](https://gist.github.com/ichernev/a4fcb0a46d74e4b9b996)

Features:

* [#2000](https://github.com/moment/moment/issues/2000) Add LTS localised format that includes seconds
* [#1960](https://github.com/moment/moment/issues/1960) added formatToken 'x' for unix offset in milliseconds #1938
* [#1965](https://github.com/moment/moment/issues/1965) Support 24:00:00.000 to mean next day, at midnight.
* [#2002](https://github.com/moment/moment/issues/2002) Accept 'date' key when creating moment with object
* [#2009](https://github.com/moment/moment/issues/2009) Use native toISOString when we can

Some bugfixes and language improvements -- [full changelog](https://gist.github.com/ichernev/a4fcb0a46d74e4b9b996)

### 2.8.3

Bugfixes:

* [#1801](https://github.com/moment/moment/issues/1801) proper pluralization for Arabic
* [#1833](https://github.com/moment/moment/issues/1833) improve spm integration
* [#1871](https://github.com/moment/moment/issues/1871) fix zone bug caused by Firefox 24
* [#1882](https://github.com/moment/moment/issues/1882) Use hh:mm in Czech
* [#1883](https://github.com/moment/moment/issues/1883) Fix 2.8.0 regression in duration as conversions
* [#1890](https://github.com/moment/moment/issues/1890) Faster travis builds
* [#1892](https://github.com/moment/moment/issues/1892) Faster isBefore/After/Same
* [#1848](https://github.com/moment/moment/issues/1848) Fix flaky month diffs
* [#1895](https://github.com/moment/moment/issues/1895) Fix 2.8.0 regression in moment.utc with format array
* [#1896](https://github.com/moment/moment/issues/1896) Support setting invalid instance locale (noop)
* [#1897](https://github.com/moment/moment/issues/1897) Support moment([str]) in addition to moment([int])

### 2.8.2

Minor bugfixes:

* [#1874](https://github.com/moment/moment/issues/1874) use `Object.prototype.hasOwnProperty`
  instead of `obj.hasOwnProperty` (ie8 bug)
* [#1873](https://github.com/moment/moment/issues/1873) add `duration#toString()`
* [#1859](https://github.com/moment/moment/issues/1859) better month/weekday names in norwegian
* [#1812](https://github.com/moment/moment/issues/1812) meridiem parsing for greek
* [#1804](https://github.com/moment/moment/issues/1804) spanish del -> de
* [#1800](https://github.com/moment/moment/issues/1800) korean LT improvement

### 2.8.1

* bugfix [#1813](https://github.com/moment/moment/issues/1813): fix moment().lang([key]) incompatibility

### 2.8.0 [See changelog](https://gist.github.com/ichernev/ac3899324a5fa6c8c9b4)

* incompatible changes
    * [#1761](https://github.com/moment/moment/issues/1761): moments created without a language are no longer following the global language, in case it changes. Only newly created moments take the global language by default. In case you're affected by this, wait, comment on [#1797](https://github.com/moment/moment/issues/1797) and wait for a proper reimplementation
    * [#1642](https://github.com/moment/moment/issues/1642): 45 days is no longer "a month" according to humanize, cutoffs for month, and year have changed. Hopefully your code does not depend on a particular answer from humanize (which it shouldn't anyway)
    * [#1784](https://github.com/moment/moment/issues/1784): if you use the human readable English datetime format in a weird way (like storing them in a database) that would break when the format changes you're at risk.

* deprecations (old behavior will be dropped in 3.0)
    * [#1761](https://github.com/moment/moment/issues/1761) `lang` is renamed to `locale`, `langData` -> `localeData`. Also there is now `defineLocale` that should be used when creating new locales
    * [#1763](https://github.com/moment/moment/issues/1763) `add(unit, value)` and `subtract(unit, value)` are now deprecated. Use `add(value, unit)` and `subtract(value, unit)` instead.
    * [#1759](https://github.com/moment/moment/issues/1759) rename `duration.toIsoString` to `duration.toISOString`. The js standard library and moment's `toISOString` follow that convention.

* new locales
    * [#1789](https://github.com/moment/moment/issues/1789) Tibetan (bo)
    * [#1786](https://github.com/moment/moment/issues/1786) Africaans (af)
    * [#1778](https://github.com/moment/moment/issues/1778) Burmese (my)
    * [#1727](https://github.com/moment/moment/issues/1727) Belarusian (be)

* bugfixes, locale bugfixes, performance improvements, features

### 2.7.0 [See changelog](https://gist.github.com/ichernev/b0a3d456d5a84c9901d7)

* new languages

  * [#1678](https://github.com/moment/moment/issues/1678) Bengali (bn)
  * [#1628](https://github.com/moment/moment/issues/1628) Azerbaijani (az)
  * [#1633](https://github.com/moment/moment/issues/1633) Arabic, Saudi Arabia (ar-sa)
  * [#1648](https://github.com/moment/moment/issues/1648) Austrian German (de-at)

* features

  * [#1663](https://github.com/moment/moment/issues/1663) configurable relative time thresholds
  * [#1554](https://github.com/moment/moment/issues/1554) support anchor time in moment.calendar
  * [#1693](https://github.com/moment/moment/issues/1693) support moment.ISO_8601 as parsing format
  * [#1637](https://github.com/moment/moment/issues/1637) add moment.min and moment.max and deprecate min/max instance methods
  * [#1704](https://github.com/moment/moment/issues/1704) support string value in add/subtract
  * [#1647](https://github.com/moment/moment/issues/1647) add spm support (package manager)

* bugfixes

### 2.6.0 [See changelog](https://gist.github.com/ichernev/10544682)

* languages
  * [#1529](https://github.com/moment/moment/issues/1529) Serbian-Cyrillic (sr-cyr)
  * [#1544](https://github.com/moment/moment/issues/1544), [#1546](https://github.com/moment/moment/issues/1546) Khmer Cambodia (km)

* features
    * [#1419](https://github.com/moment/moment/issues/1419), [#1468](https://github.com/moment/moment/issues/1468), [#1467](https://github.com/moment/moment/issues/1467), [#1546](https://github.com/moment/moment/issues/1546) better handling of timezone-d moments around DST
    * [#1462](https://github.com/moment/moment/issues/1462) add weeksInYear and isoWeeksInYear
    * [#1475](https://github.com/moment/moment/issues/1475) support ordinal parsing
    * [#1499](https://github.com/moment/moment/issues/1499) composer support
    * [#1577](https://github.com/moment/moment/issues/1577), [#1604](https://github.com/moment/moment/issues/1604) put Date parsing in moment.createFromInputFallback so it can be properly deprecated and controlled in the future
    * [#1545](https://github.com/moment/moment/issues/1545) extract two-digit year parsing in moment.parseTwoDigitYear, so it can be overwritten
    * [#1590](https://github.com/moment/moment/issues/1590) (see [#1574](https://github.com/moment/moment/issues/1574)) set AMD global before module definition to better support non AMD module dependencies used in AMD environment
    * [#1589](https://github.com/moment/moment/issues/1589) remove global in Node.JS environment (was not working before, nobody complained, was scheduled for removal anyway)
    * [#1586](https://github.com/moment/moment/issues/1586) support quarter setting and parsing

* 18 bugs fixed

### 2.5.1

* languages
  * [#1392](https://github.com/moment/moment/issues/1392) Armenian (hy-am)

* bugfixes
  * [#1429](https://github.com/moment/moment/issues/1429) fixes [#1423](https://github.com/moment/moment/issues/1423) weird chrome-32 bug with js object creation
  * [#1421](https://github.com/moment/moment/issues/1421) remove html entities from Welsh
  * [#1418](https://github.com/moment/moment/issues/1418) fixes [#1401](https://github.com/moment/moment/issues/1401) improved non-padded tokens in strict matching
  * [#1417](https://github.com/moment/moment/issues/1417) fixes [#1404](https://github.com/moment/moment/issues/1404) handle buggy moment object created by property cloning
  * [#1398](https://github.com/moment/moment/issues/1398) fixes [#1397](https://github.com/moment/moment/issues/1397) fix Arabic-like week number parsing
  * [#1396](https://github.com/moment/moment/issues/1396) add leftZeroFill(4) to GGGG and gggg formats
  * [#1373](https://github.com/moment/moment/issues/1373) use lowercase for months and days in Catalan

* testing
  * [#1374](https://github.com/moment/moment/issues/1374) run tests on multiple browser/os combos via SauceLabs and Travis

### 2.5.0 [See changelog](https://gist.github.com/ichernev/8104451)

* New languages
  * Luxemburish (lb) [1247](https://github.com/moment/moment/issues/1247)
  * Serbian (rs) [1319](https://github.com/moment/moment/issues/1319)
  * Tamil (ta) [1324](https://github.com/moment/moment/issues/1324)
  * Macedonian (mk) [1337](https://github.com/moment/moment/issues/1337)

* Features
  * [1311](https://github.com/moment/moment/issues/1311) Add quarter getter and format token `Q`
  * [1303](https://github.com/moment/moment/issues/1303) strict parsing now respects number of digits per token (fix [1196](https://github.com/moment/moment/issues/1196))
  * 0d30bb7 add jspm support
  * [1347](https://github.com/moment/moment/issues/1347) improve zone parsing
  * [1362](https://github.com/moment/moment/issues/1362) support merideam parsing in Korean

* 22 bugfixes

### 2.4.0

* **Deprecate** globally exported moment, will be removed in next major
* New languages
  * Farose (fo) [#1206](https://github.com/moment/moment/issues/1206)
  * Tagalog/Filipino (tl-ph) [#1197](https://github.com/moment/moment/issues/1197)
  * Welsh (cy) [#1215](https://github.com/moment/moment/issues/1215)
* Bugfixes
  * properly handle Z at the end of iso RegExp [#1187](https://github.com/moment/moment/issues/1187)
  * chinese meridian time improvements [#1076](https://github.com/moment/moment/issues/1076)
  * fix language tests [#1177](https://github.com/moment/moment/issues/1177)
  * remove some failing tests (that should have never existed :))
    [#1185](https://github.com/moment/moment/issues/1185)
    [#1183](https://github.com/moment/moment/issues/1183)
  * handle russian noun cases in weird cases [#1195](https://github.com/moment/moment/issues/1195)

### 2.3.1

Removed a trailing comma [1169] and fixed a bug with `months`, `weekdays` getters [#1171](https://github.com/moment/moment/issues/1171).

### 2.3.0 [See changelog](https://gist.github.com/ichernev/6864354)

Changed isValid, added strict parsing.
Week tokens parsing.

### 2.2.1

Fixed bug in string prototype test.
Updated authors and contributors.

### 2.2.0 [See changelog](https://gist.github.com/ichernev/00f837a9baf46a3565e4)

Added bower support.

Language files now use UMD.

Creating moment defaults to current date/month/year.

Added a bundle of moment and all language files.

### 2.1.0 [See changelog](https://gist.github.com/timrwood/b8c2d90d528eddb53ab5)

Added better week support.

Added ability to set offset with `moment#zone`.

Added ability to set month or weekday from a string.

Added `moment#min` and `moment#max`

### 2.0.0 [See changelog](https://gist.github.com/timrwood/e72f2eef320ed9e37c51)

Added short form localized tokens.

Added ability to define language a string should be parsed in.

Added support for reversed add/subtract arguments.

Added support for `endOf('week')` and `startOf('week')`.

Fixed the logic for `moment#diff(Moment, 'months')` and `moment#diff(Moment, 'years')`

`moment#diff` now floors instead of rounds.

Normalized `moment#toString`.

Added `isSame`, `isAfter`, and `isBefore` methods.

Added better week support.

Added `moment#toJSON`

Bugfix: Fixed parsing of first century dates

Bugfix: Parsing 10Sep2001 should work as expected

Bugfix: Fixed wierdness with `moment.utc()` parsing.

Changed language ordinal method to return the number + ordinal instead of just the ordinal.

Changed two digit year parsing cutoff to match strptime.

Removed `moment#sod` and `moment#eod` in favor of `moment#startOf` and `moment#endOf`.

Removed `moment.humanizeDuration()` in favor of `moment.duration().humanize()`.

Removed the lang data objects from the top level namespace.

Duplicate `Date` passed to `moment()` instead of referencing it.

### 1.7.2 [See discussion](https://github.com/timrwood/moment/issues/456)

Bugfixes

### 1.7.1 [See discussion](https://github.com/timrwood/moment/issues/384)

Bugfixes

### 1.7.0 [See discussion](https://github.com/timrwood/moment/issues/288)

Added `moment.fn.endOf()` and `moment.fn.startOf()`.

Added validation via `moment.fn.isValid()`.

Made formatting method 3x faster. http://jsperf.com/momentjs-cached-format-functions

Add support for month/weekday callbacks in `moment.fn.format()`

Added instance specific languages.

Added two letter weekday abbreviations with the formatting token `dd`.

Various language updates.

Various bugfixes.

### 1.6.0 [See discussion](https://github.com/timrwood/moment/pull/268)

Added Durations.

Revamped parser to support parsing non-separated strings (YYYYMMDD vs YYYY-MM-DD).

Added support for millisecond parsing and formatting tokens (S SS SSS)

Added a getter for `moment.lang()`

Various bugfixes.

There are a few things deprecated in the 1.6.0 release.

1. The format tokens `z` and `zz` (timezone abbreviations like EST CST MST etc) will no longer be supported. Due to inconsistent browser support, we are unable to consistently produce this value. See [this issue](https://github.com/timrwood/moment/issues/162) for more background.

2. The method `moment.fn.native` is deprecated in favor of `moment.fn.toDate`. There continue to be issues with Google Closure Compiler throwing errors when using `native`, even in valid instances.

3. The way to customize am/pm strings is being changed. This would only affect you if you created a custom language file. For more information, see [this issue](https://github.com/timrwood/moment/pull/222).

### 1.5.0 [See milestone](https://github.com/timrwood/moment/issues?milestone=10&page=1&state=closed)

Added UTC mode.

Added automatic ISO8601 parsing.

Various bugfixes.

### 1.4.0 [See milestone](https://github.com/timrwood/moment/issues?milestone=8&state=closed)

Added `moment.fn.toDate` as a replacement for `moment.fn.native`.

Added `moment.fn.sod` and `moment.fn.eod` to get the start and end of day.

Various bugfixes.

### 1.3.0 [See milestone](https://github.com/timrwood/moment/issues?milestone=7&state=closed)

Added support for parsing month names in the current language.

Added escape blocks for parsing tokens.

Added `moment.fn.calendar` to format strings like 'Today 2:30 PM', 'Tomorrow 1:25 AM', and 'Last Sunday 4:30 AM'.

Added `moment.fn.day` as a setter.

Various bugfixes

### 1.2.0 [See milestone](https://github.com/timrwood/moment/issues?milestone=4&state=closed)

Added timezones to parser and formatter.

Added `moment.fn.isDST`.

Added `moment.fn.zone` to get the timezone offset in minutes.

### 1.1.2 [See milestone](https://github.com/timrwood/moment/issues?milestone=6&state=closed)

Various bugfixes

### 1.1.1 [See milestone](https://github.com/timrwood/moment/issues?milestone=5&state=closed)

Added time specific diffs (months, days, hours, etc)

### 1.1.0

Added `moment.fn.format` localized masks. 'L LL LLL LLLL' [issue 29](https://github.com/timrwood/moment/pull/29)

Fixed [issue 31](https://github.com/timrwood/moment/pull/31).

### 1.0.1

Added `moment.version` to get the current version.

Removed `window !== undefined` when checking if module exists to support browserify. [issue 25](https://github.com/timrwood/moment/pull/25)

### 1.0.0

Added convenience methods for getting and setting date parts.

Added better support for `moment.add()`.

Added better lang support in NodeJS.

Renamed library from underscore.date to Moment.js

### 0.6.1

Added Portuguese, Italian, and French language support

### 0.6.0

Added _date.lang() support.
Added support for passing multiple formats to try to parse a date. _date("07-10-1986", ["MM-DD-YYYY", "YYYY-MM-DD"]);
Made parse from string and single format 25% faster.

### 0.5.2

Bugfix for [issue 8](https://github.com/timrwood/underscore.date/pull/8) and [issue 9](https://github.com/timrwood/underscore.date/pull/9).

### 0.5.1

Bugfix for [issue 5](https://github.com/timrwood/underscore.date/pull/5).

### 0.5.0

Dropped the redundant `_date.date()` in favor of `_date()`.
Removed `_date.now()`, as it is a duplicate of `_date()` with no parameters.
Removed `_date.isLeapYear(yearNumber)`. Use `_date([yearNumber]).isLeapYear()` instead.
Exposed customization options through the `_date.relativeTime`, `_date.weekdays`, `_date.weekdaysShort`, `_date.months`, `_date.monthsShort`, and `_date.ordinal` variables instead of the `_date.customize()` function.

### 0.4.1

Added date input formats for input strings.

### 0.4.0

Added underscore.date to npm. Removed dependencies on underscore.

### 0.3.2

Added `'z'` and `'zz'` to `_.date().format()`. Cleaned up some redundant code to trim off some bytes.

### 0.3.1

Cleaned up the namespace. Moved all date manipulation and display functions to the _.date() object.

### 0.3.0

Switched to the Underscore methodology of not mucking with the native objects' prototypes.
Made chaining possible.

### 0.2.1

Changed date names to be a more pseudo standardized 'dddd, MMMM Do YYYY, h:mm:ss a'.
Added `Date.prototype` functions `add`, `subtract`, `isdst`, and `isleapyear`.

### 0.2.0

Changed function names to be more concise.
Changed date format from php date format to custom format.

### 0.1.0

Initial release

