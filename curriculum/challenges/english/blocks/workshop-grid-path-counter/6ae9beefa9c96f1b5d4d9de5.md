---
id: 6ae9beefa9c96f1b5d4d9de5
title: Step 5
challengeType: 20
dashedName: step-5
---

# --description--

Next, you'll create a function that counts the paths to any square. A path can only move right or down, so it can only enter a square from above or from the left. That means the number of paths to a square is the sum of the paths to those two squares.

To do this, create a function named `count_paths_top_down` with `grid`, `row` and `col` as the parameters. Add `pass` to its body for now.

# --hints--

You should define a function named `count_paths_top_down`.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).has_function("count_paths_top_down")
  `)
})
```

`count_paths_top_down` should have the parameters `grid`, `row` and `col`.

```js
({
  test: () =>
    runPython(`
    from itertools import permutations
    func = _Node(_code).find_function("count_paths_top_down")
    assert any(func.has_args(", ".join(params)) for params in permutations(["grid", "row", "col"]))
  `)
})
```

You should add `pass` to the body of your `count_paths_top_down` function.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).find_function("count_paths_top_down").has_pass()
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

--fcc-editable-region--

--fcc-editable-region--
```
