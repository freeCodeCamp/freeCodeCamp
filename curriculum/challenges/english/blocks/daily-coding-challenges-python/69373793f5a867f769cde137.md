---
id: 69373793f5a867f769cde137
title: "Challenge 152: Circular Prime"
challengeType: 29
dashedName: challenge-152
---

# --description--

Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, `197` is a circular prime because all rotations of its digits: `197`, `971`, and `719`, are prime numbers.

# --hints--

`is_circular_prime(197)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_circular_prime(197), True)`)
}})
```

`is_circular_prime(23)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_circular_prime(23), False)`)
}})
```

`is_circular_prime(13)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_circular_prime(13), True)`)
}})
```

`is_circular_prime(89)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_circular_prime(89), False)`)
}})
```

`is_circular_prime(1193)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_circular_prime(1193), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_circular_prime(n):

    return n
```

# --solutions--

```py
import math
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.isqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def rotations(n):
    s = str(n)
    return [int(s[i:] + s[:i]) for i in range(len(s))]

def is_circular_prime(n):
    return all(is_prime(rot) for rot in rotations(n))
```
