---
id: 681cb1b2dab50c87ddb2e522
title: "Python Challenge 8: Factorializer"
challengeType: 29
dashedName: python-challenge-8
---

# --description--

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

- The factorial of zero is 1.

# --hints--

`factorial(0)` should return `1`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(factorial(0), 1)`)
```

`factorial(5)` should return `120`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(factorial(5), 120)`)
```

`factorial(20)` should return `2432902008176640000`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(factorial(20), 2432902008176640000)`)
```

# --seed--

## --seed-contents--

```py
def factorial(n):

    return n
```

# --solutions--

```py
def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
```
