---
id: 69306364df283fcaff2e1ad9
title: "Challenge 148: Tire Pressure"
challengeType: 29
dashedName: challenge-148
---

# --description--

Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

- 1 bar equals 14.5038 psi.

Return an array with the following values for each tire:

- `"Low"` if the tire pressure is below the minimum allowed.
- `"Good"` if it's between the minimum and maximum allowed.
- `"High"` if it's above the maximum allowed.

# --hints--

`tire_status([32, 28, 35, 29], [2, 3])` should return `["Good", "Low", "Good", "Low"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tire_status([32, 28, 35, 29], [2, 3]), ["Good", "Low", "Good", "Low"])`)
}})
```

`tire_status([32, 28, 35, 30], [2, 2.3])` should return `["Good", "Low", "High", "Good"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tire_status([32, 28, 35, 30], [2, 2.3]), ["Good", "Low", "High", "Good"])`)
}})
```

`tire_status([29, 26, 31, 28], [2.1, 2.5])` should return `["Low", "Low", "Good", "Low"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tire_status([29, 26, 31, 28], [2.1, 2.5]), ["Low", "Low", "Good", "Low"])`)
}})
```

`tire_status([31, 31, 30, 29], [1.5, 2])` should return `["High", "High", "High", "Good"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tire_status([31, 31, 30, 29], [1.5, 2]), ["High", "High", "High", "Good"])`)
}})
```

`tire_status([30, 28, 30, 29], [1.9, 2.1])` should return `["Good", "Good", "Good", "Good"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tire_status([30, 28, 30, 29], [1.9, 2.1]), ["Good", "Good", "Good", "Good"])`)
}})
```

# --seed--

## --seed-contents--

```py
def tire_status(pressures_psi, range_bar):

    return pressures_psi
```

# --solutions--

```py
def tire_status(pressures_psi, range_bar):
    psi_to_bar = 1 / 14.5038
    min_bar, max_bar = range_bar
    result = []

    for psi in pressures_psi:
        bar = psi * psi_to_bar
        if bar < min_bar:
            result.append("Low")
        elif bar > max_bar:
            result.append("High")
        else:
            result.append("Good")
    return result
```
