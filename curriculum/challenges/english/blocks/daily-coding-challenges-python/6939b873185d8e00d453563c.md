---
id: 6939b873185d8e00d453563c
title: "Challenge 157: Markdown Link Parser"
challengeType: 29
dashedName: challenge-157
---

# --description--

Given the string of a link in Markdown, return the equivalent HTML string.

A Markdown image has the following format: `"[link_text](link_url)"`. Return the string of the HTML `a` tag with the `href` set to the `link_url` and the `link_text` as the tag content.

For example, given `"[freeCodeCamp](https://freecodecamp.org/)"` return `'<a href="https://freecodecamp.org/">freeCodeCamp</a>'`;

Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

# --hints--

`parse_link("[freeCodeCamp](https://freecodecamp.org/)")` should return `'<a href="https://freecodecamp.org/">freeCodeCamp</a>'`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_link("[freeCodeCamp](https://freecodecamp.org/)"), '<a href="https://freecodecamp.org/">freeCodeCamp</a>')`)
}})
```

`parse_link("[Donate to our charity.](https://www.freecodecamp.org/donate/)")` should return `'<a href="https://www.freecodecamp.org/donate/">Donate to our charity.</a>'`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_link("[Donate to our charity.](https://www.freecodecamp.org/donate/)"), '<a href="https://www.freecodecamp.org/donate/">Donate to our charity.</a>')`)
}})
```

`parse_link("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)")` should return `'<a href="https://github.com/freeCodeCamp/freeCodeCamp/">Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.</a>'`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_link("[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)"), '<a href="https://github.com/freeCodeCamp/freeCodeCamp/">Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.</a>')`)
}})
```

# --seed--

## --seed-contents--

```py
def parse_link(markdown):

    return markdown
```

# --solutions--

```py
import re
def parse_link(markdown):
    match = re.match(r'\[(.*?)\]\((.*?)\)', markdown)
    text, url = match.groups()
    return f'<a href="{url}">{text}</a>'
```
