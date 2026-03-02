---
id: 68ee9e3066cfd4eb2328e8a4
title: "Challenge 85: Word Counter"
challengeType: 29
dashedName: challenge-85
---

# --description--

Given a sentence string, return the number of words that are in the sentence.

- Words are any sequence of non-space characters and are separated by a single space.

# --hints--

`count_words("Hello world")` should return `2`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_words("Hello world"), 2)`)
}})
```

`count_words("The quick brown fox jumps over the lazy dog.")` should return `9`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_words("The quick brown fox jumps over the lazy dog."), 9)`)
}})
```

`count_words("I like coding challenges!")` should return `4`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_words("I like coding challenges!"), 4)`)
}})
```

`count_words("Complete the challenge in JavaScript and Python.")` should return `7`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_words("Complete the challenge in JavaScript and Python."), 7)`)
}})
```

`count_words("The missing semi-colon crashed the entire internet.")` should return `7`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_words("The missing semi-colon crashed the entire internet."), 7)`)
}})
```

# --seed--

## --seed-contents--

```py
def count_words(sentence):

    return sentence
```

# --solutions--

```py
def count_words(sentence):

    return len(sentence.split(' '))
```
