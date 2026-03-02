---
id: 5900f49d1000cf542c50ffaf
title: 'Problem 304: Primonacci'
challengeType: 1
forumTopicId: 301958
dashedName: problem-304-primonacci
---

# --description--

For any positive integer $n$ the function $\text{next_prime}(n)$ returns the smallest prime $p$ such that $p > n$.

The sequence $a(n)$ is defined by: $a(1) = \text{next_prime}({10}^{14})$ and $a(n) = \text{next_prime}(a(n - 1))$ for $n > 1$.

The fibonacci sequence $f(n)$ is defined by: $f(0) = 0$, $f(1) = 1$ and $f(n) = f(n - 1) + f(n - 2)$ for $n > 1$.

The sequence $b(n)$ is defined as $f(a(n))$.

Find $\sum b(n)$ for $1≤n≤100\\,000$. Give your answer $\bmod 1\\,234\\,567\\,891\\,011$.

# --hints--

`primonacci()` should return `283988410192`.

```js
assert.strictEqual(primonacci(), 283988410192);
```

# --seed--

## --seed-contents--

```js
function primonacci() {

  return true;
}

primonacci();
```

# --solutions--

```js
// solution required
```
