---
id: 5900f4381000cf542c50ff4a
title: 'Problem 203: Squarefree Binomial Coefficients'
challengeType: 1
forumTopicId: 301844
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

The binomial coefficients $\displaystyle\binom{n}{k}$ can be arranged in triangular form, Pascal's triangle, like this:

$$\begin{array}{ccccccccccccccc}
   &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\
   &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\
   &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\
   & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\
   &   &   &   &    &    &    & \ldots
\end{array}$$

It can be seen that the first eight rows of Pascal's triangle contain twelve distinct numbers: 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21 and 35.

A positive integer n is called squarefree if no square of a prime divides n. Of the twelve distinct numbers in the first eight rows of Pascal's triangle, all except 4 and 20 are squarefree. The sum of the distinct squarefree numbers in the first eight rows is 105.

Find the sum of the distinct squarefree numbers in the first 51 rows of Pascal's triangle.

# --hints--

`squarefreeBinomialCoefficients()` should return `34029210557338`.

```js
assert.strictEqual(squarefreeBinomialCoefficients(), 34029210557338);
```

# --seed--

## --seed-contents--

```js
function squarefreeBinomialCoefficients() {

  return true;
}

squarefreeBinomialCoefficients();
```

# --solutions--

```js
// solution required
```
