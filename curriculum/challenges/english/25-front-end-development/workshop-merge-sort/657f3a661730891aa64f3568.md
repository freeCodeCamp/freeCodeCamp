---
id: 657f3a661730891aa64f3568
title: Step 4
challengeType: 20
dashedName: step-4
---

# --description--

Use the slice syntax to extract the right half of `array` and assign it to a variable named `right_part`.

# --hints--

You should have a variable named `right_part`

```js
({
  test: () => assert(runPython(`_Node(_code).find_function("merge_sort").has_variable("right_part")`))
})
```

You should use the slice syntax to extract the right half of the array and assign it to the `right_part` variable.

```js
({
  test: () => assert(runPython(`_Node(_code).find_function("merge_sort").find_variable("right_part").is_equivalent("right_part = array[middle_point:]")`)) 
})
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def merge_sort(array):
    middle_point = len(array) // 2
    left_part = array[:middle_point]
--fcc-editable-region--
```
