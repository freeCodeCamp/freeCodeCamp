---
id: 68d30845cc08266018fc46be
title: "Challenge 78: Integer Sequence"
challengeType: 29
dashedName: challenge-78
---

# --description--

Given a positive integer, return a string with all of the integers from `1` up to, and including, the given number, in numerical order.

For example, given `5`, return `"12345"`.

# --hints--

`sequence(5)` should return `"12345"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sequence(5), "12345")`)
}})
```

`sequence(10)` should return `"12345678910"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sequence(10), "12345678910")`)
}})
```

`sequence(1)` should return `"1"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sequence(1), "1")`)
}})
```

`sequence(27)` should return `"123456789101112131415161718192021222324252627"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sequence(27), "123456789101112131415161718192021222324252627")`)
}})
```

# --seed--

## --seed-contents--

```py
def sequence(n):

    return n
```

# --solutions--

```py
def sequence(n):
    result = ""
    for i in range(1, n + 1):
        result += str(i)
    return result
```
