### `0.5.10` _2016-11-27_
* Updated data to IANA TZDB `2016j`. [#422](https://github.com/moment/moment-timezone/pull/422)

### `0.5.9` _2016-11-03_
* Fixed the output of `moment.tz.version`. [#413](https://github.com/moment/moment-timezone/issues/413)

### `0.5.8` _2016-11-03_
* Updated data to IANA TZDB `2016i`. [#411](https://github.com/moment/moment-timezone/pull/411)

### `0.5.7` _2016-10-21_
* Updated data to IANA TZDB `2016h`. [#403](https://github.com/moment/moment-timezone/pull/403)

### `0.5.6` _2016-10-08_
* Updated data to IANA TZDB `2016g`. [#394](https://github.com/moment/moment-timezone/pull/394)

### `0.5.5` _2016-07-24_
* Updated data to IANA TZDB `2016f`. [#360](https://github.com/moment/moment-timezone/pull/360)

### `0.5.4` _2016-05-03_
* Updated data to IANA TZDB `2016d`. [#336](https://github.com/moment/moment-timezone/pull/336)
* Ignore the results from `Intl.DateTimeFormat().resolvedOptions().timeZone` if it is undefined. [#322](https://github.com/moment/moment-timezone/pull/322)

### `0.5.3` _2016-03-24_
* Updated data to IANA TZDB `2016c`. [#321](https://github.com/moment/moment-timezone/pull/321)

### `0.5.2` _2016-03-15_
* Updated data to IANA TZDB `2016b`. [#315](https://github.com/moment/moment-timezone/pull/315)

### `0.5.1` _2016-03-01_
* Updated data to IANA TZDB `2016a`. [#299](https://github.com/moment/moment-timezone/pull/299)
* Fixed bug when `Date#toTimeString` did not return a known format. [#302](https://github.com/moment/moment-timezone/pull/302)  [#303](https://github.com/moment/moment-timezone/pull/303)
* Added lookup on `Intl.DateTimeFormat().resolvedOptions().timeZone` to `moment.tz.guess()`. [#304](https://github.com/moment/moment-timezone/pull/304) [#291](https://github.com/moment/moment-timezone/pull/291)

### `0.5.0` _2015-12-28_
* Added support for guessing the user's timezone via `moment.tz.guess()`. [#285](https://github.com/moment/moment-timezone/pull/285)
* Fixed UMD export issue when there was an html element with `id=exports`. [#275](https://github.com/moment/moment-timezone/pull/275)
* Removed jspm specific dependencies from `package.json`. [#284](https://github.com/moment/moment-timezone/pull/284)

### `0.4.1` _2015-10-07_
* Updated data to IANA TZDB `2015e`. [#253](https://github.com/moment/moment-timezone/pull/253)
* Updated data to IANA TZDB `2015f`. [#253](https://github.com/moment/moment-timezone/pull/253)
* Updated data to IANA TZDB `2015g`. [#255](https://github.com/moment/moment-timezone/pull/255)
* Added jspm dependencies for moment. [#234](https://github.com/moment/moment-timezone/pull/234)
* Included builds directory in npm. [#237](https://github.com/moment/moment-timezone/pull/237)
* Removed version field from bower.json. [#230](https://github.com/moment/moment-timezone/pull/230)

### `0.4.0` _2015-05-30_
* Updated data to IANA TZDB `2015b`. [#201](https://github.com/moment/moment-timezone/pull/201)
* Updated data to IANA TZDB `2015c`. [#214](https://github.com/moment/moment-timezone/pull/214)
* Updated data to IANA TZDB `2015d`. [#214](https://github.com/moment/moment-timezone/pull/214)
* Updated zone getter to allow lazy unpacking to improve initial page load times. [#216](https://github.com/moment/moment-timezone/pull/216)
* Added a `package.json` `jspm:main` entry point. [#194](https://github.com/moment/moment-timezone/pull/194)
* Added `composer.json`. [#222](https://github.com/moment/moment-timezone/pull/222)
* Added an error message when trying to load moment-timezone twice. [#212](https://github.com/moment/moment-timezone/pull/212)

### `0.3.1` _2015-03-16_
* Updated data to IANA TZDB `2015a`. [#183](https://github.com/moment/moment-timezone/pull/183)

### `0.3.0` _2015-01-13_

* *Breaking:* Added country data to the `meta/*.json` files. Restructured the data to support multiple countries per zone. [#162](https://github.com/moment/moment-timezone/pull/162)
* Added the ability to set a default timezone for all new moments. [#152](https://github.com/moment/moment-timezone/pull/152)
* Fixed a bug when passing a moment with an offset to `moment.tz`. [#169](https://github.com/moment/moment-timezone/pull/169)
* Fixed a deprecation in moment core, changing `moment#zone` to `moment#utcOffset`. [#168](https://github.com/moment/moment-timezone/pull/168)

### `0.2.5` _2014-11-12_
* Updated data to IANA TZDB `2014j`. [#151](https://github.com/moment/moment-timezone/pull/151)

### `0.2.4` _2014-10-20_
* Updated data to IANA TZDB `2014i`. [#142](https://github.com/moment/moment-timezone/pull/142)

### `0.2.3` _2014-10-20_
* Updated data to IANA TZDB `2014h`. [#141](https://github.com/moment/moment-timezone/pull/141)

### `0.2.2` _2014-09-04_
* Updated data to IANA TZDB `2014g`. [#126](https://github.com/moment/moment-timezone/pull/126)
* Added a warning when using `moment-timezone` with `moment<2.6.0`.

### `0.2.1` _2014-08-02_
* Fixed support for `moment@2.8.1+`.

### `0.2.0` _2014-07-21_
* Added the ability to configure whether ambiguous or invalid input is rolled forward or backward. [#101](https://github.com/moment/moment-timezone/pull/101)
* Added `moment>=2.6.0` as a dependency in `bower.json`. [#107](https://github.com/moment/moment-timezone/issues/107)
* Fixed getting the name of a zone that was added as a linked zone. [#104](https://github.com/moment/moment-timezone/pull/104)
* Added an error message when a zone was not loaded. [#106](https://github.com/moment/moment-timezone/issues/106)

### `0.1.0` _2014-06-23_
* *Breaking:* Changed data format from Zones+Rules to just Zones. [#82](https://github.com/moment/moment-timezone/pull/82)
* *Breaking:* Removed `moment.tz.{addRule,addZone,zoneExists,zones}` as they are no longer relevant with the new data format.
* Made library 20x faster. [JSPerf results](http://jsperf.com/moment-timezone-0-1-0/2)
* Completely rewrote internals to support new data format.
* Updated the data collection process to get data directly from http://www.iana.org/time-zones.
* Updated data to IANA TZDB `2014e`.
* Updated `bower.json` to use a browser specific `main:` entry point.
* Added built files with included data.
* Added support for accurately parsing input around DST changes. [#93](https://github.com/moment/moment-timezone/pull/93)
* Added comprehensive documentation at [momentjs.com/timezone/docs/](http://momentjs.com/timezone/docs/).
* Added `moment.tz.link` for linking two identical zones.
* Added `moment.tz.zone` for getting a loaded zone.
* Added `moment.tz.load` for loading a bundled version of data from the IANA TZDB.
* Added `moment.tz.names` for getting the names of all the loaded timezones.
* Added `moment.tz.unpack` and `moment.tz.unpackBase60` for unpacking data.
* Added `moment-timezone-utils.js` for working with the packed and unpacked data.
* Fixed major memory leak. [#79](https://github.com/moment/moment-timezone/issues/79)
* Fixed global export to allow use in web workers. [#78](https://github.com/moment/moment-timezone/pull/78)
* Fixed global export in browser environments that define `window.module`. [#76](https://github.com/moment/moment-timezone/pull/76)

### `0.0.6` _2014-04-20_
* Fixed issue with preventing loading moment-timezone more than once. [#75](https://github.com/moment/moment-timezone/pull/75)

### `0.0.5` _2014-04-17_
* Improved performance with memoization. [#39](https://github.com/moment/moment-timezone/issues/39)
* Published only necessary files to npm. [#46](https://github.com/moment/moment-timezone/issues/46)
* Added better handling of timezones around DST. [#53](https://github.com/moment/moment-timezone/issues/53) [#61](https://github.com/moment/moment-timezone/issues/61) [#70](https://github.com/moment/moment-timezone/issues/70)
* Added Browserify support. [#41](https://github.com/moment/moment-timezone/issues/41)
* Added `moment.tz.zoneExists` [#73](https://github.com/moment/moment-timezone/issues/73)
* Fixed cloning moments with a timezone. [#71](https://github.com/moment/moment-timezone/issues/71)
* Prevent loading moment-timezone more than once. [#74](https://github.com/moment/moment-timezone/issues/74)

### `0.0.3` _2013-10-10_
* Added Bower support.
* Added support for newer versions of moment.
* Added support for constructing a moment with a string and zone.
* Added more links and timezone names in moment-timezone.json

### `0.0.1` _2013-07-17_
* Initial version.
