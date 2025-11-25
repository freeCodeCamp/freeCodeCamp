---
id: 68ffb91507a5b645769328c4
title: "Challenge 101: Markdown Heading Converter"
challengeType: 29
dashedName: challenge-101
---

# --description--

Given a string representing a Markdown heading, return the equivalent HTML heading.

A valid Markdown heading must:

- Start with zero or more spaces, followed by
- 1 to 6 hash characters (`#`) in a row, then
- At least one space. And finally,
- The heading text.

The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an `h1` tag, and six hash symbols correspond to an `h6` tag.

If the given string doesn't have the exact format above, return `"Invalid format"`.

For example, given `"# My level 1 heading"`, return `"<h1>My level 1 heading</h1>"`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

# --hints--

`convert("# My level 1 heading")` should return `"<h1>My level 1 heading</h1>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert("# My level 1 heading"), "<h1>My level 1 heading</h1>")`)
}})
```

`convert("My heading")` should return `"Invalid format"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert("My heading"), "Invalid format")`)
}})
```

`convert("##### My level 5 heading")` should return `"<h5>My level 5 heading</h5>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert("##### My level 5 heading"), "<h5>My level 5 heading</h5>")`)
}})
```

`convert("#My heading")` should return `"Invalid format"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert("#My heading"), "Invalid format")`)
}})
```

`convert("  ###  My level 3 heading")` should return `"<h3>My level 3 heading</h3>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert("  ###  My level 3 heading"), "<h3>My level 3 heading</h3>")`)
}})
```

`convert("####### My level 7 heading")` should return `"Invalid format"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert("####### My level 7 heading"), "Invalid format")`)
}})
```

`convert("## My #2 heading")` should return `"<h2>My #2 heading</h2>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert("## My #2 heading"), "<h2>My #2 heading</h2>")`)
}})
```

# --seed--

## --seed-contents--

```py
def convert(heading):

    return heading
```

# --solutions--

```py
import re
def convert(heading):
    trimmed = heading.strip()

    if not re.match(r'^#{1,6}\s+\S+', trimmed):
        return "Invalid format"

    hash_count = trimmed.find(' ')
    text = trimmed[hash_count:].lstrip()

    return f"<h{hash_count}>{text}</h{hash_count}>"
```
