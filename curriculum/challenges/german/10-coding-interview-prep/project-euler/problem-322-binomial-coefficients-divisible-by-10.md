---
id: 5900f4af1000cf542c50ffc1
title: 'Problem 322: Binomialkoeffizienten teilbar durch 10'
challengeType: 1
forumTopicId: 301979
dashedName: problem-322-binomial-coefficients-divisible-by-10
---

# --description--

Lasse $T(m, n)$ die Anzahl der Binomialkoeffizienten ${}^iC_n$ sein, die durch 10 teilbar sind für $n ≤ i &lt; m$ ($i$, $m$ und $n$ sind positive ganze Zahlen).

Folgendes ist gegeben: $T({10}^9, {10}^7 - 10) = 989\\,697\\,000$.

Finde $T({10}^{18}, {10}^{12} - 10)$.

# --hints--

`binomialCoefficientsDivisibleBy10()` sollte `999998760323314000` zurückgeben.

```js
assert.strictEqual(binomialCoefficientsDivisibleBy10(), 999998760323314000);
```

# --seed--

## --seed-contents--

```js
function binomialCoefficientsDivisibleBy10() {

  return true;
}

binomialCoefficientsDivisibleBy10();
```

# --solutions--

```js
// solution required
```
