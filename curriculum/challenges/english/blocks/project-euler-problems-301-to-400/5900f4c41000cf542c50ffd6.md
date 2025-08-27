---
id: 5900f4c41000cf542c50ffd6
title: 'Problem 343: Fractional Sequences'
challengeType: 1
forumTopicId: 302002
dashedName: problem-343-fractional-sequences
---

# --description--

For any positive integer $k$, a finite sequence $a_i$ of fractions $\frac{x_i}{y_i}$ is defined by:

- $a_1 = \displaystyle\frac{1}{k}$ and
- $a_i = \displaystyle\frac{(x_{i - 1} + 1)}{(y_{i - 1} - 1)}$ reduced to lowest terms for $i > 1$.

When $a_i$ reaches some integer $n$, the sequence stops. (That is, when $y_i = 1$.)

Define $f(k) = n$.

For example, for $k = 20$:

$$\frac{1}{20} → \frac{2}{19} → \frac{3}{18} = \frac{1}{6} → \frac{2}{5} → \frac{3}{4} → \frac{4}{3} → \frac{5}{2} → \frac{6}{1} = 6$$

So $f(20) = 6$.

Also $f(1) = 1$, $f(2) = 2$, $f(3) = 1$ and $\sum f(k^3) = 118\\,937$ for $1 ≤ k ≤ 100$.

Find $\sum f(k^3)$ for $1 ≤ k ≤ 2 × {10}^6$.

# --hints--

`fractionalSequences()` should return `269533451410884200`.

```js
assert.strictEqual(fractionalSequences(), 269533451410884200);
```

# --seed--

## --seed-contents--

```js
function fractionalSequences() {

  return true;
}

fractionalSequences();
```

# --solutions--

```js
// solution required
```
