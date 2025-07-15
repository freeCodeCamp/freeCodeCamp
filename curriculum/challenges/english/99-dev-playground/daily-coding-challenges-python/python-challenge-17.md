---
id: 6821eca7237de8297eaee79f
title: "Python Challenge 17: Unorder of Operations"
challengeType: 29
dashedName: python-challenge-17
---

# --description--

Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given `[1, 2, 3, 4, 5]` and `['+', '*']`, return the result of evaluating `1 + 2 * 3 + 4 * 5` from left-to-right ignoring standard order of operations.

- Valid operators are `+`, `-`, `*`, `/`, and `%`.

# --hints--

`evaluate([5, 6, 7, 8, 9], ['+', '-'])` should return `3`

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(evaluate([5, 6, 7, 8, 9], ['+', '-']), 3)`)
```

`evaluate([17, 61, 40, 24, 38, 14], ['+', '%'])` should return `38`

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']), 38)`)
```

`evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])` should return `60`

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']), 60)`)
```

`evaluate([11, 4, 10, 17, 2], ['*', '*', '%'])` should return `30`

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']), 30)`)
```

`evaluate([33, 11, 29, 13], ['/', '-'])` should return `-2`

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(evaluate([33, 11, 29, 13], ['/', '-']), -2)`)
```

# --seed--

## --seed-contents--

```py
def evaluate(numbers, operators):

    return numbers
```

# --solutions--

```py
def do_math(a, b, operator):
    if operator == '+':
        return a + b
    elif operator == '-':
        return a - b
    elif operator == '*':
        return a * b
    elif operator == '/':
        return a / b
    else:
        return a % b

def evaluate(numbers, operators):
    total = numbers[0]

    for i in range(1, len(numbers)):
        operator = operators[(i - 1) % len(operators)]
        total = do_math(total, numbers[i], operator)

    return total
```
