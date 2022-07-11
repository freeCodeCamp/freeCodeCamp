---
id: 5900f4ed1000cf542c50ffff
title: 'Problem 383: Divisibility comparison between factorials'
challengeType: 1
forumTopicId: 302047
dashedName: problem-383-divisibility-comparison-between-factorials
---

# --description--

Let $f_5(n)$ be the largest integer $x$ for which $5^x$ divides $n$.

For example, $f_5(625\\,000) = 7$.

Let $T_5(n)$ be the number of integers $i$ which satisfy $f_5((2 \times i - 1)!) &lt; 2 \times f_5(i!)$ and $1 ≤ i ≤ n$.

It can be verified that $T_5({10}^3) = 68$ and $T_5({10}^9) = 2\\,408\\,210$.

Find $T_5({10}^{18})$.

# --hints--

`factorialDivisibilityComparison()` should return `22173624649806`.

```js
assert.strictEqual(factorialDivisibilityComparison(), 22173624649806);
```

# --seed--

## --seed-contents--

```js
function factorialDivisibilityComparison() {

  return true;
}

factorialDivisibilityComparison();
```

# --solutions--

```js
// solution required
```
