---
id: 69162d64f96574d9bb629efc
title: "Challenge 111: Ball Trajectory"
challengeType: 29
dashedName: challenge-111
---

# --description--

Today's challenge is inspired by the video game Pong, which was released November 29, 1972.

Given a matrix (array of arrays) that includes the location of the ball (`2`), and the previous location of the ball (`1`), return the matrix indices for the next location of the ball.

- The ball always moves in a straight line.
- The movement direction is determined by how the ball moved from `1` to `2`.
- The edges of the matrix are considered walls. If the ball hits a:
  - top or bottom wall, it bounces by reversing its vertical direction.
  - left or right wall, it bounces by reversing its horizontal direction.
  - corner, it bounces by reversing both directions.

# --hints--

`get_next_location([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]])` should return `[2, 3]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_next_location([[0,0,0,0], [0,0,0,0], [0,1,2,0], [0,0,0,0]]), [2, 3])`)
}})
```

`get_next_location([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]])` should return `[3, 0]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_next_location([[0,0,0,0], [0,0,1,0], [0,2,0,0], [0,0,0,0]]), [3, 0])`)
}})
```

`get_next_location([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]])` should return `[1, 2]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_next_location([[0,2,0,0], [1,0,0,0], [0,0,0,0], [0,0,0,0]]), [1, 2])`)
}})
```

`get_next_location([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]])` should return `[1, 1]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_next_location([[0,0,0,0], [0,0,0,0], [2,0,0,0], [0,1,0,0]]), [1, 1])`)
}})
```

`get_next_location([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]])` should return `[2, 2]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_next_location([[0,0,0,0], [0,0,0,0], [0,0,1,0], [0,0,0,2]]), [2, 2])`)
}})
```

# --seed--

## --seed-contents--

```py
def get_next_location(matrix):

    return matrix
```

# --solutions--

```py
def get_next_location(matrix):
    prev = None
    curr = None

    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            if matrix[r][c] == 1:
                prev = (r, c)
            if matrix[r][c] == 2:
                curr = (r, c)

    prev_row, prev_col = prev
    curr_row, curr_col = curr

    dir_x = curr_col - prev_col
    dir_y = curr_row - prev_row

    next_row = curr_row + dir_y
    next_col = curr_col + dir_x

    max_row = len(matrix) - 1
    max_col = len(matrix[0]) - 1

    if next_col < 0 or next_col > max_col:
        dir_x *= -1
    if next_row < 0 or next_row > max_row:
        dir_y *= -1

    next_row = curr_row + dir_y
    next_col = curr_col + dir_x

    return [next_row, next_col]
```
