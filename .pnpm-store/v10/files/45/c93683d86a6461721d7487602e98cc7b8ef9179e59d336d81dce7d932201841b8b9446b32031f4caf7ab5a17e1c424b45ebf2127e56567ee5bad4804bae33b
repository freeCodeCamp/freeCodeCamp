# date-fns-tz

Time zone support for [date-fns](https://date-fns.org/) v3.0.0 using the
[Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).
By using the browser API no time zone data needs to be included in code bundles. Modern browsers
and Node.js all support the
[necessary features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Browser_compatibility),
and for those that don't a [polyfill](https://formatjs.io/docs/polyfills/intl-datetimeformat) can be used.

If you do not wish to use a polyfill the time zones can still be specified as offsets
such as '-0200' or '+04:00', but not IANA time zone names.

**Note:** `date-fns` is a peer dependency of this library.

If you find this library useful, why not

<a href="https://www.buymeacoffee.com/marnusw" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## ESM and CommonJS

This library supports CommonJS and native ESM imports. The exports field in [package.json](./package.json)
defines the correct entry point depending on project type, so the same import path is used for both.
Make sure to set the `type` property in your project's `package.json` to either `module`, for ESM, or `commonjs`.

Even when using ESM some CommonJS imports from `date-fns` will be used until they support
ESM natively as well [date-fns#1781](https://github.com/date-fns/date-fns/issues/1781).
This is because an ESM project cannot use ESM imports from a library that doesn't specify
`{"type": "module"}`.

## Table of Contents

- [Overview](#overview)
- [Date and time zone formatting](#date-and-time-zone-formatting)
  - [`formatInTimeZone`](#formatintimezone) - Formats a date in the provided time zone,
    regardless of the system time zone
- [Time zone offset helpers](#time-zone-offset-helpers)
  - [`fromZonedTime`](#fromzonedtime) - Given a date and any time zone, returns a `Date` with the equivalent UTC time
  - [`toZonedTime`](#tozonedtime) - Get a date/time representing local time in a given time zone from the UTC date
  - [`getTimezoneOffset`](#gettimezoneoffset) - Gets the offset in milliseconds between the time zone and UTC time
- [Low-level formatting helpers](#low-level-formatting-helpers)
  - [`format`](#format) - Extends `date-fns/format` with support for all time zone tokens,
    including `z..zzzz`
  - [`toDate`](#todate) - Can be used to parse a `Date` from a date string representing time in
    any time zone
- [Usage with Android](#usage-with-android)

## Overview

Working with UTC or ISO date strings is easy, and so is working with JS dates when all times
are displayed in a user's local time in the browser. The difficulty comes when working with another
time zone's local time, one other than the current system's, like on a Node server or when showing
the time of an event in a specific time zone, like an event in LA at 8pm PST regardless of where
a user resides.

In this case there are two relevant pieces of information:

- a fixed moment in time in the form of a timestamp, UTC or ISO date string, and
- the time zone descriptor, usually an offset or IANA time zone name (e.g. `America/New_York`).

Libraries like Moment and Luxon, which provide their own date-time classes, manage these
timestamp and time zone values internally. Since `date-fns` always returns a plain JS Date,
which implicitly has the current system's time zone, helper functions are provided for handling
common time zone related use cases.

## Date and time zone formatting

### `formatInTimeZone`

This function takes a `Date` instance in the system's local time or an ISO8601 string, and
an IANA time zone name or offset string. It then formats this date in the target time zone
regardless of the system's local time zone.

It supports the same format tokens as `date-fns/format`, and adds full support for:

- The `z..zzz` Unicode tokens: _short specific non-location format_, e.g. `EST`
- The `zzzz` Unicode token: _long specific non-location format_, e.g. `Eastern Standard Time`

Unlike `date-fns/format`, the `z..zzzz`, `x..xxxxx`, `X..XXXXX` and `O..OOO` tokens will all
print the formatted value of the provided time zone rather than the system time zone.

An invalid date or time zone input will result in an `Invalid Date` passed to `date-fns/format`,
which will throw a `RangeError`.

For most use cases this is the only function from this library you will need.

```javascript
import { formatInTimeZone } from 'date-fns-tz'

const date = new Date('2014-10-25T10:46:20Z')

formatInTimeZone(date, 'America/New_York', 'yyyy-MM-dd HH:mm:ssXXX') // 2014-10-25 06:46:20-04:00
formatInTimeZone(date, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz') // 2014-10-25 06:46:20 EST
formatInTimeZone(date, 'Europe/Paris', 'yyyy-MM-dd HH:mm:ss zzz') // 2014-10-25 12:46:20 GMT+2

// The time zone name is generated by the Intl API which works best when a locale is also provided
import { enGB } from 'date-fns/locale/en-GB'

formatInTimeZone(parisDate, 'Europe/Paris', 'yyyy-MM-dd HH:mm:ss zzz', { locale: enGB })
// 2014-10-25 10:46:20 CEST

formatInTimeZone(parisDate, 'Europe/Paris', 'yyyy-MM-dd HH:mm:ss zzzz', { locale: enGB })
// 2014-10-25 10:46:20 Central European Summer Time
```

## Time zone offset helpers

These functions are useful when you are not formatting a date yourself, but passing it to
third-party code such as a date picker library alongside an input for selecting a time zone.

To discuss the usage of the time zone helpers let's assume we're writing a system where
administrators set up events which will start at a specific time in the venue's local time, and
this local time should be shown when accessing the site from anywhere in the world.

### `fromZonedTime`

Given a date and any time zone, returns the equivalent `Date` in the current system time zone
and the equivalent UTC time internally. An invalid date string or time zone will result in
an `Invalid Date`.

```ts
fromZonedTime(date: Date|Number|String, timeZone: String): Date
```

Say a user is asked to input the date/time and time zone of an event. A date/time picker will
typically return a Date instance with the chosen date, in the user's local time zone, and a
select input might provide the actual IANA time zone name.

In order to work with this info effectively it is necessary to find the equivalent UTC time:

```javascript
import { fromZonedTime } from 'date-fns-tz'

const date = getDatePickerValue() // e.g. 2014-06-25 10:00:00 (picked in any time zone)
const timeZone = getTimeZoneValue() // e.g. America/Los_Angeles

const utcDate = fromZonedTime(date, timeZone) // In June 10am in Los Angeles is 5pm UTC

postToServer(utcDate.toISOString(), timeZone) // post 2014-06-25T17:00:00.000Z, America/Los_Angeles
```

### `toZonedTime`

Returns a `Date` which will format as the local time of any time zone from a specific UTC time
or date in the current system time zone. An invalid date string or time zone will result in
an `Invalid Date`.

```js
toZonedTime(date: Date|Number|String, timeZone: String): Date
```

Say the server provided a UTC date/time and a time zone which should be used as initial values
for the above form. The date/time picker will take a Date input which will be in the user's
local time zone, but the date value must be that of the target time zone.

```javascript
import { toZonedTime } from 'date-fns-tz'

const { isoDate, timeZone } = fetchInitialValues() // 2014-06-25T10:00:00.000Z, America/New_York

const date = toZonedTime(isoDate, timeZone) // In June 10am UTC is 6am in New York (-04:00)

renderDatePicker(date) // 2014-06-25 06:00:00 (in the system time zone)
renderTimeZoneSelect(timeZone) // America/New_York
```

### `getTimezoneOffset`

Returns the offset in milliseconds between the time zone and UTC time.

```js
getTimezoneOffset(timeZone: String, date: Date|Number): number
```

Returns the time zone offset from UTC time in milliseconds for IANA time zones as well
as other time zone offset string formats.

For time zones where daylight savings time is applicable a `Date` should be passed on
the second parameter to ensure the offset correctly accounts for DST at that time of
year. When omitted, the current date is used.

For invalid time zones, `NaN` is returned.

```javascript
import { getTimezoneOffset } from 'date-fns-tz'

const result = getTimezoneOffset('-07:00')
//=> -18000000 (-7 * 60 * 60 * 1000)
const result = getTimezoneOffset('Africa/Johannesburg')
//=> 7200000 (2 * 60 * 60 * 1000)
const result = getTimezoneOffset('America/New_York', new Date(2016, 0, 1))
//=> -18000000 (-5 * 60 * 60 * 1000)
const result = getTimezoneOffset('America/New_York', new Date(2016, 6, 1))
//=> -14400000 (-4 * 60 * 60 * 1000)
```

## Low-level formatting helpers

### `format`

The `format` function exported from this library is used under the hood by `formatInTimeZone`
and extends `date-fns/format` with full time zone support for:

- The `z..zzz` Unicode tokens: _short specific non-location format_
- The `zzzz` Unicode token: _long specific non-location format_

When using those tokens with `date-fns/format` it falls back to the GMT time zone format, and
always uses the current system's local time zone. For example `zzz` in New York will always return
`GMT-4` instead of the desired `EST`, and `zzz` in Paris `GMT+2` instead of `CEST`, making the
time zone tokens somewhat irrelevant. This extended `format` function returns the proper
specific non-location format, e.g. `EST` or `Eastern Standard Time`, and that of the target time
zone (if provided, see below) rather than the system time zone.

Since a JavaScript `Date` instance cannot convey the time zone information to the `format` function
it is necessary to pass the `timeZone` value as an option on the third argument of `format`.

Similar to `date-fns/format`, when an invalid date is used a `RangeError` is thrown. When an invalid
time zone is provided _and included in the output_, i.e. with time zone tokens in the format
string, it will also throw a `RangeError`.

To format a date showing time for a specific time zone other than the system time zone, the
`format` function can be combined with `toZonedTime`. This is what `formatInTimeZone` does
internally. _To clarify, the `format` function will never change the underlying date, it must be
changed to a zoned time before passing it to `format`._

In most cases there is no need to use `format` rather than `formatInTimeZone`. The only time
this makes sense is when `toZonedTime` has been applied to a date once, and you want to
format it multiple times to different outputs.

```javascript
import { format, toZonedTime } from 'date-fns-tz'

const date = new Date('2014-10-25T10:46:20Z')

const nyDate = toZonedTime(date, 'America/New_York')
const parisDate = toZonedTime(date, 'Europe/Paris')

format(nyDate, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: 'America/New_York' }) // 2014-10-25 06:46:20-04:00
format(nyDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: 'America/New_York' }) // 2014-10-25 06:46:20 EST
format(parisDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: 'Europe/Paris' }) // 2014-10-25 10:46:20 GMT+2

// The time zone name is generated by the Intl API which works best when a locale is also provided
import { enGB } from 'date-fns/locale/en-GB'

format(parisDate, 'yyyy-MM-dd HH:mm:ss zzz', {
  timeZone: 'Europe/Paris',
  locale: enGB,
})
// 2014-10-25 10:46:20 CEST
format(parisDate, 'yyyy-MM-dd HH:mm:ss zzzz', {
  timeZone: 'Europe/Paris',
  locale: enGB,
})
// 2014-10-25 10:46:20 Central European Summer Time
```

### `toDate`

The `toDate` function can be used to parse a `Date` from a string containing a date and time
representing time in any time zone by providing an IANA time zone name on the `timeZone` option.

An invalid date string or time zone will result in an `Invalid Date`.

```javascript
import { toDate, format } from 'date-fns-tz'

// Offsets in the date string work as usual and take precedence
const parsedDate = toDate('2014-10-25T13:46:20+04:00')
const parisDate = toZonedTime(parsedDate, 'Europe/Paris')
format(parisDate, 'yyyy-MM-dd HH:mm:ssxxx', { timeZone: 'Europe/Paris' }) // 2014-10-25 11:46:20+02:00

// Since toDate simply clones a Date instance, the timeZone option is effectively ignored in this case
const date = new Date('2014-10-25T13:46:20Z')
const clonedDate = toDate(date, { timeZone: 'Europe/Paris' })
assert(date.valueOf() === clonedDate.valueOf())

// When there is no offset in the date string the timeZone property is used
const parsedDate = toDate('2014-10-25T13:46:20', { timeZone: 'Asia/Bangkok' })
const bangkokDate = toZonedTime(parsedDate, 'Asia/Bangkok')
format(bangkokDate, 'yyyy-MM-dd HH:mm:ssxxx', { timeZone: 'Asia/Bangkok' }) // 2014-10-25 13:46:20+07:00
```

## Usage with Android

This library works with React Native on iOS, and on Android with Hermes which supports
`Intl` by default.

In Android projects that do not use Hermes, make this change in `android/app/build.gradle`:

```diff
- def jscFlavor = 'org.webkit:android-jsc:+'
+ def jscFlavor = 'org.webkit:android-jsc-intl:+'
```

## Usage with Node.js

Node.js supports the `Intl` API and ships with full ICU data included in the binary since v13,
so this library works by default.

## Credit

The idea of using the Intl API for time zone support was inspired by the [Luxon](https://github.com/moment/luxon)
library.

The initial port of the idea into date-fns was done by [@benmccan](https://github.com/benmccann) in
[date-fns/#676](https://github.com/date-fns/date-fns/pull/676).

## License

MIT © Marnus Weststrate
