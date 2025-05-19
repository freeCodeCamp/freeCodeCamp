---
id: 68216eff0f957572e7c340c6
title: "Python Challenge 11: Mile Pace"
challengeType: 29
dashedName: python-challenge-11
---

# --description--

Given a number of miles ran, and a time in MM:SS (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format MM:SS.

- Add leading zeros when needed.

# --hints--

`mile_pace(3, "24:00")` should return `08:00`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mile_pace(3, "24:00"), "08:00")`)
}})
```

`mile_pace(1, "06:45")` should return `06:45`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mile_pace(1, "06:45"), "06:45")`)
}})
```

`mile_pace(2, "07:00")` should return `03:30`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mile_pace(2, "07:00"), "03:30")`)
}})
```

`mile_pace(26.2, "120:35")` should return `04:36`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mile_pace(26.2, "120:35"), "04:36")`)
}})
```

# --seed--

## --seed-contents--

```py
def mile_pace(miles, duration):

    return miles
```

# --solutions--

```py
def mile_pace(miles, duration):
    minutes, seconds = map(int, duration.split(":"))
    total_seconds = minutes * 60 + seconds
    avg_seconds_per_mile = total_seconds / miles

    avg_minutes = int(avg_seconds_per_mile // 60)
    avg_seconds = round(avg_seconds_per_mile % 60)

    return f"{avg_minutes:02d}:{avg_seconds:02d}"
```
