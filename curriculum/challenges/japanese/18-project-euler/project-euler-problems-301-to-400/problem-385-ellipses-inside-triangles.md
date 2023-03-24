---
id: 5900f4ee1000cf542c510000
title: 'Problem 385: Ellipses inside triangles'
challengeType: 1
forumTopicId: 302049
dashedName: problem-385-ellipses-inside-triangles
---

# --description--

For any triangle $T$ in the plane, it can be shown that there is a unique ellipse with largest area that is completely inside $T$.

<img class="img-responsive center-block" alt="ellipse completely inside a triangle" src="https://cdn.freecodecamp.org/curriculum/project-euler/ellipses-inside-triangles.png" style="background-color: white; padding: 10px;">

For a given $n$, consider triangles $T$ such that:

-   the vertices of $T$ have integer coordinates with absolute value $≤ n$, and
-   the foci<sup>1</sup> of the largest-area ellipse inside $T$ are $(\sqrt{13}, 0)$ and $(-\sqrt{13}, 0)$.

Let $A(n)$ be the sum of the areas of all such triangles.

For example, if $n = 8$, there are two such triangles. Their vertices are (-4,-3), (-4,3), (8,0) and (4,3), (4,-3), (-8,0), and the area of each triangle is 36. Thus $A(8) = 36 + 36 = 72$.

It can be verified that $A(10) = 252$, $A(100) = 34\\,632$ and $A(1000) = 3\\,529\\,008$.

Find $A(1\\,000\\,000\\,000)$.

<sup>1</sup>The foci (plural of focus) of an ellipse are two points $A$ and $B$ such that for every point $P$ on the boundary of the ellipse, $AP + PB$ is constant.

# --hints--

`ellipsesInsideTriangles()` should return `3776957309612154000`.

```js
assert.strictEqual(ellipsesInsideTriangles(), 3776957309612154000);
```

# --seed--

## --seed-contents--

```js
function ellipsesInsideTriangles() {

  return true;
}

ellipsesInsideTriangles();
```

# --solutions--

```js
// solution required
```
