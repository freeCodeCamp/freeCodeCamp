---
id: 681cb1b2dab50c87ddb2e521
title: "Python Challenge 7: Targeted Sum"
challengeType: 29
dashedName: python-challenge-7
---

# --description--

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or `"Target not found"` if no two numbers sum up to the target.

- The returned array should have the indices in ascending order.

# --hints--

`find_target([2, 7, 11, 15], 9)` should return `[0, 1]`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(find_target([2, 7, 11, 15], 9), [0, 1])`)
```

`find_target([3, 2, 4, 5], 6)` should return `[1, 2]`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(find_target([3, 2, 4, 5], 6), [1, 2])`)
```

`find_target([1, 3, 5, 6, 7, 8], 15)` should return `[4, 5]`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(find_target([1, 3, 5, 6, 7, 8], 15), [4, 5])`)
```

`find_target([1, 3, 5, 7], 14)` should return `'Target not found'`.

```js

runPython(`
from unittest import TestCase
TestCase().assertEqual(find_target([1, 3, 5, 7], 14), "Target not found")`)
```

# --seed--

## --seed-contents--

```py
def find_target(arr, target):

    return arr
```

# --solutions--

```py
def find_target(arr, target):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]
    return 'Target not found'
```
