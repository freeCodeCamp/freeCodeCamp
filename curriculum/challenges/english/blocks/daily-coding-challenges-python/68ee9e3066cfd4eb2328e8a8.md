---
id: 68ee9e3066cfd4eb2328e8a8
title: "Challenge 89: Counting Cards"
challengeType: 29
dashedName: challenge-89
---

# --description--

A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

- Order does not matter. Picking card A then card B is the same as picking card B then card A.

For example, given `52`, return `1`. There's only one combination of 52 cards to pick from a 52 card deck. And given `2`, return `1326`, There's 1326 card combinations you can end up with when picking 2 cards from the deck.

# --hints--

`combinations(52)` should return `1`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(combinations(52), 1)`)
}})
```

`combinations(1)` should return `52`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(combinations(1), 52)`)
}})
```

`combinations(2)` should return `1326`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(combinations(2), 1326)`)
}})
```

`combinations(5)` should return `2598960`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(combinations(5), 2598960)`)
}})
```

`combinations(10)` should return `15820024220`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(combinations(10), 15820024220)`)
}})
```

`combinations(50)` should return `1326`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(combinations(50), 1326)`)
}})
```

# --seed--

## --seed-contents--

```py
def combinations(cards):

    return cards
```

# --solutions--

```py
from math import factorial
def combinations(cards):
    n = 52
    
    return factorial(n) // (factorial(cards) * factorial(n - cards))
```
