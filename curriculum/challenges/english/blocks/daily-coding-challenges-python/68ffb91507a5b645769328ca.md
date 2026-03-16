---
id: 68ffb91507a5b645769328ca
title: "Challenge 107: FizzBuzz"
challengeType: 29
dashedName: challenge-107
---

# --description--

Given an integer (`n`), return an array of integers from `1` to `n` (inclusive), replacing numbers that are multiple of:

- 3 with `"Fizz"`.
- 5 with `"Buzz"`.
- 3 and 5 with `"FizzBuzz"`.

# --hints--

`fizz_buzz(2)` should return `[1, 2]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fizz_buzz(2), [1, 2])`)
}})
```

`fizz_buzz(4)` should return `[1, 2, "Fizz", 4]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fizz_buzz(4), [1, 2, "Fizz", 4])`)
}})
```

`fizz_buzz(8)` should return `[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fizz_buzz(8), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8])`)
}})
```

`fizz_buzz(20)` should return `[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fizz_buzz(20), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])`)
}})
```

`fizz_buzz(50)` should return `[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fizz_buzz(50), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"])`)
}})
```

# --seed--

## --seed-contents--

```py
def fizz_buzz(n):

    return n
```

# --solutions--

```py
def fizz_buzz(n):
    result = []
    for i in range(1, n+1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result
```
