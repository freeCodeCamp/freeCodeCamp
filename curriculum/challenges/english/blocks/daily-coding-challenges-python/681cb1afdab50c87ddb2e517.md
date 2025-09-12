---
id: 681cb1afdab50c87ddb2e517
title: "Challenge 6: Anagram Checker"
challengeType: 29
dashedName: challenge-6
---

# --description--

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

- Ignore casing and white space.

# --hints--

`are_anagrams("listen", "silent")` should return `true`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(are_anagrams("listen", "silent"), True)`)
}})
```

`are_anagrams("School master", "The classroom")` should return `true`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(are_anagrams("School master", "The classroom"), True)`)
}})
```

`are_anagrams("A gentleman", "Elegant man")` should return `true`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(are_anagrams("A gentleman", "Elegant man"), True)`)
}})
```

`are_anagrams("Hello", "World")` should return `false`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(are_anagrams("Hello", "World"), False)`)
}})
```

`are_anagrams("apple", "banana")` should return `false`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(are_anagrams("apple", "banana"), False)`)
}})
```

`are_anagrams("cat", "dog")` should return `false`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(are_anagrams("cat", "dog"), False)`)
}})
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
