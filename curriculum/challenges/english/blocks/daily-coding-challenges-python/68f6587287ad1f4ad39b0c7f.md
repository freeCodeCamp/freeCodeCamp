---
id: 68f6587287ad1f4ad39b0c7f
title: "Challenge 93: Vowels and Consonants"
challengeType: 29
dashedName: challenge-93
---

# --description--

Given a string, return an array with the number of vowels and number of consonants in the string.

- Vowels consist of `a`, `e`, `i`, `o`, `u` in any case.
- Consonants consist of all other letters in any case.
- Ignore any non-letter characters.

For example, given `"Hello World"`, return `[3, 7]`.

# --hints--

`count("Hello World")` should return `[3, 7]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count("Hello World"), [3, 7])`)
}})
```

`count("JavaScript")` should return `[3, 7]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count("JavaScript"), [3, 7])`)
}})
```

`count("Python")` should return `[1, 5]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count("Python"), [1, 5])`)
}})
```

`count("freeCodeCamp")` should return `[5, 7]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count("freeCodeCamp"), [5, 7])`)
}})
```

`count("Hello, World!")` should return `[3, 7]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count("Hello World"), [3, 7])`)
}})
```

`count("The quick brown fox jumps over the lazy dog.")` should return `[11, 24]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count("Hello World"), [3, 7])`)
}})
```

# --seed--

## --seed-contents--

```py
def count(s):

    return s
```

# --solutions--

```py
def count(s):
    vowels = "aeiou"
    consonants = "bcdfghjklmnpqrstvwxyz"
    v = 0
    c = 0

    for char in s:
        ch = char.lower()
        if ch in vowels:
            v += 1
        if ch in consonants:
            c += 1

    return [v, c]
```
