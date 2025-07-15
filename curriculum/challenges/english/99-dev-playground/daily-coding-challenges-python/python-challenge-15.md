---
id: 6821ec9d237de8297eaee79d
title: "Python Challenge 15: camelCase"
challengeType: 29
dashedName: python-challenge-15
---

# --description--

Given a string, return its camel case version using the following rules:

- Words in the string argument are separated by one or more characters from the following set: space (` `), dash (`-`), or underscore (`_`). Treat any sequence of these as a word break.
- The first word should be all lowercase.
- Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
- All spaces and separators should be removed.

# --hints--

`to_camel_case("hello world")` should return `"helloWorld"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(to_camel_case("hello world"), "helloWorld")`)
```

`to_camel_case("HELLO WORLD")` should return `"helloWorld"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(to_camel_case("HELLO WORLD"), "helloWorld")`)
```

`to_camel_case("secret agent-X")` should return `"secretAgentX"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(to_camel_case("secret agent-X"), "secretAgentX")`)
```

`to_camel_case("FREE cODE cAMP")` should return `"freeCodeCamp"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(to_camel_case("FREE cODE cAMP"), "freeCodeCamp")`)
```

`to_camel_case("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk")` should return `"yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk"`.

```js
runPython(`
from unittest import TestCase
TestCase().assertEqual(to_camel_case("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"), "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk")`)
```

# --seed--

## --seed-contents--

```py
def to_camel_case(s):

    return s
```

# --solutions--

```py
import re
def to_camel_case(s):
    words = re.split(r'[_\- ]+', s)

    camel = [
        words[0].lower() if words else ''
    ] + [
        word.capitalize() for word in words[1:]
    ]

    return ''.join(camel)
```
