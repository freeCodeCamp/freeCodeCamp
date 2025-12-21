---
id: 68b7687dded630607aceccb3
title: "Challenge 49: CSV Header Parser"
challengeType: 29
dashedName: challenge-49
---

# --description--

Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

- The first line of a CSV file contains headings separated by commas.
- Remove any leading or trailing whitespace from each heading.

# --hints--

`get_headings("name,age,city")` should return `["name", "age", "city"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_headings("name,age,city"), ["name", "age", "city"])`)
}})
```

`get_headings("first name,last name,phone")` should return `["first name", "last name", "phone"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_headings("first name,last name,phone"), ["first name", "last name", "phone"])`)
}})
```

`get_headings("username , email , signup date ")` should return `["username", "email", "signup date"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_headings("username , email , signup date "), ["username", "email", "signup date"])`)
}})
```

# --seed--

## --seed-contents--

```py
def get_headings(csv):

    return csv
```

# --solutions--

```py
def get_headings(csv):
    return [h.strip() for h in csv.split(",")]
```
