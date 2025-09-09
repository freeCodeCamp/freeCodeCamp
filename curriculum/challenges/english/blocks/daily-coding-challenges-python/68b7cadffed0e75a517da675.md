---
id: 68b7cadffed0e75a517da675
title: "Challenge 53: Decimal to Binary"
challengeType: 29
dashedName: challenge-53
---

# --description--

Given a non-negative integer, return its binary representation as a string.

A binary number uses only the digits `0` and `1` to represent any number. To convert a decimal number to binary, repeatedly divide the number by `2` and record the remainder. Repeat until the number is zero. Read the remainders last recorded to first. For example, to convert `12` to binary:

```mathml
12 ÷ 2 = 6 remainder 0
6 ÷ 2 = 3 remainder 0
3 ÷ 2 = 1 remainder 1
1 ÷ 2 = 0 remainder 1
```

`12` in binary is `1100`.

# --hints--

`to_binary(5)` should return `"101"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_binary(5), "101")`)
}})
```

`to_binary(12)` should return `"1100"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_binary(12), "1100")`)
}})
```

`to_binary(50)` should return `"110010"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_binary(50), "110010")`)
}})
```

`to_binary(99)` should return `"1100011"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_binary(99), "1100011")`)
}})
```

# --seed--

## --seed-contents--

```py
def to_binary(decimal):

    return decimal
```

# --solutions--

```py
def to_binary(decimal):
    if decimal == 0:
        return "0"
    binary = ""
    while decimal > 0:
        binary = str(decimal % 2) + binary
        decimal //= 2
    return binary
```
