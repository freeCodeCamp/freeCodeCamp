---
id: 69306364df283fcaff2e1ad8
title: "Challenge 147: Leap Year Calculator"
challengeType: 29
dashedName: challenge-147
---

# --description--

Given an integer year, determine whether it is a leap year.

A year is a leap year if it satisfies the following rules:

- The year is evenly divisible by 4, and
- The year is not evenly divisible by 100, unless
- The year is evenly divisible by 400.

# --hints--

`is_leap_year(2024)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_leap_year(2024), True)`)
}})
```

`is_leap_year(2023)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_leap_year(2023), False)`)
}})
```

`is_leap_year(2100)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_leap_year(2100), False)`)
}})
```

`is_leap_year(2000)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_leap_year(2000), True)`)
}})
```

`is_leap_year(1999)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_leap_year(1999), False)`)
}})
```

`is_leap_year(2040)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_leap_year(2040), True)`)
}})
```

`is_leap_year(2026)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_leap_year(2026), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_leap_year(year):

    return year
```

# --solutions--

```py
def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    else:
        return False
```
