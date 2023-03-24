---
id: 5900f4621000cf542c50ff75
title: 'Problem 246: Tangents to an ellipse'
challengeType: 1
forumTopicId: 301893
dashedName: problem-246-tangents-to-an-ellipse
---

# --description--

A definition for an ellipse is:

Given a circle $c$ with centre $M$ and radius $r$ and a point $G$ such that $d(G, M) < r$, the locus of the points that are equidistant from $c$ and $G$ form an ellipse.

The construction of the points of the ellipse is shown below.

<img class="img-responsive center-block" alt="animation of ellipse construction" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;" />

Given are the points $M(-2000, 1500)$ and $G(8000, 1500)$.

Given is also the circle $c$ with centre $M$ and radius $15\\,000$.

The locus of the points that are equidistant from $G$ and $c$ form an ellipse $e$.

From a point $P$ outside $e$ the two tangents $t_1$ and $t_2$ to the ellipse are drawn.

Let the points where $t_1$ and $t_2$ touch the ellipse be $R$ and $S$.

<img class="img-responsive center-block" alt="circle c with the centre M, radius 15000, and point P outsie of ellipse e; from point P two tangents t_1 and t_2 are drawn to the ellipse, with points touching ellipse are R and S" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;" />

For how many lattice points $P$ is angle $RPS$ greater than 45°?

# --hints--

`tangentsToAnEllipse()` should return `810834388`.

```js
assert.strictEqual(tangentsToAnEllipse(), 810834388);
```

# --seed--

## --seed-contents--

```js
function tangentsToAnEllipse() {

  return true;
}

tangentsToAnEllipse();
```

# --solutions--

```js
// solution required
```
