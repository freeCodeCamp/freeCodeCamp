---
id: 68cae5b538ff798bbd4da003
title: "Challenge 65: String Count"
challengeType: 29
dashedName: challenge-65
---

# --description--

Given two strings, determine how many times the second string appears in the first.

- The pattern string can overlap in the first string. For example, `"aaa"` contains `"aa"` twice. The first two `a`'s and the second two.

# --hints--

`count('abcdefg', 'def')` should return `1`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count('abcdefg', 'def'), 1)`)
}})
```

`count('hello', 'world')` should return `0`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count('hello', 'world'), 0)`)
}})
```

`count('mississippi', 'iss')` should return `2`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count('mississippi', 'iss'), 2)`)
}})
```

`count('she sells seashells by the seashore', 'sh')` should return `3`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count('she sells seashells by the seashore', 'sh'), 3)`)
}})
```

`count('101010101010101010101', '101')` should return `10`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count('101010101010101010101', '101'), 10)`)
}})
```

# --seed--

## --seed-contents--

```py
def count(text, parameter):

    return text
```

# --solutions--

```py
def count(text, pattern):
    if not pattern:
        return 0
    occurrences = 0

    for i in range(len(text) - len(pattern) + 1):
        if text[i:i+len(pattern)] == pattern:
            occurrences += 1

    return occurrences
```
