---
id: 680b3ef395479b0e449ecb6e
title: Implement the Selection Sort Algorithm
challengeType: 27
dashedName: implement-selection-sort-algorithm
---

# --description--

Selection sort is another popular sorting algorithm taught in most computer science courses.

This algorithm works by repeatedly finding the smallest element from the unsorted portion of the list and swapping it with the first unsorted element. It begins by selecting the minimum value in the entire list and swapping it with the first element. Then it moves to the second position, finds the smallest value in the remaining unsorted elements, and swaps it with the second element. This process continues, moving through the list one element at a time, until the entire list is sorted.

Selection sort results in a quadratic time complexity in the best, average, and worst case scenarios. The space complexity will be constant `O(1)` because the sorting is done in place and a constant amount of memory is being used regardless of the size of the list.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `selection_sort`.
1. Your `selection_sort` function should have one parameter that represents the list of items.
1. Your `selection_sort` function should take a list and sort the items in place from smallest to largest.
1. Your `selection_sort` function should modify the input list in-place, and return it once it's sorted.
1. Your `selection_sort` function should follow the selection sort algorithm, swapping the smallest element from the unsorted portion of the list with the first unsorted element.
1. Your `selection_sort` function should not perform unnecessary swaps when the smallest element is already in the correct position.
1. Your `selection_sort` function should not use either the built-in `sort()` method or `sorted()` function.

# --hints--

You should have a function named `selection_sort`.

```js
({test: () => {
    runPython(`
assert _Node(_code).has_function('selection_sort')
    `)
}})
```

Your `selection_sort` function should have one parameter.

```js
(
    {test: () => {
        runPython(`
            import inspect
            sig = inspect.signature(selection_sort)
            assert len(sig.parameters) == 1
        `)
    }}
)
```

You should not import any module or use built-in sorting methods in your code.

```js
(
    {
        test: () => runPython(`
            assert len(_Node(_code).find_imports()) == 0
            assert not _Node(_code).block_has_call("sort")
            assert not _Node(_code).block_has_call("sorted")
        `)
    }
)
```

Your `selection_sort` should return the same list as the input list.

```js
(
    {
        test: () => runPython(`
            input_list = [32, 0, 88, 1, 203]
            assert selection_sort(input_list) is input_list
        `)
    }
)
```

Your `selection_sort` should modify the input list in-place. You should not use any method adding, or removing items from the list.

```js
(
    {
        test: () => runPython(`
            from collections import UserList

            class CustomList(UserList):
                def __init__(self, *args, **kwargs):
                    self._record = []
                    super().__init__(*args, **kwargs)

                def __setitem__(self, key, value):
                    self._record.append(f'Setting item {key} to {value}. Previous value: {self[key]}')
                    super().__setitem__(key, value)

                def append(self, *args, **kwargs):
                    self._record.append(f'Appending to list: {args}, {kwargs}')
                    super().append(*args, **kwargs)

                def insert(self, *args, **kwargs):
                    self._record.append(f'Inserting to list: {args}, {kwargs}')
                    super().insert(*args, **kwargs)

                def pop(self, *args, **kwargs):
                    self._record.append(f'Popping from list: {args}, {kwargs}')
                    super().pop(*args, **kwargs)

                def remove(self, *args, **kwargs):
                    self._record.append(f'Removing from list: {args}, {kwargs}')
                    super().remove(*args, **kwargs)


            list_to_sort = CustomList([32, 0, 88, 1, 203])

            selection_sort(list_to_sort)
            assert all(
                'Setting item' in record
                for record in list_to_sort._record
            )
        `)
    }
)
```

Your `selection_sort` function should follow the selection sort algorithm, swapping the minimum value in the unsorted part of the list with the first unsorted element. Avoid unnecessary swaps when the minimum value is already in the correct position.

```js
(
    {
        test: () => runPython(`
            from collections import UserList

            class CustomList(UserList):
                def __init__(self, *args, **kwargs):
                    self._record = []
                    super().__init__(*args, **kwargs)

                def __setitem__(self, key, value):
                    self._record.append(f'Setting item {key} to {value}. Previous value: {self[key]}')
                    super().__setitem__(key, value)


            list_to_sort = CustomList([33, 1, 89, 2, 67, 245])

            swap_pairs = [
                ((0, 1, 33), (1, 33, 1)),
                ((1, 2, 33), (3, 33, 2)),
                ((2, 33, 89), (3, 89, 33)),
                ((3, 67, 89), (4, 89, 67)),
            ]

            selection_sort(list_to_sort)
            record = list_to_sort._record

            actual_pairs = [
                (record[offset * 2], record[offset * 2 + 1])
                for offset, _ in enumerate(record[::2])
            ]
            assert len(swap_pairs) == len(actual_pairs)

            for expected_pair, actual_pair in zip(swap_pairs, actual_pairs):
                assert (
                    set(f'Setting item {key} to {value}. Previous value: {old}' for key, value, old in expected_pair)
                    == set(actual_pair)
                )
        `)
    }
)
```

`selection_sort([33, 1, 89, 2, 67, 245])` should return `[1, 2, 33, 67, 89, 245]`.

```js
(
    {
        test: () => runPython(`
            assert selection_sort([33, 1, 89, 2, 67, 245]) == [1, 2, 33, 67, 89, 245]
            
        `)
    }
)
```

`selection_sort([5, 16, 99, 12, 567, 23, 15, 72, 3])` should return `[3, 5, 12, 15, 16, 23, 72, 99, 567]`.

```js
(
    {
        test: () => runPython(`
            assert selection_sort([5, 16, 99, 12, 567, 23, 15, 72, 3]) == [3, 5, 12, 15, 16, 23, 72, 99, 567]
            
        `)
    }
)
```

`selection_sort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])` should return `[1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]`.

```js
(
    {
        test: () => runPython(`
            assert selection_sort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]) == [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
            
        `)
    }
)
```

Your `selection_sort` function should sort correctly any list of numbers.

```js
(
    {
        test: () => runPython(`
            assert selection_sort([42, 17, 93, 8, 61, 29]) == [8, 17, 29, 42, 61, 93]
            assert selection_sort([11, 4, 78, 23, 55, 198, 65, 90, 2]) == [2, 4, 11, 23, 55, 65, 78, 90, 198]
            assert selection_sort([9, 27, 3, 7, 101, 66, 34, 52, 87, 42, 12, 29]) == [3, 7, 9, 12, 27, 29, 34, 42, 52, 66, 87, 101]
            assert selection_sort([5, 14, 33, 77, 2, 18, 92, 1, 100, 45, 73, 64, 28, 56]) == [1, 2, 5, 14, 18, 28, 33, 45, 56, 64, 73, 77, 92, 100]
            
        `)
    }
)     
```

# --seed--

## --seed-contents--

```py

```

# --solutions--

```py
def selection_sort(nums):
    for i, _ in enumerate(nums):
        min_index = i

        for j in range(i + 1, len(nums)):
            if nums[j] < nums[min_index]:
                min_index = j

        if min_index != i:
            nums[i], nums[min_index] = nums[min_index], nums[i]

    return nums

```
