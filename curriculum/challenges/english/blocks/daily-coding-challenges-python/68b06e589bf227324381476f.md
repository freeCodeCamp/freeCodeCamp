---
id: 68b06e589bf227324381476f
title: "Challenge 35: Word Frequency"
challengeType: 29
dashedName: challenge-35
---

# --description--

Given a paragraph, return an array of the three most frequently occurring words.

- Words in the paragraph will be separated by spaces.
- Ignore case in the given paragraph. For example, treat `Hello` and `hello` as the same word.
- Ignore punctuation in the given paragraph. Punctuation consists of commas (`,`), periods (`.`), and exclamation points (`!`).
- The returned array should have all lowercase words.
- The returned array should be in descending order with the most frequently occurring word first.

# --hints--

`get_words("Coding in Python is fun because coding Python allows for coding in Python easily while coding")` should return `["coding", "python", "in"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_words("Coding in Python is fun because coding Python allows for coding in Python easily while coding"), ["coding", "python", "in"])`)
}})
```

`get_words("I like coding. I like testing. I love debugging!")` should return `["i", "like", "coding"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_words("I like coding. I like testing. I love debugging!"), ["i", "like", "coding"])`)
}})
```

`get_words("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!")` should return `["debug", "test", "deploy"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(get_words("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!"), ["debug", "test", "deploy"])`)
}})
```

# --seed--

## --seed-contents--

```py
def get_words(paragraph):

    return paragraph
```

# --solutions--

```py
import re
def get_words(paragraph):
    cleaned = re.sub(r'[.,?]', '', paragraph.lower())

    words = cleaned.split()

    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1

    sorted_words = sorted(freq.keys(), key=lambda w: freq[w], reverse=True)

    return sorted_words[:3]
```
