---
id: 6814d93d516e86b171929de5
title: Python Coding Challenge
challengeType: 29
dashedName: python-coding-challenge
---

# --description--

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

- The string can contain any characters.
- If there's an odd number of characters in the string, ignore the center character.

# --hints--

`isBalanced("racecar")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("racecar"))`);
}})
```

`isBalanced("lorem ipsum")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("lorem ipsum"))`);
}})
```

`isBalanced("kitty ipsum")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("kitty ipsum"))`);
}})
```

`isBalanced("string")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("string"))`);
}})
```

`isBalanced(" ")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced(" "))`);
}})
```

`isBalanced("abcdefghijklmnopqrstuvwxyz")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertFalse(is_balanced("abcdefghijklmnopqrstuvwxyz"))`);
}})
```

`isBalanced("123a#b!E&*456-o.U")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(is_balanced("123a#b!E&*456-o.U"))`);
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
