---
id: 6939b873185d8e00d453563b
title: "Challenge 156: Odd or Even?"
challengeType: 29
dashedName: challenge-156
---

# --description--

Given a positive integer, return `"Odd"` if it's an odd number, and `"Even"` if it's even.

# --hints--

`odd_or_even(1)` should return `"Odd"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(odd_or_even(1), "Odd")`)
}})
```

`odd_or_even(2)` should return `"Even"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(odd_or_even(2), "Even")`)
}})
```

`odd_or_even(13)` should return `"Odd"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(odd_or_even(13), "Odd")`)
}})
```

`odd_or_even(196)` should return `"Even"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(odd_or_even(196), "Even")`)
}})
```

`odd_or_even(123456789)` should return `"Odd"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(odd_or_even(123456789), "Odd")`)
}})
```

# --seed--

## --seed-contents--

```py
def odd_or_even(n):

    return n
```

# --solutions--

```py
def odd_or_even(n):
    return "Even" if n % 2 == 0 else "Odd"
```
