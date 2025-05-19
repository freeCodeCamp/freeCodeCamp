---
id: 6821ecc5237de8297eaee7a5
title: "Python Challenge 23: RGB to Hex"
challengeType: 29
dashedName: python-challenge-23
---

# --description--

Given a CSS `rgb(r, g, b)` color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

| Input   | Output   |
|---------|----------|
| `rgb(255, 255, 255)`| `#ffffff` |
| `rgb(1, 2, 3)` | `#010203` |

- Make any letters lowercase.
- Return a `#` followed by six characters. Don't use any shorthand values.

# --hints--

`rgb_to_hex("rgb(255, 255, 255)")` should return `#ffffff`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rgb_to_hex("rgb(255, 255, 255)"), "#ffffff")`)
}})
```

`rgb_to_hex("rgb(1, 11, 111)")` should return `#010b6f`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rgb_to_hex("rgb(1, 11, 111)"), "#010b6f")`)
}})
```

`rgb_to_hex("rgb(173, 216, 230)")` should return `#add8e6`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rgb_to_hex("rgb(173, 216, 230)"), "#add8e6")`)
}})
```

`rgb_to_hex("rgb(79, 123, 201)")` should return `#4f7bc9`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(rgb_to_hex("rgb(79, 123, 201)"), "#4f7bc9")`)
}})
```

# --seed--

## --seed-contents--

```py
def rgb_to_hex(rgb):

    return rgb
```

# --solutions--

```py
def rgb_to_hex(rgb):
    import re
    match = re.findall(r'\d+', rgb)
    r, g, b = [max(0, min(255, int(x))) for x in match[:3]]
    return f'#{r:02x}{g:02x}{b:02x}'
```
