---
id: 68f6587287ad1f4ad39b0c85
title: "Challenge 99: Fingerprint Test"
challengeType: 29
dashedName: challenge-99
---

# --description--

Given two strings representing fingerprints, determine if they are a match using the following rules:

- Each fingerprint will consist only of lowercase letters (`a-z`).
- Two fingerprints are considered a match if:
  - They are the same length.
  - The number of differing characters does not exceed 10% of the fingerprint length.

# --hints--

`is_match("helloworld", "helloworld")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_match("helloworld", "helloworld"), True)`)
}})
```

`is_match("helloworld", "helloworlds")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_match("helloworld", "helloworlds"), False)`)
}})
```

`is_match("helloworld", "jelloworld")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_match("helloworld", "jelloworld"), True)`)
}})
```

`is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog"), True)`)
}})
```

`is_match("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_match("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog"), True)`)
}})
```

`is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_match("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat"), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_match(fingerprint_a, fingerprint_b):

    return fingerprint_a
```

# --solutions--

```py
def is_match(fingerprint_a, fingerprint_b):
    if len(fingerprint_a) != len(fingerprint_b):
        return False

    mismatches = 0

    for c1, c2 in zip(fingerprint_a, fingerprint_b):
        if c1 != c2:
            mismatches += 1
            if mismatches > len(fingerprint_a) // 10:
                return False

    return True
```
