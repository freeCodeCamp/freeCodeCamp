# Time zones

Starting from v4, date-fns has first-class support for time zones. It is provided via [`@date-fns/tz`] and [`@date-fns/utc`] packages. Visit the links to learn more about corresponding packages.

Just like with everything else in date-fns, the time zones support has a minimal bundle size footprint with `UTCDateMini` and `TZDateMini` being `239 B` and `761 B`, respectively.

If you're looking for time zone support prior to date-fns v4, see the third-party [`date-fns-tz`](https://github.com/marnusw/date-fns-tz) package.

[See the announcement blog post](https://blog.date-fns.org/v40-with-time-zone-support/) for details about the motivation and implementation and [the change log entry for the list of changes in v4.0](https://date-fns.org/v4.0.0/docs/Change-Log#v4.0.0-2024-09-16).

## Working with time zones

There are two ways to start working with time zones:

- [Using the `Date` extensions `TZDate` and `UTCDate`](#using-tzdate-utcdate)
- [Using the date-fns functions' `in` option](#using-in-option)

### Using `TZDate` & `UTCDate`

One way is to use [`TZDate`](https://github.com/date-fns/tz) or [`UTCDate`](https://github.com/date-fns/tz) `Date` extensions,with regular date-fns functions:

```ts
import { TZDate } from "@date-fns/tz";
import { addHours } from "date-fns";

// Given that the system time zone is America/Los_Angeles
// where DST happens on Sunday, 13 March 2022, 02:00:00

// Using the system time zone will produce 03:00 instead of 02:00 because of DST:
const date = new Date(2022, 2, 13);
addHours(date, 2).toString();
//=> 'Sun Mar 13 2022 03:00:00 GMT-0700 (Pacific Daylight Time)'

// Using Asia/Singapore will provide the expected 02:00:
const tzDate = new TZDate(2022, 2, 13, "Asia/Singapore");
addHours(tzDate, 2).toString();
//=> 'Sun Mar 13 2022 02:00:00 GMT+0800 (Singapore Standard Time)'
```

You can safely mix and match regular `Date` instances, as well as `UTCDate` or `TZDate` in different time zones and primitive values (timestamps and strings). date-fns will normalize the arguments, taking the first object argument (`Date` or a `Date` extension instance) as the reference and return the result in the reference type:

```ts
import { TZDate } from "@date-fns/tz";
import { differenceInBusinessDays } from "date-fns";

const laterDate = new TZDate(2025, 0, 1, "Asia/Singapore");
const earlierDate = new TZDate(2024, 0, 1, "America/New_York");

// Will calculate in Asia/Singapore
differenceInBusinessDays(laterDate, earlierDate);
//=> 262

// Will calculate in America/New_York
differenceInBusinessDays(earlierDate, laterDate);
//=> -261
```

In the given example, the one-day difference comes from the fact that in New York (UTC-5), the `earlierDate` will be `Dec 31` rather than `Jan 1`:

```ts
laterDate.withTimeZone("Asia/Singapore").toString();
//=> 'Wed Jan 01 2025 00:00:00 GMT+0800 (Singapore Standard Time)'
earlierDate.withTimeZone("Asia/Singapore").toString();
//=> 'Mon Jan 01 2024 13:00:00 GMT+0800 (Singapore Standard Time)'

laterDate.withTimeZone("America/New_York").toString();
//=> 'Tue Dec 31 2024 11:00:00 GMT-0500 (Eastern Standard Time)'
earlierDate.withTimeZone("America/New_York").toString();
//=> 'Mon Jan 01 2024 00:00:00 GMT-0500 (Eastern Standard Time)'
```

This is essential to understand and consider when making calculations.

### Using `in` option

When it is important to get the value in a specific time zone or when you are unsure about the type of arguments, use the function context `in` option.

Each function, where the calculation might be affected by the time zone, like with `differenceInBusinessDays`, accepts the `in` option that provides the context for the arguments and the result, so you can explicitly say what time zone to use:

```ts
import { tz } from "@date-fns/tz";

// Will calculate in Asia/Singapore
differenceInBusinessDays(laterDate, earlierDate);
//=> 262

// Will normalize to America/Los_Angeles
differenceInBusinessDays(laterDate, earlierDate, {
  in: tz("America/Los_Angeles"),
});
//=> 261
```

In the example, we forced `differenceInBusinessDays` to use the Los Angeles time zone.

## Further reading

Read more about the time zone packages visiting their READMEs:

- [`@date-fns/tz`]
- [`@date-fns/utc`]

[`@date-fns/tz`]: https://github.com/date-fns/tz
[`@date-fns/utc`]: https://github.com/date-fns/utc
