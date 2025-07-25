---
id: 6821ecb1237de8297eaee7a1
title: "Python Challenge 19: Candlelight"
challengeType: 29
dashedName: python-challenge-19
---

# --description--

Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, return the number of candles you will have used after creating and burning as many as you can.

For example, if given 7 candles and it takes 2 burned candles to make a new one:

1. Burn 7 candles to get 7 leftovers,
2. Recycle 6 leftovers into 3 new candles (1 leftover remains),
3. Burn 3 candles to get 3 more leftovers (4 total),
4. Recycle 4 leftovers into 2 new candles,
5. Burn 2 candles to get 2 leftovers,
6. Recycle 2 leftovers into 1 new candle,
7. Burn 1 candle.

You will have burned 13 total candles in the example.

# --hints--

`burn_candles(7, 2)` should return `13`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(burn_candles(7, 2), 13)`)
}})
```

`burn_candles(10, 5)` should return `12`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(burn_candles(10, 5), 12)`)
}})
```

`burn_candles(20, 3)` should return `29`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(burn_candles(20, 3), 29)`)
}})
```

`burn_candles(17, 4)` should return `22`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(burn_candles(17, 4), 22)`)
}})
```

`burn_candles(2345, 3)` should return `3517`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(burn_candles(2345, 3), 3517)`)
}})
```

# --seed--

## --seed-contents--

```py
def burn_candles(candles, leftovers_needed):

    return candles
```

# --solutions--

```py
def burn_candles(candles, leftovers_needed):
    total_burned = 0
    unused_leftovers = 0

    while candles > 0:
        total_burned += candles
        leftovers = candles + unused_leftovers
        candles = leftovers // leftovers_needed
        unused_leftovers = leftovers % leftovers_needed

    return total_burned
```
