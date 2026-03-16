---
id: 68f6587287ad1f4ad39b0c84
title: "Challenge 98: Rectangle Count"
challengeType: 29
dashedName: challenge-98
---

# --description--

Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

- Only count rectangles with integer width and height.

For example, given `1` and `3`, return `6`. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.

# --hints--

`count_rectangles(1, 3)` should return `6`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_rectangles(1, 3), 6)`)
}})
```

`count_rectangles(3, 2)` should return `18`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_rectangles(3, 2), 18)`)
}})
```

`count_rectangles(1, 2)` should return `3`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_rectangles(1, 2), 3)`)
}})
```

`count_rectangles(5, 4)` should return `150`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_rectangles(5, 4), 150)`)
}})
```

`count_rectangles(11, 19)` should return `12540`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_rectangles(11, 19), 12540)`)
}})
```

# --seed--

## --seed-contents--

```py
def count_rectangles(width, height):

    return width
```

# --solutions--

```py
def count_rectangles(width, height):
    total = 0
    for w in range(1, width + 1):
        for h in range(1, height + 1):
            total += (width - w + 1) * (height - h + 1)
    return total
```
