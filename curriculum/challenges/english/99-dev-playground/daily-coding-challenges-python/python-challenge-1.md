---
id: 6814d93d516e86b171929de5
title: "Python Challenge 1: Vowel Balance"
challengeType: 29
dashedName: python-challenge-1
---

# --description--

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

- The string can contain any characters.
- The letters `a`, `e`, `i`, `o`, and `u`, in either uppercase or lowercase, are considered vowels.
- If there's an odd number of characters in the string, ignore the center character.

# --hints--

`is_balanced("racecar")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("racecar"))`)
}})
```

`is_balanced("Lorem Ipsum")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("Lorem Ipsum"))`)
}})
```

`is_balanced("Kitty Ipsum")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("Kitty Ipsum"))`)
}})
```

`is_balanced("string")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("string"))`)
}})
```

`is_balanced(" ")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced(" "))`)
}})
```

`is_balanced("abcdefghijklmnopqrstuvwxyz")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("abcdefghijklmnopqrstuvwxyz"))`)
}})
```

`is_balanced("123A#b!E&#x26;*456-o.U")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("123A#b!E&*456-o.U"))`)
}})
```

# --seed--

## --seed-contents--

```py
def is_balanced(s):

    return s
```

# --solutions--

```py
def is_balanced(s):
    vowels = set("aeiouAEIOU")
    n = len(s)
    half = n // 2

    first_half = s[:half]
    second_half = s[-half:]

    def count_vowels(sub):
        return sum(1 for char in sub if char in vowels)

    return count_vowels(first_half) == count_vowels(second_half)
```
