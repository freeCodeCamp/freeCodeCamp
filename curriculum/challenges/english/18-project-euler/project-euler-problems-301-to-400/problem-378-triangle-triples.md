---
id: 5900f4e61000cf542c50fff9
title: 'Problem 378: Triangle Triples'
challengeType: 1
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

Let $T(n)$ be the $n^{\text{th}}$ triangle number, so $T(n) = \frac{n(n + 1)}{2}$.

Let $dT(n)$ be the number of divisors of $T(n)$. E.g.: $T(7) = 28$ and $dT(7) = 6$.

Let $Tr(n)$ be the number of triples ($i$, $j$, $k$) such that $1 ≤ i &lt; j &lt; k ≤ n$ and $dT(i) > dT(j) > dT(k)$. $Tr(20) = 14$, $Tr(100) = 5\\,772$ and $Tr(1000) = 11\\,174\\,776$.

Find $Tr(60\\,000\\,000)$. Give the last 18 digits of your answer.

# --hints--

`triangleTriples()` should return `147534623725724700`.

```js
assert.strictEqual(triangleTriples(), 147534623725724700);
```

# --seed--

## --seed-contents--

```js
function triangleTriples() {

  return true;
}

triangleTriples();
```

# --solutions--

```js
// solution required
```
