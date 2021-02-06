---
id: 5900f53d1000cf542c510050
title: 'Problem 465: Polar polygons'
challengeType: 5
forumTopicId: 302140
dashedName: problem-465-polar-polygons
---

# --description--

The kernel of a polygon is defined by the set of points from which the entire polygon's boundary is visible. We define a polar polygon as a polygon for which the origin is strictly contained inside its kernel.

For this problem, a polygon can have collinear consecutive vertices. However, a polygon still cannot have self-intersection and cannot have zero area.

For example, only the first of the following is a polar polygon (the kernels of the second, third, and fourth do not strictly contain the origin, and the fifth does not have a kernel at all):

Notice that the first polygon has three consecutive collinear vertices.

Let P(n) be the number of polar polygons such that the vertices (x, y) have integer coordinates whose absolute values are not greater than n.

Note that polygons should be counted as different if they have different set of edges, even if they enclose the same area. For example, the polygon with vertices \[(0,0),(0,3),(1,1),(3,0)] is distinct from the polygon with vertices \[(0,0),(0,3),(1,1),(3,0),(1,0)].

For example, P(1) = 131, P(2) = 1648531, P(3) = 1099461296175 and P(343) mod 1 000 000 007 = 937293740.

Find P(713) mod 1 000 000 007.

# --hints--

`euler465()` should return 585965659.

```js
assert.strictEqual(euler465(), 585965659);
```

# --seed--

## --seed-contents--

```js
function euler465() {

  return true;
}

euler465();
```

# --solutions--

```js
// solution required
```
