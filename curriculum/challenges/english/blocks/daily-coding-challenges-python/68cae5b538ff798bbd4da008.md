---
id: 68cae5b538ff798bbd4da008
title: "Challenge 70: HTML Attribute Extractor"
challengeType: 29
dashedName: challenge-70
---

# --description--

Given a string of a valid HTML element, return the attributes of the element using the following criteria:

- You will only be given one element.
- Attributes will be in the format: `attribute="value"`.
- Return an array of strings with each attribute property and value, separated by a comma, in this format: `["attribute1, value1", "attribute2, value2"]`.
- Return attributes in the order they are given.
- If no attributes are found, return an empty array.

# --hints--

`extract_attributes('<span class="red"></span>')` should return `["class, red"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(extract_attributes('<span class="red"></span>'), ["class, red"])`)
}})
```

`extract_attributes('<meta charset="UTF-8" />')` should return `["charset, UTF-8"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(extract_attributes('<meta charset="UTF-8" />'), ["charset, UTF-8"])`)
}})
```

`extract_attributes("<p>Lorem ipsum dolor sit amet</p>")` should return `[]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(extract_attributes("<p>Lorem ipsum dolor sit amet</p>"), [])`)
}})
```

`extract_attributes('<input name="email" type="email" required="true" />')` should return `["name, email", "type, email", "required, true"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(extract_attributes('<input name="email" type="email" required="true" />'), ["name, email", "type, email", "required, true"])`)
}})
```

`extract_attributes('<button id="submit" class="btn btn-primary">Submit</button>')` should return `["id, submit", "class, btn btn-primary"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(extract_attributes('<button id="submit" class="btn btn-primary">Submit</button>'), ["id, submit", "class, btn btn-primary"])`)
}})
```

# --seed--

## --seed-contents--

```py
def extract_attributes(element):

    return element
```

# --solutions--

```py
import re
def extract_attributes(element):
    pattern = r'([\w-]+)="([^"]*)"'
    matches = re.findall(pattern, element)
    return [f"{attr}, {val}" for attr, val in matches]
```
