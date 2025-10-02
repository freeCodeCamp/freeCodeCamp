---
id: 68d30845cc08266018fc46bd
title: "Challenge 77: Duration Formatter"
challengeType: 29
dashedName: challenge-77
---

# --description--

Given an integer number of seconds, return a string representing the same duration in the format `"H:MM:SS"`, where `"H"` is the number of hours, `"MM"` is the number of minutes, and `"SS"` is the number of seconds. Return the time using the following rules:

- Seconds: Should always be two digits.
- Minutes: Should omit leading zeros when they aren't needed. Use `"0"` if the duration is less than one minute.
- Hours: Should be included only if they're greater than zero.

# --hints--

`format(500)` should return `"8:20"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format(500), "8:20")`)
}})
```

`format(4000)` should return `"1:06:40"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format(4000), "1:06:40")`)
}})
```

`format(1)` should return `"0:01"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format(1), "0:01")`)
}})
```

`format(5555)` should return `"1:32:35"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format(5555), "1:32:35")`)
}})
```

`format(99999)` should return `"27:46:39"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format(99999), "27:46:39")`)
}})
```

# --seed--

## --seed-contents--

```py
def format(seconds):

    return seconds
```

# --solutions--

```py
def format(seconds):
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60

    seconds_str = f"{s:02d}"
    minutes_str = str(m)

    if h > 0:
        hours_str = str(h)
        return f"{hours_str}:{minutes_str.zfill(2)}:{seconds_str}"
    else:
        return f"{minutes_str}:{seconds_str}"
```
