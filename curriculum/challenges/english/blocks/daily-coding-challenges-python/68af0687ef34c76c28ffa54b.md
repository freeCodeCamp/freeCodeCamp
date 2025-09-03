---
id: 68af0687ef34c76c28ffa54b
title: "Challenge 32: Reverse Sentence"
challengeType: 29
dashedName: challenge-32
---

# --description--

Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

- In the given string, words can be separated by one or more spaces.
- The returned string should only have one space between words.

# --hints--

`reverse_sentence("world hello")` should return `"hello world"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(reverse_sentence("world hello"), "hello world")`)
}})
```

`reverse_sentence("push commit git")` should return `"git commit push"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(reverse_sentence("push commit git"), "git commit push")`)
}})
```

`reverse_sentence("npm  install   apt    sudo")` should return `"sudo apt install npm"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(reverse_sentence("npm  install   apt    sudo"), "sudo apt install npm")`)
}})
```

`reverse_sentence("import    default   function  export")` should return `"export function default import"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(reverse_sentence("import    default   function  export"), "export function default import")`)
}})
```

# --seed--

## --seed-contents--

```py
def reverse_sentence(sentence):

    return sentence
```

# --solutions--

```py
def reverse_sentence(sentence):

   return " ".join(sentence.split()[::-1])
```
