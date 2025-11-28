---
id: 69162d64f96574d9bb629efe
title: "Challenge 113: Miles to Kilometers"
challengeType: 29
dashedName: challenge-113
---

# --description--

Given a distance in miles as a number, return the equivalent distance in kilometers.

- The input will always be a non-negative number.
- 1 mile equals 1.60934 kilometers.
- Round the result to two decimal places.
- Remove unnecessary trailing zeros from the rounded result.

# --hints--

`convert_to_km(1)` should return `1.61`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_km(1), 1.61)`)
}})
```

`convert_to_km(21)` should return `33.8`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_km(21), 33.8)`)
}})
```

`convert_to_km(3.5)` should return `5.63`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_km(3.5), 5.63)`)
}})
```

`convert_to_km(0)` should return `0`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_km(0), 0)`)
}})
```

`convert_to_km(0.621371)` should return `1`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_km(0.621371), 1)`)
}})
```

# --seed--

## --seed-contents--

```py
def convert_to_km(miles):

    return miles
```

# --solutions--

```py
def convert_to_km(miles):
    km = miles * 1.60934
    return round(km, 2)
```
