---
id: 5900f4601000cf542c50ff73
title: 'Problem 243: Resilience'
challengeType: 1
forumTopicId: 301890
dashedName: problem-243-resilience
---

# --description--

A positive fraction whose numerator is less than its denominator is called a proper fraction.

For any denominator, $d$, there will be $d−1$ proper fractions; for example, with $d = 12$:

$$\frac{1}{12}, \frac{2}{12}, \frac{3}{12}, \frac{4}{12}, \frac{5}{12}, \frac{6}{12}, \frac{7}{12}, \frac{8}{12}, \frac{9}{12}, \frac{10}{12}, \frac{11}{12}$$

We shall call a fraction that cannot be cancelled down a resilient fraction.

Furthermore we shall define the resilience of a denominator, $R(d)$, to be the ratio of its proper fractions that are resilient; for example, $R(12) = \frac{4}{11}$.

In fact, $d = 12$ is the smallest denominator having a resilience $R(d) &lt; \frac{4}{10}$.

Find the smallest denominator $d$, having a resilience $R(d) &lt; \frac{15\\,499}{94\\,744}$.

# --hints--

`resilience()` should return `892371480`.

```js
assert.strictEqual(resilience(), 892371480);
```

# --seed--

## --seed-contents--

```js
function resilience() {

  return true;
}

resilience();
```

# --solutions--

```js
// solution required
```
