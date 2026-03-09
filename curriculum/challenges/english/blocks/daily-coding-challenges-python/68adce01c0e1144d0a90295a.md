---
id: 68adce01c0e1144d0a90295a
title: "Challenge 27: Matrix Rotate"
challengeType: 29
dashedName: challenge-27
---

# --description--

Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given `[[1, 2], [3, 4]]`, which looks like this:

| 1 | 2 |
|---|---|
| 3 | 4 |

You should return `[[3, 1], [4, 2]]`, which looks like this:

| 3 | 1 |
|---|---|
| 4 | 2 |

# --hints--

`rotate([[1]])` should return `[[1]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rotate([[1]]), [[1]])`)
}})
```

`rotate([[1, 2], [3, 4]])` should return `[[3, 1], [4, 2]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rotate([[1, 2], [3, 4]]), [[3, 1], [4, 2]])`)
}})
```

`rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])` should return `[[7, 4, 1], [8, 5, 2], [9, 6, 3]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]])`)
}})
```

`rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]])` should return `[[0, 1, 0], [0, 0, 1], [0, 1, 0]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]), [[0, 1, 0], [0, 0, 1], [0, 1, 0]])`)
}})
```

# --seed--

## --seed-contents--

```py
def rotate(matrix):

    return matrix
```

# --solutions--

```py
def rotate(matrix):
    n = len(matrix)
    result = [[0] * n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            result[j][n - 1 - i] = matrix[i][j]

    return result
```
