---
id: 69373793f5a867f769cde136
title: "Challenge 151: Sorted Array?"
challengeType: 29
dashedName: challenge-151
---

# --description--

Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

- In ascending order (lowest to highest), return `"Ascending"`.
- In descending order (highest to lowest), return `"Descending"`.
- Not sorted in ascending or descending order, return `"Not sorted"`.

# --hints--

`is_sorted([1, 2, 3, 4, 5])` should return `"Ascending"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(is_sorted([1, 2, 3, 4, 5]), "Ascending")`)
}})
```

`is_sorted([10, 8, 6, 4, 2])` should return `"Descending"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(is_sorted([10, 8, 6, 4, 2]), "Descending")`)
}})
```

`is_sorted([1, 3, 2, 4, 5])` should return `"Not sorted"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(is_sorted([1, 3, 2, 4, 5]), "Not sorted")`)
}})
```

`is_sorted([3.14, 2.71, 1.61, 0.57])` should return `"Descending"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(is_sorted([3.14, 2.71, 1.61, 0.57]), "Descending")`)
}})
```

`is_sorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9])` should return `"Ascending"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(is_sorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]), "Ascending")`)
}})
```

`is_sorted([0.4, 0.5, 0.3])` should return `"Not sorted"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(is_sorted([0.4, 0.5, 0.3]), "Not sorted")`)
}})
```

# --seed--

## --seed-contents--

```py
def is_sorted(arr):

    return arr
```

# --solutions--

```py
def is_sorted(arr):
    ascending = True
    descending = True

    for i in range(1, len(arr)):
        if arr[i] < arr[i - 1]:
            ascending = False
        if arr[i] > arr[i - 1]:
            descending = False

    if ascending:
        return "Ascending"
    if descending:
        return "Descending"
    return "Not sorted"
```
