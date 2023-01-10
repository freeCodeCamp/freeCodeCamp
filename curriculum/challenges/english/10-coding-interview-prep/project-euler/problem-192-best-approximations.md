---
id: 5900f42c1000cf542c50ff3f
title: 'Problem 192: Best Approximations'
challengeType: 1
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

Let $x$ be a real number.

A best approximation to $x$ for the denominator bound $d$ is a rational number $\frac{r}{s}$ in reduced form, with $s ≤ d$, such that any rational number which is closer to $x$ than $\frac{r}{s}$ has a denominator larger than $d$:

$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$

For example, the best approximation to $\sqrt{13}$ for the denominator bound $20$ is $\frac{18}{5}$ and the best approximation to $\sqrt{13}$ for the denominator bound $30$ is $\frac{101}{28}$.

Find the sum of all denominators of the best approximations to $\sqrt{n}$ for the denominator bound ${10}^{12}$, where $n$ is not a perfect square and $1 &lt; n ≤ 100000$.

# --hints--

`bestApproximations()` should return `57060635927998344`.

```js
assert.strictEqual(bestApproximations(), 57060635927998344);
```

# --seed--

## --seed-contents--

```js
function bestApproximations() {

  return true;
}

bestApproximations();
```

# --solutions--

```js
// solution required
```
