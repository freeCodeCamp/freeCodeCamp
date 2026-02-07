---
id: 691b559495c5cb5a37b9b483
title: "Challenge 123: Roman Numeral Builder"
challengeType: 29
dashedName: challenge-123
---

# --description--

Given an integer, return its equivalent value in Roman numerals.

Roman numerals use these symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Roman numerals are written from largest to smallest, left to right using the following rules:

- Addition is used when a symbol is followed by one of equal or smaller value. For example, `18` is written as `XVIII` (10 + 5 + 1 + 1 + 1 = 18).
- Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as `XIX` (10 + (10 - 1)).
- No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.

Here's one more example: given `1464`, return `"MCDLXIV"` (1000 + (500 - 100) + 50 + 10 + (5 - 1)).

# --hints--

`to_roman(18)` should return `"XVIII"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_roman(18), "XVIII")`)
}})
```

`to_roman(19)` should return `"XIX"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_roman(19), "XIX")`)
}})
```

`to_roman(1464)` should return `"MCDLXIV"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_roman(1464), "MCDLXIV")`)
}})
```

`to_roman(2025)` should return `"MMXXV"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_roman(2025), "MMXXV")`)
}})
```

`to_roman(3999)` should return `"MMMCMXCIX"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_roman(3999), "MMMCMXCIX")`)
}})
```

# --seed--

## --seed-contents--

```py
def to_roman(num):

    return num
```

# --solutions--

```py
def to_roman(num):
    symbols = [
        ("M", 1000),
        ("CM", 900),
        ("D", 500),
        ("CD", 400),
        ("C", 100),
        ("XC", 90),
        ("L", 50),
        ("XL", 40),
        ("X", 10),
        ("IX", 9),
        ("V", 5),
        ("IV", 4),
        ("I", 1)
    ]

    result = ""
    for sym, val in symbols:
        while num >= val:
            result += sym
            num -= val
    return result
```
