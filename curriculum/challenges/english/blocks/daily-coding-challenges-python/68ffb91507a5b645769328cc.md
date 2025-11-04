---
id: 68ffb91507a5b645769328cc
title: "Challenge 109: What's My Age Again?"
challengeType: 29
dashedName: challenge-109
---

# --description--

Given the date of someone's birthday in the format `YYYY-MM-DD`, return the person's age as of November 27th, 2025.

- Assume all birthdays are valid dates before November 27th, 2025.
- Return the age as an integer.
- Be sure to account for whether the person has already had their birthday in 2025.

# --hints--

`calculate_age("2000-11-20")` should return `25`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_age("2000-11-20"), 25)`)
}})
```

`calculate_age("2000-12-01")` should return `24`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_age("2000-12-01"), 24)`)
}})
```

`calculate_age("2014-10-25")` should return `11`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_age("2014-10-25"), 11)`)
}})
```

`calculate_age("1994-01-06")` should return `31`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_age("1994-01-06"), 31)`)
}})
```

`calculate_age("1994-12-14")` should return `30`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(calculate_age("1994-12-14"), 30)`)
}})
```

# --seed--

## --seed-contents--

```py
def calculate_age(birthday):

    return birthday
```

# --solutions--

```py
from datetime import datetime
def calculate_age(birthday):
    today = datetime(2025, 11, 27)
    birth_date = datetime.strptime(birthday, "%Y-%m-%d")

    age = today.year - birth_date.year

    if (today.month, today.day) < (birth_date.month, birth_date.day):
        age -= 1

    return age
```
