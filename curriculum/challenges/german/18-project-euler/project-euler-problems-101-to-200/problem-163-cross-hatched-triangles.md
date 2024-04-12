---
id: 5900f40f1000cf542c50ff22
title: 'Problem 163: Cross-hatched triangles'
challengeType: 1
forumTopicId: 301797
dashedName: problem-163-cross-hatched-triangles
---

# --description--

Betrachte ein gleichseitiges Dreieck, in dem gerade Linien von jedem Scheitelpunkt zur Mitte der gegenüberliegenden Seite gezogen werden, wie in dem Dreieck der Größe 1 in der Skizze unten.

<img class="img-responsive center-block" alt="Dreiecke mit Größe 1 und Größe 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/cross-hatched-triangles.gif" style="background-color: white; padding: 10px;" />

Sixteen triangles of either different shape or size or orientation or location can now be observed in that triangle. Wenn Dreiecke der Größe 1 als Bausteine verwendet werden, können größere Dreiecke gebildet werden, wie das Dreieck der Größe 2 in der obigen Skizze. In diesem Dreieck der Größe 2 können nun einhundertundvier Dreiecke in unterschiedlicher Form, Größe oder Ausrichtung oder Position beobachtet werden.

Es kann beobachtet werden, dass das Dreieck der Größe 2 aus 4 Dreiecksbausteinen der Größe 1 besteht. A size 3 triangle would contain 9 size 1 triangle building blocks and a size $n$ triangle would thus contain $n^2$ size 1 triangle building blocks.

Wenn wir $T(n)$ als die Anzahl der Dreiecke angeben, die in einem Dreieck der Größe $n$vorhanden sind, dann

$$\begin{align}   & T(1) = 16 \\\\
  & T(2) = 104 \end{align}$$

Finde $T(36)$.

# --hints--

`crossHatchedTriangles()` sollte `343047` zurückgeben.

```js
assert.strictEqual(crossHatchedTriangles(), 343047);
```

# --seed--

## --seed-contents--

```js
function crossHatchedTriangles() {

  return true;
}

crossHatchedTriangles();
```

# --solutions--

```js
// solution required
```
