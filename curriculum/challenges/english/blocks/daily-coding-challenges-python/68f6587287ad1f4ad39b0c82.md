---
id: 68f6587287ad1f4ad39b0c82
title: "Challenge 96: Is It the Weekend?"
challengeType: 29
dashedName: challenge-96
---

# --description--

Given a date in the format `"YYYY-MM-DD"`, return the number of days left until the weekend.

- The weekend starts on Saturday.
- If the given date is Saturday or Sunday, return `"It's the weekend!"`.
- Otherwise, return `"X days until the weekend."`, where `X` is the number of days until Saturday.
- If `X` is `1`, use `"day"` (singular) instead of `"days"` (plural).
- Make sure the calculation ignores your local timezone.

# --hints--

`days_until_weekend("2025-11-14")` should return `"1 day until the weekend."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(days_until_weekend("2025-11-14"), "1 day until the weekend.")`)
}})
```

`days_until_weekend("2025-01-01")` should return `"3 days until the weekend."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(days_until_weekend("2025-01-01"), "3 days until the weekend.")`)
}})
```

`days_until_weekend("2025-12-06")` should return `"It's the weekend!"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(days_until_weekend("2025-12-06"), "It's the weekend!")`)
}})
```

`days_until_weekend("2026-01-27")` should return `"4 days until the weekend."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(days_until_weekend("2026-01-27"), "4 days until the weekend.")`)
}})
```

`days_until_weekend("2026-09-07")` should return `"5 days until the weekend."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(days_until_weekend("2026-09-07"), "5 days until the weekend.")`)
}})
```

`days_until_weekend("2026-11-29")` should return `"It's the weekend!"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(days_until_weekend("2026-11-29"), "It's the weekend!")`)
}})
```

# --seed--

## --seed-contents--

```py
def days_until_weekend(date_string):

    return date_string
```

# --solutions--

```py
from datetime import datetime

def days_until_weekend(date_string):
    date = datetime.strptime(date_string, "%Y-%m-%d").date()
    day_of_week = date.weekday()

    if day_of_week == 5 or day_of_week == 6:
        return "It's the weekend!"

    days_until_saturday = 5 - day_of_week
    return f"{days_until_saturday} day{'s' if days_until_saturday != 1 else ''} until the weekend."
```
