---
id: 681cb1b3dab50c87ddb2e524
title: "Python Challenge 10: 3 Strikes"
challengeType: 29
dashedName: python-challenge-10
---

# --description--

Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square that contains at least one digit 3.

# --hints--

`squares_with_three(1)` should return `0`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(squares_with_three(1), 0)`)
}})
```

`squares_with_three(10)` should return `1`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(squares_with_three(10), 1)`)
}})
```

`squares_with_three(100)` should return `19`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(squares_with_three(100), 19)`)
}})
```

`squares_with_three(1000)` should return `326`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(squares_with_three(1000), 326)`)
}})
```

`squares_with_three(10000)` should return `4531`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(squares_with_three(10000), 4531)`)
}})
```

# --seed--

## --seed-contents--

```py
def squares_with_three(n):

    return n
```

# --solutions--

```py
def squares_with_three(n):
    count = 0
    for i in range(1, n + 1):
        square = i * i
        if '3' in str(square):
            count += 1
    return count
```
