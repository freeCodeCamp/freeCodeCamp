---
id: 681cb1b1dab50c87ddb2e51f
title: "Python Challenge 5: Jbelmud Text"
challengeType: 29
dashedName: python-challenge-5
---

# --description--

Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

- The first and last letters of the words remain in place
- All letters between the first and last letter are sorted alphabetically.
- The input strings will contain no punctuation, and will be entirely lowercase.

# --hints--

`jbelmu("hello world")` should return `"hello wlord"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(jbelmu("hello world"), "hello wlord")`)
}})
```

`jbelmu("i love jumbled text")` should return `"i love jbelmud text"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(jbelmu("i love jumbled text"), "i love jbelmud text")`)
}})
```

`jbelmu("freecodecamp is my favorite place to learn to code")` should return `"faccdeeemorp is my faiortve pacle to laern to cdoe"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(jbelmu("freecodecamp is my favorite place to learn to code"), "faccdeeemorp is my faiortve pacle to laern to cdoe")`)
}})
```

`jbelmu("the quick brown fox jumps over the lazy dog")` should return `"the qciuk borwn fox jmpus oevr the lazy dog"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(jbelmu("the quick brown fox jumps over the lazy dog"), "the qciuk borwn fox jmpus oevr the lazy dog")`)
}})
```

# --seed--

## --seed-contents--

```py
def jbelmu(text):

    return text
```

# --solutions--

```py
def jbelmu(text):
    words = text.split()
    jumbled = []

    for word in words:
        if len(word) <= 3:
            jumbled.append(word)
        else:
            first = word[0]
            last = word[-1]
            middle = ''.join(sorted(word[1:-1]))
            jumbled.append(first + middle + last)
    
    return ' '.join(jumbled)
```
