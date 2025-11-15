---
id: 68ee9e3066cfd4eb2328e8a7
title: "Challenge 88: Weekday Finder"
challengeType: 29
dashedName: challenge-88
---

# --description--

Given a string date in the format `YYYY-MM-DD`, return the day of the week.

Valid return days are:

- `"Sunday"`
- `"Monday"`
- `"Tuesday"`
- `"Wednesday"`
- `"Thursday"`
- `"Friday"`
- `"Saturday"`

Be sure to ignore time zones.

# --hints--

`get_weekday("2025-11-06")` should return `Thursday`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_weekday("2025-11-06"), "Thursday")`)
}})
```

`get_weekday("1999-12-31")` should return `Friday`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_weekday("1999-12-31"), "Friday")`)
}})
```

`get_weekday("1111-11-11")` should return `Saturday`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_weekday("1111-11-11"), "Saturday")`)
}})
```

`get_weekday("2112-12-21")` should return `Wednesday`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_weekday("2112-12-21"), "Wednesday")`)
}})
```

`get_weekday("2345-10-01")` should return `Monday`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_weekday("2345-10-01"), "Monday")`)
}})
```

# --seed--

## --seed-contents--

```py
def get_weekday(date_string):

    return date_string
```

# --solutions--

```py
import datetime
def get_weekday(date_string):
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    year, month, day = map(int, date_string.split("-"))
    date = datetime.date(year, month, day)

    return days[date.weekday() % 7 + 1 if date.weekday() != 6 else 0]
```
