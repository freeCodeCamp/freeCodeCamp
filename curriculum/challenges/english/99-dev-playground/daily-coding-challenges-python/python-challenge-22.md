---
id: 6821ecbf237de8297eaee7a4
title: "Python Challenge 22: Tribonacci Sequence"
challengeType: 29
dashedName: python-challenge-22
---

# --description--

The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with `0`, `0` and `1`, the first 10 numbers in the sequence are `0`, `0`, `1`, `1`, `2`, `4`, `7`, `13`, `24`, `44`.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

- Your function should handle sequences of any length greater than or equal to zero.
- If the length is zero, return an empty array.
- Note that the starting numbers are part of the sequence.

# --hints--

`tribonacci_sequence([0, 0, 1], 20)` should return `[0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tribonacci_sequence([0, 0, 1], 20), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513])`)
}})
```

`tribonacci_sequence([21, 32, 43], 1)` should return `[21]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tribonacci_sequence([21, 32, 43], 1), [21])`)
}})
```

`tribonacci_sequence([0, 0, 1], 0)` should return `[]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tribonacci_sequence([0, 0, 1], 0), [])`)
}})
```

`tribonacci_sequence([10, 20, 30], 2)` should return `[10, 20]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tribonacci_sequence([10, 20, 30], 2), [10, 20])`)
}})
```

`tribonacci_sequence([10, 20, 30], 3)` should return `[10, 20, 30]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tribonacci_sequence([10, 20, 30], 3), [10, 20, 30])`)
}})
```

`tribonacci_sequence([123, 456, 789], 8)` should return `[123, 456, 789, 1368, 2613, 4770, 8751, 16134]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(tribonacci_sequence([123, 456, 789], 8), [123, 456, 789, 1368, 2613, 4770, 8751, 16134])`)
}})
```

# --seed--

## --seed-contents--

```py
def tribonacci_sequence(start_sequence, length):

    return length
```

# --solutions--

```py
def tribonacci_sequence(start_sequence, length):
    if length == 0:
        return []
    if length == 1:
        return [start_sequence[0]]
    if length == 2:
        return [start_sequence[0], start_sequence[1]]
    if length == 3:
        return start_sequence[:]

    sequence = start_sequence[:]
    while len(sequence) < length:
        next_value = sequence[-1] + sequence[-2] + sequence[-3]
        sequence.append(next_value)

    return sequence
```
