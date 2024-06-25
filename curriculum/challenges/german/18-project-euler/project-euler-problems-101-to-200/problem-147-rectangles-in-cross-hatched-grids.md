---
id: 5900f3ff1000cf542c50ff12
title: 'Problem 147: Rechtecke in kreuzschraffierten Gittern'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

In einem 3x2 kreuzschraffierten Raster könnten insgesamt 37 verschiedene Rechtecke innerhalb dieses Gitters platziert werden, wie in der Skizze angegeben.

<img class="img-responsive center-block" alt="Möglichkeiten, verschiedene Rechtecke in einem schraffierten 3x2-Gitter zu platzieren" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;" />

Es gibt 5 Gitter, die kleiner als 3x2 sind, dabei sind vertikale und horizontale Dimensionen wichtig, z.B. 1x1, 2x1, 3x1, 1x2 und 2x2. Wenn jedes von denen kreuzschraffiert ist, könnte die folgende Anzahl an Rechtecken innerhalb der kleinen Gitter platziert werden:

$$\begin{array}{|c|c|} \hline 1 \times 1 & 1  \\\\ \hline 2 \times 1 & 4  \\\\ \hline 3 \times 1 & 8  \\\\ \hline 1 \times 2 & 4  \\\\ \hline 2 \times 2 & 18 \\\\ \hline \end{array}$$

Wenn diese zu den 37 der 3x2 Gitter hinzugefügt werden, könnten insgesamt 72 verschiedene Rechtecke innerhalb von 3x2 und kleineren Gittern platziert werden.

Wie viele verschiedene Rechtecke könnten innerhalb von 47x43 und kleineren Gittern platziert werden?

# --hints--

`crossHatchedRectangles()` sollte `846910284` zurückgeben.

```js
assert.strictEqual(crossHatchedRectangles(), 846910284);
```

# --seed--

## --seed-contents--

```js
function crossHatchedRectangles() {

  return true;
}

crossHatchedRectangles();
```

# --solutions--

```js
// solution required
```
