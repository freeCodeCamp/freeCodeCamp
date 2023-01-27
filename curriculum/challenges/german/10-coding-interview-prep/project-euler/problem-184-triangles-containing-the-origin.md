---
id: 5900f4241000cf542c50ff37
title: 'Problem 184: Triangles containing the origin'
challengeType: 1
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

Man betrachte die Menge $I_r$ von Punkten $(x,y)$ mit ganzzahligen Koordinaten im Inneren des Kreises mit Radius $r$, der im Ursprung zentriert ist, d.h. $x^2 + y^2 &lt; r^2$.

Für einen Radius von 2 enthält $I_2$ die neun Punkte (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) und (1,-1). Es gibt acht Dreiecke, bei denen alle drei Eckpunkte in $I_2$ liegen und die den Ursprung im Inneren enthalten. Zwei davon sind unten abgebildet, die anderen ergeben sich aus diesen durch Rotation.

<img class="img-responsive center-block" alt="Kreis mit Radius 2, zentriert im Ursprung, mit neun markierten Punkten und zwei Dreiecken - (-1,0), (0,1), (1,-1) und (-1,1), (0,-1), (1,1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;" />

Für einen Radius von 3 gibt es 360 Dreiecke, die den Ursprung im Inneren enthalten und alle Scheitelpunkte in $I_3$ haben, und für $I_5$ sind es 10600.

Wie viele Dreiecke gibt es, die den Ursprung im Inneren enthalten und alle drei Scheitelpunkte in $I_{105}$ haben?

# --hints--

`trianglesContainingOrigin()` sollte `1725323624056` zurückgeben.

```js
assert.strictEqual(trianglesContainingOrigin(), 1725323624056);
```

# --seed--

## --seed-contents--

```js
function trianglesContainingOrigin() {

  return true;
}

trianglesContainingOrigin();
```

# --solutions--

```js
// solution required
```
