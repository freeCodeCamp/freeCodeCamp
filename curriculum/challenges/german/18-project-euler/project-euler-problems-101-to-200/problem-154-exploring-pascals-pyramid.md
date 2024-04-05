---
id: 5900f4071000cf542c50ff19
title: 'Problem 154: Erforschung der Pascalschen Pyramide'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

A triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.

<img class="img-responsive center-block" alt="dreieckige Pyramide konstruiert mit kugelförmige Kugeln mit vier Ebenen" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

Dann berechnen wir die Anzahl der Pfade, die vom Scheitelpunkt zu jeder Position führen: Ein Pfad beginnt am Scheitelpunkt und verläuft nach unten zu einer der drei Kugeln direkt unter der aktuellen Position. Folglich ist die Anzahl der Wege, um eine bestimmte Position zu erreichen, die Summe der Zahlen direkt darüber (je nach Position gibt es bis zu drei Zahlen darüber).

Das Ergebnis ist die Pascalsche Pyramide, und die Zahlen auf jeder Ebene n sind die Koeffizienten der Trinomialentwicklung ${(x + y + z)}^n$.

Wie viele Koeffizienten in der Entwicklung von ${(x + y + z)}^{200000}$ sind Vielfache von ${10}^{12}$?

# --hints--

`pascalsPyramid()` sollte `479742450` zurückgeben.

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```
