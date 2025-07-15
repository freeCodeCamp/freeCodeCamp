---
id: 6821ec92237de8297eaee79b
title: "Python Challenge 13: Unnatural Prime"
challengeType: 29
dashedName: python-challenge-13
---

# --description--

Given an integer, determine if that number is a prime number or a negative prime number.

- A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
- A negative prime number is the negative version of a positive prime number.
- `1` and `0` are not considered prime numbers.

# --hints--

`is_unnatural_prime(1)` should return `False`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(is_unnatural_prime(1))`)
```

`is_unnatural_prime(-1)` should return `False`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(is_unnatural_prime(-1))`)
```

`is_unnatural_prime(19)` should return `True`.

```js
runPython(`
from unittest import TestCase
TestCase().assertTrue(is_unnatural_prime(19))`)
```

`is_unnatural_prime(-23)` should return `True`.

```js
runPython(`
from unittest import TestCase
TestCase().assertTrue(is_unnatural_prime(-23))`)
```

`is_unnatural_prime(0)` should return `False`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(is_unnatural_prime(0))`)
```

`is_unnatural_prime(97)` should return `True`.

```js
runPython(`
from unittest import TestCase
TestCase().assertTrue(is_unnatural_prime(97))`)
```

`is_unnatural_prime(-61)` should return `True`.

```js
runPython(`
from unittest import TestCase
TestCase().assertTrue(is_unnatural_prime(-61))`)
```

`is_unnatural_prime(99)` should return `False`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(is_unnatural_prime(99))`)
```

`is_unnatural_prime(-44)` should return `False`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(is_unnatural_prime(-44))`)
```

# --seed--

## --seed-contents--

```py
def is_unnatural_prime(n):

    return n
```

# --solutions--

```py
def is_unnatural_prime(n):
    abs_n = abs(n)

    if abs_n <= 1:
        return False

    for i in range(2, int(abs_n ** 0.5) + 1):
        if abs_n % i == 0:
            return False

    return True
```
