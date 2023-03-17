---
id: 5900f53d1000cf542c510050
title: 'Problem 465: Polare Polygone'
challengeType: 1
forumTopicId: 302140
dashedName: problem-465-polar-polygons
---

# --description--

Der Kern eines Polygons wird durch die Menge der Punkte definiert, von denen aus der gesamte Rand des Polygons sichtbar ist. Wir definieren ein polares Polygon als ein Polygon, bei dem der Ursprung genau in seinem Kern enthalten ist.

Bei diesem Problem kann ein Polygon kollinear aufeinanderfolgende Scheitelpunkte haben. Ein Polygon kann sich jedoch weder selbst schneiden noch eine Fläche von Null haben.

Zum Beispiel ist nur die erste der folgenden Abbildungen ein polares Polygon (die Kerne der zweiten, dritten und vierten enthalten nicht unbedingt den Ursprung und die fünfte hat überhaupt keinen Kern):

<img class="img-responsive center-block" alt="fünf Beispielpolygone" src="https://cdn.freecodecamp.org/curriculum/project-euler/polar-polygons.png" style="background-color: white; padding: 10px;" />

Beachte, dass das erste Polygon drei aufeinanderfolgende kollineare Scheitelpunkte hat.

Lasse $P(n)$ die Anzahl der polaren Vielecke sein, bei denen die Eckpunkte $(x, y)$ ganzzahlige Koordinaten haben, deren Absolutwerte nicht größer als $n$ sind.

Beachte, dass Polygone als unterschiedlich gezählt werden sollten, wenn sie unterschiedliche Kanten haben, auch wenn sie dieselbe Fläche umschließen. So unterscheidet sich beispielsweise das Polygon mit den Eckpunkten [(0,0), (0,3), (1,1), (3,0)] von dem Polygon mit den Eckpunkten [(0,0), (0,3), (1,1), (3,0), (1,0)].

Zum Beispiel $P(1) = 131$, $P(2) = 1\\,648\\,531$, $P(3) = 1\\,099\\,461\\,296\\,175$ und $P(343)\bmod 1\\,000\\,000\\,007 = 937\\,293\\,740$.

Finde $P(7^{13})\bmod 1\\,000\\,000\\,007$.

# --hints--

`polarPolygons()` sollte `585965659` zurückgeben.

```js
assert.strictEqual(polarPolygons(), 585965659);
```

# --seed--

## --seed-contents--

```js
function polarPolygons() {

  return true;
}

polarPolygons();
```

# --solutions--

```js
// solution required
```
