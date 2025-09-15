---
id: 68c497f3aaefc9fd9f1b0e26
title: "Challenge 62: Hex to Decimal"
challengeType: 29
dashedName: challenge-62
---

# --description--

Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.

Hexadecimal is a number system that uses 16 digits:

- `0-9` represent values `0` through `9`.
- `A-F` represent values `10` through `15`.

Here's a partial conversion table:

| Hexadecimal | Decimal |
|:-----------:|:-------:|
| 0           | 0       |
| 1           | 1       |
| ...         | ...     |
| 9           | 9       |
| A           | 10      |
| ...         | ...     |
| F           | 15      |
| 10          | 16      |
| ...         | ...     |
| 9F          | 159     |
| A0          | 160     |
| ...         | ...     |
| FF          | 255     |
| 100         | 256     |

- The string will only contain characters `0–9` and `A–F`.

# --hints--

`hex_to_decimal("A")` should return `10`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(hex_to_decimal("A"), 10)`)
}})
```

`hex_to_decimal("15")` should return `21`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(hex_to_decimal("15"), 21)`)
}})
```

`hex_to_decimal("2E")` should return `46`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(hex_to_decimal("2E"), 46)`)
}})
```

`hex_to_decimal("FF")` should return `255`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(hex_to_decimal("FF"), 255)`)
}})
```

`hex_to_decimal("A3F")` should return `2623`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(hex_to_decimal("A3F"), 2623)`)
}})
```

# --seed--

## --seed-contents--

```py
def hex_to_decimal(hex):

    return hex
```

# --solutions--

```py
def hex_to_decimal(hex):

    return int(hex, 16)
```
