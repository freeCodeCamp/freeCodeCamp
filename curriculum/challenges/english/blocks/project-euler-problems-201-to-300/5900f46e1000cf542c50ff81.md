---
id: 5900f46e1000cf542c50ff81
title: 'Problem 258: A lagged Fibonacci sequence'
challengeType: 1
forumTopicId: 301906
dashedName: problem-258-a-lagged-fibonacci-sequence
---

# --description--

A sequence is defined as:

- $g_k = 1$, for $0 ≤ k ≤ 1999$
- $g_k = g_{k - 2000} + g_{k - 1999}$, for $k ≥ 2000$.

Find $g_k$ mod 20092010 for $k = {10}^{18}$.

# --hints--

`laggedFibonacciSequence()` should return `12747994`.

```js
assert.strictEqual(laggedFibonacciSequence(), 12747994);
```

# --seed--

## --seed-contents--

```js
function laggedFibonacciSequence() {

  return true;
}

laggedFibonacciSequence();
```

# --solutions--

```js
// solution required
```
