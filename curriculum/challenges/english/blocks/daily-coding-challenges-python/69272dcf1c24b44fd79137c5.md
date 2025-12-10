---
id: 69272dcf1c24b44fd79137c5
title: "Challenge 142: Sum the String"
challengeType: 29
dashedName: challenge-142
---

# --description--

Given a string containing digits and other characters, return the sum of all numbers in the string.

- Treat consecutive digits as a single number. For example, `"13"` counts as 13, not 1 + 3.
- Ignore any non-digit characters.

# --hints--

`string_sum("3apples2bananas")` should return `5`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(string_sum("3apples2bananas"), 5)`)
}})
```

`string_sum("10cats5dogs2birds")` should return `17`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(string_sum("10cats5dogs2birds"), 17)`)
}})
```

`string_sum("125344")` should return `125344`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(string_sum("125344"), 125344)`)
}})
```

`string_sum("a1b20c300")` should return `321`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(string_sum("a1b20c300"), 321)`)
}})
```

`string_sum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5")` should return `1653`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(string_sum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5"), 1653)`)
}})
```

# --seed--

## --seed-contents--

```py
def string_sum(s):

    return s
```

# --solutions--

```py
import re
def string_sum(s):
    numbers = re.findall(r'\d+', s)
    return sum(int(num) for num in numbers)
```
