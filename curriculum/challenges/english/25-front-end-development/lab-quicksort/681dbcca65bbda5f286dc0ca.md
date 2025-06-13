---
id: 681dbcca65bbda5f286dc0ca
title: Implement the Quicksort Algorithm
challengeType: 27
dashedName: implement-the-quicksort-algorithm
---

# --description--

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `quick_sort` to implement the quicksort algorithm.

1. The `quick_sort` function should take a list of integers as input and return a new list of these integers in sorted order from least to greatest.

1. To implement the algorithm, you should:
   - Choose a pivot value from the elements of the input list (use the first or the last element of the list).
   - Partition the input list into three sublists: one with elements less than the pivot, one with elements equal to the pivot, and one with elements greater than the pivot.
   - Recursively call `quick_sort` to sort the sublists and concatenate the sorted sublists to produce the final sorted list.

# --hints--

You should have a function named `quick_sort`.

```js
({ test: () => runPython(`assert _Node(_code).has_function("quick_sort")`) })
```

Your `quick_sort` function should take a single parameter.

```js
({ test: () => runPython(`
from inspect import signature
sig = signature(quick_sort)
assert len(sig.parameters) == 1
`) })
```

`quick_sort([])` should return an empty list.

```js
({ test: () => runPython(`assert quick_sort([]) == []`) })
```

Your `quick_sort` function should not modify the list passed to it as the argument.

```js
({ test: () => runPython(`
_test_list = [20, 3, 14, 1, 5]
quick_sort(_test_list)
assert _test_list == [20, 3, 14, 1, 5]
`) })
```

`quick_sort([20, 3, 14, 1, 5])` should return `[1, 3, 5, 14, 20]`.

```js
({ test: () => runPython(`assert quick_sort([20, 3, 14, 1, 5]) == [1, 3, 5, 14, 20]`) })
```

`quick_sort([83, 4, 24, 2])` should return `[2, 4, 24, 83]`.

```js
({ test: () => runPython(`assert quick_sort([83, 4, 24, 2]) == [2, 4, 24, 83]`) })
```

`quick_sort([4, 42, 16, 23, 15, 8])` should return `[4, 8, 15, 16, 23, 42]`.

```js
({ test: () => runPython(`assert quick_sort([4, 42, 16, 23, 15, 8]) == [4, 8, 15, 16, 23, 42]`) })
```

You should not use the `sorted()` function in your code.

```js
({ test: () => runPython(`
assert not _Node(_code).block_has_call("sorted")
`) })
```

You should not use the `sort()` method in your code.

```js
({ test: () => runPython(`
assert not _Node(_code).block_has_call("sort")
`) })
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
def quick_sort(array):
    if len(array) == 0:
        return []
    pivot = array[0]
    lesser = []
    equal = []
    greater = []
    for i in array:
        if i < pivot:
            lesser.append(i)
        elif i > pivot:
            greater.append(i)
        else:
            equal.append(i)
    return quick_sort(lesser) + equal + quick_sort(greater)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))
```
