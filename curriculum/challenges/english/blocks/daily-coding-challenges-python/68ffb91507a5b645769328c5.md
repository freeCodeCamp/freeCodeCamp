---
id: 68ffb91507a5b645769328c5
title: "Challenge 102: Longest Word"
challengeType: 29
dashedName: challenge-102
---

# --description--

Given a sentence string, return the longest word in the sentence.

- Words are separated by a single space.
- Only letters (`a-z`, case-insensitive) count toward the word's length.
- If there are multiple words with the same length, return the first one that appears.
- Return the word as it appears in the given string, with punctuation removed.

# --hints--

`longest_word("The quick red fox")` should return `"quick"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(longest_word("The quick red fox"), "quick")`)
}})
```

`longest_word("Hello coding challenge.")` should return `"challenge"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(longest_word("Hello coding challenge."), "challenge")`)
}})
```

`longest_word("Do Try This At Home.")` should return `"This"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(longest_word("Do Try This At Home."), "This")`)
}})
```

`longest_word("This sentence... has commas, ellipses, and an exclamation point!")` should return `"exclamation"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(longest_word("This sentence... has commas, ellipses, and an exclamation point!"), "exclamation")`)
}})
```

`longest_word("A tie? No way!")` should return `"tie"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(longest_word("A tie? No way!"), "tie")`)
}})
```

`longest_word("Wouldn't you like to know.")` should return `"Wouldnt"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(longest_word("Wouldn't you like to know."), "Wouldnt")`)
}})
```

# --seed--

## --seed-contents--

```py
def longest_word(sentence):

    return sentence
```

# --solutions--

```py
import re
def longest_word(sentence):
    words = sentence.split(" ")
    longest = ""

    for word in words:
        cleaned = re.sub(r'[^a-zA-Z]', '', word)
        if len(cleaned) > len(longest):
            longest = cleaned

    return longest
```
