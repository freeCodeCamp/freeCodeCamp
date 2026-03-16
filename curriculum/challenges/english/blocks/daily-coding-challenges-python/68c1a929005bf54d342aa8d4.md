---
id: 68c1a929005bf54d342aa8d4
title: "Challenge 57: Space Week Day 3: Phone Home"
challengeType: 29
dashedName: challenge-57
---

# --description--

For day three of Space Week, you are given an array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet in a communication route. Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:

- The first value in the array is the distance from your location to the first satellite.
- Each subsequent value, except for the last, is the distance to the next satellite.
- The last value in the array is the distance from the previous satellite to your home planet.
- The message travels at 300,000 km/s.
- Each satellite the message **passes through** adds a 0.5 second transmission delay.
- Return a number rounded to 4 decimal places, with trailing zeros removed.

# --hints--

`send_message([300000, 300000])` should return `2.5`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(send_message([300000, 300000]), 2.5)`)
}})
```

`send_message([384400, 384400])` should return `3.0627`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(send_message([384400, 384400]), 3.0627)`)
}})
```

`send_message([54600000, 54600000])` should return `364.5`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(send_message([54600000, 54600000]), 364.5)`)
}})
```

`send_message([1000000, 500000000, 1000000])` should return `1674.3333`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(send_message([1000000, 500000000, 1000000]), 1674.3333)`)
}})
```

`send_message([10000, 21339, 50000, 31243, 10000])` should return `2.4086`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(send_message([10000, 21339, 50000, 31243, 10000]), 2.4086)`)
}})
```

`send_message([802101, 725994, 112808, 3625770, 481239])` should return `21.1597`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(send_message([802101, 725994, 112808, 3625770, 481239]), 21.1597)`)
}})
```

# --seed--

## --seed-contents--

```py
def send_message(route):

    return route
```

# --solutions--

```py
def send_message(route):
    total_distance = sum(route)
    delay = (len(route) - 1) * 0.5
    time = total_distance / 300_000
    total = time + delay
    return round(total, 4)
```
