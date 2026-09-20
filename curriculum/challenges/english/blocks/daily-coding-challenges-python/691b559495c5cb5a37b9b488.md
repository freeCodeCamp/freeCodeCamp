---
id: 691b559495c5cb5a37b9b488
title: "Challenge 128: Consonant Count"
challengeType: 29
dashedName: challenge-128
---

# --description--

Given a string and a target number, determine whether the string contains exactly the target number of consonants.

- Consonants are all alphabetic characters except `"a"`, `"e"`, `"i"`, `"o"`, and `"u"` in any case.
- Ignore digits, punctuation, spaces, and other non-letter characters when counting.

# --hints--

`has_consonant_count("helloworld", 7)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_consonant_count("helloworld", 7), True)`)
}})
```

`has_consonant_count("eieio", 5)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_consonant_count("eieio", 5), False)`)
}})
```

`has_consonant_count("freeCodeCamp Rocks!", 11)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_consonant_count("freeCodeCamp Rocks!", 11), True)`)
}})
```

`has_consonant_count("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_consonant_count("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24), False)`)
}})
```

`has_consonant_count("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_consonant_count("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def has_consonant_count(text, target):

    return text
```

# --solutions--

```py
def has_consonant_count(text, target):
    vowels = {"a", "e", "i", "o", "u"}
    count = 0

    for ch in text.lower():
        if ch.isalpha() and ch not in vowels:
            count += 1

    return count == target
```
