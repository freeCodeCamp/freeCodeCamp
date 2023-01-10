---
id: 5900f4421000cf542c50ff55
title: '问题 214：Totient 链'
challengeType: 1
forumTopicId: 301856
dashedName: problem-214-totient-chains
---

# --description--

Let $φ$ be Euler's totient function, i.e. for a natural number $n$, $φ(n)$ is the number of $k$, $1 ≤ k ≤ n$, for which $gcd(k,n) = 1$.

By iterating $φ$, each positive integer generates a decreasing chain of numbers ending in 1. E.g. if we start with 5 the sequence 5,4,2,1 is generated. Here is a listing of all chains with length 4:

$$\begin{align}    5,4,2,1 & \\\\
   7,6,2,1 & \\\\    8,4,2,1 & \\\\
   9,6,2,1 & \\\\   10,4,2,1 & \\\\
  12,4,2,1 & \\\\   14,6,2,1 & \\\\
  18,6,2,1 & \end{align}$$

Only two of these chains start with a prime, their sum is 12.

What is the sum of all primes less than $40\\,000\\,000$ which generate a chain of length 25?

# --hints--

`totientChains()` should return `1677366278943`.

```js
assert.strictEqual(totientChains(), 1677366278943);
```

# --seed--

## --seed-contents--

```js
function totientChains() {

  return true;
}

totientChains();
```

# --solutions--

```js
// solution required
```
