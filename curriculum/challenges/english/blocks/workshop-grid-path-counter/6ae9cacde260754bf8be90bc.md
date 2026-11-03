---
id: 6ae9cacde260754bf8be90bc
title: Step 14
challengeType: 20
dashedName: step-14
---

# --description--

Your function works, but it does a lot of repeated work.

To see that in action, add `print(row, col)` as the first line of the function body and take a look at the terminal.

# --hints--

The first line of count_paths_top_down should be `print(row, col)`.

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

def count_paths_top_down(grid, row, col):
    --fcc-editable-region--

    --fcc-editable-region--
    if row < 0 or col < 0 or grid[row][col] == 1:
        return 0

    if row == 0 and col == 0:
        return 1

    from_above = count_paths_top_down(grid, row - 1, col)
    from_left = count_paths_top_down(grid, row, col - 1)

    return from_above + from_left

print(count_paths_top_down(warehouse, 3, 3))
print(count_paths_top_down(open_floor, 3, 3))
```
