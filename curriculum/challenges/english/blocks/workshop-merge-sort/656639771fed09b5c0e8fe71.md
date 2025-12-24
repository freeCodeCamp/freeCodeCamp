---
id: 656639771fed09b5c0e8fe71
title: Step 5
challengeType: 20
dashedName: step-5
---

# --description--

Now that you've divided the `array` list into two separate lists, you'll keep dividing each list until every element stands alone in its own list. A list with a single number is always sorted.

To do that, recursively call `merge_sort` inside your function and pass `left_part` as the argument to the call.

# --hints--

You should call `merge_sort` with the argument `left_part` at the bottom of your function body.

```js
({
    test: () => assert(runPython(`_Node(_code).find_function("merge_sort").is_ordered("right_part = array[middle_point:]", "merge_sort(left_part)")`
))
})
```

# --seed--

## --seed-contents--

```py
--fcc-editable-region--
def merge_sort(array):
    middle_point = len(array) // 2
    left_part = array[:middle_point]
    right_part = array[middle_point:]

--fcc-editable-region--
```
