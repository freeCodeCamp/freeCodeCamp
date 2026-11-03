---
id: 6ae9ed17085b9b5bae7bdec9
title: Step 30
challengeType: 20
dashedName: step-30
---

# --description--

Now, store the `total` for the current square by assign `from_above + from_left` to `table[r][c]`.

# --hints--

You should assign `from_above + from_left` to `table[r][c]`.

```js

```

# --seed--

## --seed-contents--

```py
warehouse = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
]

open_floor = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

def count_paths_top_down(grid, row, col, memo=None):
    if memo is None:
        memo = {}

    if row < 0 or col < 0 or grid[row][col] == 1:
        return 0

    if row == 0 and col == 0:
        return 1

    if (row, col) in memo:
       return memo[(row, col)]

    from_above = count_paths_top_down(grid, row - 1, col, memo)
    from_left = count_paths_top_down(grid, row, col - 1, memo)

    memo[(row, col)] = from_above + from_left
    return memo[(row, col)]

def count_paths_bottom_up(grid, row, col):
    table = [[0] * (col + 1) for _ in range(row + 1)]
    return table[row][col]

    for r in range(row + 1):
        for c in range(col + 1):
            if grid[r][c] == 1:
                table[r][c] = 0
            elif r == 0 and c == 0:
                table[r][c] = 1
            else:
                from_above = table[r - 1][c] if r > 0 else 0
                from_left = table[r][c - 1] if c > 0 else 0
                --fcc-editable-region--

                --fcc-editable-region--

print(count_paths_top_down(warehouse, 3, 3))
print(count_paths_top_down(open_floor, 3, 3))
```
