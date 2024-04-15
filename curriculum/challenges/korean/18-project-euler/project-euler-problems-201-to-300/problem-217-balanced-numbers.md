---
id: 5900f4461000cf542c50ff58
title: 'Problem 217: Balanced Numbers'
challengeType: 1
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

A positive integer with $k$ (decimal) digits is called balanced if its first $⌈\frac{k}{2}⌉$ digits sum to the same value as its last $⌈\frac{k}{2}⌉$ digits, where $⌈x⌉$, pronounced ceiling of $x$, is the smallest integer $≥ x$, thus $⌈π⌉ = 4$ and $⌈5⌉ = 5$.

So, for example, all palindromes are balanced, as is 13722.

Let $T(n)$ be the sum of all balanced numbers less than $10^n$.

Thus: $T(1) = 45$, $T(2) = 540$ and $T(5) = 334\\,795\\,890$.

Find $T(47)\\,mod\\,3^{15}$

# --hints--

`balancedNumbers()` should return `6273134`.

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

# --seed--

## --seed-contents--

```js
function balancedNumbers() {

  return true;
}

balancedNumbers();
```

# --solutions--

```js
// solution required
```
