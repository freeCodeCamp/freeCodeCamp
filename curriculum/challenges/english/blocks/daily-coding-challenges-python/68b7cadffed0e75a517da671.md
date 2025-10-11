---
id: 68b7cadffed0e75a517da671
title: "Challenge 51: Phone Number Formatter"
challengeType: 29
dashedName: challenge-51
---

# --description--

Given a string of eleven digits, return the string as a phone number in this format: `"+D (DDD) DDD-DDDD"`.

# --hints--

`format_number("05552340182")` should return `"+0 (555) 234-0182"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_number("05552340182"), "+0 (555) 234-0182")`)
}})
```

`format_number("15554354792")` should return `"+1 (555) 435-4792"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(format_number("15554354792"), "+1 (555) 435-4792")`)
}})
```

# --seed--

## --seed-contents--

```py
def format_number(number):

    return number
```

# --solutions--

```py
def format_number(number):
    country = number[0]
    area = number[1:4]
    prefix = number[4:7]
    line = number[7:]

    return f"+{country} ({area}) {prefix}-{line}"
```
