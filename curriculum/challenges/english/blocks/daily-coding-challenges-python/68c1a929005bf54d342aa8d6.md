---
id: 68c1a929005bf54d342aa8d6
title: "Challenge 59: Space Week Day 5: Goldilocks Zone"
challengeType: 29
dashedName: challenge-59
---

# --description--

For the fifth day of Space Week, you will calculate the "Goldilocks zone" of a star - the region around a star where conditions are "just right" for liquid water to exist.

Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.

To calculate the Goldilocks Zone:

1. Find the luminosity of the star by raising its mass to the power of 3.5.
2. The start of the zone is 0.95 times the square root of its luminosity.
3. The end of the zone is 1.37 times the square root of its luminosity.

- Return the distances rounded to two decimal places.

For example, given `1` as a mass, return `[0.95, 1.37]`.

# --hints--

`goldilocks_zone(1)` should return `[0.95, 1.37]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(goldilocks_zone(1), [0.95, 1.37])`)
}})
```

`goldilocks_zone(0.5)` should return `[0.28, 0.41]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(goldilocks_zone(0.5), [0.28, 0.41])`)
}})
```

`goldilocks_zone(6)` should return `[21.85, 31.51]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(goldilocks_zone(6), [21.85, 31.51])`)
}})
```

`goldilocks_zone(3.7)` should return `[9.38, 13.52]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(goldilocks_zone(3.7), [9.38, 13.52])`)
}})
```

`goldilocks_zone(20)` should return `[179.69, 259.13]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(goldilocks_zone(20), [179.69, 259.13])`)
}})
```

# --seed--

## --seed-contents--

```py
def goldilocks_zone(mass):

    return mass
```

# --solutions--

```py
import math
def goldilocks_zone(mass):
    luminosity = mass ** 3.5
    start = 0.95 * math.sqrt(luminosity)
    end = 1.37 * math.sqrt(luminosity)
    return [round(start, 2), round(end, 2)]
```
