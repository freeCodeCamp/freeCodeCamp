---
id: 6821ebf8237de8297eaee798
title: "JavaScript Challenge 22: Tribonacci Sequence"
challengeType: 28
dashedName: javascript-challenge-22
---

# --description--

The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. When starting with `0`, `0` and `1`, the first 10 numbers in the sequence are `0`, `0`, `1`, `1`, `2`, `4`, `7`, `13`, `24`, `44`.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

- Your function should handle sequences of any length greater than or equal to zero.
- If the length is zero, return an empty array.
- Note that the starting numbers are part of the sequence.

# --hints--

`tribonacciSequence([0, 0, 1], 20)` should return `[0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]`.

```js
assert.deepEqual(tribonacciSequence([0, 0, 1], 20), [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]);
```

`tribonacciSequence([21, 32, 43], 1)` should return `[21]`.


```js
assert.deepEqual(tribonacciSequence([21, 32, 43], 1), [21]);
```

`tribonacciSequence([0, 0, 1], 0)` should return `[]`.

```js
assert.deepEqual(tribonacciSequence([0, 0, 1], 0), []);
```

`tribonacciSequence([10, 20, 30], 2)` should return `[10, 20]`.

```js
assert.deepEqual(tribonacciSequence([10, 20, 30], 2), [10, 20]);
```

`tribonacciSequence([10, 20, 30], 3)` should return `[10, 20, 30]`.

```js
assert.deepEqual(tribonacciSequence([10, 20, 30], 3), [10, 20, 30]);
```

`tribonacciSequence([123, 456, 789], 8)` should return `[123, 456, 789, 1368, 2613, 4770, 8751, 16134]`.

```js
assert.deepEqual(tribonacciSequence([123, 456, 789], 8), [123, 456, 789, 1368, 2613, 4770, 8751, 16134]);
```

# --seed--

## --seed-contents--

```js
function tribonacciSequence(startSequence, length) {

  return length;
}
```

# --solutions--

```js
function tribonacciSequence(startSequence, length) {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];
  if (length === 2) return [startSequence[0], startSequence[1]];
  if (length === 3) return [...startSequence];

  const sequence = [...startSequence];
  while (sequence.length < length) {
    const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2] + + sequence[sequence.length - 3];
    sequence.push(nextValue);
  }
  return sequence;
}
```
