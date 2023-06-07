---
id: 5900f4911000cf542c50ffa3
title: 'Problem 292: Pythagoras Vielecke'
challengeType: 1
forumTopicId: 301944
dashedName: problem-292-pythagorean-polygons
---

# --description--

Wir definieren ein pythagoreisches Vieleck als ein konvexes Vieleck mit den folgenden Eigenschaften:

- es gibt mindestens drei Scheitelpunkte,
- es sind keine drei Scheitelpunkte aufeinander ausgerichtet,
- jeder Scheitelpunkt hat ganzzahlige Koordinaten,
- jede Kante hat eine ganzzahlige Länge.

Definiere für eine gegebene ganze Zahl $n$ $P(n)$ als die Anzahl der verschiedenen pythagoreische Vielecke, deren Umfang $≤ n$ ist.

Pythagoreische Vielecke sollten als verschieden betrachtet werden, solange keines eine Übersetzung eines anderen ist.

Es ist gegeben, dass $P(4) = 1$, $P(30) = 3655$ und $P(60) = 891045$.

Finde $P(120)$.

# --hints--

`pythagoreanPolygons()` sollte `3600060866` zurückgeben.

```js
assert.strictEqual(pythagoreanPolygons(), 3600060866);
```

# --seed--

## --seed-contents--

```js
function pythagoreanPolygons() {

  return true;
}

pythagoreanPolygons();
```

# --solutions--

```js
// solution required
```
