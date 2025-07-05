---
id: 5900f54c1000cf542c51005e
title: 'Problem 478: Mixtures'
challengeType: 1
forumTopicId: 302155
dashedName: problem-478-mixtures
---

# --description--

Let us consider mixtures of three substances: $A$, $B$ and $C$. A mixture can be described by a ratio of the amounts of $A$, $B$, and $C$ in it, i.e., $(a : b : c)$. For example, a mixture described by the ratio (2 : 3 : 5) contains 20% $A$, 30% $B$ and 50% $C$.

For the purposes of this problem, we cannot separate the individual components from a mixture. However, we can combine different amounts of different mixtures to form mixtures with new ratios.

For example, say we have three mixtures with ratios (3 : 0 : 2), (3 : 6 : 11) and (3 : 3 : 4). By mixing 10 units of the first, 20 units of the second and 30 units of the third, we get a new mixture with ratio (6 : 5 : 9), since: ($10 \times \frac{3}{5} + 20 \times \frac{3}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{0}{5} + 20 \times \frac{6}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{2}{5} + 20 \times \frac{11}{20} + 30 \times \frac{4}{10}$) = (18 : 15 : 27) = (6 : 5 : 9)

However, with the same three mixtures, it is impossible to form the ratio (3 : 2 : 1), since the amount of $B$ is always less than the amount of $C$.

Let $n$ be a positive integer. Suppose that for every triple of integers $(a, b, c)$ with $0 ≤ a, b, c ≤ n$ and $gcd(a, b, c) = 1$, we have a mixture with ratio $(a : b : c)$. Let $M(n)$ be the set of all such mixtures.

For example, $M(2)$ contains the 19 mixtures with the following ratios:

{(0 : 0 : 1), (0 : 1 : 0), (0 : 1 : 1), (0 : 1 : 2), (0 : 2 : 1), (1 : 0 : 0), (1 : 0 : 1), (1 : 0 : 2), (1 : 1 : 0), (1 : 1 : 1), (1 : 1 : 2), (1 : 2 : 0), (1 : 2 : 1), (1 : 2 : 2), (2 : 0 : 1), (2 : 1 : 0), (2 : 1 : 1), (2 : 1 : 2), (2 : 2 : 1)}.

Let $E(n)$ be the number of subsets of $M(n)$ which can produce the mixture with ratio (1 : 1 : 1), i.e., the mixture with equal parts $A$, $B$ and $C$.

We can verify that $E(1) = 103$, $E(2) = 520\\,447$, $E(10)\bmod {11}^8 = 82\\,608\\,406$ and $E(500)\bmod {11}^8 = 13\\,801\\,403$.

Find $E(10\\,000\\,000)\bmod {11}^8$.

# --hints--

`mixtures()` should return `59510340`.

```js
assert.strictEqual(mixtures(), 59510340);
```

# --seed--

## --seed-contents--

```js
function mixtures() {

  return true;
}

mixtures();
```

# --solutions--

```js
// solution required
```
