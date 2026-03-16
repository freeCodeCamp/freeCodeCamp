---
id: 68b06e589bf2273243814773
title: "Challenge 37: Sentence Capitalizer"
challengeType: 29
dashedName: challenge-37
---

# --description--

Given a paragraph, return a new paragraph where the first letter of each sentence is capitalized.

- All other characters should be preserved.
- Sentences can end with a period (`.`), one or more question marks (`?`), or one or more exclamation points (`!`).

# --hints--

`capitalize("this is a simple sentence.")` should return `"This is a simple sentence."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(capitalize("this is a simple sentence."), "This is a simple sentence.")`)
}})
```

`capitalize("hello world. how are you?")` should return `"Hello world. How are you?"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(capitalize("hello world. how are you?"), "Hello world. How are you?")`)
}})
```

`capitalize("i did today's coding challenge... it was fun!!")` should return `"I did today's coding challenge... It was fun!!"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(capitalize("i did today's coding challenge... it was fun!!"), "I did today's coding challenge... It was fun!!")`)
}})
```

`capitalize("crazy!!!strange???unconventional...sentences.")` should return `"Crazy!!!Strange???Unconventional...Sentences."`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(capitalize("crazy!!!strange???unconventional...sentences."), "Crazy!!!Strange???Unconventional...Sentences.")`)
}})
```

`capitalize("there's a space before this period . why is there a space before that period ?")` should return `"There's a space before this period . Why is there a space before that period ?"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(capitalize("there's a space before this period . why is there a space before that period ?"), "There's a space before this period . Why is there a space before that period ?")`)
}})
```

# --seed--

## --seed-contents--

```py
def capitalize(paragraph):

    return paragraph
```

# --solutions--

```py
import re
def capitalize(paragraph):
    def repl(match):
        return match.group(1) + match.group(2) + match.group(3).upper()

    result = re.sub(r'([.!?]+)(\s*)([a-z])', repl, paragraph)

    if result and result[0].islower():
        result = result[0].upper() + result[1:]

    return result
```
