---
id: 68b7687dded630607aceccab
title: "Challenge 45: Perfect Square"
challengeType: 29
dashedName: challenge-45
---

# --description--

Given an integer, determine if it is a perfect square.

- A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.

# --hints--

`is_perfect_square(9)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(9), True)`)
}})
```

`is_perfect_square(49)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(49), True)`)
}})
```

`is_perfect_square(1)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(1), True)`)
}})
```

`is_perfect_square(2)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(2), False)`)
}})
```

`is_perfect_square(99)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(99), False)`)
}})
```

`is_perfect_square(-9)` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(-9), False)`)
}})
```

`is_perfect_square(0)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(0), True)`)
}})
```

`is_perfect_square(25281)` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_perfect_square(25281), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_perfect_square(n):

    return n
```

# --solutions--

```py
import math
def is_perfect_square(n):
    if n < 0:
        return False
    root = int(math.sqrt(n))
    return root * root == n
```
