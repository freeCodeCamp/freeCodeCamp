---
id: 68ffb91507a5b645769328c6
title: "Challenge 103: LCM"
challengeType: 29
dashedName: challenge-103
---

# --description--

Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given `4` and `6`, return `12` because:

- Multiples of `4` are `4`, `8`, `12` and so on.
- Multiples of `6` are `6`, `12`, `18` and so on.
- `12` is the smallest number that is a multiple of both.

# --hints--

`lcm(4, 6)` should return `12`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(lcm(4, 6), 12)`)
}})
```

`lcm(9, 6)` should return `18`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(lcm(9, 6), 18)`)
}})
```

`lcm(10, 100)` should return `100`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(lcm(10, 100), 100)`)
}})
```

`lcm(13, 17)` should return `221`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(lcm(13, 17), 221)`)
}})
```

`lcm(45, 70)` should return `630`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(lcm(45, 70), 630)`)
}})
```

# --seed--

## --seed-contents--

```py
def lcm(a, b):

    return a
```

# --solutions--

```py
def lcm(a, b):
    def gcd(x, y):
        return x if y == 0 else gcd(y, x % y)

    return abs(a * b) // gcd(a, b)
```
