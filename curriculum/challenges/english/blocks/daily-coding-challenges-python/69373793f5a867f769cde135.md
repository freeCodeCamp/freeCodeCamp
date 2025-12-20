---
id: 69373793f5a867f769cde135
title: "Challenge 150: Markdown Unordered List Parser"
challengeType: 29
dashedName: challenge-150
---

# --description--

Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

An unordered list consists of one or more list items. A valid list item appears on its own line and:

- Starts with a dash (`"-"`), followed by
- At least one space, and then
- The list item text.

The list is given as a single string with new lines separated by the newline character (`"\n"`). Do not include the newline characters in the item text.

Wrap each list item in HTML `li` tags, and the whole list of items in `ul` tags.

For example, given `"- Item A\n- Item B"`, return `"<ul><li>Item A</li><li>Item B</li></ul>"`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

# --hints--

`parse_unordered_list("- Item A\n- Item B")` should return `"<ul><li>Item A</li><li>Item B</li></ul>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_unordered_list("- Item A\\n- Item B"), "<ul><li>Item A</li><li>Item B</li></ul>")`)
}})
```

`parse_unordered_list("-  JavaScript\n-  Python")` should return `"<ul><li>JavaScript</li><li>Python</li></ul>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_unordered_list("-  JavaScript\\n-  Python"), "<ul><li>JavaScript</li><li>Python</li></ul>")`)
}})
```

`parse_unordered_list("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla")` should return `"<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_unordered_list("- 2 C Flour\\n- 1/2 C Sugar\\n- 1 Tsp Vanilla"), "<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>")`)
}})
```

`parse_unordered_list("- A-1\n- A-2\n- B-1")` should return `"<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_unordered_list("- A-1\\n- A-2\\n- B-1"), "<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>")`)
}})
```

# --seed--

## --seed-contents--

```py
def parse_unordered_list(markdown):

    return markdown
```

# --solutions--

```py
def parse_unordered_list(markdown):
    lines = markdown.split("\n")
    list_items = []

    for line in lines:
        list_items.append(f"<li>{line[1:].strip()}</li>")

    return f"<ul>{''.join(list_items)}</ul>"
```
