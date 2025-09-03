---
id: 68b7687dded630607aceccaf
title: "Challenge 47: Caught Speeding"
challengeType: 29
dashedName: challenge-47
---

# --description--

Given an array of numbers representing the speed at which vehicles were observed traveling, and a number representing the speed limit, return an array with two items, the number of vehicles that were speeding, followed by the average amount beyond the speed limit of those vehicles.

- If there were no vehicles speeding, return `[0, 0]`.

# --hints--

`speeding([50, 60, 55], 60)` should return `[0, 0]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speeding([50, 60, 55], 60), [0, 0])`)
}})
```

`speeding([58, 50, 60, 55], 55)` should return `[2, 4]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speeding([58, 50, 60, 55], 55), [2, 4])`)
}})
```

`speeding([61, 81, 74, 88, 65, 71, 68], 70)` should return `[4, 8.5]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speeding([61, 81, 74, 88, 65, 71, 68], 70), [4, 8.5])`)
}})
```

`speeding([100, 105, 95, 102], 100)` should return `[2, 3.5]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speeding([100, 105, 95, 102], 100), [2, 3.5])`)
}})
```

`speeding([40, 45, 44, 50, 112, 39], 55)` should return `[1, 57]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(speeding([40, 45, 44, 50, 112, 39], 55), [1, 57])`)
}})
```

# --seed--

## --seed-contents--

```py
def speeding(speeds, limit):

    return speeds
```

# --solutions--

```py
def speeding(speeds, limit):
    speeding = 0
    total_over = 0

    for speed in speeds:
        if speed > limit:
            speeding += 1
            total_over += (speed - limit)
    
    if speeding == 0:
        return [0, 0]
    
    return [speeding, total_over / speeding]
```
