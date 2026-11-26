---
id: 6ae8a45e838dda8dda8ebb5a
title: Step 24
challengeType: 20
dashedName: step-24
---

# --description--

Now it's time to solve the real puzzle. Remove `small_puzzle` and the three calls that use it.

Then, call `print` with the string `Puzzle to solve:`, and call `print_board` with `puzzle`.

# --hints--

You should not have `small_puzzle` in your code.

```js
({
  test: () =>
    runPython(`
    assert not _Node(_code).has_variable("small_puzzle")
  `)
})
```

You should not call `solve(small_puzzle)`.

```js
({
  test: () =>
    runPython(`
    assert not _Node(_code).has_call("solve(small_puzzle)")
  `)
})
```

You should not call `print_board(small_puzzle)`.

```js
({
  test: () =>
    runPython(`
    assert not _Node(_code).has_call("print_board(small_puzzle)")
  `)
})
```

You should call `print('Puzzle to solve:')` before `print_board(puzzle)`.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).is_ordered("print('Puzzle to solve:')", "print_board(puzzle)")
  `)
})
```

# --seed--

## --seed-contents--

```py
puzzle = [
    [0, 0, 2, 0, 0, 8, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 7, 6, 2],
    [4, 3, 0, 0, 0, 0, 8, 0, 0],
    [0, 5, 0, 0, 3, 0, 0, 9, 0],
    [0, 4, 0, 0, 0, 0, 0, 2, 6],
    [0, 0, 0, 4, 6, 7, 0, 0, 0],
    [0, 8, 6, 7, 0, 4, 0, 0, 0],
    [0, 0, 0, 5, 1, 9, 0, 0, 8],
    [1, 7, 0, 0, 0, 6, 0, 0, 5]
]


def print_board(board):
    for row in board:
        print(' '.join(str(num) if num else '*' for num in row))


def find_empty_cell(board):
    for row in range(9):
        for col in range(9):
            if board[row][col] == 0:
                return row, col
    return None


def is_valid(board, row, col, num):
    if num in board[row]:
        return False

    for r in range(9):
        if board[r][col] == num:
            return False

    box_row = (row // 3) * 3
    box_col = (col // 3) * 3
    for r in range(box_row, box_row + 3):
        for c in range(box_col, box_col + 3):
            if board[r][c] == num:
                return False

    return True


def solve(board):
    empty_cell = find_empty_cell(board)
    if empty_cell is None:
        return True

    row, col = empty_cell

    for num in range(1, 10):
        if is_valid(board, row, col, num):
            board[row][col] = num
            if solve(board):
                return True
            board[row][col] = 0

    return False


--fcc-editable-region--
small_puzzle = [
    [0, 0, 2, 1, 7, 0, 3, 5, 4],
    [0, 1, 5, 9, 4, 3, 7, 6, 2],
    [4, 3, 7, 6, 5, 2, 8, 1, 9],
    [6, 5, 8, 2, 3, 1, 4, 9, 7],
    [7, 4, 3, 8, 9, 5, 1, 2, 6],
    [2, 9, 1, 4, 6, 7, 5, 8, 3],
    [5, 8, 6, 7, 2, 4, 9, 3, 1],
    [3, 2, 4, 5, 1, 9, 6, 7, 8],
    [1, 7, 9, 3, 8, 6, 2, 4, 5]
]
print_board(small_puzzle)
solve(small_puzzle)
print_board(small_puzzle)
--fcc-editable-region--
```
