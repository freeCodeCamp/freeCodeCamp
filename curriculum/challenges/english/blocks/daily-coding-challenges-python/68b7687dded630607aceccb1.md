---
id: 68b7687dded630607aceccb1
title: "Challenge 48: Spam Detector"
challengeType: 29
dashedName: challenge-48
---

# --description--

Given a phone number in the format `"+A (BBB) CCC-DDDD"`, where each letter represents a digit as follows:

- `A` represents the country code and can be any number of digits.
- `BBB` represents the area code and will always be three digits.
- `CCC` and `DDDD` represent the local number and will always be three and four digits long, respectively.

Determine if it's a spam number based on the following criteria:

- The country code is greater than 2 digits long or doesn't begin with a zero (`0`).
- The area code is greater than 900 or less than 200.
- The sum of first three digits of the local number appears within last four digits of the local number.
- The number has the same digit four or more times in a row (ignoring the formatting characters).

# --hints--

`is_spam("+0 (200) 234-0182")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+0 (200) 234-0182"), False)`)
}})
```

`is_spam("+091 (555) 309-1922")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+091 (555) 309-1922"), True)`)
}})
```

`is_spam("+1 (555) 435-4792")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+1 (555) 435-4792"), True)`)
}})
```

`is_spam("+0 (955) 234-4364")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+0 (955) 234-4364"), True)`)
}})
```

`is_spam("+0 (155) 131-6943")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+0 (155) 131-6943"), True)`)
}})
```

`is_spam("+0 (555) 135-0192")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+0 (555) 135-0192"), True)`)
}})
```

`is_spam("+0 (555) 564-1987")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+0 (555) 564-1987"), True)`)
}})
```

`is_spam("+00 (555) 234-0182")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_spam("+00 (555) 234-0182"), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_spam(number):

    return number
```

# --solutions--

```py
import re
def is_spam(number):
    digits = re.sub(r"\D", "", number)
    match = re.match(r"^\+(\d+)\s\((\d{3})\)\s(\d{3})-(\d{4})$", number)
    country_code, area_code, ccc, dddd = match.groups()

    if len(country_code) > 2 or not country_code.startswith("0"):
        return True

    area_num = int(area_code)
    if area_num > 900 or area_num < 200:
        return True

    sum_ccc = sum(int(d) for d in ccc)
    if str(sum_ccc) in dddd:
        return True

    if re.search(r"(\d)\1\1\1", digits):
        return True

    return False
```
