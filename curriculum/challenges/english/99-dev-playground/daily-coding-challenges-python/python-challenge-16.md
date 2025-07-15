---
id: 6821eca2237de8297eaee79e
title: "Python Challenge 16: Reverse Parenthesis"
challengeType: 29
dashedName: python-challenge-16
---

# --description--

Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

- All characters inside each pair of parentheses should be reversed.
- Parentheses should be removed from the final result.
- If parentheses are nested, the innermost pair should be reversed first, and then its result should be included in the reversal of the outer pair.
- Assume all parentheses are evenly balanced and correctly nested.

# --hints--

`decode("(f(b(dc)e)a)")` should return `"abcdef"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(decode("(f(b(dc)e)a)"), "abcdef")`)
```

`decode("((is?)(a(t d)h)e(n y( uo)r)aC)")` should return `"Can you read this?"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"), "Can you read this?")`)
```

`decode("f(Ce(re))o((e(aC)m)d)p")` should return `"freeCodeCamp"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(decode("f(Ce(re))o((e(aC)m)d)p"), "freeCodeCamp")`)
```

# --seed--

## --seed-contents--

```py
def decode(s):

    return s
```

# --solutions--

```py
def decode(s):
    while ')' in s:
        close_index = s.index(')')
        open_index = s.rindex('(', 0, close_index)
        inner = s[open_index + 1:close_index][::-1]
        s = s[:open_index] + inner + s[close_index + 1:]
    return s
```
