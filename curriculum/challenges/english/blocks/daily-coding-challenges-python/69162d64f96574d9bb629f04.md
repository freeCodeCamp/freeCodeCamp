---
id: 69162d64f96574d9bb629f04
title: "Challenge 119: String Compression"
challengeType: 29
dashedName: challenge-119
---

# --description--

Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

- Only consecutive duplicates are compressed.
- Words are separated by single spaces.

For example, given `"yes yes yes please"`, return `"yes(3) please"`.

# --hints--

`compress_string("yes yes yes please")` should return `"yes(3) please"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(compress_string("yes yes yes please"), "yes(3) please")`)
}})
```

`compress_string("I have have have apples")` should return `"I have(3) apples"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(compress_string("I have have have apples"), "I have(3) apples")`)
}})
```

`compress_string("one one three and to the the the the")` should return `"one(2) three and to the(4)"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(compress_string("one one three and to the the the the"), "one(2) three and to the(4)")`)
}})
```

`compress_string("route route route route route route tee tee tee tee tee tee")` should return `"route(6) tee(6)"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(compress_string("route route route route route route tee tee tee tee tee tee"), "route(6) tee(6)")`)
}})
```

# --seed--

## --seed-contents--

```py
def compress_string(sentence):

    return sentence
```

# --solutions--

```py
def compress_string(sentence):
    words = sentence.split(" ")
    result = []
    count = 1

    for i in range(len(words)):
        if i < len(words) - 1 and words[i] == words[i + 1]:
            count += 1
        else:
            if count > 1:
                result.append(f"{words[i]}({count})")
            else:
                result.append(words[i])
            count = 1

    return " ".join(result)
```
