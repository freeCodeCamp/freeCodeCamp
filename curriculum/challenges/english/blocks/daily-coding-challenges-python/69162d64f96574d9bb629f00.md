---
id: 69162d64f96574d9bb629f00
title: "Challenge 115: Markdown Ordered List Item Converter"
challengeType: 29
dashedName: challenge-115
---

# --description--

Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

A valid ordered list item in Markdown must:

- Start with zero or more spaces, followed by
- A number (1 or greater) and a period (`.`), followed by
- At least one space, and then
- The list item text.

If the string doesn't have the exact format above, return `"Invalid format"`. Otherwise, wrap the list item text in `li` tags and return the string.

For example, given `"1. My item"`, return `"<li>My item</li>"`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

# --hints--

`convert_list_item("1. My item")` should return `"<li>My item</li>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_list_item("1. My item"), "<li>My item</li>")`)
}})
```

`convert_list_item(" 1.  Another item")` should return `"<li>Another item</li>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_list_item(" 1.  Another item"), "<li>Another item</li>")`)
}})
```

`convert_list_item("1 . invalid item")` should return `"Invalid format"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_list_item("1 . invalid item"), "Invalid format")`)
}})
```

`convert_list_item("2. list item text")` should return `"<li>list item text</li>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_list_item("2. list item text"), "<li>list item text</li>")`)
}})
```

`convert_list_item(". invalid again")` should return `"Invalid format"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_list_item(". invalid again"), "Invalid format")`)
}})
```

`convert_list_item("A. last invalid")` should return `"Invalid format"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(convert_list_item("A. last invalid"), "Invalid format")`)
}})
```

# --seed--

## --seed-contents--

```py
def convert_list_item(markdown):

    return markdown
```

# --solutions--

```py
import re
def convert_list_item(markdown):
    match = re.match(r'^\s*(\d+)\.\s+(.+)$', markdown)
    if not match:
        return "Invalid format"
    text = match.group(2)
    return f"<li>{text}</li>"
```
