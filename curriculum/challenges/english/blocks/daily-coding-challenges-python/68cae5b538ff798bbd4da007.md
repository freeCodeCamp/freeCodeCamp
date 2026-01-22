---
id: 68cae5b538ff798bbd4da007
title: "Challenge 69: Missing Socks"
challengeType: 29
dashedName: challenge-69
---

# --description--

Given an integer representing the number of pairs of socks you started with, and another integer representing how many wash cycles you have gone through, return the number of complete pairs of socks you currently have using the following constraints:

- Every 2 wash cycles, you lose a single sock.
- Every 3 wash cycles, you find a single missing sock.
- Every 5 wash cycles, a single sock is worn out and must be thrown away.
- Every 10 wash cycles, you buy a pair of socks.
- You can never have less than zero total socks.
- Rules can overlap. For example, on wash cycle 10, you will lose a single sock, throw away a single sock, and buy a new pair of socks.
- Return the number of complete pairs of socks.

# --hints--

`sock_pairs(2, 5)` should return `1`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sock_pairs(2, 5), 1)`)
}})
```

`sock_pairs(1, 2)` should return `0`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sock_pairs(1, 2), 0)`)
}})
```

`sock_pairs(5, 11)` should return `4`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sock_pairs(5, 11), 4)`)
}})
```

`sock_pairs(6, 25)` should return `3`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sock_pairs(6, 25), 3)`)
}})
```

`sock_pairs(1, 8)` should return `0`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(sock_pairs(1, 8), 0)`)
}})
```

# --seed--

## --seed-contents--

```py
def sock_pairs(pairs, cycles):

    return pairs
```

# --solutions--

```py
def sock_pairs(pairs, cycles):
    socks = pairs * 2

    for i in range(1, cycles + 1):
        if i % 2 == 0:
            socks -= 1
        if i % 3 == 0:
            socks += 1
        if i % 5 == 0:
            socks -= 1
        if i % 10 == 0:
            socks += 2

        if socks < 0:
            socks = 0

    return socks // 2
```
