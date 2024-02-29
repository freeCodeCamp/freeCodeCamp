---
id: 5900f4f41000cf542c510007
title: 'Problem 392: Enmeshed unit circle'
challengeType: 1
forumTopicId: 302057
dashedName: problem-392-enmeshed-unit-circle
---

# --description--

A rectilinear grid is an orthogonal grid where the spacing between the gridlines does not have to be equidistant.

Ein Beispiel für ein solches Gitter ist logarithmisches Millimeterpapier.

Betrachte die geradlinigen Gitter im kartesischen Koordinatensystem mit den folgenden Eigenschaften:

- The gridlines are parallel to the axes of the Cartesian coordinate system.
- There are $N + 2$ vertical and $N + 2$ horizontal gridlines. Hence there are $(N + 1) \times (N + 1)$ rectangular cells.
- Die Gleichungen der beiden äußeren vertikalen Gitterlinien sind $x = -1$ und $x = 1$.
- Die Gleichungen der beiden äußeren horizontalen Gitterlinien sind $y = -1$ und $y = 1$.
- Die Gitterzellen sind rot gefärbt, wenn sie sich mit dem Einheitskreis überschneiden, ansonsten schwarz.

Für dieses Problem möchten wir, dass du die Positionen der verbleibenden $N$ inneren horizontalen und $N$ inneren vertikalen Gitterlinien so finden, dass die von den roten Zellen belegte Fläche minimiert wird.

E.g. hier ist ein Bild der Lösung für $N = 10$:

<img class="img-responsive center-block" alt="die Lösung für N = 10" src="https://cdn.freecodecamp.org/curriculum/project-euler/enmeshed-unit-circle.png" style="background-color: white; padding: 10px;" />

Die von den roten Zellen eingenommene Fläche beträgt für $N = 10$ gerundet auf 10 Nachkommastellen 3,3469640797.

Find the positions for $N = 400$. Gib als Antwort die Fläche an, die von den roten Zellen eingenommen wird, gerundet auf 10 Stellen hinter dem Komma.

# --hints--

`enmeshedUnitCircle()` should return `3.1486734435`.

```js
assert.strictEqual(enmeshedUnitCircle(), 3.1486734435);
```

# --seed--

## --seed-contents--

```js
function enmeshedUnitCircle() {

  return true;
}

enmeshedUnitCircle();
```

# --solutions--

```js
// solution required
```
