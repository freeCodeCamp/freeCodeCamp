---
id: 68e39ed6106dac2f0a98fd64
title: "Challenge 82: SpOoKy~CaSe"
challengeType: 29
dashedName: challenge-82
---

# --description--

Given a string representing a variable name, convert it to "spooky case" using the following constraints:

- Replace all underscores (`_`), and hyphens (`-`) with a tilde (`~`).
- Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.

For example, given `hello_world`, return `HeLlO~wOrLd`.

# --hints--

`spookify("hello_world")` should return `"HeLlO~wOrLd"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(spookify("hello_world"), "HeLlO~wOrLd")`)
}})
```

`spookify("Spooky_Case")` should return `"SpOoKy~CaSe"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(spookify("Spooky_Case"), "SpOoKy~CaSe")`)
}})
```

`spookify("TRICK-or-TREAT")` should return `"TrIcK~oR~tReAt"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(spookify("TRICK-or-TREAT"), "TrIcK~oR~tReAt")`)
}})
```

`spookify("c_a-n_d-y_-b-o_w_l")` should return `"C~a~N~d~Y~~b~O~w~L"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(spookify("c_a-n_d-y_-b-o_w_l"), "C~a~N~d~Y~~b~O~w~L")`)
}})
```

`spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts")` should return `"ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"), "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS")`)
}})
```

# --seed--

## --seed-contents--

```py
def spookify(boo):

    return boo
```

# --solutions--

```py
def spookify(boo):
    replaced = boo.replace("_", "~").replace("-", "~")
    
    result = []
    capitalize = True

    for char in replaced:
        if char == "~":
            result.append(char)
        else:
            result.append(char.upper() if capitalize else char.lower())
            capitalize = not capitalize

    return "".join(result)
```
