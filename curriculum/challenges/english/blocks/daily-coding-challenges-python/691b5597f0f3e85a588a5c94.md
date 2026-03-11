---
id: 691b5597f0f3e85a588a5c94
title: "Challenge 130: Checkerboard"
challengeType: 29
dashedName: challenge-130
---

# --description--

Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with `"X"` and `"O"` characters of the given size.

- The characters should alternate like a checkerboard.
- The top-left cell must always be `"X"`.

For example, given `[3, 3]`, return:

```json
[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
]
```

# --hints--

`create_board([3, 3])` should return `[["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(create_board([3, 3]), [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]])`)
}})
```

`create_board([6, 1])` should return `[["X"], ["O"], ["X"], ["O"], ["X"], ["O"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(create_board([6, 1]), [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]])`)
}})
```

`create_board([2, 10])` should return `[["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(create_board([2, 10]), [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]])`)
}})
```

`create_board([5, 4])` should return `[["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(create_board([5, 4]), [["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]])`)
}})
```

# --seed--

## --seed-contents--

```py
def create_board(dimensions):

    return dimensions
```

# --solutions--

```py
def create_board(dimensions):
    rows, cols = dimensions
    board = []

    for r in range(rows):
        row = []
        for c in range(cols):
            row.append("X" if (r + c) % 2 == 0 else "O")
        board.append(row)

    return board
```
