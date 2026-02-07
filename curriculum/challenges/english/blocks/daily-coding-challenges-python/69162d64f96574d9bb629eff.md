---
id: 69162d64f96574d9bb629eff
title: "Challenge 114: Camel to Snake"
challengeType: 29
dashedName: challenge-114
---

# --description--

Given a string in camel case, return the snake case version of the string using the following rules:

- The input string will contain only letters (`A-Z` and `a-z`) and will always start with a lowercase letter.
- Every uppercase letter in the camel case string starts a new word.
- Convert all letters to lowercase.
- Separate words with an underscore (`_`).

# --hints--

`to_snake("helloWorld")` should return `"hello_world"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_snake("helloWorld"), "hello_world")`)
}})
```

`to_snake("myVariableName")` should return `"my_variable_name"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_snake("myVariableName"), "my_variable_name")`)
}})
```

`to_snake("freecodecampDailyChallenges")` should return `"freecodecamp_daily_challenges"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_snake("freecodecampDailyChallenges"), "freecodecamp_daily_challenges")`)
}})
```

# --seed--

## --seed-contents--

```py
def to_snake(camel):

    return camel
```

# --solutions--

```py
import re
def to_snake(camel):
    return re.sub(r'([A-Z])', r'_\1', camel).lower()
```
