---
id: 69162d64f96574d9bb629f03
title: "Challenge 118: Date Formatter"
challengeType: 29
dashedName: challenge-118
---

# --description--

Given a date in the format `"Month day, year"`, return the date in the format `"YYYY-MM-DD"`.

- The given month will be the full English month name. For example: `"January"`, `"February"`, etc.
- In the return value, pad the month and day with leading zeros if necessary to ensure two digits.

For example, given `"December 6, 2025"`, return `"2025-12-06"`.

# --hints--

`format_date("December 6, 2025")` should return `"2025-12-06"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_date("December 6, 2025"), "2025-12-06")`)
}})
```

`format_date("January 1, 2000")` should return `"2000-01-01"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_date("January 1, 2000"), "2000-01-01")`)
}})
```

`format_date("November 11, 1111")` should return `"1111-11-11"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_date("November 11, 1111"), "1111-11-11")`)
}})
```

`format_date("September 7, 512")` should return `"512-09-07"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_date("September 7, 512"), "512-09-07")`)
}})
```

`format_date("May 4, 1950")` should return `"1950-05-04"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_date("May 4, 1950"), "1950-05-04")`)
}})
```

`format_date("February 29, 1992")` should return `"1992-02-29"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_date("February 29, 1992"), "1992-02-29")`)
}})
```

# --seed--

## --seed-contents--

```py
def format_date(date_string):

    return date_string
```

# --solutions--

```py
def format_date(date_string):
    months = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    }

    month, day, year = date_string.replace(",", "").split(" ")
    day = day.zfill(2)

    return f"{year}-{months[month]}-{day}"
```
