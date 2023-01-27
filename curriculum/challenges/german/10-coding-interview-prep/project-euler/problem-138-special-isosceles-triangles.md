---
id: 5900f3f61000cf542c50ff09
title: 'Problem 130: Besondere gleichschenklige Dreiecke'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

Consider the isosceles triangle with base length, $b = 16$, and legs, $L = 17$.

<img class="img-responsive center-block" alt="gleichschenkliges Dreieck mit Kanten, die als L bezeichnet werden - zwei Kanten mit der gleichen Länge und der Basis des Dreiecks wie b; und Höhe des Dreiecks - h von der Basis des Dreiecks bis zum Winkel zwischen den L-Kanten" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

Mit Hilfe des Satzes des Pythagoras kannst du feststellen, dass die Höhe des Dreiecks $h = \sqrt{{17}^2 - 8^2} = 15$ ist, also um eins kleiner als die Basislänge.

Mit $b = 272$ und $L = 305$ erhalten wir $h = 273$, was eins mehr als die Basislänge ist, und dies ist das zweitkleinste gleichschenklige Dreieck mit der Eigenschaft, dass $h = b ± 1$ gilt.

Finde $\sum{L}$ für die zwölf kleinsten gleichschenkligen Dreiecke, für die $h = b ± 1$ gilt und $b$, $L$ positive ganze Zahlen sind.

# --hints--

`isoscelesTriangles()` sollte `1118049290473932` ausgeben.

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
