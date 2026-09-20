---
id: 68ffb91507a5b645769328c9
title: "Challenge 106: Message Validator"
challengeType: 29
dashedName: challenge-106
---

# --description--

Given a message string and a validation string, determine if the message is valid.

- A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
- Letters are case-insensitive.
- Words in the message are separated by single spaces.

# --hints--

`is_valid_message("hello world", "hw")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_message("hello world", "hw"), True)`)
}})
```

`is_valid_message("ALL CAPITAL LETTERS", "acl")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_message("ALL CAPITAL LETTERS", "acl"), True)`)
}})
```

`is_valid_message("Coding challenge are boring.", "cca")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_message("Coding challenge are boring.", "cca"), False)`)
}})
```

`is_valid_message("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD")` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_message("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"), True)`)
}})
```

`is_valid_message("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT")` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_valid_message("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"), False)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_valid_message(message, validation):

    return message
```

# --solutions--

```py
def is_valid_message(message, validation):
    words = message.split()
    
    if len(words) != len(validation):
        return False

    for word, val_letter in zip(words, validation):
        if word[0].lower() != val_letter.lower():
            return False

    return True
```
