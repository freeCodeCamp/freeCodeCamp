---
id: 68b1f72371a5ac895ac70a08
title: "Challenge 43: Digits vs Letters"
challengeType: 29
dashedName: challenge-43
---

# --description--

Given a string, return `"digits"` if the string has more digits than letters, `"letters"` if it has more letters than digits, and `"tie"` if it has the same amount of digits and letters.

- Digits consist of `0-9`.
- Letters consist of `a-z` in upper or lower case.
- Ignore any other characters.

# --hints--

`digits_or_letters("abc123")` should return `"tie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(digits_or_letters("abc123"), "tie")`)
}})
```

`digits_or_letters("a1b2c3d")` should return `"letters"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(digits_or_letters("a1b2c3d"), "letters")`)
}})
```

`digits_or_letters("1a2b3c4")` should return `"digits"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(digits_or_letters("1a2b3c4"), "digits")`)
}})
```

`digits_or_letters("abc123!@#DEF")` should return `"letters"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(digits_or_letters("abc123!@#DEF"), "letters")`)
}})
```

`digits_or_letters("H3110 W0R1D")` should return `"digits"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(digits_or_letters("H3110 W0R1D"), "digits")`)
}})
```

`digits_or_letters("P455W0RD")` should return `"tie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(digits_or_letters("P455W0RD"), "tie")`)
}})
```

# --seed--

## --seed-contents--

```py
def digits_or_letters(s):

    return s
```

# --solutions--

```py
def digits_or_letters(s):
    digit_count = 0
    letter_count = 0

    for char in s:
        if char.isdigit():
            digit_count += 1
        elif char.isalpha():
            letter_count += 1

    if digit_count > letter_count:
        return "digits"
    if letter_count > digit_count:
        return "letters"
    return "tie"
```
