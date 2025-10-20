---
id: 68da604b8b6012a33e2344fb
title: Step 1
challengeType: 20
dashedName: step-1
---

# --description--

In this workshop, you'll implement a function that generates all valid combinations of parentheses using a breadth-first search (BFS) approach. For example, the valid combinations of two pairs of parentheses are `(())` and `()()`.

Start by creating a function named `gen_parentheses` with a single parameter `pairs`. For now, return an empty list from the function.

# --hints--

You should define a function named `gen_parentheses`.

```js
({ test: () => runPython(`
assert _Node(_code).has_function("gen_parentheses")
`) })
```

Your `gen_parentheses` function should have a single parameter named `pairs`.

```js
({ test: () => runPython(`
assert _Node(_code).find_function("gen_parentheses").has_args("pairs")
`) })
```

Your function should return an empty list.

```js
({ test: () => runPython(`
foo = _Node(_code).find_function("gen_parentheses")
assert foo.has_return("[]") or foo.has_return("list()")
`) })
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--

--fcc-editable-region--
```
