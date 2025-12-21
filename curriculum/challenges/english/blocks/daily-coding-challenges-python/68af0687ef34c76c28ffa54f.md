---
id: 68af0687ef34c76c28ffa54f
title: "Challenge 34: Missing Numbers"
challengeType: 29
dashedName: challenge-34
---

# --description--

Given an array of integers from 1 to `n`, inclusive, return an array of all the missing integers between 1 and `n` (where `n` is the largest number in the given array).

- The given array may be unsorted and may contain duplicates.
- The returned array should be in ascending order.
- If no integers are missing, return an empty array.

# --hints--

`find_missing_numbers([1, 3, 5])` should return `[2, 4]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_missing_numbers([1, 3, 5]), [2, 4])`)
}})
```

`find_missing_numbers([1, 2, 3, 4, 5])` should return `[]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_missing_numbers([1, 2, 3, 4, 5]), [])`)
}})
```

`find_missing_numbers([1, 10])` should return `[2, 3, 4, 5, 6, 7, 8, 9]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_missing_numbers([1, 10]), [2, 3, 4, 5, 6, 7, 8, 9])`)
}})
```

`find_missing_numbers([10, 1, 10, 1, 10, 1])` should return `[2, 3, 4, 5, 6, 7, 8, 9]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_missing_numbers([10, 1, 10, 1, 10, 1]), [2, 3, 4, 5, 6, 7, 8, 9])`)
}})
```

`find_missing_numbers([3, 1, 4, 1, 5, 9])` should return `[2, 6, 7, 8]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_missing_numbers([3, 1, 4, 1, 5, 9]), [2, 6, 7, 8])`)
}})
```

`find_missing_numbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4])` should return `[11]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_missing_numbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]), [11])`)
}})
```

# --seed--

## --seed-contents--

```py
def find_missing_numbers(arr):

    return arr
```

# --solutions--

```py
def find_missing_numbers(arr):
    if not arr:
        return []
    
    n = max(arr)
    seen = set(arr)
    result = [i for i in range(1, n + 1) if i not in seen]
    return result
```
