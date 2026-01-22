---
id: 6939b873185d8e00d453563e
title: "Challenge 159: Integer Hypotenuse"
challengeType: 29
dashedName: challenge-159
---

# --description--

Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>).

# --hints--

`is_integer_hypotenuse(3, 4)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_integer_hypotenuse(3, 4), True)`)
}})
```

`is_integer_hypotenuse(2, 3)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_integer_hypotenuse(2, 3), False)`)
}})
```

`is_integer_hypotenuse(5, 12)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_integer_hypotenuse(5, 12), True)`)
}})
```

`is_integer_hypotenuse(10, 10)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_integer_hypotenuse(10, 10), False)`)
}})
```

`is_integer_hypotenuse(780, 1040)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_integer_hypotenuse(780, 1040), True)`)
}})
```

`is_integer_hypotenuse(250, 333)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_integer_hypotenuse(250, 333), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_integer_hypotenuse(a, b):

    return a
```

# --solutions--

```py
import math
def is_integer_hypotenuse(a, b):
    total = a*a + b*b
    c = math.isqrt(total)
    return c*c == total
```
