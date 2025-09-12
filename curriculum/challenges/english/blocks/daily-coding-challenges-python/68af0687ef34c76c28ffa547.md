---
id: 68af0687ef34c76c28ffa547
title: "Challenge 30: Unique Characters"
challengeType: 29
dashedName: challenge-30
---

# --description--

Given a string, determine if all the characters in the string are unique.

- Uppercase and lowercase letters should be considered different characters.

# --hints--

`all_unique("abc")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(all_unique("abc"), True)`)
}})
```

`all_unique("aA")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(all_unique("aA"), True)`)
}})
```

`all_unique("QwErTy123!@")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(all_unique("QwErTy123!@"), True)`)
}})
```

`all_unique("~!@#$%^&*()_+")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(all_unique("~!@#$%^&*()_+"), True)`)
}})
```

`all_unique("hello")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(all_unique("hello"), False)`)
}})
```

`all_unique("freeCodeCamp")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(all_unique("freeCodeCamp"), False)`)
}})
```

`all_unique("!@#*$%^&*()aA")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(all_unique("!@#*$%^&*()aA"), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def all_unique(s):

    return s
```

# --solutions--

```py
def all_unique(s):
    seen = set()
    for ch in s:
        if ch in seen:
            return False
        seen.add(ch)
    return True
```
