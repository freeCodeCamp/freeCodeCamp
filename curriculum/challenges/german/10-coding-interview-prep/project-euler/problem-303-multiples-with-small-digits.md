---
id: 5900f49b1000cf542c50ffae
title: 'Problem 303: Vielfache mit kleinen Ziffern'
challengeType: 1
forumTopicId: 301957
dashedName: problem-303-multiples-with-small-digits
---

# --description--

Definiere für einen positiven Integer $n$ $f(n)$ als das kleinste positive Vielfache von $n$, das, zur Basis 10 geschrieben, nur Ziffern $≤ 2$ enthält.

Also $f(2) = 2$, $f(3) = 12$, $f(7) = 21$, $f(42) = 210$, $f(89) = 1\,121\,222$.

Außerdem ist $\displaystyle\sum_{n = 1}^{100} \frac{f(n)}{n} = 11\\,363\\,107$.

Finde $\displaystyle\sum_{n = 1}^{10\\,000} \frac{f(n)}{n}$.

# --hints--

`multiplesWithSmallDigits()` sollte `1111981904675169` zurückgeben.

```js
assert.strictEqual(multiplesWithSmallDigits(), 1111981904675169);
```

# --seed--

## --seed-contents--

```js
function multiplesWithSmallDigits() {

  return true;
}

multiplesWithSmallDigits();
```

# --solutions--

```js
// solution required
```
