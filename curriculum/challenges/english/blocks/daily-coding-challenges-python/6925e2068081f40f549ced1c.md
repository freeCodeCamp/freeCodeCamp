---
id: 6925e2068081f40f549ced1c
title: "Challenge 138: Sum of Divisors"
challengeType: 29
dashedName: challenge-138
---

# --description--

Given a positive integer, return the sum of all its divisors.

- A divisor is any integer that divides the number evenly (the remainder is `0`).
- Only count each divisor once.

For example, given `6`, return `12` because the divisors of `6` are `1`, `2`, `3`, and `6`, and the sum of those is `12`.

# --hints--

`sum_divisors(6)` should return `12`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_divisors(6), 12)`)
}})
```

`sum_divisors(13)` should return `14`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_divisors(13), 14)`)
}})
```

`sum_divisors(28)` should return `56`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_divisors(28), 56)`)
}})
```

`sum_divisors(84)` should return `224`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_divisors(84), 224)`)
}})
```

`sum_divisors(549)` should return `806`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_divisors(549), 806)`)
}})
```

`sum_divisors(9348)` should return `23520`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_divisors(9348), 23520)`)
}})
```

# --seed--

## --seed-contents--

```py
def sum_divisors(n):

    return n
```

# --solutions--

```py
def sum_divisors(n):
    total = 0
    for i in range(1, n + 1):
        if n % i == 0:
            total += i
    return total
```
