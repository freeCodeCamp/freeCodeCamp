---
id: 68adce01c0e1144d0a902956
title: "Challenge 25: Vowel Repeater"
challengeType: 29
dashedName: challenge-25
---

# --description--

Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

- The letters `a`, `e`, `i`, `o`, and `u`, in either uppercase or lowercase, are considered vowels.
- The original vowel should keeps its case.
- Repeated vowels should be lowercase.
- All non-vowel characters should keep their original case.

# --hints--

`repeat_vowels("hello world")` should return `"helloo wooorld"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(repeat_vowels("hello world"), "helloo wooorld")`)
}})
```

`repeat_vowels("freeCodeCamp")` should return `"freeeCooodeeeeCaaaaamp"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(repeat_vowels("freeCodeCamp"), "freeeCooodeeeeCaaaaamp")`)
}})
```

`repeat_vowels("AEIOU")` should return `"AEeIiiOoooUuuuu"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(repeat_vowels("AEIOU"), "AEeIiiOoooUuuuu")`)
}})
```

`repeat_vowels("I like eating ice cream in Iceland")` should return `"I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(repeat_vowels("I like eating ice cream in Iceland"), "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand")`)
}})
```

# --seed--

## --seed-contents--

```py
def repeat_vowels(s):

    return s
```

# --solutions--

```py
def repeat_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    result = []

    for char in s:
        result.append(char)
        if char in vowels:
            result.append(char.lower() * count)
            count += 1

    return "".join(result)
```
