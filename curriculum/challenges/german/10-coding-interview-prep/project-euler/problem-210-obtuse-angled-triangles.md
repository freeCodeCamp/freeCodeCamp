---
id: 5900f43e1000cf542c50ff50
title: 'Problem 210: Obtuse Angled Triangles'
challengeType: 1
forumTopicId: 301852
dashedName: problem-210-obtuse-angled-triangles
---

# --description--

Man betrachte die Menge $S(r)$ von Punkten ($x$,$y$) mit ganzzahligen Koordinaten, die $|x| + |y| ≤ r$ erfüllen.

Let $O$ be the point (0,0) and $C$ the point ($\frac{r}{4}$,$\frac{r}{4}$).

Lasse $N(r)$ die Anzahl der Punkte $B$ in $S(r)$ sein, sodass das Dreieck $OBC$ einen stumpfen Winkel hat, d.h. der größte Winkel $α$ erfüllt $90°&lt;α&lt;180°$.

So ist zum Beispiel $N(4)=24$ und $N(8)=100$.

Was ist $N(1\\.000\.000\.000)$?

# --hints--

`obtuseAngledTriangles()` sollte `1598174770174689500` zurückgeben.

```js
assert.strictEqual(obtuseAngledTriangles(), 1598174770174689500);
```

# --seed--

## --seed-contents--

```js
function obtuseAngledTriangles() {

  return true;
}

obtuseAngledTriangles();
```

# --solutions--

```js
// solution required
```
