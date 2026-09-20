---
id: 691b559495c5cb5a37b9b487
title: "Challenge 127: Speed Check"
challengeType: 29
dashedName: challenge-127
---

# --description--

Given the speed you are traveling in miles per hour (MPH), and a speed limit in kilometers per hour (KPH), determine whether you are speeding and if you will get a warning or a ticket.

- 1 mile equals 1.60934 kilometers.
- If you are traveling less than or equal to the speed limit, return `"Not Speeding"`.
- If you are traveling 5 KPH or less over the speed limit, return `"Warning"`.
- If you are traveling more than 5 KPH over the speed limit, return `"Ticket"`.

# --hints--

`speed_check(30, 70)` should return `"Not Speeding"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speed_check(30, 70), "Not Speeding")`)
}})
```

`speed_check(40, 60)` should return `"Warning"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speed_check(40, 60), "Warning")`)
}})
```

`speed_check(40, 65)` should return `"Not Speeding"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speed_check(40, 65), "Not Speeding")`)
}})
```

`speed_check(60, 90)` should return `"Ticket"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speed_check(60, 90), "Ticket")`)
}})
```

`speed_check(65, 100)` should return `"Warning"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speed_check(65, 100), "Warning")`)
}})
```

`speed_check(88, 40)` should return `"Ticket"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speed_check(88, 40), "Ticket")`)
}})
```

# --seed--

## --seed-contents--

```py
def speed_check(speed_mph, speed_limit_kph):

    return speed_mph
```

# --solutions--

```py
def speed_check(speed_mph, speed_limit_kph):
    speed_kph = speed_mph * 1.60934

    if speed_kph <= speed_limit_kph:
        return "Not Speeding"

    over = speed_kph - speed_limit_kph

    if over <= 5:
        return "Warning"

    return "Ticket"
```
