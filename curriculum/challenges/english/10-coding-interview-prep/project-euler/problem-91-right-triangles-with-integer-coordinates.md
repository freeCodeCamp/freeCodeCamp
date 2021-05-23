---
id: 5900f3c71000cf542c50feda
title: 'Problem 91: Right triangles with integer coordinates'
challengeType: 5
forumTopicId: 302208
dashedName: problem-91-right-triangles-with-integer-coordinates
---

# --description--

The points P (`x`<sub>1</sub>, `y`<sub>1</sub>) and Q (`x`<sub>2</sub>, `y`<sub>2</sub>) are plotted at integer co-ordinates and are joined to the origin, O(0,0), to form ΔOPQ.

<img class="img-responsive center-block" alt="a graph plotting points P (x_1, y_1) and Q(x_2, y_2) at integer coordinates that are joined to the origin O (0, 0)" src="https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-1.png" style="background-color: white; padding: 10px;">

There are exactly fourteen triangles containing a right angle that can be formed when each co-ordinate lies between 0 and 2 inclusive; that is, 0 ≤ `x`<sub>1</sub>, `y`<sub>1</sub>, `x`<sub>2</sub>, `y`<sub>2</sub> ≤ 2.

<img class="img-responsive center-block" alt="a diagram showing the 14 triangles containing a right angle that can be formed when each coordinate is between 0 and 2" src="https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-2.png" style="background-color: white; padding: 10px;">

Given that $0 ≤ x_1, y_1, x_2, y_2 ≤ limit$, how many right triangles can be formed?

# --hints--

`rightTrianglesIntCoords(2)` should return a number.

```js
assert(typeof rightTrianglesIntCoords(2) === 'number');
```

`rightTrianglesIntCoords(2)` should return `14`.

```js
assert.strictEqual(rightTrianglesIntCoords(2), 14);
```

`rightTrianglesIntCoords(10)` should return `448`.

```js
assert.strictEqual(rightTrianglesIntCoords(10), 448);
```

`rightTrianglesIntCoords(25)` should return `3207`.

```js
assert.strictEqual(rightTrianglesIntCoords(25), 3207);
```

`rightTrianglesIntCoords(50)` should return `14234`.

```js
assert.strictEqual(rightTrianglesIntCoords(50), 14234);
```

# --seed--

## --seed-contents--

```js
function rightTrianglesIntCoords(limit) {

  return true;
}

rightTrianglesIntCoords(2);
```

# --solutions--

```js
// solution required
```
