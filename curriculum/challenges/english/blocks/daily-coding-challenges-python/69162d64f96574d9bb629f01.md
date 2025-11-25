---
id: 69162d64f96574d9bb629f01
title: "Challenge 116: Permutation Count"
challengeType: 29
dashedName: challenge-116
---

# --description--

Given a string, return the number of distinct permutations that can be formed from its characters.

- A permutation is any reordering of the characters in the string.
- Do not count duplicate permutations.
- If the string contains repeated characters, repeated arrangements should only be counted once.
- The string will contain only letters (`A-Z`, `a-z`).

For example, given `"abb"`, return `3` because there's three unique ways to arrange the letters: `"abb"`, `"bab"`, and `"bba"`.

# --hints--

`count_permutations("abb")` should return `3`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_permutations("abb"), 3)`)
}})
```

`count_permutations("abc")` should return `6`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_permutations("abc"), 6)`)
}})
```

`count_permutations("racecar")` should return `630`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_permutations("racecar"), 630)`)
}})
```

`count_permutations("freecodecamp")` should return `39916800`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(count_permutations("freecodecamp"), 39916800)`)
}})
```

# --seed--

## --seed-contents--

```py
def count_permutations(s):

    return s
```

# --solutions--

```py
from math import factorial
from collections import Counter
def count_permutations(s):
    freq = Counter(s)
    n = len(s)

    result = factorial(n)
    for count in freq.values():
        result //= factorial(count)

    return result
```
