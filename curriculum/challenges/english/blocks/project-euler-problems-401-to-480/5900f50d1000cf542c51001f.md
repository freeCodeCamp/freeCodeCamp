---
id: 5900f50d1000cf542c51001f
title: 'Problem 417: Reciprocal cycles II'
challengeType: 1
forumTopicId: 302086
dashedName: problem-417-reciprocal-cycles-ii
---

# --description--

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

$$\begin{align}
  & \frac{1}{2}  = 0.5 \\\\
  & \frac{1}{3}  = 0.(3) \\\\
  & \frac{1}{4}  = 0.25 \\\\
  & \frac{1}{5}  = 0.2 \\\\
  & \frac{1}{6}  = 0.1(6) \\\\
  & \frac{1}{7}  = 0.(142857) \\\\
  & \frac{1}{8}  = 0.125 \\\\
  & \frac{1}{9}  = 0.(1) \\\\
  & \frac{1}{10} = 0.1 \\\\
\end{align}$$

Where $0.1(6)$ means $0.166666\ldots$, and has a 1-digit recurring cycle. It can be seen that $\frac{1}{7}$ has a 6-digit recurring cycle.

Unit fractions whose denominator has no other prime factors than 2 and/or 5 are not considered to have a recurring cycle. We define the length of the recurring cycle of those unit fractions as 0.

Let $L(n)$ denote the length of the recurring cycle of $\frac{1}{n}$. You are given that $\sum L(n)$ for $3 ≤ n ≤ 1\\,000\\,000$ equals $55\\,535\\,191\\,115$.

Find $\sum L(n)$ for $3 ≤ n ≤ 100\\,000\\,000$.

# --hints--

`reciprocalCyclesTwo()` should return `446572970925740`.

```js
assert.strictEqual(reciprocalCyclesTwo(), 446572970925740);
```

# --seed--

## --seed-contents--

```js
function reciprocalCyclesTwo() {

  return true;
}

reciprocalCyclesTwo();
```

# --solutions--

```js
// solution required
```
