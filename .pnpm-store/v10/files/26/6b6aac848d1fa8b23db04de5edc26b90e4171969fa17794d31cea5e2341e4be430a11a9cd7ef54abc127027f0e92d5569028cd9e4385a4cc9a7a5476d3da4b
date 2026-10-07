# v2 Upgrade Guide

## Common changes

This page covers a few of the most common problems people face when updating from v1 to v2. For a more detailed list of changes, look at the [change log for version 2.0.0](https://date-fns.org/docs/Change-Log).

### Camel case naming schema

Function submodules now use camelCase naming schema:

```javascript
// Before v2.0.0
import differenceInCalendarISOYears from 'date-fns/difference_in_calendar_iso_years'

// v2.0.0 onward
import differenceInCalendarISOYears from 'date-fns/differenceInCalendarISOYears'
```

### New formatting tokens

Starting with v2 `format` and `parse` uses [Unicode tokens].

See [Unicode Tokens doc](https://date-fns.org/docs/Unicode-Tokens) for more details.

### String arguments

Functions now don't accept strings as date arguments. Strings should
be parsed using `parseISO` (ISO 8601) or `parse`.

See [this post](https://blog.date-fns.org/post/we-cut-date-fns-v2-minimal-build-size-down-to-300-bytes-and-now-its-the-smallest-date-library-18f2nvh2z0yal) for more details.

```javascript
// Before v2.0.0
addDays('2016-01-01', 1)

// v2.0.0 onward
addDays(parseISO('2016-01-01'), 1)
```

### Arguments conversion

All functions now implicitly convert arguments by following rules:

|           | date         | number | string      | boolean |
| --------- | ------------ | ------ | ----------- | ------- |
| 0         | new Date(0)  | 0      | '0'         | false   |
| '0'       | Invalid Date | 0      | '0'         | false   |
| 1         | new Date(1)  | 1      | '1'         | true    |
| '1'       | Invalid Date | 1      | '1'         | true    |
| true      | Invalid Date | NaN    | 'true'      | true    |
| false     | Invalid Date | NaN    | 'false'     | false   |
| null      | Invalid Date | NaN    | 'null'      | false   |
| undefined | Invalid Date | NaN    | 'undefined' | false   |
| NaN       | Invalid Date | NaN    | 'NaN'       | false   |

Notes:

- as before, arguments expected to be `Date` are converted to `Date` using _date-fns'_ `toDate` function;
- arguments expected to be numbers are converted to integer numbers using our custom `toInteger` implementation
  (see [#765](https://github.com/date-fns/date-fns/pull/765));
- arguments expected to be strings are converted to strings using JavaScript's `String` function;
- arguments expected to be booleans are converted to boolean using JavaScript's `Boolean` function.

`null` and `undefined` passed to optional arguments (i.e. properties of `options` argument)
are ignored as if no argument was passed.

If any argument is invalid (i.e. `NaN` for numbers and `Invalid Date` for dates),
an invalid value will be returned:

- `false` for functions that return booleans (expect `isValid`);
- `Invalid Date` for functions that return dates;
- `NaN` for functions that return numbers;
- and `String('Invalid Date')` for functions that return strings.

See tests and PRs [#460](https://github.com/date-fns/date-fns/pull/460) and
[#765](https://github.com/date-fns/date-fns/pull/765) for exact behavior.

### `null`

`null` now is not a valid date. `isValid(null)` returns `false`;
`toDate(null)` returns an invalid date. Since `toDate` is used internally
by all the functions, operations over `null` will also return an invalid date.
[See #537](https://github.com/date-fns/date-fns/issues/537) for the reasoning.

### `RangeError`

Functions now throw `RangeError` if optional values passed to `options`
are not `undefined` or have expected values.
This change is introduced for consistency with ECMAScript standard library which does the same.

### `TypeError`

All functions now check if the passed number of arguments is less
than the number of required arguments and throw `TypeError` exception if so.

### UMD/CDN

The Bower & UMD/CDN package versions are no longer supported.

### New locale format

See [docs/Locale](https://date-fns.org/docs/Locale).

Locales renamed:

- `en` → `en-US`
- `zh_cn` → `zh-CN`
- `zh_tw` → `zh-TW`

```javascript
// Before v2.0.0
import locale from 'date-fns/locale/zh_cn'

// v2.0.0 onward
import locale from 'date-fns/locale/zh-CN'
```

[unicode tokens]: https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
