---
id: 68e39ed6106dac2f0a98fd63
title: "Challenge 81: Nth Prime"
challengeType: 29
dashedName: challenge-81
---

# --description--

A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are `2`, `3`, `5`, `7`, and `11`.

Given a positive integer `n`, return the `n`th prime number. For example, given `5` return the 5th prime number: `11`.

# --hints--

`nth_prime(5)` should return `11`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_prime(5), 11)`)
}})
```

`nth_prime(10)` should return `29`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_prime(10), 29)`)
}})
```

`nth_prime(16)` should return `53`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_prime(16), 53)`)
}})
```

`nth_prime(99)` should return `523`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_prime(99), 523)`)
}})
```

`nth_prime(1000)` should return `7919`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(nth_prime(1000), 7919)`)
}})
```

# --seed--

## --seed-contents--

```py
def nth_prime(n):

    return n
```

# --solutions--

```py
def nth_prime(n):
    primes = []
    num = 2

    while len(primes) < n:
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
        num += 1

    return primes[n - 1]
```
