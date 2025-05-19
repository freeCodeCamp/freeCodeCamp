---
id: 6821ecab237de8297eaee7a0
title: "Python Challenge 18: Second Best"
challengeType: 29
dashedName: python-challenge-18
---

# --description--

Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

1. The second most expensive laptop if it is within your budget, or
2. the most expensive laptop that is within your budget, or
3. `0` if no laptops are within your budget.

- Duplicate prices should be ignored.

# --hints--

`get_laptop_cost([1500, 2000, 1800, 1400], 1900)` should return `1800`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_laptop_cost([1500, 2000, 1800, 1400], 1900), 1800)`)
}})
```

`get_laptop_cost([1500, 2000, 2000, 1800, 1400], 1900)` should return `1800`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_laptop_cost([1500, 2000, 2000, 1800, 1400], 1900), 1800)`)
}})
```

`get_laptop_cost([2099, 1599, 1899, 1499], 2200)` should return `1899`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_laptop_cost([2099, 1599, 1899, 1499], 2200), 1899)`)
}})
```

`get_laptop_cost([2099, 1599, 1899, 1499], 1000)` should return `0`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_laptop_cost([2099, 1599, 1899, 1499], 1000), 0)`)
}})
```

`get_laptop_cost([1200, 1500, 1600, 1800, 1400, 2000], 1450)` should return `1400`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_laptop_cost([1200, 1500, 1600, 1800, 1400, 2000], 1450), 1400)`)
}})
```

# --seed--

## --seed-contents--

```py
def get_laptop_cost(laptops, budget):

    return laptops
```

# --solutions--

```py
def get_laptop_cost(laptops, budget):
    laptops = sorted(set(laptops), reverse=True)

    if len(laptops) >= 2 and budget >= laptops[1]:
        return laptops[1]
    if not laptops or budget < laptops[-1]:
        return 0

    for price in laptops[2:]:
        if budget >= price:
            return price

    return 0
```
