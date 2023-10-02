---
id: 5900f4b11000cf542c50ffc3
title: 'Problema 324: Costruire una torre'
challengeType: 1
forumTopicId: 301981
dashedName: problem-324-building-a-tower
---

# --description--

Sia $f(n)$ il numero di modi in cui si può riempire una torre $3×3×n$ con blocchi $2×1×1$. Hai il permesso di ruotare i blocchi in qualsiasi modo; tuttavia le rotazioni, le riflessioni ecc della torre stessa sono contati come distinti.

Per esempio (con $q = 100\\,000\\,007$):

$$\begin{align}   & f(2) = 229, \\\\
  & f(4) = 117\\,805, \\\\   & f(10)\bmod q = 96\\,149\\,360, \\\\
  & f({10}^3)\bmod q = 24\\,806\\,056, \\\\ & f({10}^6)\bmod q = 30\\,808\\,124. \end{align}$$

Trova $f({10}^{10000})\bmod 100\\,000\\,007$.

# --hints--

`buildingTower()` dovrebbe restituire `96972774`.

```js
assert.strictEqual(buildingTower(), 96972774);
```

# --seed--

## --seed-contents--

```js
function buildingTower() {

  return true;
}

buildingTower();
```

# --solutions--

```js
// solution required
```
