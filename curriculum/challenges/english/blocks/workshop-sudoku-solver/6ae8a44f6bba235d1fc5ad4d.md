---
id: 6ae8a44f6bba235d1fc5ad4d
title: Step 9
challengeType: 20
dashedName: step-9
---

# --description--

A number can't appear twice in the same column either.

Create a `for` loop that iterates over `range(9)` using `r` as the loop variable. Inside the loop, check if `board[r][col]` is equal to `num`, and return `False` if it is.

# --hints--

You should have a `for` loop that iterates over `range(9)` using `r` as the loop variable inside `is_valid`.

```js
({
  test: () =>
    runPython(`
    assert not _Node(_code).find_function("is_valid").find_for("r", "range(9)").is_empty()
  `)
})
```

You should have an `if` statement that checks if `board[r][col] == num` inside your `for` loop.

```js
({
  test: () =>
    runPython(`
    assert not _Node(_code).find_function("is_valid").find_for("r", "range(9)").find_bodies()[0].find_if("board[r][col] == num").is_empty()
  `)
})
```

You should return `False` inside your `if` statement.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).find_function("is_valid").find_for("r", "range(9)").find_bodies()[0].find_if("board[r][col] == num").find_bodies()[0].is_equivalent("return False")
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

--fcc-editable-region--
    
--fcc-editable-region--


print_board(puzzle)
print(find_empty_cell(puzzle))
```
