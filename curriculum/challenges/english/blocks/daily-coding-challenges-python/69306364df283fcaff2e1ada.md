---
id: 69306364df283fcaff2e1ada
title: "Challenge 149: vOwElcAsE"
challengeType: 29
dashedName: challenge-149
---

# --description--

Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

- Vowels are `"a"`, `"e"`, `"i"`, `"o"`, and `"u"` in any case.
- Non-alphabetical characters should remain unchanged.

# --hints--

`vowel_case("vowelcase")` should return `"vOwElcAsE"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(vowel_case("vowelcase"), "vOwElcAsE")`)
}})
```

`vowel_case("coding is fun")` should return `"cOdIng Is fUn"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(vowel_case("coding is fun"), "cOdIng Is fUn")`)
}})
```

`vowel_case("HELLO, world!")` should return `"hEllO, wOrld!"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(vowel_case("HELLO, world!"), "hEllO, wOrld!")`)
}})
```

`vowel_case("git cherry-pick")` should return `"gIt chErry-pIck"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(vowel_case("git cherry-pick"), "gIt chErry-pIck")`)
}})
```

`vowel_case("HEAD~1")` should return `"hEAd~1"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(vowel_case("HEAD~1"), "hEAd~1")`)
}})
```

# --seed--

## --seed-contents--

```py
def vowel_case(s):

    return s
```

# --solutions--

```py
def vowel_case(s):
    vowels = "aeiouAEIOU"
    result = ""

    for char in s:
        if char in vowels:
            result += char.upper()
        elif char.isalpha():
            result += char.lower()
        else:
            result += char

    return result
```
