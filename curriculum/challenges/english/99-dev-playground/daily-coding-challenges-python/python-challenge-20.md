---
id: 6821ecb5237de8297eaee7a2
title: "Python Challenge 20: Array Duplicates"
challengeType: 29
dashedName: python-challenge-20
---

# --description--

Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

- Only include one instance of each value in the returned array.

# --hints--

`find_duplicates([1, 2, 3, 4, 5])` should return `[]`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(find_duplicates([1, 2, 3, 4, 5]), [])`)
```

`find_duplicates([1, 2, 3, 4, 1, 2])` should return `[1, 2]`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(find_duplicates([1, 2, 3, 4, 1, 2]), [1, 2])`)
```

`find_duplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])` should return `[-6, 0, 2, 4, 5, 23]`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(find_duplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]), [-6, 0, 2, 4, 5, 23])`)
```

# --seed--

## --seed-contents--

```py
def find_duplicates(arr):

    return arr
```

# --solutions--

```py
def find_duplicates(arr):
    seen = set()
    duplicates = set()

    for num in arr:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)

    return sorted(duplicates)
```
