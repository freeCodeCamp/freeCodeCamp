---
id: 5900f4241000cf542c50ff37
title: 'Problem 184: Triangles containing the origin'
challengeType: 1
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

Consider the set $I_r$ of points $(x,y)$ with integer coordinates in the interior of the circle with radius $r$, centered at the origin, i.e. $x^2 + y^2 &lt; r^2$.

For a radius of 2, $I_2$ contains the nine points (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) and (1,-1). There are eight triangles having all three vertices in $I_2$ which contain the origin in the interior. Two of them are shown below, the others are obtained from these by rotation.

<img class="img-responsive center-block" alt="circle with radius 2, centered at the origin, with nine marked points and two triangles - (-1,0), (0,1), (1,-1) and (-1,1), (0,-1), (1,1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;">

For a radius of 3, there are 360 triangles containing the origin in the interior and having all vertices in $I_3$ and for $I_5$ the number is 10600.

How many triangles are there containing the origin in the interior and having all three vertices in $I_{105}$?

# --hints--

`trianglesContainingOrigin()` should return `1725323624056`.

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
