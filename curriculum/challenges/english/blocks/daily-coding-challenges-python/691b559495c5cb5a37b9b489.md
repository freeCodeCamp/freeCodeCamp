---
id: 691b559495c5cb5a37b9b489
title: "Challenge 129: Markdown Blockquote Parser"
challengeType: 29
dashedName: challenge-129
---

# --description--

Given a string that includes a blockquote in Markdown, return the equivalent HTML string.

A blockquote in Markdown is any line that:

- Starts with zero or more spaces
- Followed by a greater-than sign (`>`)
- Then, one or more spaces
- And finally, the blockquote text.

Return the blockquote text surrounded by opening and closing HTML `blockquote` tags.

For example, given `"> This is a quote"`, return `<blockquote>This is a quote</blockquote>`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

# --hints--

`parse_blockquote("> This is a quote")` should return `"<blockquote>This is a quote</blockquote>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_blockquote("> This is a quote"), "<blockquote>This is a quote</blockquote>")`)
}})
```

`parse_blockquote(" > This is also a quote")` should return `"<blockquote>This is also a quote</blockquote>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_blockquote(" > This is also a quote"), "<blockquote>This is also a quote</blockquote>")`)
}})
```

`parse_blockquote("  >    So  Is  This")` should return `"<blockquote>So  Is  This</blockquote>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_blockquote("  >    So  Is  This"), "<blockquote>So  Is  This</blockquote>")`)
}})
```

# --seed--

## --seed-contents--

```py
def parse_blockquote(markdown):

    return markdown
```

# --solutions--

```py
import re
def parse_blockquote(markdown):
    pattern = r"^\s*>\s+(.+)$"
    match = re.match(pattern, markdown)

    text = match.group(1)
    return f"<blockquote>{text}</blockquote>"
```
