---
id: 5900f4461000cf542c50ff59
title: 'Problem 218: Perfekte rechtwinklige Dreiecke'
challengeType: 1
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

Betrachte das rechtwinklige Dreieck mit den Seiten $a=7$, $b=24$ und $c=25$.

Die Fläche dieses Dreiecks beträgt 84, was durch die perfekten Zahlen 6 und 28 teilbar ist.

Außerdem ist es ein primitives rechtwinkliges Dreieck, wie $gcd(a,b) = 1$ und $gcd(b,c) = 1$.

Auch $c$ ist ein perfektes Quadrat.

Wir nennen ein rechtwinkliges Dreieck perfekt, wenn:

- es ist ein primitives rechtwinkliges Dreieck
- seine Hypotenuse ist ein perfektes Quadrat

Wir nennen ein rechtwinkliges Dreieck super-perfekt, wenn:

- es ist ein perfektes rechtwinkliges Dreieck
- seine Fläche ist ein Vielfaches der perfekten Zahlen 6 und 28.

Wie viele perfekte rechtwinklige Dreiecke mit $c ≤ {10}^{16}$ gibt es, die nicht super-perfekt sind?

# --hints--

`perfectRightAngledTriangles()` sollte `0` zurückgeben.

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

# --seed--

## --seed-contents--

```js
function perfectRightAngledTriangles() {

  return true;
}

perfectRightAngledTriangles();
```

# --solutions--

```js
// solution required
```
