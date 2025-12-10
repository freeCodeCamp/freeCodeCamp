---
id: 69162d64f96574d9bb629f02
title: "Challenge 117: Symmetric Difference"
challengeType: 29
dashedName: challenge-117
---

# --description--

Given two arrays, return a new array containing the symmetric difference of them.

- The symmetric difference between two sets is the set of values that appear in either set, but not both.
- Return the values in the order they first appear in the input arrays.

# --hints--

`difference([1, 2, 3], [3, 4, 5])` should return `[1, 2, 4, 5]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(difference([1, 2, 3], [3, 4, 5]), [1, 2, 4, 5])`)
}})
```

`difference(["a", "b"], ["c", "b"])` should return `["a", "c"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(difference(["a", "b"], ["c", "b"]), ["a", "c"])`)
}})
```

`difference([1, "a", 2], [2, "b", "a"])` should return `[1, "b"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(difference([1, "a", 2], [2, "b", "a"]), [1, "b"])`)
}})
```

`difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])` should return `[2, 4, 6, 8]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]), [2, 4, 6, 8])`)
}})
```

# --seed--

## --seed-contents--

```py
def difference(arr1, arr2):

    return arr1
```

# --solutions--

```py
def difference(arr1, arr2):
    diff = []

    for v in arr1:
        if v not in arr2 and v not in diff:
            diff.append(v)

    for v in arr2:
        if v not in arr1 and v not in diff:
            diff.append(v)

    return diff
```
