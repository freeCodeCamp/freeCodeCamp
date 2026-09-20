---
id: 6939b873185d8e00d453563f
title: "Challenge 160: Knight Moves"
challengeType: 29
dashedName: challenge-160
---

# --description--

Given the position of a knight on a chessboard, return the number of valid squares the knight can move to.

A standard chessboard is 8x8, with columns labeled `A` through `H` (left to right) and rows labeled `1` through `8` (bottom to top). It looks like this:

|**A8**|**B8**|**C8**|**D8**|**E8**|**F8**|**G8**|**H8**|
|-|-|-|-|-|-|-|-|
|**A7**|**B7**|**C7**|**D7**|**E7**|**F7**|**G7**|**H7**|
|**A6**|**B6**|**C6**|**D6**|**E6**|**F6**|**G6**|**H6**|
|**A5**|**B5**|**C5**|**D5**|**E5**|**F5**|**G5**|**H5**|
|**A4**|**B4**|**C4**|**D4**|**E4**|**F4**|**G4**|**H4**|
|**A3**|**B3**|**C3**|**D3**|**E3**|**F3**|**G3**|**H3**|
|**A2**|**B2**|**C2**|**D2**|**E2**|**F2**|**G2**|**H2**|
|**A1**|**B1**|**C1**|**D1**|**E1**|**F1**|**G1**|**H1**|

A knight moves in an "L" shape: two squares in one direction (horizontal or vertical), and one square in the perpendicular direction.

This means a knight can move to up to eight possible positions, but fewer when near the edges of the board. For example, if a knight was at `A1`, it could only move to `B3` or `C2`.

# --hints--

`knight_moves("A1")` should return `2`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(knight_moves("A1"), 2)`)
}})
```

`knight_moves("D4")` should return `8`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(knight_moves("D4"), 8)`)
}})
```

`knight_moves("G6")` should return `6`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(knight_moves("G6"), 6)`)
}})
```

`knight_moves("B8")` should return `3`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(knight_moves("B8"), 3)`)
}})
```

`knight_moves("H3")` should return `4`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(knight_moves("H3"), 4)`)
}})
```

# --seed--

## --seed-contents--

```py
def knight_moves(position):

    return position
```

# --solutions--

```py
def knight_moves(position):
    col = ord(position[0]) - ord('A')
    row = int(position[1]) - 1

    moves = [
        (2, 1), (2, -1),
        (-2, 1), (-2, -1),
        (1, 2), (1, -2),
        (-1, 2), (-1, -2)
    ]

    valid = 0

    for dx, dy in moves:
        new_col = col + dx
        new_row = row + dy

        if 0 <= new_col < 8 and 0 <= new_row < 8:
            valid += 1

    return valid
```
