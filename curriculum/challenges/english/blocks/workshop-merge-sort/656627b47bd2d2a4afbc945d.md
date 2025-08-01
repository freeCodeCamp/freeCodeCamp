---
id: 656627b47bd2d2a4afbc945d
title: Step 3
challengeType: 20
dashedName: step-3
---

# --description--

In the previous step, you got the mid point. You can use it to divide `array` into two and assign each part to new variables. 

Use the slice syntax to extract the left half of `array` and assign it to a variable named `left_part`.

# --hints--

You should have a variable named `left_part` in your `merge_sort` function.

```js
({
  test: () => assert(runPython(`_Node(_code).find_function("merge_sort").has_variable("left_part")`)) 
})
```

You should use the slice syntax to extract the left half of the array and assign it to the `left_part` variable.

```js
({
  test: () => assert(runPython(`
    cond = _Node(_code).find_function("merge_sort").find_variable("left_part")
    cond.is_equivalent("left_part = array[:middle_point]") or cond.is_equivalent("left_part = array[0:middle_point]")
  `))
})
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def merge_sort(array):
    middle_point = len(array) // 2

--fcc-editable-region--
```
