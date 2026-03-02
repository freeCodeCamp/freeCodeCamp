---
id: 68d2ba1468508398389487d0
title: "Challenge 75: Hidden Treasure"
challengeType: 29
dashedName: challenge-75
---

# --description--

Given a 2D array representing a map of the ocean floor that includes a hidden treasure, and an array with the coordinates (`[row, column]`) for the next dive of your treasure search, return `"Empty"`, `"Found"`, or `"Recovered"` using the following rules:

- The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple cells.
- Each cell in the 2D array will contain one of the following values:
  - `"-"`: No treasure.
  - `"O"`: A part of the treasure that has not been found.
  - `"X"`: A part of the treasure that has already been found.

- If the dive location has no treasure, return `"Empty"`.
- If the dive location finds treasure, but at least one other part of the treasure remains unfound, return `"Found"`.
- If the dive location finds the last unfound part of the treasure, return `"Recovered"`.

For example, given:

```json
[
  [ "-", "X"],
  [ "-", "X"],
  [ "-", "O"]
]
```

And `[2, 1]` for the coordinates of the dive location, return `"Recovered"` because the dive found the last unfound part of the treasure.

# --hints--

`dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1])` should return `"Recovered"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]), "Recovered")`)
}})
```

`dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0])` should return `"Empty"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]), "Empty")`)
}})
```

`dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1])` should return `"Found"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]), "Found")`)
}})
```

`dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2])` should return `"Found"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]), "Found")`)
}})
```

`dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0])` should return `"Recovered"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]), "Recovered")`)
}})
```

`dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2])` should return `"Empty"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]), "Empty")`)
}})
```

# --seed--

## --seed-contents--

```py
def dive(map, coordinates):

    return map
```

# --solutions--

```py
def dive(map, coordinates):
    row, col = coordinates
    target = map[row][col]

    if target == "-":
        return "Empty"

    if target == "O":
        for r in range(len(map)):
            for c in range(len(map[r])):
                if (r != row or c != col) and map[r][c] == "O":
                    return "Found"
        return "Recovered"

    return "Found"
```
