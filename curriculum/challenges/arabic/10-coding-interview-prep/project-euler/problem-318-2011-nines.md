---
id: 5900f4ab1000cf542c50ffbd
title: 'Problem 318: 2011 nines'
challengeType: 1
forumTopicId: 301974
dashedName: problem-318-2011-nines
---

# --description--

Consider the real number $\sqrt{2} + \sqrt{3}$.

When we calculate the even powers of $\sqrt{2} + \sqrt{3}$ we get:

$$\begin{align}   & {(\sqrt{2} + \sqrt{3})}^2 = 9.898979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^4 = 97.98979485566356\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^6 = 969.998969071069263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^8 = 9601.99989585502907\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{10} = 95049.999989479221\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{12} = 940897.9999989371855\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{14} = 9313929.99999989263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{16} = 92198401.99999998915\ldots \\\\ \end{align}$$

It looks like that the number of consecutive nines at the beginning of the fractional part of these powers is non-decreasing. In fact it can be proven that the fractional part of ${(\sqrt{2} + \sqrt{3})}^{2n}$ approaches 1 for large $n$.

Consider all real numbers of the form $\sqrt{p} + \sqrt{q}$ with $p$ and $q$ positive integers and $p &lt; q$, such that the fractional part of ${(\sqrt{p} + \sqrt{q})}^{2n}$ approaches 1 for large $n$.

Let $C(p,q,n)$ be the number of consecutive nines at the beginning of the fractional part of ${(\sqrt{p} + \sqrt{q})}^{2n}$.

Let $N(p,q)$ be the minimal value of $n$ such that $C(p,q,n) ≥ 2011$.

Find $\sum N(p,q)$ for $p + q ≤ 2011$.

# --hints--

`twoThousandElevenNines()` should return `709313889`.

```js
assert.strictEqual(twoThousandElevenNines(), 709313889);
```

# --seed--

## --seed-contents--

```js
function twoThousandElevenNines() {

  return true;
}

twoThousandElevenNines();
```

# --solutions--

```js
// solution required
```
