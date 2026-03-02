---
id: 68ffb91507a5b645769328cb
title: "Challenge 108: BuzzFizz"
challengeType: 29
dashedName: challenge-108
---

# --description--

Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:

- Numbers that are multiples of 3 are replaced with "Fizz"
- Numbers that are multiples of 5 are replaced with "Buzz"
- Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
- All other numbers remain as integers in ascending order, starting from 1.
- The array must start at 1 and have no missing or extra elements.

# --hints--

`is_fizz_buzz([1, 2, "Fizz", 4])` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_fizz_buzz([1, 2, "Fizz", 4]), True)`)
}})
```

`is_fizz_buzz([1, 2, 3, 4])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_fizz_buzz([1, 2, 3, 4]), False)`)
}})
```

`is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", 7])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", 7]), False)`)
}})
```

`is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]), False)`)
}})
```

`is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]), False)`)
}})
```

`is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"])` should return `False`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]), False)`)
}})
```

`is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"])` should return `True`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertIs(is_fizz_buzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]), True)`)
}})
```

# --seed--

## --seed-contents--

```py
def is_fizz_buzz(sequence):

    return sequence
```

# --solutions--

```py
def is_fizz_buzz(sequence):
    for i, val in enumerate(sequence):
        n = i + 1
        if n % 15 == 0 and val != "FizzBuzz":
            return False
        if n % 3 == 0 and n % 5 != 0 and val != "Fizz":
            return False
        if n % 5 == 0 and n % 3 != 0 and val != "Buzz":
            return False
        if n % 3 != 0 and n % 5 != 0 and val != n:
            return False
    return True
```
