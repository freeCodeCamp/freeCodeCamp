---
id: 691b559495c5cb5a37b9b480
title: "Challenge 120: Pounds to Kilograms"
challengeType: 29
dashedName: challenge-120
---

# --description--

Given a weight in pounds as a number, return the string `"(lbs) pounds equals (kgs) kilograms."`.

- Replace `"(lbs)"` with the input number.
- Replace `"(kgs)"` with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
- 1 pound equals 0.453592 kilograms.
- If the input is `1`, use `"pound"` instead of `"pounds"`.
- If the converted value is `1`, use `"kilogram"` instead of `"kilograms"`.

# --hints--

`convert_to_kgs(1)` should return `"1 pound equals 0.45 kilograms."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_kgs(1), "1 pound equals 0.45 kilograms.")`)
}})
```

`convert_to_kgs(0)` should return `"0 pounds equals 0.00 kilograms."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_kgs(0), "0 pounds equals 0.00 kilograms.")`)
}})
```

`convert_to_kgs(100)` should return `"100 pounds equals 45.36 kilograms."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_kgs(100), "100 pounds equals 45.36 kilograms.")`)
}})
```

`convert_to_kgs(2.5)` should return `"2.5 pounds equals 1.13 kilograms."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_kgs(2.5), "2.5 pounds equals 1.13 kilograms.")`)
}})
```

`convert_to_kgs(2.20462)` should return `"2.20462 pounds equals 1.00 kilogram."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_to_kgs(2.20462), "2.20462 pounds equals 1.00 kilogram.")`)
}})
```

# --seed--

## --seed-contents--

```py
def convert_to_kgs(lbs):

    return lbs
```

# --solutions--

```py
def convert_to_kgs(lbs):
    KG_PER_POUND = 0.453592
    kgs = f"{lbs * KG_PER_POUND:.2f}"

    pound_word = "pound" if lbs == 1 else "pounds"
    kilogram_word = "kilogram" if kgs == "1.00" else "kilograms"

    return f"{lbs} {pound_word} equals {kgs} {kilogram_word}."
```
