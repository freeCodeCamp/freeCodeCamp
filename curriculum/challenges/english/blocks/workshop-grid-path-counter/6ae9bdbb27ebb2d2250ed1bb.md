---
id: 6ae9bdbb27ebb2d2250ed1bb
title: Step 4
challengeType: 20
dashedName: step-4
---

# --description--

You'll also need a floor with no boxes, so you can compare results.

Below `warehouse`, create a variable named `open_floor` that holds four rows of four `0` values each.

# --hints--

You should have a variable named `open_floor`.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).has_variable("open_floor")
  `)
})
```

`open_floor` should have four rows of four `0` values each.

```js
({
  test: () =>
    runPython(`
    assert len(open_floor) == 4
    assert all(len(row) == 4 for row in open_floor)
  `)
})
```

Every value in `open_floor` should be `0`.

```js
({
  test: () =>
    runPython(`
    assert len(open_floor) > 0
    assert all(value == 0 for row in open_floor for value in row)
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

--fcc-editable-region--

--fcc-editable-region--
```
