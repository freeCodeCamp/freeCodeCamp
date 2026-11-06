---
id: 6ae9e3c4e3bebd0cb6f3051f
title: Step 24
challengeType: 20
dashedName: step-24
---

# --description--

Now you should fill `table`.

Between the `table` assignment and the `return` statement, add a `for` loop that uses `r` to loop over `range(row + 1)`. Add `pass` to its body for now.

# --hints--

You should have a `for` loop with `r` as the loop variable.

```js
({
  test: () =>
    runPython(`
    assert any(loop.find_for_vars().is_equivalent("r") for loop in _Node(_code).find_function("count_paths_bottom_up").find_for_loops())
  `)
})
```

Your `for` loop should iterate through `range(row + 1)`.

```js
({
  test: () =>
    runPython(`
    assert not _Node(_code).find_function("count_paths_bottom_up").find_for("r", "range(row + 1)").is_empty()
  `)
})
```

Your `for` loop should come after the `table` assignment and before the `return` statement.

```js
({
  test: () =>
    runPython(`
    body = _Node(_code).find_function("count_paths_bottom_up").find_body()
    assert body[0].is_equivalent("table = [[0] * (col + 1) for _ in range(row + 1)]")
    assert body[-1].is_equivalent("return table[row][col]")
    assert not body.find_for("r", "range(row + 1)").is_empty()
  `)
})
```

You should add `pass` to the body of your `for` loop.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).find_function("count_paths_bottom_up").find_for("r", "range(row + 1)").find_bodies()[0].has_pass()
  `)
})
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
--fcc-editable-region--
    
--fcc-editable-region--

    return table[row][col]

print(count_paths_top_down(warehouse, 3, 3))
print(count_paths_top_down(open_floor, 3, 3))
```
