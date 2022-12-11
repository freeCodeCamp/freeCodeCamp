---
id: 5900f4701000cf542c50ff82
title: 'Problem 259: Reachable Numbers'
challengeType: 1
forumTopicId: 301907
dashedName: problem-259-reachable-numbers
---

# --description--

A positive integer will be called reachable if it can result from an arithmetic expression obeying the following rules:

- Uses the digits 1 through 9, in that order and exactly once each.
- Any successive digits can be concatenated (for example, using the digits 2, 3 and 4 we obtain the number 234).
- Only the four usual binary arithmetic operations (addition, subtraction, multiplication and division) are allowed.
- Each operation can be used any number of times, or not at all.
- Unary minus is not allowed.
- Any number of (possibly nested) parentheses may be used to define the order of operations.

For example, 42 is reachable, since $\frac{1}{23} \times ((4 \times 5) - 6) \times (78 - 9) = 42$.

What is the sum of all positive reachable integers?

# --hints--

`reachableNumbers()` should return `20101196798`.

```js
assert.strictEqual(reachableNumbers(), 20101196798);
```

# --seed--

## --seed-contents--

```js
function reachableNumbers() {

  return true;
}

reachableNumbers();
```

# --solutions--

```js
// solution required
```
