---
id: 6939b873185d8e00d453563d
title: "Challenge 158: Array Swap"
challengeType: 29
dashedName: challenge-158
---

# --description--

Given an array with two values, return an array with the values swapped.

For example, given `["A", "B"]` return `["B", "A"]`.

# --hints--

`array_swap(["A", "B"])` should return `["B", "A"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_swap(["A", "B"]), ["B", "A"])`)
}})
```

`array_swap([25, 20])` should return `[20, 25]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_swap([25, 20]), [20, 25])`)
}})
```

`array_swap([True, False])` should return `[False, True]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_swap([True, False]), [False, True])`)
}})
```

`array_swap(["1", 1])` should return `[1, "1"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_swap(["1", 1]), [1, "1"])`)
}})
```

# --seed--

## --seed-contents--

```py
def array_swap(arr):

    return arr
```

# --solutions--

```py
def array_swap(arr):

    return [arr[1], arr[0]]
```
