---
id: 68ffb91507a5b645769328c3
title: "Challenge 100: 100 Characters"
challengeType: 29
dashedName: challenge-100
---

# --description--

Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.

# --hints--

`one_hundred("One hundred ")` should return `"One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(one_hundred("One hundred "), "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ")`)
}})
```

`one_hundred("freeCodeCamp ")` should return `"freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(one_hundred("freeCodeCamp "), "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC")`)
}})
```

`one_hundred("daily challenges ")` should return `"daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(one_hundred("daily challenges "), "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge")`)
}})
```

`one_hundred("!")` should return `"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(one_hundred("!"), "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")`)
}})
```



# --seed--

## --seed-contents--

```py
def one_hundred(chars):

    return chars
```

# --solutions--

```py
def one_hundred(chars):
    result = ""
    i = 0

    while len(result) < 100:
        result += chars[i % len(chars)]
        i += 1

    return result[:100]
```
