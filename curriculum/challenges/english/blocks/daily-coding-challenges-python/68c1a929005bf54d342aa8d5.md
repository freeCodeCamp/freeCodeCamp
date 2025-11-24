---
id: 68c1a929005bf54d342aa8d5
title: "Challenge 58: Space Week Day 4: Landing Spot"
challengeType: 29
dashedName: challenge-58
---

# --description--

In day four of Space Week, you are given a matrix of numbers (an array of arrays), representing potential landing spots for your rover. Find the safest landing spot based on the following rules:

- Each spot in the matrix will contain a number from `0-9`, inclusive.
- Any `0` represents a potential landing spot.
- Any number other than `0` is too dangerous to land. The higher the number, the more dangerous.
- The safest spot is defined as the `0` cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
- Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
- Return the indices of the safest landing spot. There will always only be one safest spot.

For instance, given:

```js
[
  [1, 0],
  [2, 0]
]
```

Return `[0, 1]`, the indices for the `0` in the first array.

# --hints--

`find_landing_spot([[1, 0], [2, 0]])` should return `[0, 1]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_landing_spot([[1, 0], [2, 0]]), [0, 1])`)
}})
```

`find_landing_spot([[9, 0, 3], [7, 0, 4], [8, 0, 5]])` should return `[1, 1]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_landing_spot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]), [1, 1])`)
}})
```

`find_landing_spot([[1, 2, 1], [0, 0, 2], [3, 0, 0]])` should return `[2, 2]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_landing_spot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]), [2, 2])`)
}})
```

`find_landing_spot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]])` should return `[2, 1]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_landing_spot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]), [2, 1])`)
}})
```

# --seed--

## --seed-contents--

```py
def find_landing_spot(matrix):

    return matrix
```

# --solutions--

```py
def find_landing_spot(matrix):
    best_spot = None
    lowest_neighbor_sum = float('inf')

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j] == 0:
                current_neighbor_sum = 0

                if i > 0:
                    current_neighbor_sum += matrix[i - 1][j]
                if j < len(matrix[i]) - 1:
                    current_neighbor_sum += matrix[i][j + 1]
                if i < len(matrix) - 1:
                    current_neighbor_sum += matrix[i + 1][j]
                if j > 0:
                    current_neighbor_sum += matrix[i][j - 1]

                if current_neighbor_sum < lowest_neighbor_sum:
                    lowest_neighbor_sum = current_neighbor_sum
                    best_spot = [i, j]

    return best_spot
```
