---
id: 69373793f5a867f769cde139
title: "Challenge 154: Par for the Hole"
challengeType: 29
dashedName: challenge-154
---

# --description--

Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

Return:

- `"Hole in one!"` if it took one stroke.
- `"Eagle"` if it took two strokes less than par.
- `"Birdie"` if it took one stroke less than par.
- `"Par"` if it took the same number of strokes as par.
- `"Bogey"` if it took one stroke more than par.
- `"Double bogey"` if took two strokes more than par.

# --hints--

`golf_score(3, 3)` should return `"Par"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(golf_score(3, 3), "Par")`)
}})
```

`golf_score(4, 3)` should return `"Birdie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(golf_score(4, 3), "Birdie")`)
}})
```

`golf_score(3, 1)` should return `"Hole in one!"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(golf_score(3, 1), "Hole in one!")`)
}})
```

`golf_score(5, 7)` should return `"Double bogey"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(golf_score(5, 7), "Double bogey")`)
}})
```

`golf_score(4, 5)` should return `"Bogey"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(golf_score(4, 5), "Bogey")`)
}})
```

`golf_score(5, 3)` should return `"Eagle"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(golf_score(5, 3), "Eagle")`)
}})
```

# --seed--

## --seed-contents--

```py
def golf_score(par, strokes):

    return par
```

# --solutions--

```py
def golf_score(par, strokes):
    if strokes == 1:
        return "Hole in one!"

    diff = strokes - par

    if diff == -2:
        return "Eagle"
    if diff == -1:
        return "Birdie"
    if diff == 0:
        return "Par"
    if diff == 1:
        return "Bogey"
    if diff == 2:
        return "Double bogey"
```
