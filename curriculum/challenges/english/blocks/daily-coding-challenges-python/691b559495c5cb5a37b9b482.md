---
id: 691b559495c5cb5a37b9b482
title: "Challenge 122: Markdown Bold Parser"
challengeType: 29
dashedName: challenge-122
---

# --description--

Given a string that may include some bold text in Markdown, return the equivalent HTML string.

- Bold text in Markdown is any text that starts and ends with two asterisks (`**`) or two underscores (`__`).
- There cannot be any spaces between the text and the asterisks or underscores, but there can be
  spaces in the text itself.
- Convert all bold occurrences to HTML `b` tags and return the string.

For example, given `"**This is bold**"`, return `"<b>This is bold</b>"`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

# --hints--

`parse_bold("**This is bold**")` should return `"<b>This is bold</b>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_bold("**This is bold**"), "<b>This is bold</b>")`)
}})
```

`parse_bold("__This is also bold__")` should return `"<b>This is also bold</b>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_bold("__This is also bold__"), "<b>This is also bold</b>")`)
}})
```

`parse_bold("**This is not bold **")` should return `"**This is not bold **"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_bold("**This is not bold **"), "**This is not bold **")`)
}})
```

`parse_bold("__ This is also not bold__")` should return `"__ This is also not bold__"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_bold("__ This is also not bold__"), "__ This is also not bold__")`)
}})
```

`parse_bold("The **quick** brown fox __jumps__ over the **lazy** dog.")` should return `"The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_bold("The **quick** brown fox __jumps__ over the **lazy** dog."), "The <b>quick</b> brown fox <b>jumps</b> over the <b>lazy</b> dog.")`)
}})
```

# --seed--

## --seed-contents--

```py
def parse_bold(markdown):

    return markdown
```

# --solutions--

```py
import re
def parse_bold(markdown):
    markdown = re.sub(r'\*\*(\S(?:.*?\S)?)\*\*', r'<b>\1</b>', markdown)
    markdown = re.sub(r'__(\S(?:.*?\S)?)__', r'<b>\1</b>', markdown)

    return markdown
```
