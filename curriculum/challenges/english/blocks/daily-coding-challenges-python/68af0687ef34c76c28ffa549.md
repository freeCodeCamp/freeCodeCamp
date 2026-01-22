---
id: 68af0687ef34c76c28ffa549
title: "Challenge 31: Array Diff"
challengeType: 29
dashedName: challenge-31
---

# --description--

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.

- The returned array should be sorted in alphabetical order.

# --hints--

`array_diff(["apple", "banana"], ["apple", "banana", "cherry"])` should return `["cherry"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_diff(["apple", "banana"], ["apple", "banana", "cherry"]), ["cherry"])`)
}})
```

`array_diff(["apple", "banana", "cherry"], ["apple", "banana"])` should return `["cherry"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_diff(["apple", "banana", "cherry"], ["apple", "banana"]), ["cherry"])`)
}})
```

`array_diff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])` should return `["eight", "four", "six", "two"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_diff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]), ["eight", "four", "six", "two"])`)
}})
```

`array_diff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"])` should return `["five", "one", "seven", "three"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_diff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]), ["five", "one", "seven", "three"])`)
}})
```

`array_diff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"])` should return `["freeCodeCamp", "rocks"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(array_diff(["I", "like", "freeCodeCamp"], ["I", "like", "rocks"]), ["freeCodeCamp", "rocks"])`)
}})
```

# --seed--

## --seed-contents--

```py
def array_diff(arr1, arr2):

    return arr1
```

# --solutions--

```py
def array_diff(arr1, arr2):
    unique1 = []
    for v in arr1:
        if v not in unique1:
            unique1.append(v)
    unique2 = []
    for v in arr2:
        if v not in unique2:
            unique2.append(v)

    only1 = [v for v in unique1 if v not in unique2]
    only2 = [v for v in unique2 if v not in unique1]

    return sorted(only1 + only2)
```
