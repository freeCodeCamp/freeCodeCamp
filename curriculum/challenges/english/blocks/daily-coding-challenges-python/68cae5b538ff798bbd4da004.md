---
id: 68cae5b538ff798bbd4da004
title: "Challenge 66: HTML Tag Stripper"
challengeType: 29
dashedName: challenge-66
---

# --description--

Given a string of HTML code, remove the tags and return the plain text content.

- The input string will contain only valid HTML.
- HTML tags may be nested.
- Remove the tags and any attributes.

For example, `'<a href="#">Click here</a>'` should return `"Click here"`.

# --hints--

`strip_tags('<a href="#">Click here</a>')` should return `"Click here"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(strip_tags('<a href="#">Click here</a>'), "Click here")`)
}})
```

`strip_tags('<p class="center">Hello <b>World</b>!</p>')` should return `"Hello World!"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(strip_tags('<p class="center">Hello <b>World</b>!</p>'), "Hello World!")`)
}})
```

`strip_tags('<img src="cat.jpg" alt="Cat">')` should return an empty string (`""`).

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(strip_tags('<img src="cat.jpg" alt="Cat">'), "")`)
}})
```

`strip_tags('<main id="main"><section class="section">section</section><section class="section">section</section></main>')` should return `sectionsection`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(strip_tags('<main id="main"><section class="section">section</section><section class="section">section</section></main>'), "sectionsection")`)
}})
```

# --seed--

## --seed-contents--

```py
def strip_tags(html):

    return html
```

# --solutions--

```py
import re
def strip_tags(html):
    return re.sub(r'<[^>]*>', '', html)
```
