---
id: 68b7cadffed0e75a517da673
title: "Challenge 52: Binary to Decimal"
challengeType: 29
dashedName: challenge-52
---

# --description--

Given a string representing a binary number, return its decimal equivalent as a number.

A binary number uses only the digits `0` and `1` to represent any number. To convert binary to decimal, multiply each digit by a power of `2` and add them together. Start by multiplying the rightmost digit by `2^0`, the next digit to the left by `2^1`, and so on. Once all digits have been multiplied by a power of `2`, add the result together.

For example, the binary number `101` equals `5` in decimal because:

```mathml
1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 4 + 0 + 1 = 5
```

# --hints--

`to_decimal("101")` should return `5`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_decimal("101"), 5)`)
}})
```

`to_decimal("1010")` should return `10`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_decimal("1010"), 10)`)
}})
```

`to_decimal("10010")` should return `18`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_decimal("10010"), 18)`)
}})
```

`to_decimal("1010101")` should return `85`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_decimal("1010101"), 85)`)
}})
```

# --seed--

## --seed-contents--

```py
def to_decimal(binary):

    return binary
```

# --solutions--

```py
def to_decimal(binary):
    decimal = 0
    for i, bit_char in enumerate(reversed(binary)):
        bit = int(bit_char)
        decimal += bit * (2 ** i)
    return decimal
```
