---
id: 6925e2068081f40f549ced1a
title: "Challenge 136: Markdown Image Parser"
challengeType: 29
dashedName: challenge-136
---

# --description--

Given a string of an image in Markdown, return the equivalent HTML string.

A Markdown image has the following format: `"![alt text](image_url)"`. Where:

- `alt text` is the description of the image (the `alt` attribute value).
- `image_url` is the source URL of the image (the `src` attribute value).

Return a string of the HTML `img` tag with the `src` set to the image URL and the `alt` set to the alt text.

For example, given `"![Cute cat](cat.png)"` return `'<img src="cat.png" alt="Cute cat">'`;

- Make sure the tag, order of attributes, spacing, and quote usage is the same as above.

Note: The console may not display HTML tags in strings when logging messages — check the browser console to see logs with tags included.

# --hints--

`parse_image("![Cute cat](cat.png)")` should return `'<img src="cat.png" alt="Cute cat">'`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_image("![Cute cat](cat.png)"), '<img src="cat.png" alt="Cute cat">')`)
}})
```

`parse_image("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)")` should return `'<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">'`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_image("![Rocket Ship](https://freecodecamp.org/cdn/rocket-ship.jpg)"), '<img src="https://freecodecamp.org/cdn/rocket-ship.jpg" alt="Rocket Ship">')`)
}})
```

`parse_image("![Cute cats!](https://freecodecamp.org/cats.jpeg)")` should return `'<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">'`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(parse_image("![Cute cats!](https://freecodecamp.org/cats.jpeg)"), '<img src="https://freecodecamp.org/cats.jpeg" alt="Cute cats!">')`)
}})
```

# --seed--

## --seed-contents--

```py
def parse_image(markdown):

    return markdown
```

# --solutions--

```py
import re
def parse_image(markdown):
    match = re.search(r'!\[(.*?)\]\((.*?)\)', markdown)
    if not match:
        return ""
    alt, src = match.groups()
    return f'<img src="{src}" alt="{alt}">'
```
