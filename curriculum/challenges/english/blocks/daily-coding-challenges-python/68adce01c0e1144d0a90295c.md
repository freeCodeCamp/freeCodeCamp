---
id: 68adce01c0e1144d0a90295c
title: "Challenge 28: Roman Numeral Parser"
challengeType: 29
dashedName: challenge-28
---

# --description--

Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

- Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

# --hints--

`parse_roman_numeral("III")` should return `3`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_roman_numeral("III"), 3)`)
}})
```

`parse_roman_numeral("IV")` should return `4`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_roman_numeral("IV"), 4)`)
}})
```

`parse_roman_numeral("XXVI")` should return `26`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_roman_numeral("XXVI"), 26)`)
}})
```

`parse_roman_numeral("XCIX")` should return `99`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_roman_numeral("XCIX"), 99)`)
}})
```

`parse_roman_numeral("CDLX")` should return `460`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_roman_numeral("CDLX"), 460)`)
}})
```

`parse_roman_numeral("DIV")` should return `504`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_roman_numeral("DIV"), 504)`)
}})
```

`parse_roman_numeral("MMXXV")` should return `2025`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_roman_numeral("MMXXV"), 2025)`)
}})
```

# --seed--

## --seed-contents--

```py
def parse_roman_numeral(numeral):

    return numeral
```

# --solutions--

```py
def parse_roman_numeral(numeral):
    roman_map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    total = 0
    for i in range(len(numeral)):
        current = roman_map[numeral[i]]
        next_val = roman_map[numeral[i + 1]] if i + 1 < len(numeral) else 0

        if current < next_val:
            total -= current
        else:
            total += current

    return total
```
