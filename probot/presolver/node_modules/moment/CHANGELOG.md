Changelog
=========

### 2.22.2 [See full changelog](https://gist.github.com/marwahaha/4d992c13c2dbc0f59d4d8acae1dc6d3a)

* Release May 31, 2018

* [#4564](https://github.com/moment/moment/pull/4564) [bugfix] Avoid using trim()
* [#4453](https://github.com/moment/moment/pull/4453) [bugfix] Treat periods as periods, not regex-anything period, for weekday parsing in strict mode.
* Minor locale improvements (pa-in, be, az)

### 2.22.1 [See full changelog](https://gist.github.com/marwahaha/ff2cd13d0eda08afb7a237b10aae558c)

* Release Apr 14, 2018

* [#4495](https://github.com/moment/moment/pull/4495) [bugfix] Added HTML5_FMT to moment.d.ts
* Minor locale improvements
* QUnit upgrade and coveralls reporting

### 2.22.0 [See full changelog](https://gist.github.com/marwahaha/ae895025dac3f0641fa9ec2e36d282bb)

* Release Mar 30, 2018

* [#4423](https://github.com/moment/moment/pull/4423) [new locale] Added Mongolian locale mn
* Various locale improvements
* Minor misc changes

### 2.21.0 [See full changelog](https://gist.github.com/marwahaha/80d19ef882b71df1948df7865efdd40e)

* Release Mar 2, 2018

* [#4391](https://github.com/moment/moment/pull/4391) [bugfix] Fix [#4390](https://github.com/moment/moment/pull/4390): use offset properly in toISOString
* [#4310](https://github.com/moment/moment/pull/4310) [bugfix] Fix [#3883](https://github.com/moment/moment/pull/3883) lazy load parentLocale in defineLocale, fallback to global if missing
* [#4085](https://github.com/moment/moment/pull/4085) [misc] Print console warning when setting non-existent locales
* [#4371](https://github.com/moment/moment/pull/4371) [misc] fix deprecated rollup options
* New locales: ug-cn, en-il, tg
* Various locale improvements

### 2.20.1 [See changelog](https://gist.github.com/marwahaha/d72c1cb22076373be889b16272cbd187)

* Release Dec 18, 2017

* [#4359](https://github.com/moment/moment/pull/4359) [locale] Fix Arabic locale for months (again)
* [#4357](https://github.com/moment/moment/pull/4357) [misc] Add optional parameter keepOffset to toISOString

### 2.20.0 [See full changelog](https://gist.github.com/marwahaha/e0d4135fbf8bb75fa85c4aa2bddc5031)

* Release Dec 16, 2017

* [#4312](https://github.com/moment/moment/pull/4312) [bugfix] Fix [#4251](https://github.com/moment/moment/pull/4251): Avoid RFC2822 in utc() test
* [#4240](https://github.com/moment/moment/pull/4240) [bugfix] Fix incorrect strict parsing with full-width parentheses
* [#4341](https://github.com/moment/moment/pull/4341) [feature] Prevent toISOString converting to UTC (issue [#1751](https://github.com/moment/moment/pull/1751))
* [#4154](https://github.com/moment/moment/pull/4154) [feature] add format constants to support output to HTML5 input type formats (see [#3928](https://github.com/moment/moment/pull/3928))
* [#4143](https://github.com/moment/moment/pull/4143) [new locale] mt: Maltese language
* [#4183](https://github.com/moment/moment/pull/4183) [locale] Relative seconds i18n
* Various other locale improvements

### 2.19.4 [See changelog](https://gist.github.com/marwahaha/d3b7b0ddf4bdae512244f16e8cc59efb)

* Release Dec 10, 2017

* [#4332](https://github.com/moment/moment/pull/4332) [bugfix] Fix weekday verification for UTC and offset days (fixes [#4227](https://github.com/moment/moment/pull/4227))
* [#4336](https://github.com/moment/moment/pull/4336) [bugfix] Fix [#4334](https://github.com/moment/moment/pull/4334): Remove unused function call argument
* [#4246](https://github.com/moment/moment/pull/4246) [misc] Add 'ss' relative time key to typescript definition

### 2.19.3 [See changelog](https://gist.github.com/marwahaha/3654006bc0c2e522451c08d12c0bfabf)

* Release Nov 29, 2017

* [#4326](https://github.com/moment/moment/pull/4326) [bugfix] Fix for ReDOS vulnerability (see [#4163](https://github.com/moment/moment/issues/4163))
* [#4289](https://github.com/moment/moment/pull/4289) [misc] Fix spelling and formatting for U.S. for es-us

### 2.19.2 [See changelog (it's the same >:D)](https://gist.github.com/ichernev/76b1a3f33d3a8ff9665ce434a45221d0)

* Release Nov 11, 2017

* [#4255](https://github.com/moment/moment/pull/4255) [bugfix] Fix year setter for random days in a leap year, fixes [#4238](https://github.com/moment/moment/issues/4238)
* [#4242](https://github.com/moment/moment/pull/4242) [bugfix] updateLocale now tries to load parent, fixes [#3626](https://github.com/moment/moment/issues/3626)

### 2.19.1

* Release Oct 11, 2017

Make react native and webpack both work
* #4225 #4226 #4232

### 2.19.0 [See full changelog](https://gist.github.com/ichernev/5f3f4eb02761b4f765a0cccf02cec603)

* Release Oct 10, 2017

## Fix React Native 0.49+ crash
* [#4213](https://github.com/moment/moment/pull/4213) [critical] Rename dynamic
  require to avoid React Native crash
* [#4214](https://github.com/moment/moment/pull/4214) [fixup] Move require
  rename inside try/catch, fixes
  [#4213](https://github.com/moment/moment/issues/4213)

## Features

* [#3735](https://github.com/moment/moment/pull/3735) [feature] Ignore NaN values in setters
* [#4106](https://github.com/moment/moment/pull/4106) [fixup] Drop isNumeric utility fn, fixes [#3735](https://github.com/moment/moment/issues/3735)
* [#4080](https://github.com/moment/moment/pull/4080) [feature] Implement a clone method for durations, fixes [#4078](https://github.com/moment/moment/issues/4078)
* [#4215](https://github.com/moment/moment/pull/4215) [misc] TS: Add duration.clone(), for [#4080](https://github.com/moment/moment/issues/4080)

## Packaging

* [#4003](https://github.com/moment/moment/pull/4003) [pkg] bower: Remove tests from package
* [#3904](https://github.com/moment/moment/pull/3904) [pkg] jsnext:main -> module in package.json
* [#4060](https://github.com/moment/moment/pull/4060) [pkg] Account for new rollup interface

Bugfixes, new locales, locale fixes etc...

### 2.18.1

* Release Mar 22, 2017

* [#3853](https://github.com/moment/moment/pull/3853) [misc] Fix invalid whitespace character causing inability to parse
  moment.js

### 2.18.0 [See full changelog](https://gist.github.com/ichernev/78920c5a1e419fb28c6e4546d1b7235c)

* Release Mar 18, 2017

## Features

* [#3708](https://github.com/moment/moment/pull/3708) [feature] RFC2822 parsing
* [#3611](https://github.com/moment/moment/pull/3611) [feature] Durations gain validity
* [#3738](https://github.com/moment/moment/pull/3738) [feature] Enable relative time for multiple seconds, request [#2558](https://github.com/moment/moment/issues/2558)
* [#3766](https://github.com/moment/moment/pull/3766) [feature] Add support for k and kk format parsing

## Bugfixes

* [#3643](https://github.com/moment/moment/pull/3643) [bugfix] Fixes [#3520](https://github.com/moment/moment/issues/3520), parseZone incorrectly handled minutes under 16
* [#3710](https://github.com/moment/moment/pull/3710) [bugfix] Fixes [#3632](https://github.com/moment/moment/issues/3632), toISOString returns null for invalid date
* [#3787](https://github.com/moment/moment/pull/3787) [bugfix] Fixes [#3717](https://github.com/moment/moment/issues/3717), ensure day-of-year is non-zero
* [#3780](https://github.com/moment/moment/pull/3780) [bugfix] Fixes [#3765](https://github.com/moment/moment/issues/3765): Ensure year 0 is formatted with YYYY
* [#3806](https://github.com/moment/moment/pull/3806) [bugfix] Fixes [#3805](https://github.com/moment/moment/issues/3805), fix locale month getters for standalone/format cases

7 new locales, many locale improvements and some misc changes

### 2.17.1 [Also available here](https://gist.github.com/ichernev/f38280b2b29c4932914a6d3a4e50bfb2)
* Release Dec 03, 2016

* [#3638](https://github.com/moment/moment/pull/3638) [misc] TS: Make typescript definitions work with 1.x
* [#3628](https://github.com/moment/moment/pull/3628) [misc] Adds "sign CLA" link to `CONTRIBUTING.md`
* [#3640](https://github.com/moment/moment/pull/3640) [misc] Fix locale issues

### 2.17.0 [Also available here](https://gist.github.com/ichernev/ed58f76fb95205eeac653d719972b90c)
* Release Nov 22, 2016

* [#3435](https://github.com/moment/moment/pull/3435) [new locale] yo: Yoruba (Nigeria) locale
* [#3595](https://github.com/moment/moment/pull/3595) [bugfix] Fix accidental reference to global "value" variable
* [#3506](https://github.com/moment/moment/pull/3506) [bugfix] Fix invalid moments returning valid dates to method calls
* [#3563](https://github.com/moment/moment/pull/3563) [locale] ca: Change future relative time
* [#3504](https://github.com/moment/moment/pull/3504) [tests] Fixes [#3463](https://github.com/moment/moment/issues/3463), parseZone not handling Z correctly (tests only)
* [#3591](https://github.com/moment/moment/pull/3591) [misc] typescript: update typescript to 2.0.8, add strictNullChecks=true
* [#3597](https://github.com/moment/moment/pull/3597) [misc] Fixed capitalization in nuget spec

### 2.16.0 [See full changelog](https://gist.github.com/ichernev/17bffc1005a032cb1a8ac4c1558b4994)
* Release Nov 9, 2016

## Features
* [#3530](https://github.com/moment/moment/pull/3530) [feature] Check whether input is date before checking if format is array
* [#3515](https://github.com/moment/moment/pull/3515) [feature] Fix [#2300](https://github.com/moment/moment/issues/2300): Default to current week.

## Bugfixes
* [#3546](https://github.com/moment/moment/pull/3546) [bugfix] Implement lazy-loading of child locales with missing prents
* [#3523](https://github.com/moment/moment/pull/3523) [bugfix] parseZone should handle UTC
* [#3502](https://github.com/moment/moment/pull/3502) [bugfix] Fix [#3500](https://github.com/moment/moment/issues/3500): ISO 8601 parsing should match the full string, not the beginning of the string.
* [#3581](https://github.com/moment/moment/pull/3581) [bugfix] Fix parseZone, redo [#3504](https://github.com/moment/moment/issues/3504), fix [#3463](https://github.com/moment/moment/issues/3463)

## New Locales
* [#3416](https://github.com/moment/moment/pull/3416) [new locale] nl-be: Dutch (Belgium) locale
* [#3393](https://github.com/moment/moment/pull/3393) [new locale] ar-dz: Arabic (Algeria) locale
* [#3342](https://github.com/moment/moment/pull/3342) [new locale] tet: Tetun Dili (East Timor) locale

And more locale, build and typescript improvements

### 2.15.2
* Release Oct 23, 2016
* [#3525](https://github.com/moment/moment/pull/3525) Speedup month standalone/format regexes **(IMPORTANT)**
* [#3466](https://github.com/moment/moment/pull/3466) Fix typo of Javanese

### 2.15.1
* Release Sept 20, 2016
* [#3438](https://github.com/moment/moment/pull/3438) Fix locale autoload, revert [#3344](https://github.com/moment/moment/pull/3344)

### 2.15.0 [See full changelog](https://gist.github.com/ichernev/10e1c5bf647545c72ca30e9628a09ed3)
- Release Sept 12, 2016

## New Locales
* [#3255](https://github.com/moment/moment/pull/3255) [new locale] mi: Maori language
* [#3267](https://github.com/moment/moment/pull/3267) [new locale] ar-ly: Arabic (Libya) locale
* [#3333](https://github.com/moment/moment/pull/3333) [new locale] zh-hk: Chinese (Hong Kong) locale

## Bugfixes
* [#3276](https://github.com/moment/moment/pull/3276) [bugfix] duration: parser: Support ms durations in .NET syntax
* [#3312](https://github.com/moment/moment/pull/3312) [bugfix] locales: Enable locale-data getters without moment (fixes [#3284](https://github.com/moment/moment/issues/3284))
* [#3381](https://github.com/moment/moment/pull/3381) [bugfix] parsing: Fix parseZone without timezone in string, fixes [#3083](https://github.com/moment/moment/issues/3083)
* [#3383](https://github.com/moment/moment/pull/3383) [bugfix] toJSON: Fix isValid so that toJSON works after a moment is frozen
* [#3427](https://github.com/moment/moment/pull/3427) [bugfix] ie8: Fix IE8 (regression in 2.14.x)

## Packaging
* [#3299](https://github.com/moment/moment/pull/3299) [pkg] npm: Do not include .npmignore in npm package
* [#3273](https://github.com/moment/moment/pull/3273) [pkg] jspm: Include moment.d.ts file in package
* [#3344](https://github.com/moment/moment/pull/3344) [pkg] exports: use module.require for nodejs

Also some locale and typescript improvements

### 2.14.1
- Release July 20, 2016
* [#3280](https://github.com/moment/moment/pull/3280) Fix typescript definitions


### 2.14.0 [See full changelog](https://gist.github.com/ichernev/812e79ac36a7829a22598fe964bfc18a)

- Release July 20, 2016

## New Features
* [#3233](https://github.com/moment/moment/pull/3233) Introduce month.isFormat for format/standalone discovery
* [#2848](https://github.com/moment/moment/pull/2848) Allow user to get/set the rounding method used when calculating relative time
* [#3112](https://github.com/moment/moment/pull/3112) optimize configFromStringAndFormat
* [#3147](https://github.com/moment/moment/pull/3147) Call calendar format function with moment context
* [#3160](https://github.com/moment/moment/pull/3160) deprecate isDSTShifted
* [#3175](https://github.com/moment/moment/pull/3175) make moment calendar extensible with ad-hoc options
* [#3191](https://github.com/moment/moment/pull/3191) toDate returns a copy of the internal date object
* [#3192](https://github.com/moment/moment/pull/3192) Adding support for rollup import.
* [#3238](https://github.com/moment/moment/pull/3238) Handle empty object and empty array for creation as now
* [#3082](https://github.com/moment/moment/pull/3082) Use relative AMD moment dependency

## Bugfixes
* [#3241](https://github.com/moment/moment/pull/3241) Escape all 24 mixed pieces, not only first 12 in computeMonthsParse
* [#3008](https://github.com/moment/moment/pull/3008) Object setter orders sets based on size of unit
* [#3177](https://github.com/moment/moment/pull/3177) Bug Fix [#2704](https://github.com/moment/moment/pull/2704) - isoWeekday(String) inconsistent with isoWeekday(Number)
* [#3230](https://github.com/moment/moment/pull/3230) fix passing date with format string to ignore format string
* [#3232](https://github.com/moment/moment/pull/3232) Fix negative 0 in certain diff cases
* [#3235](https://github.com/moment/moment/pull/3235) Use proper locale inheritance for the base locale, fixes [#3137](https://github.com/moment/moment/pull/3137)

Plus es-do locale and locale bugfixes

### 2.13.0 [See full changelog](https://gist.github.com/ichernev/0132fcf5b61f7fc140b0bb0090480d49)
- Release April 18, 2016

## Enhancements:
* [#2982](https://github.com/moment/moment/pull/2982) Add 'date' as alias to 'day' for startOf() and endOf().
* [#2955](https://github.com/moment/moment/pull/2955) Add parsing negative components in durations when ISO 8601
* [#2991](https://github.com/moment/moment/pull/2991) isBetween support for both open and closed intervals
* [#3105](https://github.com/moment/moment/pull/3105) Add localeSorted argument to weekday listers
* [#3102](https://github.com/moment/moment/pull/3102) Add k and kk formatting tokens

## Bugfixes
* [#3109](https://github.com/moment/moment/pull/3109) Fix [#1756](https://github.com/moment/moment/issues/1756) Resolved thread-safe issue on server side.
* [#3078](https://github.com/moment/moment/pull/3078) Fix parsing for months/weekdays with weird characters
* [#3098](https://github.com/moment/moment/pull/3098) Use Z suffix when in UTC mode ([#3020](https://github.com/moment/moment/issues/3020))
* [#2995](https://github.com/moment/moment/pull/2995) Fix floating point rounding errors in durations
* [#3059](https://github.com/moment/moment/pull/3059) fix bug where diff returns -0 in month-related diffs
* [#3045](https://github.com/moment/moment/pull/3045) Fix mistaking any input for 'a' token
* [#2877](https://github.com/moment/moment/pull/2877) Use explicit .valueOf() calls instead of coercion
* [#3036](https://github.com/moment/moment/pull/3036) Year setter should keep time when DST changes

Plus 3 new locales and locale fixes.

### 2.12.0 [See full changelog](https://gist.github.com/ichernev/6e5bfdf8d6522fc4ac73)

- Release March 7, 2016

## Enhancements:
* [#2932](https://github.com/moment/moment/pull/2932) List loaded locales
* [#2818](https://github.com/moment/moment/pull/2818) Parse ISO-8061 duration containing both day and week values
* [#2774](https://github.com/moment/moment/pull/2774) Implement locale inheritance and locale updating

## Bugfixes:
* [#2970](https://github.com/moment/moment/pull/2970) change add subtract to handle decimal values by rounding
* [#2887](https://github.com/moment/moment/pull/2887) Fix toJSON casting of invalid moment
* [#2897](https://github.com/moment/moment/pull/2897) parse string arguments for month() correctly, closes #2884
* [#2946](https://github.com/moment/moment/pull/2946) Fix usage suggestions for min and max

## New locales:
* [#2917](https://github.com/moment/moment/pull/2917) Locale Punjabi(Gurmukhi) India format conversion

And more

### 2.11.2 (Fix ReDoS attack vector)

- Release February 7, 2016

* [#2939](https://github.com/moment/moment/pull/2939) use full-string match to speed up aspnet regex match

### 2.11.1 [See full changelog](https://gist.github.com/ichernev/8ec3ee25b749b4cff3c2)

- Release January 9, 2016

## Bugfixes:
* [#2881](https://github.com/moment/moment/pull/2881) Revert "Merge pull request #2746 from mbad0la:develop" Sep->Sept
* [#2868](https://github.com/moment/moment/pull/2868) Add format and parse token Y, so it actually works
* [#2865](https://github.com/moment/moment/pull/2865) Use typeof checks for undefined for global variables
* [#2858](https://github.com/moment/moment/pull/2858) Fix Date mocking regression introduced in 2.11.0
* [#2864](https://github.com/moment/moment/pull/2864) Include changelog in npm release
* [#2830](https://github.com/moment/moment/pull/2830) dep: add grunt-cli
* [#2869](https://github.com/moment/moment/pull/2869) Fix months parsing for some locales

### 2.11.0 [See full changelog](https://gist.github.com/ichernev/6594bc29719dde6b2f66)

- Release January 4, 2016

* [#2624](https://github.com/moment/moment/pull/2624) Proper handling of invalid moments
* [#2634](https://github.com/moment/moment/pull/2634) Fix strict month parsing issue in cs,ru,sk
* [#2735](https://github.com/moment/moment/pull/2735) Reset the locale back to 'en' after defining all locales in min/locales.js
* [#2702](https://github.com/moment/moment/pull/2702) Week rework
* [#2746](https://github.com/moment/moment/pull/2746) Changed September Abbreviation to "Sept" in locale-specific english
  files and default locale file
* [#2646](https://github.com/moment/moment/pull/2646) Fix [#2645](https://github.com/moment/moment/pull/2645) - invalid dates pre-1970

* [#2641](https://github.com/moment/moment/pull/2641) Implement basic format and comma as ms separator in ISO 8601
* [#2665](https://github.com/moment/moment/pull/2665) Implement stricter weekday parsing
* [#2700](https://github.com/moment/moment/pull/2700) Add [Hh]mm and [Hh]mmss formatting tokens, so you can parse 123 with
  hmm for example
* [#2565](https://github.com/moment/moment/pull/2565) [#2835](https://github.com/moment/moment/pull/2835) Expose arguments used for moment creation with creationData
  (fix [#2443](https://github.com/moment/moment/pull/2443))
* [#2648](https://github.com/moment/moment/pull/2648) fix issue [#2640](https://github.com/moment/moment/pull/2640): support instanceof operator
* [#2709](https://github.com/moment/moment/pull/2709) Add isSameOrAfter and isSameOrBefore comparison methods
* [#2721](https://github.com/moment/moment/pull/2721) Fix moment creation from object with strings values
* [#2740](https://github.com/moment/moment/pull/2740) Enable 'd hh:mm:ss.sss' format for durations
* [#2766](https://github.com/moment/moment/pull/2766) [#2833](https://github.com/moment/moment/pull/2833) Alternate Clock Source Support

### 2.10.6

- Release July 28, 2015

[#2515](https://github.com/moment/moment/pull/2515) Fix regression introduced
in `2.10.5` related to `moment.ISO_8601` parsing.

### 2.10.5 [See full changelog](https://gist.github.com/ichernev/6ec13ac7efc396da44b2)

- Release July 26, 2015

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

- Release May 13, 2015

* add `moment.fn.to` and `moment.fn.toNow` (similar to `from` and `fromNow`)
* new locales (Sinhalese (si), Montenegrin (me), Javanese (ja))
* performance improvements

### 2.10.2

- Release April 9, 2015

* fixed moment-with-locales in browser env caused by esperanto change

### 2.10.1

* regression: Add moment.duration.fn back

### 2.10.0

Ported code to es6 modules.

### 2.9.0 [See full changelog](https://gist.github.com/ichernev/0c9a9b49951111a27ce7)

- Release January 8, 2015

languages:
* [2104](https://github.com/moment/moment/issues/2104) Frisian (fy) language file with unit test
* [2097](https://github.com/moment/moment/issues/2097) add ar-tn locale

deprecations:
* [2074](https://github.com/moment/moment/issues/2074) Implement `moment.fn.utcOffset`, deprecate `moment.fn.zone`

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

- Release November 19, 2014

Features:

* [#2000](https://github.com/moment/moment/issues/2000) Add LTS localised format that includes seconds
* [#1960](https://github.com/moment/moment/issues/1960) added formatToken 'x' for unix offset in milliseconds #1938
* [#1965](https://github.com/moment/moment/issues/1965) Support 24:00:00.000 to mean next day, at midnight.
* [#2002](https://github.com/moment/moment/issues/2002) Accept 'date' key when creating moment with object
* [#2009](https://github.com/moment/moment/issues/2009) Use native toISOString when we can

Some bugfixes and language improvements -- [full changelog](https://gist.github.com/ichernev/a4fcb0a46d74e4b9b996)

### 2.8.3

- Release September 5, 2014

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

- Release August 22, 2014

Minor bugfixes:

* [#1874](https://github.com/moment/moment/issues/1874) use `Object.prototype.hasOwnProperty`
  instead of `obj.hasOwnProperty` (ie8 bug)
* [#1873](https://github.com/moment/moment/issues/1873) add `duration#toString()`
* [#1859](https://github.com/moment/moment/issues/1859) better month/weekday names in norwegian
* [#1812](https://github.com/moment/moment/issues/1812) meridiem parsing for greek
* [#1804](https://github.com/moment/moment/issues/1804) spanish del -> de
* [#1800](https://github.com/moment/moment/issues/1800) korean LT improvement

### 2.8.1

- Release August 1, 2014

* bugfix [#1813](https://github.com/moment/moment/issues/1813): fix moment().lang([key]) incompatibility

### 2.8.0 [See changelog](https://gist.github.com/ichernev/ac3899324a5fa6c8c9b4)

- Release July 31, 2014

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

- Release June 12, 2014

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

- Release April 12 , 2014

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

- Release January 22, 2014

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

- Release Dec 24, 2013

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

- Release Oct 27, 2013

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

- Release Oct 9, 2013

Removed a trailing comma [1169] and fixed a bug with `months`, `weekdays` getters [#1171](https://github.com/moment/moment/issues/1171).

### 2.3.0 [See changelog](https://gist.github.com/ichernev/6864354)

- Release Oct 7, 2013

Changed isValid, added strict parsing.
Week tokens parsing.

### 2.2.1

- Release Sep 12, 2013

Fixed bug in string prototype test.
Updated authors and contributors.

### 2.2.0 [See changelog](https://gist.github.com/ichernev/00f837a9baf46a3565e4)

- Release  Sep 11, 2013

Added bower support.

Language files now use UMD.

Creating moment defaults to current date/month/year.

Added a bundle of moment and all language files.

### 2.1.0 [See changelog](https://gist.github.com/timrwood/b8c2d90d528eddb53ab5)

- Release Jul 8, 2013

Added better week support.

Added ability to set offset with `moment#zone`.

Added ability to set month or weekday from a string.

Added `moment#min` and `moment#max`

### 2.0.0 [See changelog](https://gist.github.com/timrwood/e72f2eef320ed9e37c51)

- Release Feb 9, 2013

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

Bugfix: Fixed weirdness with `moment.utc()` parsing.

Changed language ordinal method to return the number + ordinal instead of just the ordinal.

Changed two digit year parsing cutoff to match strptime.

Removed `moment#sod` and `moment#eod` in favor of `moment#startOf` and `moment#endOf`.

Removed `moment.humanizeDuration()` in favor of `moment.duration().humanize()`.

Removed the lang data objects from the top level namespace.

Duplicate `Date` passed to `moment()` instead of referencing it.

### 1.7.2 [See discussion](https://github.com/timrwood/moment/issues/456)

- Release Oct 2, 2012

Bugfixes

### 1.7.1 [See discussion](https://github.com/timrwood/moment/issues/384)

- Release Oct 1, 2012

Bugfixes

### 1.7.0 [See discussion](https://github.com/timrwood/moment/issues/288)

- Release Jul 26, 2012

Added `moment.fn.endOf()` and `moment.fn.startOf()`.

Added validation via `moment.fn.isValid()`.

Made formatting method 3x faster. http://jsperf.com/momentjs-cached-format-functions

Add support for month/weekday callbacks in `moment.fn.format()`

Added instance specific languages.

Added two letter weekday abbreviations with the formatting token `dd`.

Various language updates.

Various bugfixes.

### 1.6.0 [See discussion](https://github.com/timrwood/moment/pull/268)

- Release Apr 26, 2012

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

- Release Mar 20, 2012

Added UTC mode.

Added automatic ISO8601 parsing.

Various bugfixes.

### 1.4.0 [See milestone](https://github.com/timrwood/moment/issues?milestone=8&state=closed)

- Release Feb 4, 2012

Added `moment.fn.toDate` as a replacement for `moment.fn.native`.

Added `moment.fn.sod` and `moment.fn.eod` to get the start and end of day.

Various bugfixes.

### 1.3.0 [See milestone](https://github.com/timrwood/moment/issues?milestone=7&state=closed)

- Release Jan 5, 2012

Added support for parsing month names in the current language.

Added escape blocks for parsing tokens.

Added `moment.fn.calendar` to format strings like 'Today 2:30 PM', 'Tomorrow 1:25 AM', and 'Last Sunday 4:30 AM'.

Added `moment.fn.day` as a setter.

Various bugfixes

### 1.2.0 [See milestone](https://github.com/timrwood/moment/issues?milestone=4&state=closed)

- Release Dec 7, 2011

Added timezones to parser and formatter.

Added `moment.fn.isDST`.

Added `moment.fn.zone` to get the timezone offset in minutes.

### 1.1.2 [See milestone](https://github.com/timrwood/moment/issues?milestone=6&state=closed)

- Release Nov 18, 2011

Various bugfixes

### 1.1.1 [See milestone](https://github.com/timrwood/moment/issues?milestone=5&state=closed)

- Release Nov 12, 2011

Added time specific diffs (months, days, hours, etc)

### 1.1.0

- Release Oct 28, 2011

Added `moment.fn.format` localized masks. 'L LL LLL LLLL' [issue 29](https://github.com/timrwood/moment/pull/29)

Fixed [issue 31](https://github.com/timrwood/moment/pull/31).

### 1.0.1

- Release Oct 18, 2011

Added `moment.version` to get the current version.

Removed `window !== undefined` when checking if module exists to support browserify. [issue 25](https://github.com/timrwood/moment/pull/25)

### 1.0.0

- Release

Added convenience methods for getting and setting date parts.

Added better support for `moment.add()`.

Added better lang support in NodeJS.

Renamed library from underscore.date to Moment.js

### 0.6.1

- Release Oct 12, 2011

Added Portuguese, Italian, and French language support

### 0.6.0

- Release Sep 21, 2011

Added _date.lang() support.
Added support for passing multiple formats to try to parse a date. _date("07-10-1986", ["MM-DD-YYYY", "YYYY-MM-DD"]);
Made parse from string and single format 25% faster.

### 0.5.2

- Release Jul 11, 2011

Bugfix for [issue 8](https://github.com/timrwood/underscore.date/pull/8) and [issue 9](https://github.com/timrwood/underscore.date/pull/9).

### 0.5.1

- Release Jun 17, 2011

Bugfix for [issue 5](https://github.com/timrwood/underscore.date/pull/5).

### 0.5.0

- Release Jun 13, 2011

Dropped the redundant `_date.date()` in favor of `_date()`.
Removed `_date.now()`, as it is a duplicate of `_date()` with no parameters.
Removed `_date.isLeapYear(yearNumber)`. Use `_date([yearNumber]).isLeapYear()` instead.
Exposed customization options through the `_date.relativeTime`, `_date.weekdays`, `_date.weekdaysShort`, `_date.months`, `_date.monthsShort`, and `_date.ordinal` variables instead of the `_date.customize()` function.

### 0.4.1

- Release May 9, 2011

Added date input formats for input strings.

### 0.4.0

- Release May 9, 2011

Added underscore.date to npm. Removed dependencies on underscore.

### 0.3.2

- Release Apr 9, 2011

Added `'z'` and `'zz'` to `_.date().format()`. Cleaned up some redundant code to trim off some bytes.

### 0.3.1

- Release Mar 25, 2011

Cleaned up the namespace. Moved all date manipulation and display functions to the _.date() object.

### 0.3.0

- Release Mar 25, 2011

Switched to the Underscore methodology of not mucking with the native objects' prototypes.
Made chaining possible.

### 0.2.1

- Release

Changed date names to be a more pseudo standardized 'dddd, MMMM Do YYYY, h:mm:ss a'.
Added `Date.prototype` functions `add`, `subtract`, `isdst`, and `isleapyear`.

### 0.2.0

- Release

Changed function names to be more concise.
Changed date format from php date format to custom format.

### 0.1.0

- Release

Initial release

