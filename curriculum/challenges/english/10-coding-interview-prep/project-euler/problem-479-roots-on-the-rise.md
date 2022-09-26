---
id: 5900f54b1000cf542c51005d
title: 'Problem 479: Roots on the Rise'
challengeType: 1
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

Let $a_k$, $b_k$, and $c_k$ represent the three solutions (real or complex numbers) to the expression $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$.

For instance, for $k = 5$, we see that $\\{a_5, b_5, c_5\\}$ is approximately $\\{5.727244, -0.363622 + 2.057397i, -0.363622 - 2.057397i\\}$.

Let $S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ for all integers $p$, $k$ such that $1 ≤ p, k ≤ n$.

Interestingly, $S(n)$ is always an integer. For example, $S(4) = 51\\,160$.

Find $S({10}^6) \text{ modulo } 1\\,000\\,000\\,007$.

# --hints--

`rootsOnTheRise()` should return `191541795`.

```js
assert.strictEqual(rootsOnTheRise(), 191541795);
```

# --seed--

## --seed-contents--

```js
function rootsOnTheRise() {

  return true;
}

rootsOnTheRise();
```

# --solutions--

```js
// solution required
```
