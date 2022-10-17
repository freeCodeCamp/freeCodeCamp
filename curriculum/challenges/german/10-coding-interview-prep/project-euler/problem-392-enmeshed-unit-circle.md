---
id: 5900f4f41000cf542c510007
title: 'Problem 392: Enmeshed unit circle'
challengeType: 1
forumTopicId: 302057
dashedName: problem-392-enmeshed-unit-circle
---

# --description--

A rectilinear grid is an orthogonal grid where the spacing between the gridlines does not have to be equidistant.

An example of such grid is logarithmic graph paper.

Consider rectilinear grids in the Cartesian coordinate system with the following properties:

- The gridlines are parallel to the axes of the Cartesian coordinate system.
- There are $N + 2$ vertical and $N + 2$ horizontal gridlines. Hence there are $(N + 1) \times (N + 1)$ rectangular cells.
- The equations of the two outer vertical gridlines are $x = -1$ and $x = 1$.
- The equations of the two outer horizontal gridlines are $y = -1$ and $y = 1$.
- The grid cells are colored red if they overlap with the unit circle, black otherwise.

For this problem we would like you to find the positions of the remaining $N$ inner horizontal and $N$ inner vertical gridlines so that the area occupied by the red cells is minimized.

E.g. here is a picture of the solution for $N = 10$:

<img class="img-responsive center-block" alt="solution for N = 10" src="https://cdn.freecodecamp.org/curriculum/project-euler/enmeshed-unit-circle.png" style="background-color: white; padding: 10px;">

The area occupied by the red cells for $N = 10$ rounded to 10 digits behind the decimal point is 3.3469640797.

Find the positions for $N = 400$. Give as your answer the area occupied by the red cells rounded to 10 digits behind the decimal point.

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
