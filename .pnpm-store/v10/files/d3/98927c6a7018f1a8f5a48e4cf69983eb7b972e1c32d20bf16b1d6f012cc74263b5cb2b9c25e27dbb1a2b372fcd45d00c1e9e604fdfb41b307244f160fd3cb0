# dateformat

A node.js package for Steven Levithan's excellent [dateFormat()][dateformat] function.

[![Build Status](https://travis-ci.org/felixge/node-dateformat.svg)](https://travis-ci.org/felixge/node-dateformat)

## Modifications

- Removed the `Date.prototype.format` method. Sorry folks, but extending native prototypes is for suckers.
- Added a `module.exports = dateFormat;` statement at the bottom
- Added the placeholder `N` to get the ISO 8601 numeric representation of the day of the week

## Installation

```bash
$ npm install dateformat
$ dateformat --help
```

## Usage

As taken from Steven's post, modified to match the Modifications listed above:

```js
var dateFormat = require("dateformat");
var now = new Date();

// Basic usage
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
// Saturday, June 9th, 2007, 5:46:21 PM

// You can use one of several named masks
dateFormat(now, "isoDateTime");
// 2007-06-09T17:46:21

// ...Or add your own
dateFormat.masks.hammerTime = 'HH:MM! "Can\'t touch this!"';
dateFormat(now, "hammerTime");
// 17:46! Can't touch this!

// You can also provide the date as a string
dateFormat("Jun 9 2007", "fullDate");
// Saturday, June 9, 2007

// Note that if you don't include the mask argument,
// dateFormat.masks.default is used
dateFormat(now);
// Sat Jun 09 2007 17:46:21

// And if you don't include the date argument,
// the current date and time is used
dateFormat();
// Sat Jun 09 2007 17:46:22

// You can also skip the date argument (as long as your mask doesn't
// contain any numbers), in which case the current date/time is used
dateFormat("longTime");
// 5:46:22 PM EST

// And finally, you can convert local time to UTC time. Simply pass in
// true as an additional argument (no argument skipping allowed in this case):
dateFormat(now, "longTime", true);
// 10:46:21 PM UTC

// ...Or add the prefix "UTC:" or "GMT:" to your mask.
dateFormat(now, "UTC:h:MM:ss TT Z");
// 10:46:21 PM UTC

// You can also get the ISO 8601 week of the year:
dateFormat(now, "W");
// 42

// and also get the ISO 8601 numeric representation of the day of the week:
dateFormat(now, "N");
// 6
```

### Mask options

| Mask             | Description                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `d`              | Day of the month as digits; no leading zero for single-digit days.                                                                                            |
| `dd`             | Day of the month as digits; leading zero for single-digit days.                                                                                               |
| `ddd`            | Day of the week as a three-letter abbreviation.                                                                                                               |
| `DDD`            | "Ysd", "Tdy" or "Tmw" if date lies within these three days. Else fall back to ddd.                                                                            |
| `dddd`           | Day of the week as its full name.                                                                                                                             |
| `DDDD`           | "Yesterday", "Today" or "Tomorrow" if date lies within these three days. Else fall back to dddd.                                                              |
| `m`              | Month as digits; no leading zero for single-digit months.                                                                                                     |
| `mm`             | Month as digits; leading zero for single-digit months.                                                                                                        |
| `mmm`            | Month as a three-letter abbreviation.                                                                                                                         |
| `mmmm`           | Month as its full name.                                                                                                                                       |
| `yy`             | Year as last two digits; leading zero for years less than 10.                                                                                                 |
| `yyyy`           | Year represented by four digits.                                                                                                                              |
| `h`              | Hours; no leading zero for single-digit hours (12-hour clock).                                                                                                |
| `hh`             | Hours; leading zero for single-digit hours (12-hour clock).                                                                                                   |
| `H`              | Hours; no leading zero for single-digit hours (24-hour clock).                                                                                                |
| `HH`             | Hours; leading zero for single-digit hours (24-hour clock).                                                                                                   |
| `M`              | Minutes; no leading zero for single-digit minutes.                                                                                                            |
| `MM`             | Minutes; leading zero for single-digit minutes.                                                                                                               |
| `N`              | ISO 8601 numeric representation of the day of the week.                                                                                                       |
| `o`              | GMT/UTC timezone offset, e.g. -0500 or +0230.                                                                                                                 |
| `p`              | GMT/UTC timezone offset, e.g. -05:00 or +02:30.                                                                                                               |
| `s`              | Seconds; no leading zero for single-digit seconds.                                                                                                            |
| `ss`             | Seconds; leading zero for single-digit seconds.                                                                                                               |
| `S`              | The date's ordinal suffix (st, nd, rd, or th). Works well with `d`.                                                                                           |
| `l`              | Milliseconds; gives 3 digits.                                                                                                                                 |
| `L`              | Milliseconds; gives 2 digits.                                                                                                                                 |
| `t`              | Lowercase, single-character time marker string: a or p.                                                                                                       |
| `tt`             | Lowercase, two-character time marker string: am or pm.                                                                                                        |
| `T`              | Uppercase, single-character time marker string: A or P.                                                                                                       |
| `TT`             | Uppercase, two-character time marker string: AM or PM.                                                                                                        |
| `W`              | ISO 8601 week number of the year, e.g. 4, 42                                                                                                                  |
| `WW`             | ISO 8601 week number of the year, leading zero for single-digit, e.g. 04, 42                                                                                  |
| `Z`              | US timezone abbreviation, e.g. EST or MDT. For non-US timezones, the GMT/UTC offset is returned, e.g. GMT-0500                                                |
| `'...'`, `"..."` | Literal character sequence. Surrounding quotes are removed.                                                                                                   |
| `UTC:`           | Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed. |

### Named Formats

| Name              | Mask                           | Example                  |
| ----------------- | ------------------------------ | ------------------------ |
| `default`         | `ddd mmm dd yyyy HH:MM:ss`     | Sat Jun 09 2007 17:46:21 |
| `shortDate`       | `m/d/yy`                       | 6/9/07                   |
| `paddedShortDate` | `mm/dd/yyyy`                   | 06/09/2007               |
| `mediumDate`      | `mmm d, yyyy`                  | Jun 9, 2007              |
| `longDate`        | `mmmm d, yyyy`                 | June 9, 2007             |
| `fullDate`        | `dddd, mmmm d, yyyy`           | Saturday, June 9, 2007   |
| `shortTime`       | `h:MM TT`                      | 5:46 PM                  |
| `mediumTime`      | `h:MM:ss TT`                   | 5:46:21 PM               |
| `longTime`        | `h:MM:ss TT Z`                 | 5:46:21 PM EST           |
| `isoDate`         | `yyyy-mm-dd`                   | 2007-06-09               |
| `isoTime`         | `HH:MM:ss`                     | 17:46:21                 |
| `isoDateTime`     | `yyyy-mm-dd'T'HH:MM:sso`       | 2007-06-09T17:46:21+0700 |
| `isoUtcDateTime`  | `UTC:yyyy-mm-dd'T'HH:MM:ss'Z'` | 2007-06-09T22:46:21Z     |

### Localization

Day names, month names and the AM/PM indicators can be localized by
passing an object with the necessary strings. For example:

```js
var dateFormat = require("dateformat");
dateFormat.i18n = {
  dayNames: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  monthNames: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
};
```

> Notice that only one language is supported at a time and all strings
> _must_ be present in the new value.

### Breaking change in 2.1.0

- 2.1.0 was published with a breaking change, for those using localized strings.
- 2.2.0 has been published without the change, to keep packages refering to ^2.0.0 to continue working. This is now branch v2_2.
- 3.0.\* contains the localized AM/PM change.

## License

(c) 2007-2009 Steven Levithan [stevenlevithan.com][stevenlevithan], MIT license.

[dateformat]: http://blog.stevenlevithan.com/archives/date-time-format
[stevenlevithan]: http://stevenlevithan.com/
