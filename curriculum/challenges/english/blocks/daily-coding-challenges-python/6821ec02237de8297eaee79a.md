---
id: 6821ec02237de8297eaee79a
title: "Challenge 24: Pangram"
challengeType: 29
dashedName: challenge-24
---

# --description--

Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

- Ignore non-alphabetical characters in the word or sentence.
- Ignore letter casing in the word or sentence.

# --hints--

`is_pangram("hello", "helo")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("hello", "helo"), True)`)
}})
```

`is_pangram("hello", "hel")` should return `False`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("hello", "hel"), False)`)
}})
```

`is_pangram("hello", "helow")` should return `False`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("hello", "helow"), False)`)
}})
```

`is_pangram("hello world", "helowrd")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("hello world", "helowrd"), True)`)
}})
```

`is_pangram("Hello World!", "helowrd")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("Hello World!", "helowrd"), True)`)
}})
```

`is_pangram("Hello World!", "heliowrd")` should return `False`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("Hello World!", "heliowrd"), False)`)
}})
```

`is_pangram("freeCodeCamp", "frcdmp")` should return `False`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("freeCodeCamp", "frcdmp"), False)`)
}})
```

`is_pangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz")` should return `True`

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_pangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_pangram(sentence, letters):

    return sentence
```

# --solutions--

```py
import re
def is_pangram(sentence, letters):
    used_letters = []
    for char in sentence.lower():
        if re.match(r'[a-z]', char) and char not in used_letters:
            used_letters.append(char)

    sorted_letters = ''.join(sorted(letters.lower()))
    sorted_used_letters = ''.join(sorted(used_letters))

    return sorted_letters == sorted_used_letters
```
