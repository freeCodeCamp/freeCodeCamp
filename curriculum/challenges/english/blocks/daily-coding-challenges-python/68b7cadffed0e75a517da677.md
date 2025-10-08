---
id: 68b7cadffed0e75a517da677
title: "Challenge 54: P@ssw0rd Str3ngth!"
challengeType: 29
dashedName: challenge-54
---

# --description--

Given a password string, return `"weak"`, `"medium"`, or `"strong"` based on the strength of the password.

A password is evaluated according to the following rules:

- It is at least 8 characters long.
- It contains both uppercase and lowercase letters.
- It contains at least one number.
- It contains at least one special character from this set: `!`, `@`, `#`, `$`, `%`, `^`, `&`, or `*`.

Return `"weak"` if the password meets fewer than two of the rules.
Return `"medium"` if the password meets 2 or 3 of the rules.
Return `"strong"` if the password meets all 4 rules.

# --hints--

`check_strength("123456")` should return `"weak"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("123456"), "weak")`)
}})
```

`check_strength("pass!!!")` should return `"weak"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("pass!!!"), "weak")`)
}})
```

`check_strength("Qwerty")` should return `"weak"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("Qwerty"), "weak")`)
}})
```

`check_strength("PASSWORD")` should return `"weak"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("PASSWORD"), "weak")`)
}})
```

`check_strength("PASSWORD!")` should return `"medium"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("PASSWORD!"), "medium")`)
}})
```

`check_strength("PassWord%^!")` should return `"medium"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("PassWord%^!"), "medium")`)
}})
```

`check_strength("qwerty12345")` should return `"medium"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("qwerty12345"), "medium")`)
}})
```

`check_strength("S3cur3P@ssw0rd")` should return `"strong"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("S3cur3P@ssw0rd"), "strong")`)
}})
```

`check_strength("C0d3&Fun!")` should return `"strong"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(check_strength("C0d3&Fun!"), "strong")`)
}})
```

# --seed--

## --seed-contents--

```py
def check_strength(password):

    return password
```

# --solutions--

```py
import re
def check_strength(password):
    rules_met = 0

    if len(password) >= 8:
        rules_met += 1
    if re.search(r'[a-z]', password) and re.search(r'[A-Z]', password):
        rules_met += 1
    if re.search(r'\d', password):
        rules_met += 1
    if re.search(r'[!@#$%^&*]', password):
        rules_met += 1

    if rules_met < 2:
        return "weak"
    elif rules_met < 4:
        return "medium"
    else:
        return "strong"
```
