---
id: 68f6587287ad1f4ad39b0c83
title: "Challenge 97: GCD"
challengeType: 29
dashedName: challenge-97
---

# --description--

Given two positive integers, return their greatest common divisor (GCD).

- The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.

For example, the divisors of `4` are `1`, `2`, and `4`. The divisors of `6` are `1`, `2`, `3`, and `6`. So given `4` and `6`, return `2`, the largest number that appears in both sets of divisors.

# --hints--

`gcd(4, 6)` should return `2`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(gcd(4, 6), 2)`)
}})
```

`gcd(20, 15)` should return `5`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(gcd(20, 15), 5)`)
}})
```

`gcd(13, 17)` should return `1`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(gcd(13, 17), 1)`)
}})
```

`gcd(654, 456)` should return `6`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(gcd(654, 456), 6)`)
}})
```

`gcd(3456, 4320)` should return `864`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(gcd(3456, 4320), 864)`)
}})
```

# --seed--

## --seed-contents--

```py
def gcd(x, y):

    return x
```

# --solutions--

```py
def gcd(x, y):
    while y != 0:
        x, y = y, x % y
    return x
```
