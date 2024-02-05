---
id: 5900f5111000cf542c510023
title: 'Problem 420: 2x2 positive integer matrix'
challengeType: 1
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

A positive integer matrix is a matrix whose elements are all positive integers.

Some positive integer matrices can be expressed as a square of a positive integer matrix in two different ways. 这是一个例子：

$$\begin{pmatrix}   40 & 12 \\\\
  48 & 40 \end{pmatrix} =
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2 \end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6 \end{pmatrix}}^2$$

We define $F(N)$ as the number of the 2x2 positive integer matrices which have a trace less than N and which can be expressed as a square of a positive integer matrix in two different ways.

We can verify that $F(50) = 7$ and $F(1000) = 1019$.

Find $F({10}^7)$.

# --hints--

`positiveIntegerMatrix()` should return `145159332`.

```js
assert.strictEqual(positiveIntegerMatrix(), 145159332);
```

# --seed--

## --seed-contents--

```js
function positiveIntegerMatrix() {

  return true;
}

positiveIntegerMatrix();
```

# --solutions--

```js
// solution required
```
