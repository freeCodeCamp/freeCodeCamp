---
id: 5900f4521000cf542c50ff64
title: 'Problem 229: Four Representations using Squares'
challengeType: 1
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

Consider the number 3600. It is very special, because

$$\begin{align}
  & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\
  & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\
\end{align}$$

Similarly, we find that $88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$.

In 1747, Euler proved which numbers are representable as a sum of two squares. We are interested in the numbers $n$ which admit representations of all of the following four types:

$$\begin{align}
  & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\
  & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\
\end{align}$$

where the $a_k$ and $b_k$ are positive integers.

There are 75373 such numbers that do not exceed ${10}^7$.

How many such numbers are there that do not exceed $2 × {10}^9$?

# --hints--

`representationsUsingSquares()` should return `11325263`.

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

# --seed--

## --seed-contents--

```js
function representationsUsingSquares() {

  return true;
}

representationsUsingSquares();
```

# --solutions--

```js
// solution required
```
