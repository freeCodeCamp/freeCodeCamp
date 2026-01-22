---
id: 68f6587287ad1f4ad39b0c81
title: "Challenge 95: Array Shift"
challengeType: 29
dashedName: challenge-95
---

# --description--

Given an array and an integer representing how many positions to shift the array, return the shifted array.

- A positive integer shifts the array to the left.
- A negative integer shifts the array to the right.
- The shift wraps around the array.

For example, given `[1, 2, 3]` and `1`, shift the array 1 to the left, returning `[2, 3, 1]`.

# --hints--

`shift_array([1, 2, 3], 1)` should return `[2, 3, 1]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(shift_array([1, 2, 3], 1), [2, 3, 1])`)
}})
```

`shift_array([1, 2, 3], -1)` should return `[3, 1, 2]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(shift_array([1, 2, 3], -1), [3, 1, 2])`)
}})
```

`shift_array(["alpha", "bravo", "charlie"], 5)` should return `["charlie", "alpha", "bravo"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(shift_array(["alpha", "bravo", "charlie"], 5), ["charlie", "alpha", "bravo"])`)
}})
```

`shift_array(["alpha", "bravo", "charlie"], -11)` should return `["bravo", "charlie", "alpha"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(shift_array(["alpha", "bravo", "charlie"], -11), ["bravo", "charlie", "alpha"])`)
}})
```

`shift_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)` should return `[5, 6, 7, 8, 9, 0, 1, 2, 3, 4]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(shift_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15), [5, 6, 7, 8, 9, 0, 1, 2, 3, 4])`)
}})
```

# --seed--

## --seed-contents--

```py
def shift_array(arr, n):

    return arr
```

# --solutions--

```py
def shift_array(arr, n):
    length = len(arr)
    n = n % length
    if n < 0:
        n += length

    return arr[n:] + arr[:n]
```
