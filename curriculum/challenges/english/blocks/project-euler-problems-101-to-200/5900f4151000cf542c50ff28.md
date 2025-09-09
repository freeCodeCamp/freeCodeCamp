---
id: 5900f4151000cf542c50ff28
title: >-
  Problem 169: Exploring the number of different ways a number can be expressed
  as a sum of powers of 2
challengeType: 1
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Define $f(0)=1$ and $f(n)$ to be the number of different ways $n$ can be expressed as a sum of integer powers of 2 using each power no more than twice.

For example, $f(10)=5$ since there are five different ways to express 10:

$$\begin{align}
  & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\
  & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\
  & 2 + 8
\end{align}$$

What is $f({10}^{25})$?

# --hints--

`numberOfWaysToExpress()` should return `178653872807`.

```js
assert.strictEqual(numberOfWaysToExpress(), 178653872807);
```

# --seed--

## --seed-contents--

```js
function numberOfWaysToExpress() {

  return true;
}

numberOfWaysToExpress();
```

# --solutions--

```js
// solution required
```
