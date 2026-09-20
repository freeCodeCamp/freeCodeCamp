---
id: 68b7687dded630607aceccad
title: "Challenge 46: 2nd Largest"
challengeType: 29
dashedName: challenge-46
---

# --description--

Given an array, return the second largest distinct number.

# --hints--

`second_largest([1, 2, 3, 4])` should return `3`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(second_largest([1, 2, 3, 4]), 3)`)
}})
```

`second_largest([20, 139, 94, 67, 31])` should return `94`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(second_largest([20, 139, 94, 67, 31]), 94)`)
}})
```

`second_largest([2, 3, 4, 6, 6])` should return `4`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(second_largest([2, 3, 4, 6, 6]), 4)`)
}})
```

`second_largest([10, -17, 55.5, 44, 91, 0])` should return `55.5`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(second_largest([10, -17, 55.5, 44, 91, 0]), 55.5)`)
}})
```

`second_largest([1, 0, -1, 0, 1, 0, -1, 1, 0])` should return `0`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(second_largest([1, 0, -1, 0, 1, 0, -1, 1, 0]), 0)`)
}})
```

# --seed--

## --seed-contents--

```py
def second_largest(arr):

    return arr
```

# --solutions--

```py
def second_largest(arr):
    unique = list(set(arr))
    unique.sort(reverse=True)
    return unique[1]
```
