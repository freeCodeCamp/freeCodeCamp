---
id: 68b06e589bf2273243814777
title: "Challenge 39: Fill The Tank"
challengeType: 29
dashedName: challenge-39
---

# --description--

Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.

- `tankSize` is the total capacity of the tank in gallons.
- `fuelLevel` is the current amount of fuel in the tank in gallons.
- `pricePerGallon` is the cost of one gallon of fuel.
- The returned value should be rounded to two decimal places in the format: `"$d.dd"`.

# --hints--

`cost_to_fill(20, 0, 4.00)` should return `"$80.00"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(cost_to_fill(20, 0, 4.00), "$80.00")`)
}})
```

`cost_to_fill(15, 10, 3.50)` should return `"$17.50"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(cost_to_fill(15, 10, 3.50), "$17.50")`)
}})
```

`cost_to_fill(18, 9, 3.25)` should return `"$29.25"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(cost_to_fill(18, 9, 3.25), "$29.25")`)
}})
```

`cost_to_fill(12, 12, 4.99)` should return `"$0.00"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(cost_to_fill(12, 12, 4.99), "$0.00")`)
}})
```

`cost_to_fill(15, 9.5, 3.98)` should return `"$21.89"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(cost_to_fill(15, 9.5, 3.98), "$21.89")`)
}})
```

# --seed--

## --seed-contents--

```py
def cost_to_fill(tank_size, fuel_level, price_per_gallon):

    return tank_size
```

# --solutions--

```py
def cost_to_fill(tank_size, fuel_level, price_per_gallon):
    gallons_needed = tank_size - fuel_level
    cost = gallons_needed * price_per_gallon
    return f"${cost:.2f}"
```
