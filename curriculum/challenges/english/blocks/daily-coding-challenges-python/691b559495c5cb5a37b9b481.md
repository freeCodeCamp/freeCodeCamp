---
id: 691b559495c5cb5a37b9b481
title: "Challenge 121: Most Frequent"
challengeType: 29
dashedName: challenge-121
---

# --description--

Given an array of elements, return the element that appears most frequently.

- There will always be a single most frequent element.

# --hints--

`most_frequent(["a", "b", "a", "c"])` should return `"a"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(most_frequent(["a", "b", "a", "c"]), "a")`)
}})
```

`most_frequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9])` should return `2`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(most_frequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]), 2)`)
}})
```

`most_frequent([True, False, "False", "True", False])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(most_frequent([True, False, "False", "True", False]), False)`)
}})
```

`most_frequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60])` should return `40`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(most_frequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]), 40)`)
}})
```

# --seed--

## --seed-contents--

```py
def most_frequent(arr):

    return arr
```

# --solutions--

```py
def most_frequent(arr):
    freq = {}
    max_count = 0
    most_elem = None

    for el in arr:
        freq[el] = freq.get(el, 0) + 1
        if freq[el] > max_count:
            max_count = freq[el]
            most_elem = el

    return most_elem
```
