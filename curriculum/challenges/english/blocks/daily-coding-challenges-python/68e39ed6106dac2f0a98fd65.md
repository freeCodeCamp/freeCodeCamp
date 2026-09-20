---
id: 68e39ed6106dac2f0a98fd65
title: "Challenge 83: Signature Validation"
challengeType: 29
dashedName: challenge-83
---

# --description--

Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:

- Letters in the message and secret key have these values:
  - `a` to `z` have values `1` to `26` respectively.
  - `A` to `Z` have values `27` to `52` respectively.
- All other characters have no value.
- Compute the signature by taking the sum of the message plus the sum of the secret key.

For example, given the message `"foo"` and the secret key `"bar"`, the signature would be `57`:

```md
f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57
```

Check if the computed signature matches the provided signature.

# --hints--

`verify("foo", "bar", 57)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(verify("foo", "bar", 57), True)`)
}})
```

`verify("foo", "bar", 54)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(verify("foo", "bar", 54), False)`)
}})
```

`verify("freeCodeCamp", "Rocks", 238)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(verify("freeCodeCamp", "Rocks", 238), True)`)
}})
```

`verify("Is this valid?", "No", 210)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(verify("Is this valid?", "No", 210), False)`)
}})
```

`verify("Is this valid?", "Yes", 233)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(verify("Is this valid?", "Yes", 233), True)`)
}})
```

`verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def verify(message, key, signature):

    return message
```

# --solutions--

```py
def verify(message, key, signature):
    def charValue(ch) -> int:
        if 'a' <= ch <= 'z':
            return ord(ch) - ord('a') + 1
        elif 'A' <= ch <= 'Z':
            return ord(ch) - ord('A') + 27
        else:
            return 0

    def compute_sum(s):
        return sum(charValue(ch) for ch in s)

    total = compute_sum(message) + compute_sum(key)
    return total == signature
```
