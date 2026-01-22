---
id: 68cae5b538ff798bbd4da00a
title: "Challenge 72: Thermostat Adjuster 2"
challengeType: 29
dashedName: challenge-72
---

# --description--

Given the current temperature of a room in Fahrenheit and a target temperature in Celsius, return a string indicating how to adjust the room temperature based on these constraints:

- Return `"Heat: X degrees Fahrenheit"` if the current temperature is below the target. With `X` being the number of degrees in Fahrenheit to heat the room to reach the target, rounded to 1 decimal place.
- Return `"Cool: X degrees Fahrenheit"` if the current temperature is above the target. With `X` being the number of degrees in Fahrenheit to cool the room to reach the target, rounded to 1 decimal place.
- Return `"Hold"` if the current temperature is equal to the target.

To convert Celsius to Fahrenheit, multiply the Celsius temperature by 1.8 and add 32 to the result (`F = (C * 1.8) + 32`).

# --hints--

`adjust_thermostat(32, 0)` should return `"Hold"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(32, 0), "Hold")`)
}})
```

`adjust_thermostat(70, 25)` should return `"Heat: 7.0 degrees Fahrenheit"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(70, 25), "Heat: 7.0 degrees Fahrenheit")`)
}})
```

`adjust_thermostat(72, 18)` should return `"Cool: 7.6 degrees Fahrenheit"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(72, 18), "Cool: 7.6 degrees Fahrenheit")`)
}})
```

`adjust_thermostat(212, 100)` should return `"Hold"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(212, 100), "Hold")`)
}})
```

`adjust_thermostat(59, 22)` should return `"Heat: 12.6 degrees Fahrenheit"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(59, 22), "Heat: 12.6 degrees Fahrenheit")`)
}})
```

# --seed--

## --seed-contents--

```py
def adjust_thermostat(current_f, target_c):

    return current_f
```

# --solutions--

```py
def adjust_thermostat(current_f, target_c):
    target_f = (target_c * 1.8) + 32
    diff = round(abs(target_f - current_f), 1)

    if current_f < target_f:
        return f"Heat: {diff} degrees Fahrenheit"
    elif current_f > target_f:
        return f"Cool: {diff} degrees Fahrenheit"
    else:
        return "Hold"
```
