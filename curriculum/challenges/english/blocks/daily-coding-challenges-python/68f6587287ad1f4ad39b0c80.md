---
id: 68f6587287ad1f4ad39b0c80
title: "Challenge 94: Email Signature Generator"
challengeType: 29
dashedName: challenge-94
---

# --description--

Given strings for a person's name, title, and company, return an email signature as a single string using the following rules:

- The name should appear first, preceded by a prefix that depends on the first letter of the name. For names starting with (case-insensitive):
  - `A-I`: Use `>>` as the prefix.
  - `J-R`: Use `--` as the prefix.
  - `S-Z`: Use `::` as the prefix.
- A comma and space (`, `) should follow the name.
- The title and company should follow the comma and space, separated by `" at "` (with spaces around it).

For example, given `"Quinn Waverly"`, `"Founder and CEO"`, and `"TechCo"` return `"--Quinn Waverly, Founder and CEO at TechCo"`.

# --hints--

`generate_signature("Quinn Waverly", "Founder and CEO", "TechCo")` should return `"--Quinn Waverly, Founder and CEO at TechCo"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_signature("Quinn Waverly", "Founder and CEO", "TechCo"), "--Quinn Waverly, Founder and CEO at TechCo")`)
}})
```

`generate_signature("Alice Reed", "Engineer", "TechCo")` should return `">>Alice Reed, Engineer at TechCo"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_signature("Alice Reed", "Engineer", "TechCo"), ">>Alice Reed, Engineer at TechCo")`)
}})
```

`generate_signature("Tina Vaughn", "Developer", "example.com")` should return `"::Tina Vaughn, Developer at example.com"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_signature("Tina Vaughn", "Developer", "example.com"), "::Tina Vaughn, Developer at example.com")`)
}})
```

`generate_signature("B. B.", "Product Tester", "AcmeCorp")` should return `">>B. B., Product Tester at AcmeCorp"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_signature("B. B.", "Product Tester", "AcmeCorp"), ">>B. B., Product Tester at AcmeCorp")`)
}})
```

`generate_signature("windstorm", "Cloud Architect", "Atmospheronics")` should return `"::windstorm, Cloud Architect at Atmospheronics"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_signature("windstorm", "Cloud Architect", "Atmospheronics"), "::windstorm, Cloud Architect at Atmospheronics")`)
}})
```

# --seed--

## --seed-contents--

```py
def generate_signature(name, title, company):

    return name
```

# --solutions--

```py
def generate_signature(name, title, company):
    first_letter = name[0].upper()
    if first_letter in "ABCDEFGHI":
        prefix = ">>"
    elif first_letter in "JKLMNOPQR":
        prefix = "--"
    else:
        prefix = "::"

    return f"{prefix}{name}, {title} at {company}"
```
