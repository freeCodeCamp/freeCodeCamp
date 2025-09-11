---
id: 681cb1b2dab50c87ddb2e523
title: "Python Challenge 9: Sum of Squares"
challengeType: 29
dashedName: python-challenge-9
---

# --description--

Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

# --hints--

`sum_of_squares(5)` should return `55`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_of_squares(5), 55)`)
}})
```

`sum_of_squares(10)` should return `385`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_of_squares(10), 385)`)
}})
```

`sum_of_squares(25)` should return `5525`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_of_squares(25), 5525)`)
}})
```

`sum_of_squares(500)` should return `41791750`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_of_squares(500), 41791750)`)
}})
```

`sum_of_squares(1000)` should return `333833500`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sum_of_squares(1000), 333833500)`)
}})
```

# --seed--

## --seed-contents--

```py
def sum_of_squares(n):

    return n
```

# --solutions--

```py
def sum_of_squares(n):
    sum = ((n)*(n+1)*(2*n+1))//6
    return sum
```
