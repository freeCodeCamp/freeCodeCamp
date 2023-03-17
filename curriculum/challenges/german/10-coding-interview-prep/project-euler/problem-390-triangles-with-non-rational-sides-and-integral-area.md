---
id: 5900f4f21000cf542c510005
title: 'Problem 390: Dreiecke mit nicht ganzzahligen Seiten und ganzzahliger Fläche'
challengeType: 1
forumTopicId: 302055
dashedName: problem-390-triangles-with-non-rational-sides-and-integral-area
---

# --description--

Betrachte das Dreieck mit den Seiten $\sqrt{5}$, $\sqrt{65}$ und $\sqrt{68}$. Es kann gezeigt werden, dass dieses Dreieck den Flächeninhalt 9 hat.

$S(n)$ ist die Summe der Flächen aller Dreiecke mit den Seiten $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$ und $\sqrt{b^2 + c^2}$ (für positive ganze Zahlen $b$ und $c$), deren Flächeninhalt $n$ nicht überschreitet.

Das Beispieldreieck hat $b = 2$ und $c = 8$.

$S({10}^6) = 18\\,018\\,206$.

Finde $S({10}^{10})$.

# --hints--

`nonRationalSidesAndIntegralArea()` sollte `2919133642971` zurückgeben.

```js
assert.strictEqual(nonRationalSidesAndIntegralArea(), 2919133642971);
```

# --seed--

## --seed-contents--

```js
function nonRationalSidesAndIntegralArea() {

  return true;
}

nonRationalSidesAndIntegralArea();
```

# --solutions--

```js
// solution required
```
