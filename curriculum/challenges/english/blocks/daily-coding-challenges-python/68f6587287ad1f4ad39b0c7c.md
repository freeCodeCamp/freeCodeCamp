---
id: 68f6587287ad1f4ad39b0c7c
title: "Challenge 90: Character Limit"
challengeType: 29
dashedName: challenge-90
---

# --description--

In this challenge, you are given a string and need to determine if it fits in a social media post. Return the following strings based on the rules given:

- `"short post"` if it fits within a 40-character limit.
- `"long post"` if it's greater than 40 characters and fits within an 80-character limit.
- `"invalid post"` if it's too long to fit within either limit.

# --hints--

`can_post("Hello world")` should return `"short post"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(can_post("Hello world"), "short post")`)
}})
```

`can_post("This is a longer message but still under eighty characters.")` should return `"long post"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(can_post("This is a longer message but still under eighty characters."), "long post")`)
}})
```

`can_post("This message is too long to fit into either of the character limits for a social media post.")` should return `"invalid post"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(can_post("This message is too long to fit into either of the character limits for a social media post."), "invalid post")`)
}})
```

# --seed--

## --seed-contents--

```py
def can_post(message):

    return message
```

# --solutions--

```py
def can_post(message):
    if len(message) <= 40:
        return "short post"
    elif len(message) <= 80:
        return "long post"
    else:
        return "invalid post"
```
