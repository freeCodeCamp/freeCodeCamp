---
id: 68c1a929005bf54d342aa8d3
title: "Challenge 56: Space Week Day 2: Exoplanet Search"
challengeType: 29
dashedName: challenge-56
---

# --description--

For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.

- Luminosity readings only comprise of characters `0-9` and `A-Z` where each reading corresponds to the following numerical values:
- Characters `0-9` correspond to luminosity levels `0-9`.
- Characters `A-Z` correspond to luminosity levels `10-35`.

A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.

# --hints--

`has_exoplanet("665544554")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_exoplanet("665544554"), False)`)
}})
```

`has_exoplanet("FGFFCFFGG")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_exoplanet("FGFFCFFGG"), True)`)
}})
```

`has_exoplanet("MONOPLONOMONPLNOMPNOMP")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_exoplanet("MONOPLONOMONPLNOMPNOMP"), False)`)
}})
```

`has_exoplanet("FREECODECAMP")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_exoplanet("FREECODECAMP"), True)`)
}})
```

`has_exoplanet("9AB98AB9BC98A")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_exoplanet("9AB98AB9BC98A"), False)`)
}})
```

`has_exoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(has_exoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def has_exoplanet(readings):

    return readings
```

# --solutions--

```py
def has_exoplanet(readings):
    values = [int(c, 36) for c in readings]
    average = sum(values) / len(values)
    threshold = average * 0.8
    for v in values:
        if v <= threshold:
            return True
    return False
```
