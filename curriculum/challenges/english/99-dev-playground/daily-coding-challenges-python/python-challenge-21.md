---
id: 6821ecb9237de8297eaee7a3
title: "Python Challenge 21: Fibonacci Sequence"
challengeType: 29
dashedName: python-challenge-21
---

# --description--

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with `0` and `1`, the first 10 numbers in the sequence are `0`, `1`, `1`, `2`, `3`, `5`, `8`, `13`, `21`, `34`.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

- Your function should handle sequences of any length greater than or equal to zero.
- If the length is zero, return an empty array.
- Note that the starting numbers are part of the sequence.

# --hints--


`fibonacci_sequence([0, 1], 20)` should return `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fibonacci_sequence([0, 1], 20), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181])`)
}})
```

`fibonacci_sequence([21, 32], 1)` should return `[21]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fibonacci_sequence([21, 32], 1), [21])`)
}})
```

`fibonacci_sequence([0, 1], 0)` should return `[]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fibonacci_sequence([0, 1], 0), [])`)
}})
```

`fibonacci_sequence([10, 20], 2)` should return `[10, 20]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fibonacci_sequence([10, 20], 2), [10, 20])`)
}})
```

`fibonacci_sequence([123456789, 987654321], 5)` should return `[123456789, 987654321, 1111111110, 2098765431, 3209876541]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(fibonacci_sequence([123456789, 987654321], 5), [123456789, 987654321, 1111111110, 2098765431, 3209876541])`)
}})
```

# --seed--

## --seed-contents--

```py
def fibonacci_sequence(start_sequence, length):

    return length
```

# --solutions--

```py
def fibonacci_sequence(start_sequence, length):
    if length == 0:
        return []
    if length == 1:
        return [start_sequence[0]]
    if length == 2:
        return start_sequence[:]

    sequence = start_sequence[:]
    while len(sequence) < length:
        next_value = sequence[-1] + sequence[-2]
        sequence.append(next_value)

    return sequence
```
