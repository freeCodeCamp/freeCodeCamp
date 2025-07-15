---
id: 681cb1b2dab50c87ddb2e520
title: "Python Challenge 6: Anagram Checker"
challengeType: 29
dashedName: python-challenge-6
---

# --description--

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

- Ignore casing and white space.

# --hints--

`are_anagrams("listen", "silent")` should return `true`.

```js
runPython(`
from unittest import TestCase
TestCase().assertTrue(are_anagrams("listen", "silent"))`)
```

`are_anagrams("School master", "The classroom")` should return `true`.

```js
runPython(`
from unittest import TestCase
TestCase().assertTrue(are_anagrams("School master", "The classroom"))`)
```

`are_anagrams("A gentleman", "Elegant man")` should return `true`.

```js
runPython(`
from unittest import TestCase
TestCase().assertTrue(are_anagrams("A gentleman", "Elegant man"))`)
```

`are_anagrams("Hello", "World")` should return `false`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(are_anagrams("Hello", "World"))`)
```

`are_anagrams("apple", "banana")` should return `false`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(are_anagrams("apple", "banana"))`)
```

`are_anagrams("cat", "dog")` should return `false`.

```js
runPython(`
from unittest import TestCase
TestCase().assertFalse(are_anagrams("cat", "dog"))`)
```

# --seed--

## --seed-contents--

```py
def are_anagrams(str1, str2):

    return str1
```

# --solutions--

```py
def are_anagrams(str1, str2):
    def clean(s):
        return sorted(s.replace(" ", "").lower())
    
    return clean(str1) == clean(str2)
```
