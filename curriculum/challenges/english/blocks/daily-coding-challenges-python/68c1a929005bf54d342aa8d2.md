---
id: 68c1a929005bf54d342aa8d2
title: "Challenge 55: Space Week Day 1: Stellar Classification"
challengeType: 29
dashedName: challenge-55
---

# --description--

October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.

For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:

- `"O"`: 30,000 K or higher
- `"B"`: 10,000 K - 29,999 K
- `"A"`: 7,500 K - 9,999 K
- `"F"`: 6,000 K - 7,499 K
- `"G"`: 5,200 K - 5,999 K
- `"K"`: 3,700 K - 5,199 K
- `"M"`: 0 K - 3,699 K

- Return the classification of the given star.

# --hints--

`classification(5778)` should return `"G"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(5778), "G")`)
}})
```

`classification(2400)` should return `"M"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(2400), "M")`)
}})
```

`classification(9999)` should return `"A"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(9999), "A")`)
}})
```

`classification(3700)` should return `"K"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(3700), "K")`)
}})
```

`classification(3699)` should return `"M"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(3699), "M")`)
}})
```

`classification(210000)` should return `"O"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(210000), "O")`)
}})
```

`classification(6000)` should return `"F"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(6000), "F")`)
}})
```

`classification(11432)` should return `"B"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(classification(11432), "B")`)
}})
```

# --seed--

## --seed-contents--

```py
def classification(temp):

    return temp
```

# --solutions--

```py
def classification(temp):
    if temp >= 30000:
        return "O"
    elif temp >= 10000:
        return "B"
    elif temp >= 7500:
        return "A"
    elif temp >= 6000:
        return "F"
    elif temp >= 5200:
        return "G"
    elif temp >= 3700:
        return "K"
    else:
        return "M"
```
