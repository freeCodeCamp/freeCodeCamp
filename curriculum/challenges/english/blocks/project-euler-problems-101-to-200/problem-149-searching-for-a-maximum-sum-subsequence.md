---
id: 5900f4021000cf542c50ff13
title: 'Problem 149: Searching for a maximum-sum subsequence'
challengeType: 1
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

Looking at the table below, it is easy to verify that the maximum possible sum of adjacent numbers in any direction (horizontal, vertical, diagonal or anti-diagonal) is $16 (= 8 + 7 + 1)$.

$$\begin{array}{|r|r|r|r|}
  \hline
  −2 &  5 &  3 & 2 \\\\ \hline
   9 & −6 &  5 & 1 \\\\ \hline
   3 &  2 &  7 & 3 \\\\ \hline
  −1 &  8 & −4 & 8 \\\\ \hline
\end{array}$$

Now, let us repeat the search, but on a much larger scale:

First, generate four million pseudo-random numbers using a specific form of what is known as a "Lagged Fibonacci Generator":

For $1 ≤ k ≤ 55$, $s_k = (100003 − 200003k + 300007{k}^3) \\ (modulo\\ 1000000) − 500000$.

For $56 ≤ k ≤ 4000000$, $s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (modulo\\ 1000000) − 500000$.

Thus, $s_{10} = −393027$ and $s_{100} = 86613$.

The terms of $s$ are then arranged in a 2000×2000 table, using the first 2000 numbers to fill the first row (sequentially), the next 2000 numbers to fill the second row, and so on.

Finally, find the greatest sum of (any number of) adjacent entries in any direction (horizontal, vertical, diagonal or anti-diagonal).

# --hints--

`maximumSubSequence()` should return `52852124`.

```js
assert.strictEqual(maximumSubSequence(), 52852124);
```

# --seed--

## --seed-contents--

```js
function maximumSubSequence() {

  return true;
}

maximumSubSequence();
```

# --solutions--

```js
// solution required
```
