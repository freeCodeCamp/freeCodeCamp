---
id: 68e39ed6106dac2f0a98fd66
title: "Challenge 84: Infected"
challengeType: 29
dashedName: challenge-84
---

# --description--

On November 2nd, 1988, the first major internet worm was released, infecting about 10% of computers connected to the internet after only a day.

In this challenge, you are given a number of days that have passed since an internet worm was released, and you need to determine how many computers are infected using the following rules:

- On day 0, the first computer is infected.
- Each subsequent day, the number of infected computers doubles.
- Every 3rd day, a patch is applied after the virus spreads and reduces the number of infected computers by 20%. Round the number of patched computers up to the nearest whole number.

For example, on:

- Day 0: 1 total computer is infected.
- Day 1: 2 total computers are infected.
- Day 2: 4 total computers are infected.
- Day 3: 8 total computers are infected. Then, apply the patch: 8 infected * 20% = 1.6 patched. Round 1.6 up to 2. 8 computers infected - 2 patched = 6 total computers infected after day 3.

Return the number of total infected computers after the given amount of days have passed.

# --hints--

`infected(1)` should return `2`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(infected(1), 2)`)
}})
```

`infected(3)` should return `6`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(infected(3), 6)`)
}})
```

`infected(8)` should return `152`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(infected(8), 152)`)
}})
```

`infected(17)` should return `39808`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(infected(17), 39808)`)
}})
```

`infected(25)` should return `5217638`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(infected(25), 5217638)`)
}})
```

# --seed--

## --seed-contents--

```py
def infected(days):

    return days
```

# --solutions--

```py
import math
def infected(days):
    infected = 1
    for day in range(1, days + 1):
        infected *= 2
        if day % 3 == 0:
            patched = math.ceil(infected * 0.2)
            infected -= patched

    return infected
```
