---
id: 69272dcf1c24b44fd79137c6
title: "Challenge 143: Markdown Italic Parser"
challengeType: 29
dashedName: challenge-143
---

# --description--

Given a string that may include some italic text in Markdown, return the equivalent HTML string.

- Italic text in Markdown is any text that starts and ends with a single asterisk (`*`) or a single underscore (`_`).
- There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
- Convert all italic occurrences to HTML `i` tags and return the string.

For example, given `"*This is italic*"`, return `"<i>This is italic</i>"`.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

# --hints--

`parse_italics("*This is italic*")` should return `"<i>This is italic</i>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_italics("*This is italic*"), "<i>This is italic</i>")`)
}})
```

`parse_italics("_This is also italic_")` should return `"<i>This is also italic</i>"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_italics("_This is also italic_"), "<i>This is also italic</i>")`)
}})
```

`parse_italics("*This is not italic *")` should return `"*This is not italic *"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_italics("*This is not italic *"), "*This is not italic *")`)
}})
```

`parse_italics("_ This is also not italic_")` should return `"_ This is also not italic_"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_italics("_ This is also not italic_"), "_ This is also not italic_")`)
}})
```

`parse_italics("The *quick* brown fox _jumps_ over the *lazy* dog.")` should return `"The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_italics("The *quick* brown fox _jumps_ over the *lazy* dog."), "The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.")`)
}})
```

# --seed--

## --seed-contents--

```py
def parse_italics(markdown):

    return markdown
```

# --solutions--

```py
import re
def parse_italics(markdown):
    pattern = r'(\*|_)([^\s][^]*?[^\s])\1'
    pattern = r'(\*|_)([^\s].*?[^\s])\1'
    return re.sub(pattern, r'<i>\2</i>', markdown)
```
