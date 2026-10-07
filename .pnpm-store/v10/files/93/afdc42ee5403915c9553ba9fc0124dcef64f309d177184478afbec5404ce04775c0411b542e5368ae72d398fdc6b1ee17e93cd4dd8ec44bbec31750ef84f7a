# Time Zones

## Table of Contents

- [Overview](#overview)

- [`date-fns-tz`](#date-fns-tz)

## Overview

Working with UTC or ISO date strings is easy, and so is working with JS dates when all times
are displayed in a user's local time in the browser. The difficulty comes when working with another
time zone's local time, other than the current system's, like showing the local time of an event in LA
at 8pm PST on a Node server in Europe or a user's machine set to EST.

In this case there are two relevant pieces of information:

- a fixed moment in time in the form of a timestamp, UTC or ISO date string, and
- the time zone descriptor, usually an offset or IANA time zone name (e.g. `America/Los_Angeles`).

Libraries like Moment and Luxon, which provide their own date time classes, manage these timestamp and time
zone values internally. Since `date-fns` always returns a plain JS Date, which implicitly has the current
system's time zone, helper functions are needed for handling common time zone related use cases.

## [`date-fns-tz`](https://www.npmjs.com/package/date-fns-tz)

Dependency free IANA time zone support is implemented via the
[Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) to keep
actual time zone data out of code bundles. Modern browsers all support the
[necessary features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat#Browser_compatibility),
and for those that don't a [polyfill](https://github.com/yahoo/date-time-format-timezone) can be used.

Functions are provided for converting to and from a Date instance which will have the internal UTC time
adjusted so it prints to the correct time value in the associated time zone, regardless of the current
system time zone. The `date-fns` `format` function is extended with support for the `z...zzzz` tokens to
format long and short time zone names.

Compatible with `date-fns` version 2

License: MIT

### Synopsis

```js
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

// Set the date to "2018-09-01T16:01:36.386Z"
const utcDate = zonedTimeToUtc('2018-09-01 18:01:36.386', 'Europe/Berlin')

// Obtain a Date instance that will render the equivalent Berlin time for the UTC date
const date = new Date('2018-09-01T16:01:36.386Z')
const timeZone = 'Europe/Berlin'
const zonedDate = utcToZonedTime(date, timeZone)
// zonedDate could be used to initialize a date picker or display the formatted local date/time

// Set the output to "1.9.2018 18:01:36.386 GMT+02:00 (CEST)"
const pattern = 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)'
const output = format(zonedDate, pattern, { timeZone: 'Europe/Berlin' })
```

### Links

- [API / Usage Scenarios](https://github.com/marnusw/date-fns-tz#time-zone-helpers)
