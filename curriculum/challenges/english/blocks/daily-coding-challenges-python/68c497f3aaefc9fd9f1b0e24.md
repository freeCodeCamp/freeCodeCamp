---
id: 68c497f3aaefc9fd9f1b0e24
title: "Challenge 60: Space Week Day 6: Moon Phase"
challengeType: 29
dashedName: challenge-60
---

# --description--

For day six of Space Week, you will be given a date in the format `"YYYY-MM-DD"` and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

- `"New"`: days 1 - 7
- `"Waxing"`: days 8 - 14
- `"Full"`: days 15 - 21
- `"Waning"`: days 22 - 28

After day 28, the cycle repeats with day 1, a new moon.

- Use `"2000-01-06"` as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
- You will not be given any dates before the reference date.
- Return the correct phase as a string.

**Note:** Day 1 represents the day of the new moon, meaning 0 days have passed since the last new moon.

# --hints--

`moon_phase("2000-01-12")` should return `"New"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(moon_phase("2000-01-12"), "New")`)
}})
```

`moon_phase("2000-01-13")` should return `"Waxing"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(moon_phase("2000-01-13"), "Waxing")`)
}})
```

`moon_phase("2014-10-15")` should return `"Full"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(moon_phase("2014-10-15"), "Full")`)
}})
```

`moon_phase("2012-10-21")` should return `"Waning"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(moon_phase("2012-10-21"), "Waning")`)
}})
```

`moon_phase("2022-12-14")` should return `"New"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(moon_phase("2022-12-14"), "New")`)
}})
```

# --seed--

## --seed-contents--

```py
def moon_phase(date_string):

    return date_string
```

# --solutions--

```py
from datetime import datetime
def moon_phase(date_string):
    ref_date = datetime.strptime("2000-01-06", "%Y-%m-%d")
    target_date = datetime.strptime(date_string, "%Y-%m-%d")

    diff_days = (target_date - ref_date).days
    cycle_day = (diff_days % 28) + 1

    if cycle_day <= 7:
        return "New"
    elif cycle_day <= 14:
        return "Waxing"
    elif cycle_day <= 21:
        return "Full"
    else:
        return "Waning"
```
