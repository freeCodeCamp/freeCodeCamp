---
id: 69272dcf1c24b44fd79137c3
title: "Challenge 140: SCREAMING_SNAKE_CASE"
challengeType: 29
dashedName: challenge-140
---

# --description--

Given a string representing a variable name, return the variable name converted to SCREAMING_SNAKE_CASE.

The given variable names will be written in one of the following formats:

- `camelCase`
- `PascalCase`
- `snake_case`
- `kebab-case`

In the above formats, words are separated by an underscore (`_`), a hyphen (`-`), or a new word starts with a capital letter.

To convert to SCREAMING_SNAKE_CASE:

- Make all letters uppercase
- Separate words with an underscore (`_`)

# --hints--

`to_screaming_snake_case("userEmail")` should return `"USER_EMAIL"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_screaming_snake_case("userEmail"), "USER_EMAIL")`)
}})
```

`to_screaming_snake_case("UserPassword")` should return `"USER_PASSWORD"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_screaming_snake_case("UserPassword"), "USER_PASSWORD")`)
}})
```

`to_screaming_snake_case("user_id")` should return `"USER_ID"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_screaming_snake_case("user_id"), "USER_ID")`)
}})
```

`to_screaming_snake_case("user-address")` should return `"USER_ADDRESS"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_screaming_snake_case("user-address"), "USER_ADDRESS")`)
}})
```

`to_screaming_snake_case("username")` should return `"USERNAME"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(to_screaming_snake_case("username"), "USERNAME")`)
}})
```

# --seed--

## --seed-contents--

```py
def to_screaming_snake_case(variable_name):

    return variable_name
```

# --solutions--

```py
import re
def to_screaming_snake_case(variable_name):
    temp = re.sub(r'[-_]+', ' ', variable_name)
    temp = re.sub(r'([a-z0-9])([A-Z])', r'\1 \2', temp)
    words = temp.strip().split()
    return '_'.join(words).upper()
```
