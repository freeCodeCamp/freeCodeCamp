---
id: 6814d93d516e86b171929de5
title: Python Coding Challenge 1
challengeType: 29
dashedName: python-coding-challenge-1
---

# --description--

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

- The string can contain any characters.
- If there's an odd number of characters in the string, ignore the center character.

# --hints--
      
`is_balanced("racecar")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("racecar"))`)
}})
```

`is_balanced("lorem ipsum")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("lorem ipsum"))`)
}})
```

`is_balanced("kitty ipsum")` should return `False`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("kitty ipsum"))`)
}})
```

`is_balanced("string")` should return `False`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("string"))`)
}})
```

`is_balanced(" ")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced(" "))`)
}})
```

`is_balanced("abcdefghijklmnopqrstuvwxyz")` should return `False`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("abcdefghijklmnopqrstuvwxyz"))`)
}})
```

`is_balanced("123a#b!E&#x26;*456-o.U")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("123a#b!E&*456-o.U"))`)
}})
```

# --seed--

## --seed-contents--

```py
def is_balanced(s):
  
    return s

```

# --solutions--

```py
def is_balanced(s):
  
    return s

```
