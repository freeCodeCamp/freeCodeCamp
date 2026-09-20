---
id: 69272dcf1c24b44fd79137c4
title: "Challenge 141: Takeoff Fuel"
challengeType: 29
dashedName: challenge-141
---

# --description--

Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.

- 1 gallon equals 3.78541 liters.
- If the airplane already has enough fuel, return `0`.
- You can only add whole gallons.
- Do not include decimals in the return number.

# --hints--

`fuel_to_add(0, 1)` should return `1`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fuel_to_add(0, 1), 1)`)
}})
```

`fuel_to_add(5, 40)` should return `6`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fuel_to_add(5, 40), 6)`)
}})
```

`fuel_to_add(10, 30)` should return `0`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fuel_to_add(10, 30), 0)`)
}})
```

`fuel_to_add(896, 20500)` should return `4520`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fuel_to_add(896, 20500), 4520)`)
}})
```

`fuel_to_add(1000, 50000)` should return `12209`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fuel_to_add(1000, 50000), 12209)`)
}})
```

# --seed--

## --seed-contents--

```py
def fuel_to_add(current_gallons, required_liters):

    return current_gallons
```

# --solutions--

```py
import math
def fuel_to_add(current_gallons, required_liters):
    liters_per_gallon = 3.78541
    current_liters = current_gallons * liters_per_gallon
    if current_liters >= required_liters:
        return 0
    liters_needed = required_liters - current_liters
    return math.ceil(liters_needed / liters_per_gallon)
```
