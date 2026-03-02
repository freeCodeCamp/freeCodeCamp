---
id: 68cae5b538ff798bbd4da002
title: "Challenge 64: 24 to 12"
challengeType: 29
dashedName: challenge-64
---

# --description--

Given a string representing a time of the day in the 24-hour format of `"HHMM"`, return the time in its equivalent 12-hour format of `"H:MM AM"` or `"H:MM PM"`.

- The given input will always be a four-digit string in 24-hour time format, from `"0000"` to `"2359"`.

# --hints--

`to_12("1124")` should return `"11:24 AM"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_12("1124"), "11:24 AM")`)
}})
```

`to_12("0900")` should return `"9:00 AM"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_12("0900"), "9:00 AM")`)
}})
```

`to_12("1455")` should return `"2:55 PM"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_12("1455"), "2:55 PM")`)
}})
```

`to_12("2346")` should return `"11:46 PM"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_12("2346"), "11:46 PM")`)
}})
```

`to_12("0030")` should return `"12:30 AM"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_12("0030"), "12:30 AM")`)
}})
```

# --seed--

## --seed-contents--

```py
def to_12(time):

    return time
```

# --solutions--

```py
def convert_hours(hours):
    if hours == 0:
        return 12
    elif hours > 12:
        return hours - 12
    else:
        return hours

def to_12(time):
    hours = int(time[:2])
    minutes = time[2:]
    period = "AM" if hours < 12 else "PM"

    return f"{convert_hours(hours)}:{minutes} {period}"
```
