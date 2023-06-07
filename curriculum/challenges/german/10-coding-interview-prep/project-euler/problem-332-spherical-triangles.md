---
id: 5900f4b91000cf542c50ffcb
title: 'Problem 332: Kugelförmige Dreiecke'
challengeType: 1
forumTopicId: 301990
dashedName: problem-332-spherical-triangles
---

# --description--

Ein sphärisches Dreieck ist eine Figur, die auf der Oberfläche einer Kugel durch drei große kreisrunde Bögen gebildet wird, die sich paarweise in drei Scheitelpunkten schneiden.

<img class="img-responsive center-block" alt="sphärisches Dreieck, das auf der Oberfläche einer Kugel gebildet wird" src="https://cdn.freecodecamp.org/curriculum/project-euler/spherical-triangles.jpg" style="background-color: white; padding: 10px;" />

Lasse $C(r)$ die Kugel mit dem Mittelpunkt (0,0,0) und dem Radius $r$ sein.

Lasse $Z(r)$ die Menge der Punkte auf der Oberfläche von $C(r)$ mit ganzzahligen Koordinaten sein.

Lasse $T(r)$ die Menge der sphärischen Dreiecke mit Scheitelpunkten in $Z(r)$ sein. Entartete sphärische Dreiecke, die von drei Punkten auf demselben großen Bogen gebildet werden, sind <u>nicht</u> in $T(r)$ enthalten.

Lasse $A(r)$ die Fläche des kleinsten sphärischen Dreiecks in $T(r)$ sein.

Zum Beispiel ist $A(14)$ 3,294040, gerundet auf sechs Dezimalstellen.

Finde $\displaystyle \sum_{r = 1}^{50} A(r)$. Gebe deine Antwort auf sechs Dezimalstellen gerundet an.

# --hints--

`sphericalTriangles()` sollte `2717.751525` zurückgeben.

```js
assert.strictEqual(sphericalTriangles(), 2717.751525);
```

# --seed--

## --seed-contents--

```js
function sphericalTriangles() {

  return true;
}

sphericalTriangles();
```

# --solutions--

```js
// solution required
```
