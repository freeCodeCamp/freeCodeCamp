---
id: 68b1f72371a5ac895ac70a0a
title: "Challenge 44: String Mirror"
challengeType: 29
dashedName: challenge-44
---

# --description--

Given two strings, determine if the second string is a mirror of the first.

- A string is considered a mirror if it contains the same letters in reverse order.
- Treat uppercase and lowercase letters as distinct.
- Ignore all non-alphabetical characters.

# --hints--

`is_mirror("helloworld", "helloworld")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_mirror("helloworld", "helloworld"), False)`)
}})
```

`is_mirror("Hello World", "dlroW olleH")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_mirror("Hello World", "dlroW olleH"), True)`)
}})
```

`is_mirror("RaceCar", "raCecaR")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_mirror("RaceCar", "raCecaR"), True)`)
}})
```

`is_mirror("RaceCar", "RaceCar")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_mirror("RaceCar", "RaceCar"), False)`)
}})
```

`is_mirror("Mirror", "rorrim")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_mirror("Mirror", "rorrim"), False)`)
}})
```

`is_mirror("Hello World", "dlroW-olleH")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_mirror("Hello World", "dlroW-olleH"), True)`)
}})
```

`is_mirror("Hello World", "!dlroW !olleH")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_mirror("Hello World", "!dlroW !olleH"), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_mirror(str1, str2):

    return str1
```

# --solutions--

```py
def is_mirror(str1, str2):
    clean1 = "".join(c for c in str1 if c.isalpha())
    clean2 = "".join(c for c in str2 if c.isalpha())
    return clean1[::-1] == clean2
```
