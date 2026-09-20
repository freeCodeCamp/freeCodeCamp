---
id: 5900f5231000cf542c510034
title: 'Problem 438: Integer part of polynomial equation''s solutions'
challengeType: 1
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

For an $n$-tuple of integers $t = (a_1, \ldots, a_n)$, let $(x_1, \ldots, x_n)$ be the solutions of the polynomial equation $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$.

Consider the following two conditions:

- $x_1, \ldots, x_n$ are all real.
- If $x_1, ..., x_n$ are sorted, $⌊x_i⌋ = i$ for $1 ≤ i ≤ n$. ($⌊·⌋:$ floor function.)

In the case of $n = 4$, there are 12 $n$-tuples of integers which satisfy both conditions.

We define $S(t)$ as the sum of the absolute values of the integers in $t$.

For $n = 4$ we can verify that $\sum S(t) = 2087$ for all $n$-tuples $t$ which satisfy both conditions.

Find $\sum S(t)$ for $n = 7$.

# --hints--

`polynomialIntegerPart()` should return `2046409616809`.

```js
assert.strictEqual(polynomialIntegerPart(), 2046409616809);
```

# --seed--

## --seed-contents--

```js
function polynomialIntegerPart() {

  return true;
}

polynomialIntegerPart();
```

# --solutions--

```js
// solution required
```
