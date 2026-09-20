---
id: 68adce01c0e1144d0a90295e
title: "Challenge 29: Acronym Builder"
challengeType: 29
dashedName: challenge-29
---

# --description--

Given a string containing one or more words, return an acronym of the words using the following constraints:

- The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
- The acronym should ignore the first letter of these words unless they are the first word of the given string: `a`, `for`, `an`, `and`, `by`, and `of`.
- The acronym letters should be returned in the order they are given.
- The acronym should not contain any spaces.

# --hints--

`build_acronym("Search Engine Optimization")` should return `"SEO"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_acronym("Search Engine Optimization"), "SEO")`)
}})
```

`build_acronym("Frequently Asked Questions")` should return `"FAQ"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_acronym("Frequently Asked Questions"), "FAQ")`)
}})
```

`build_acronym("National Aeronautics and Space Administration")` should return `"NASA"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_acronym("National Aeronautics and Space Administration"), "NASA")`)
}})
```

`build_acronym("Federal Bureau of Investigation")` should return `"FBI"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_acronym("Federal Bureau of Investigation"), "FBI")`)
}})
```

`build_acronym("For your information")` should return `"FYI"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_acronym("For your information"), "FYI")`)
}})
```

`build_acronym("By the way")` should return `"BTW"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_acronym("By the way"), "BTW")`)
}})
```

`build_acronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily")` should return `"AUHWPOTIMSH"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(build_acronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"), "AUHWPOTIMSH")`)
}})
```

# --seed--

## --seed-contents--

```py
def build_acronym(s):

    return s
```

# --solutions--

```py
def build_acronym(s):
    small_words = {"a", "for", "an", "and", "by", "of"}
    words = s.split()
    acronym = ""

    for i, word in enumerate(words):
        if i == 0 or word.lower() not in small_words:
            acronym += word[0].upper()

    return acronym
```
