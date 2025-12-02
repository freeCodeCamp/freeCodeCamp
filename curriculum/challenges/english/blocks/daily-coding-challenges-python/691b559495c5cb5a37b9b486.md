---
id: 691b559495c5cb5a37b9b486
title: "Challenge 126: Capitalize It"
challengeType: 29
dashedName: challenge-126
---

# --description--

Given a string title, return a new string formatted in title case using the following rules:

- Capitalize the first letter of each word.
- Make all other letters in each word lowercase.
- Words are always separated by a single space.

# --hints--

`title_case("hello world")` should return `"Hello World"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(title_case("hello world"), "Hello World")`)
}})
```

`title_case("the quick brown fox")` should return `"The Quick Brown Fox"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(title_case("the quick brown fox"), "The Quick Brown Fox")`)
}})
```

`title_case("JAVASCRIPT AND PYTHON")` should return `"Javascript And Python"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(title_case("JAVASCRIPT AND PYTHON"), "Javascript And Python")`)
}})
```

`title_case("AvOcAdO tOAst fOr brEAkfAst")` should return `"Avocado Toast For Breakfast"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(title_case("AvOcAdO tOAst fOr brEAkfAst"), "Avocado Toast For Breakfast")`)
}})
```

# --seed--

## --seed-contents--

```py
def title_case(title):

    return title
```

# --solutions--

```py
def title_case(title):
    return " ".join(
        w[:1].upper() + w[1:].lower()
        for w in title.split(" ")
    )
```
