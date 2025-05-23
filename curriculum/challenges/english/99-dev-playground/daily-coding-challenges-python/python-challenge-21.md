---
id: 6821ecb9237de8297eaee7a3
title: "Python Challenge 21: Hex Generator"
challengeType: 29
dashedName: python-challenge-21
---

# --description--

Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

- The function should handle `red`, `green`, or `blue` as an input argument.
- If the input is not one of those, the function should return `Invalid color`.
- The function should return a random six-character hex color code where the input color value is greater than any of the others.
- Example of valid outputs for a given input:

| Input   | Output   |
|---------|----------|
| `red`   | `FF0000` |
| `green` | `00FF00` |
| `blue`  | `0000FF` |

# --hints--

`generate_hex("yellow")` should return `Invalid color`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_hex("yellow"), "Invalid color")`);
}})
```

`generate_hex("red")` should return a six-character string.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(len(generate_hex("red")), 6)`);
}})
```

`generate_hex("red")` should return a valid six-character hex color code.

```js
({test: () => { runPython(`
from unittest import TestCase

hex = generate_hex("red").upper()
is_valid_hex = len(hex) == 6 and all(c in "0123456789ABCDEF" for c in hex)
TestCase().assertTrue(is_valid_hex)`)
}})
```

`generate_hex("red")` should return a valid hex color with a higher red value than other colors.

```js
({test: () => { runPython(`
from unittest import TestCase

hex = generate_hex("red").upper()
is_valid_hex = len(hex) == 6 and all(c in "0123456789ABCDEF" for c in hex)
TestCase().assertTrue(is_valid_hex)

r = int(hex[:2], 16)
g = int(hex[2:4], 16)
b = int(hex[4:], 16)

TestCase().assertGreater(r, g)
TestCase().assertGreater(r, b)`)
}})
```

Calling `generate_hex("red")` twice should return two different hex color values where red is dominant.

```js
({test: () => { runPython(`
from unittest import TestCase

hex1 = generate_hex("red").upper()
is_valid_hex1 = len(hex1) == 6 and all(c in "0123456789ABCDEF" for c in hex1)
TestCase().assertTrue(is_valid_hex1)

r1 = int(hex1[:2], 16)
g1 = int(hex1[2:4], 16)
b1 = int(hex1[4:], 16)

TestCase().assertGreater(r1, g1)
TestCase().assertGreater(r1, b1)

hex2 = generate_hex("red").upper()
is_valid_hex2 = len(hex2) == 6 and all(c in "0123456789ABCDEF" for c in hex2)
TestCase().assertTrue(is_valid_hex2)

r2 = int(hex2[:2], 16)
g2 = int(hex2[2:4], 16)
b2 = int(hex2[4:], 16)

TestCase().assertGreater(r2, g2)
TestCase().assertGreater(r2, b2)
TestCase().assertNotEqual(hex1, hex2)`);
}})
```

Calling `generate_hex("green")` twice should return two different hex color values where green is dominant.

```js
({test: () => { runPython(`
from unittest import TestCase

hex1 = generate_hex("green").upper()
is_valid_hex1 = len(hex1) == 6 and all(c in "0123456789ABCDEF" for c in hex1)
TestCase().assertTrue(is_valid_hex1)

r1 = int(hex1[:2], 16)
g1 = int(hex1[2:4], 16)
b1 = int(hex1[4:], 16)

TestCase().assertGreater(g1, r1)
TestCase().assertGreater(g1, b1)

hex2 = generate_hex("green").upper()
is_valid_hex2 = len(hex2) == 6 and all(c in "0123456789ABCDEF" for c in hex2)
TestCase().assertTrue(is_valid_hex2)

r2 = int(hex2[:2], 16)
g2 = int(hex2[2:4], 16)
b2 = int(hex2[4:], 16)

TestCase().assertGreater(g2, r2)
TestCase().assertGreater(g2, b2)
TestCase().assertNotEqual(hex1, hex2)`);
}})
```

Calling `generate_hex("blue")` twice should return two different hex color values where blue is dominant.

```js
({test: () => { runPython(`
from unittest import TestCase

hex1 = generate_hex("blue").upper()
is_valid_hex1 = len(hex1) == 6 and all(c in "0123456789ABCDEF" for c in hex1)
TestCase().assertTrue(is_valid_hex1)

r1 = int(hex1[:2], 16)
g1 = int(hex1[2:4], 16)
b1 = int(hex1[4:], 16)

TestCase().assertGreater(b1, r1)
TestCase().assertGreater(b1, g1)

hex2 = generate_hex("blue").upper()
is_valid_hex2 = len(hex2) == 6 and all(c in "0123456789ABCDEF" for c in hex2)
TestCase().assertTrue(is_valid_hex2)

r2 = int(hex2[:2], 16)
g2 = int(hex2[2:4], 16)
b2 = int(hex2[4:], 16)

TestCase().assertGreater(b2, r2)
TestCase().assertGreater(b2, g2)
TestCase().assertNotEqual(hex1, hex2)`);
}})
```

# --seed--

## --seed-contents--

```py
def generate_hex(color):

    return color
```

# --solutions--

```py
import random
def generate_hex(color):
    def to_hex(n):
        return hex(n)[2:].upper().zfill(2)

    dominant = random.randint(170, 255)
    weak1 = random.randint(0, 169)
    weak2 = random.randint(0, 169)

    if color.lower() == "red":
        r = dominant
        g = weak1
        b = weak2
    elif color.lower() == "green":
        r = weak1
        g = dominant
        b = weak2
    elif color.lower() == "blue":
        r = weak1
        g = weak2
        b = dominant
    else:
        return "Invalid color"

    return f'{to_hex(r)}{to_hex(g)}{to_hex(b)}'
```
