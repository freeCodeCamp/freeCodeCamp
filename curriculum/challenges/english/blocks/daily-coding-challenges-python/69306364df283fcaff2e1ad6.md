---
id: 69306364df283fcaff2e1ad6
title: "Challenge 145: Nth Fibonacci Number"
challengeType: 29
dashedName: challenge-145
---

# --description--

Given an integer `n`, return the `n`th number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are `0`, `1`, `1`, `2`, `3`, `5`, `8`, `13`, `21`, `34`.

# --hints--

`nth_fibonacci(4)` should return `2`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_fibonacci(4), 2)`)
}})
```

`nth_fibonacci(10)` should return `34`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_fibonacci(10), 34)`)
}})
```

`nth_fibonacci(15)` should return `377`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_fibonacci(15), 377)`)
}})
```

`nth_fibonacci(40)` should return `63245986`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_fibonacci(40), 63245986)`)
}})
```

`nth_fibonacci(75)` should return `1304969544928657`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_fibonacci(75), 1304969544928657)`)
}})
```

# --seed--

## --seed-contents--

```py
def nth_fibonacci(n):

    return n
```

# --solutions--

```py
def nth_fibonacci(n):
    if n == 1:
        return 0
    if n == 2:
        return 1

    a, b = 0, 1
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b
```
