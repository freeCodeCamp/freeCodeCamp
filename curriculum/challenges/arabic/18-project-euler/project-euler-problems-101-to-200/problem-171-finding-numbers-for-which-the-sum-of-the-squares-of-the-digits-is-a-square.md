---
id: 5900f4181000cf542c50ff2a
title: >-
  Problem 171: Finding numbers for which the sum of the squares of the digits is a square
challengeType: 1
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

For a positive integer $n$, let $f(n)$ be the sum of the squares of the digits (in base 10) of $n$, e.g.

$$\begin{align}   & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\   & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

Find the last nine digits of the sum of all $n$, $0 &lt; n &lt; {10}^{20}$, such that $f(n)$ is a perfect square.

# --hints--

`lastDigitsSumOfPerfectSquare()` should return `142989277`.

```js
assert.strictEqual(lastDigitsSumOfPerfectSquare(), 142989277);
```

# --seed--

## --seed-contents--

```js
function lastDigitsSumOfPerfectSquare() {

  return true;
}

lastDigitsSumOfPerfectSquare();
```

# --solutions--

```js
// solution required
```
