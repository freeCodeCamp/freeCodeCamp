---
id: 6ae9b866c1acd862ae9fbdbf
title: Step 1
challengeType: 20
dashedName: step-1
---

# --description--

In this workshop, you'll build a grid path counter.

Begin by creating a variable named `warehouse` and assigning it an empty list.

This list represents the warehouse floor as a grid. Each item in it will be a list that represents a row.

Each row will contain numbers, where `0` means an open square and `1` means a square blocked by a box that no path can go through.

# --hints--

You should have a variable named `warehouse`.

```js
({
  test: () =>
    runPython(`
    assert _Node(_code).has_variable("warehouse")
  `)
})
```

`warehouse` should be an empty list.

```js
({
  test: () =>
    runPython(`
    assert warehouse == []
  `)
})
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--

--fcc-editable-region--
```
