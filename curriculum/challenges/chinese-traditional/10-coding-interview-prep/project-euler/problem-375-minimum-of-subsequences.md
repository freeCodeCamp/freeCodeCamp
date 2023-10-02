---
id: 5900f4e41000cf542c50fff5
title: '問題 375：子序列的最小值'
challengeType: 1
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

Let $S_n$ be an integer sequence produced with the following pseudo-random number generator:

$$\begin{align}         S_0 & = 290\\,797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50\\,515\\,093 \end{align}$$

Let $A(i, j)$ be the minimum of the numbers $S_i, S_{i + 1}, \ldots, S_j$ for $i ≤ j$. Let $M(N) = \sum A(i, j)$ for $1 ≤ i ≤ j ≤ N$.

We can verify that $M(10) = 432\\,256\\,955$ and $M(10\\,000) = 3\\,264\\,567\\,774\\,119$.

Find $M(2\\,000\\,000\\,000)$.

# --hints--

`minimumOfSubsequences()` should return `7435327983715286000`.

```js
assert.strictEqual(minimumOfSubsequences(), 7435327983715286000);
```

# --seed--

## --seed-contents--

```js
function minimumOfSubsequences() {

  return true;
}

minimumOfSubsequences();
```

# --solutions--

```js
// solution required
```
