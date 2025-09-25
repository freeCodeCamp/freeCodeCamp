---
id: 68cae5b538ff798bbd4da006
title: "Challenge 68: Credit Card Masker"
challengeType: 29
dashedName: challenge-68
---

# --description--

Given a string of credit card numbers, return a masked version of it using the following constraints:

- The string will contain four sets of four digits (`0-9`), with all sets being separated by a single space, or a single hyphen (`-`).
- Replace all numbers, except the last four, with an asterisk (`*`).
- Leave the remaining characters unchanged.

For example, given `"4012-8888-8888-1881"` return `"****-****-****-1881"`.

# --hints--

`mask("4012-8888-8888-1881")` should return `"****-****-****-1881"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mask("4012-8888-8888-1881"), "****-****-****-1881")`)
}})
```

`mask("5105 1051 0510 5100")` should return `"**** **** **** 5100"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mask("5105 1051 0510 5100"), "**** **** **** 5100")`)
}})
```

`mask("6011 1111 1111 1117")` should return `"**** **** **** 1117"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mask("6011 1111 1111 1117"), "**** **** **** 1117")`)
}})
```

`mask("2223-0000-4845-0010")` should return `"****-****-****-0010"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(mask("2223-0000-4845-0010"), "****-****-****-0010")`)
}})
```

# --seed--

## --seed-contents--

```py
def mask(card):

    return card
```

# --solutions--

```py
def mask(card):
    if '-' in card:
        split = card.split('-')
        return f"****-****-****-{split[3]}"
    else:
        split = card.split(' ')
        return f"**** **** **** {split[3]}"
```
