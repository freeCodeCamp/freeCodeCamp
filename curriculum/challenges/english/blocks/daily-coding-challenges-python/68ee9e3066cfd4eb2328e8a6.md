---
id: 68ee9e3066cfd4eb2328e8a6
title: "Challenge 87: Matrix Builder"
challengeType: 29
dashedName: challenge-87
---

# --description--

Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (`0`) of the given size.

For example, given `2` and `3`, return:

```json
[
  [0, 0, 0],
  [0, 0, 0]
]
```

# --hints--

`build_matrix(2, 3)` should return `[[0, 0, 0], [0, 0, 0]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_matrix(2, 3), [[0, 0, 0], [0, 0, 0]])`)
}})
```

`build_matrix(3, 2)` should return `[[0, 0], [0, 0], [0, 0]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_matrix(3, 2), [[0, 0], [0, 0], [0, 0]])`)
}})
```

`build_matrix(4, 3)` should return `[[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_matrix(4, 3), [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])`)
}})
```

`build_matrix(9, 1)` should return `[[0], [0], [0], [0], [0], [0], [0], [0], [0]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_matrix(9, 1), [[0], [0], [0], [0], [0], [0], [0], [0], [0]])`)
}})
```

# --seed--

## --seed-contents--

```py
def build_matrix(rows, cols):

    return rows
```

# --solutions--

```py
def build_matrix(rows, cols):

    return [[0 for _ in range(cols)] for _ in range(rows)]
```
