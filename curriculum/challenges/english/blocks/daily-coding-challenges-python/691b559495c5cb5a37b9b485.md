---
id: 691b559495c5cb5a37b9b485
title: "Challenge 125: Game of Life"
challengeType: 29
dashedName: challenge-125
---

# --description--

Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:

- Each cell is either `1` (alive) or `0` (dead).
- A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
- Cells on the edges have fewer than eight neighbors.

Rules for updating each cell:

- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with two or three live neighbors lives on.
- Any live cell with more than three live neighbors dies (overpopulation).
- Any dead cell with exactly three live neighbors becomes alive (reproduction).

For example, given:

```json
[
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
]
```

return:

```json
[
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]
```

Each cell updates according to the number of live neighbors. For instance, `[0][0]` stays dead (2 live neighbors), `[0][1]` stays alive (2 live neighbors), `[0][2]` dies (3 live neighbors), and so on.

# --hints--

`game_of_life([[0, 1, 0], [0, 1, 1], [1, 1, 0]])` should return `[[0, 1, 1], [0, 0, 1], [1, 1, 1]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(game_of_life([[0, 1, 0], [0, 1, 1], [1, 1, 0]]), [[0, 1, 1], [0, 0, 1], [1, 1, 1]])`)
}})
```

`game_of_life([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]])` should return `[[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(game_of_life([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]), [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]])`)
}})
```

`game_of_life([[1, 0, 0], [0, 1, 0], [0, 0, 1]])` should return `[[0, 0, 0], [0, 1, 0], [0, 0, 0]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(game_of_life([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), [[0, 0, 0], [0, 1, 0], [0, 0, 0]])`)
}})
```

`game_of_life([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]])` should return `[[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(game_of_life([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]), [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]])`)
}})
```

# --seed--

## --seed-contents--

```py
def game_of_life(grid):

    return grid
```

# --solutions--

```py
def game_of_life(grid):
    rows, cols = len(grid), len(grid[0])

    def count_live_neighbors(r, c):
        count = 0
        for i in range(r-1, r+2):
            for j in range(c-1, c+2):
                if 0 <= i < rows and 0 <= j < cols and (i != r or j != c):
                    count += grid[i][j]
        return count

    next_state = [row[:] for row in grid]

    for r in range(rows):
        for c in range(cols):
            live_neighbors = count_live_neighbors(r, c)

            if grid[r][c] == 1:
                if live_neighbors < 2 or live_neighbors > 3:
                    next_state[r][c] = 0
            else:
                if live_neighbors == 3:
                    next_state[r][c] = 1

    return next_state
```
