---
id: 5900f3f61000cf542c50ff09
title: 'Problem 138: Special isosceles triangles'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

Consider the isosceles triangle with base length, $b = 16$, and legs, $L = 17$.

<img alt="isosceles triangle with edges named as L - two edges with the same length and base of the triangle as b; and height of the triangle - h from the base of the triangle to the angle between L edges" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

By using the Pythagorean theorem, it can be seen that the height of the triangle, $h = \sqrt{{17}^2 − 8^2} = 15$, which is one less than the base length.

With $b = 272$ and $L = 305$, we get $h = 273$, which is one more than the base length, and this is the second smallest isosceles triangle with the property that $h = b ± 1$.

Find $\sum{L}$ for the twelve smallest isosceles triangles for which $h = b ± 1$ and $b$, $L$ are positive integers.

# --hints--

`isoscelesTriangles()` should return `1118049290473932`.

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
