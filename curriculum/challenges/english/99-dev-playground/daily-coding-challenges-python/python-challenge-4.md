---
id: 681cb1b1dab50c87ddb2e51e
title: "Python Challenge 4: S  P  A  C  E  J  A  M"
challengeType: 29
dashedName: python-challenge-4
---

# --description--

Given a string, remove all spaces from the string, then insert two spaces between every character and convert all letters to uppercase.

- The function should handle any characters.

# --hints--

`space_jam("freeCodeCamp")` should return `F  R  E  E  C  O  D  E  C  A  M  P`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(space_jam("freeCodeCamp"), "F  R  E  E  C  O  D  E  C  A  M  P")`)
}})
```

`space_jam("   free   Code   Camp   ")` should return `F  R  E  E  C  O  D  E  C  A  M  P`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(space_jam("   free   Code   Camp   "), "F  R  E  E  C  O  D  E  C  A  M  P")`)
}})
```

`space_jam("Hello World?!")` should return `H  E  L  L  O  W  O  R  L  D  ?  !`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(space_jam("Hello World?!"), "H  E  L  L  O  W  O  R  L  D  ?  !")`)
}})
```

`space_jam("C@t$ & D0g$")` should return `C  @  T  $  &  D  0  G  $`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(space_jam("C@t$ & D0g$"), "C  @  T  $  &  D  0  G  $")`)
}})
```

`space_jam("allyourbase")` should return `A  L  L  Y  O  U  R  B  A  S  E`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertTrue(space_jam("all your base"), "A  L  L  Y  O  U  R  B  A  S  E")`)
}})
```

# --seed--

## --seed-contents--

```py
def space_jam(s):

    return s
```

# --solutions--

```py
def space_jam(s):
    s = s.replace(" ", "")
    s = "  ".join(s)
    return s.upper()
```
