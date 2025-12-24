---
id: 68b06e589bf2273243814775
title: "Challenge 38: Slug Generator"
challengeType: 29
dashedName: challenge-38
---

# --description--

Given a string, return a URL-friendly version of the string using the following constraints:

- All letters should be lowercase.
- All characters that are not letters, numbers, or spaces should be removed.
- All spaces should be replaced with the URL-encoded space code `%20`.
- Consecutive spaces should be replaced with a single `%20`.
- The returned string should not have leading or trailing `%20`.

# --hints--

`generate_slug("helloWorld")` should return `"helloworld"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_slug("helloWorld"), "helloworld")`)
}})
```

`generate_slug("hello world!")` should return `"hello%20world"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_slug("hello world!"), "hello%20world")`)
}})
```

`generate_slug(" hello-world ")` should return `"helloworld"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_slug(" hello-world "), "helloworld")`)
}})
```

`generate_slug("hello  world")` should return `"hello%20world"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_slug("hello  world"), "hello%20world")`)
}})
```

`generate_slug("  ?H^3-1*1]0! W[0%R#1]D  ")` should return `"h3110%20w0r1d"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(generate_slug("  ?H^3-1*1]0! W[0%R#1]D  "), "h3110%20w0r1d")`)
}})
```

# --seed--

## --seed-contents--

```py
def generate_slug(str):

    return str
```

# --solutions--

```py
import re
def generate_slug(s):
    cleaned = re.sub(r'[^a-zA-Z0-9 ]+', '', s)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned.lower().replace(' ', '%20')
```
