# Unicode Tokens

Starting with v2, `format` and `parse` use [Unicode tokens].

The tokens are different from Moment.js and other libraries that opted to use
custom formatting rules. While usage of a standard ensures compatibility and
the future of the library, it causes confusion that this document intends
to resolve.

## Popular mistakes

There are 4 tokens that cause most of the confusion:

- `D` and `DD` that represent the day of a year (1, 2, ..., 365, 366)
  are often confused with `d` and `dd` that represent the day of a month
  (1, 2, ..., 31).

- `YY` and `YYYY` that represent the local week-numbering year (44, 01, 00, 17)
  are often confused with `yy` and `yyyy` that represent the calendar year.

```js
// ❌ Wrong!
format(new Date(), "YYYY-MM-DD");
//=> 2018-10-283

// ✅ Correct
format(new Date(), "yyyy-MM-dd");
//=> 2018-10-10

// ❌ Wrong!
parse("11.02.87", "D.MM.YY", new Date()).toString();
//=> 'Sat Jan 11 1986 00:00:00 GMT+0200 (EET)'

// ✅ Correct
parse("11.02.87", "d.MM.yy", new Date()).toString();
//=> 'Wed Feb 11 1987 00:00:00 GMT+0200 (EET)'
```

To help with the issue, `format` and `parse` functions won't accept
these tokens without `useAdditionalDayOfYearTokens` option for `D` and `DD` and
`useAdditionalWeekYearTokens` options for `YY` and `YYYY`:

```js
format(new Date(), "D", { useAdditionalDayOfYearTokens: true });
//=> '283'

parse("365+1987", "DD+YYYY", new Date(), {
  useAdditionalDayOfYearTokens: true,
  useAdditionalWeekYearTokens: true,
}).toString();
//=> 'Wed Dec 31 1986 00:00:00 GMT+0200 (EET)'
```

[Unicode tokens]: https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
