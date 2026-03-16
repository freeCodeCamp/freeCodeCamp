---
id: 68f6587287ad1f4ad39b0c7d
title: "Challenge 91: Word Search"
challengeType: 29
dashedName: challenge-91
---

# --description--

Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

- The given matrix will be filled with all lowercase letters (`a-z`).
- The word to find will always be in the matrix exactly once.
- The word to find will always be in a straight line in one of these directions:
  - left to right
  - right to left
  - top to bottom
  - bottom to top

For example, given the matrix:

```md
[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]
```

And the word `"cat"`, return:

```md
[[0, 1], [2, 1]]
```

Where `[0, 1]` are the indices for the `"c"` (start of the word), and `[2, 1]` are the indices for the `"t"` (end of the word).

# --hints--

`find_word([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat")` should return `[[0, 1], [2, 1]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_word([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat"), [[0, 1], [2, 1]])`)
}})
```

`find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog")` should return `[[0, 0], [0, 2]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_word([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog"), [[0, 0], [0, 2]])`)
}})
```

`find_word([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish")` should return `[[3, 3], [0, 3]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_word([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish"), [[3, 3], [0, 3]])`)
}})
```

`find_word([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox")` should return `[[1, 3], [1, 1]]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(find_word([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox"), [[1, 3], [1, 1]])`)
}})
```

# --seed--

## --seed-contents--

```py
def find_word(matrix, word):

    return matrix
```

# --solutions--

```py
def find_word(matrix, word):
    rows = len(matrix)
    cols = len(matrix[0])
    length = len(word)

    directions = [
        (0, 1),
        (0, -1),
        (1, 0),
        (-1, 0)
    ]

    for r in range(rows):
        for c in range(cols):
            for dr, dc in directions:
                match = True
                for i in range(length):
                    nr = r + dr * i
                    nc = c + dc * i
                    if nr < 0 or nr >= rows or nc < 0 or nc >= cols or matrix[nr][nc] != word[i]:
                        match = False
                        break
                if match:
                    return [[r, c], [r + dr * (length - 1), c + dc * (length - 1)]]
```
