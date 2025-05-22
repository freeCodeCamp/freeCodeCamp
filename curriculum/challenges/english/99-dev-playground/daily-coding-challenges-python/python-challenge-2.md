---
id: 681cb1b1dab50c87ddb2e51c
title: "Python Challenge 2: Base Check"
challengeType: 29
dashedName: python-challenge-2
---

# --description--

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

- The string may contain integers, and uppercase or lowercase characters.
- The check should be case-insensitive.
- The base can be any number 2-36.
- A number is valid if every character is a valid digit in the given base.
- Example of valid digits for bases:
  - Base 2: 0-1
  - Base 8: 0-7
  - Base 10: 0-9
  - Base 16: 0-9 and A-F
  - Base 36: 0-9 and A-Z

# --hints--

`is_valid_number("10101", 2)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("10101", 2))`);
}})
```

`is_valid_number("10201", 2)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_valid_number("10201", 2))`)
}})
```

`is_valid_number("76543210", 8)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("76543210", 8))`)
}})
```

`is_valid_number("9876543210", 8)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_valid_number("9876543210", 8))`)
}})
```

`is_valid_number("9876543210", 10)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("9876543210", 10))`)
}})
```

`is_valid_number("ABC", 10)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_valid_number("ABC", 10))`)
}})
```

`is_valid_number("ABC", 16)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("ABC", 16))`)
}})
```

`is_valid_number("Z", 36)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("Z", 36))`)
}})
```

`is_valid_number("ABC", 20)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("ABC", 20))`)
}})
```

`is_valid_number("4B4BA9", 16)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("4B4BA9", 16))`)
}})
```

`is_valid_number("5G3F8F", 16)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_valid_number("5G3F8F", 16))`)
}})
```

`is_valid_number("5G3F8F", 17)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("5G3F8F", 17))`)
}})
```

`is_valid_number("abc", 10)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_valid_number("abc", 10))`)
}})
```

`is_valid_number("abc", 16)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("abc", 16))`)
}})
```

`is_valid_number("AbC", 16)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("AbC", 16))`)
}})
```

`is_valid_number("z", 36)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_valid_number("z", 36))`)
}})
```

# --seed--

## --seed-contents--

```py
def is_valid_number(n, base):

    return n
```

# --solutions--

```py
def is_valid_number(n, base):
    allChars = "0123456789abcdefghijklmnopqrstuvwxyz";
    newN = n.lower()

    availableChars = allChars[0:base]

    for char in newN:
        if char not in availableChars:
            return False

    return True
```
