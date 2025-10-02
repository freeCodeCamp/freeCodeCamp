---
id: 68b06e589bf2273243814771
title: "Challenge 36: Thermostat Adjuster"
challengeType: 29
dashedName: challenge-36
---

# --description--

Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

- Return `"heat"` if the current temperature is below the target.
- Return `"cool"` if the current temperature is above the target.
- Return `"hold"` if the current temperature is equal to the target.

# --hints--

`adjust_thermostat(68, 72)` should return `"heat"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(68, 72), "heat")`)
}})
```

`adjust_thermostat(75, 72)` should return `"cool"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(75, 72), "cool")`)
}})
```

`adjust_thermostat(72, 72)` should return `"hold"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(72, 72), "hold")`)
}})
```

`adjust_thermostat(-20.5, -10.1)` should return `"heat"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(-20.5, -10.1), "heat")`)
}})
```

`adjust_thermostat(100, 99.9)` should return `"cool"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(100, 99.9), "cool")`)
}})
```

`adjust_thermostat(0.0, 0.0)` should return `"hold"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(adjust_thermostat(0.0, 0.0), "hold")`)
}})
```

# --seed--

## --seed-contents--

```py
def adjust_thermostat(temp, target):

    return temp
```

# --solutions--

```py
def adjust_thermostat(temp, target):
    if temp < target:
        return "heat"
    elif temp > target:
        return "cool"
    else:
        return "hold"
```
