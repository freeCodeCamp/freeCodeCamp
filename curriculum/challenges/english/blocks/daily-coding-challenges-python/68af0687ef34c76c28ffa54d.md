---
id: 68af0687ef34c76c28ffa54d
title: "Challenge 33: Screen Time"
challengeType: 29
dashedName: challenge-33
---

# --description--

Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

- If any single day has 10 hours or more, it's too much.
- If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
- If the average of the seven days is greater than or equal to 6 hours, it's too much.

# --hints--

`too_much_screen_time([1, 2, 3, 4, 5, 6, 7])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(too_much_screen_time([1, 2, 3, 4, 5, 6, 7]), False)`)
}})
```

`too_much_screen_time([7, 8, 8, 4, 2, 2, 3])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(too_much_screen_time([7, 8, 8, 4, 2, 2, 3]), False)`)
}})
```

`too_much_screen_time([5, 6, 6, 6, 6, 6, 6])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(too_much_screen_time([5, 6, 6, 6, 6, 6, 6]), False)`)
}})
```

`too_much_screen_time([1, 2, 3, 11, 1, 3, 4])` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(too_much_screen_time([1, 2, 3, 11, 1, 3, 4]), True)`)
}})
```

`too_much_screen_time([1, 2, 3, 10, 2, 1, 0])` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(too_much_screen_time([1, 2, 3, 10, 2, 1, 0]), True)`)
}})
```

`too_much_screen_time([3, 3, 5, 8, 8, 9, 4])` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(too_much_screen_time([3, 3, 5, 8, 8, 9, 4]), True)`)
}})
```

`too_much_screen_time([3, 9, 4, 8, 5, 7, 6])` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(too_much_screen_time([3, 9, 4, 8, 5, 7, 6]), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def too_much_screen_time(hours):

    return hours
```

# --solutions--

```py
def too_much_screen_time(hours):
    for h in hours:
        if h >= 10:
            return True

    for i in range(5):
        avg3 = sum(hours[i:i+3]) / 3
        if avg3 >= 8:
            return True

    weekly_avg = sum(hours) / 7
    if weekly_avg >= 6:
        return True

    return False
```
