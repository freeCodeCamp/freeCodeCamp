---
id: 5900f4b11000cf542c50ffc3
title: 'Problem 324: Einen Turm bauen'
challengeType: 1
forumTopicId: 301981
dashedName: problem-324-building-a-tower
---

# --description--

$f(n)$ sei die Anzahl der Möglichkeiten, wie man einen $3×3×n$-Turm mit Blöcken von $2×1×1$ bauen kann. Die Blöcke dürfen beliebig gedreht werden; Drehungen, Spiegelungen usw. des Turms selbst werden jedoch gesondert gezählt.

Zum Beispiel (mit $q = 100\\,000\\,007$):

$$\begin{align}   & f(2) = 229, \\\\
  & f(4) = 117\\,805, \\\\   & f(10)\bmod q = 96\\,149\\,360, \\\\
  & f({10}^3)\bmod q = 24\\,806\\,056, \\\\ & f({10}^6)\bmod q = 30\\,808\\,124. \end{align}$$

Finde $f({10}^{10000})\bmod 100\\,000\\,007$.

# --hints--

`buildingTower()` sollte `96972774` zurückgeben.

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
