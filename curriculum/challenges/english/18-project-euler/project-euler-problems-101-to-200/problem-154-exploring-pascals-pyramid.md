---
id: 5900f4071000cf542c50ff19
title: 'Problem 154: Exploring Pascal''s pyramid'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

A triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.

<img class="img-responsive center-block" alt="triangular pyramid constructed using spherical balls with four levels" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;">

Then, we calculate the number of paths leading from the apex to each position: A path starts at the apex and progresses downwards to any of the three spheres directly below the current position. Consequently, the number of paths to reach a certain position is the sum of the numbers immediately above it (depending on the position, there are up to three numbers above it).

The result is Pascal's pyramid and the numbers at each level n are the coefficients of the trinomial expansion ${(x + y + z)}^n$.

How many coefficients in the expansion of ${(x + y + z)}^{200000}$ are multiples of ${10}^{12}$?

# --hints--

`pascalsPyramid()` should return `479742450`.

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```
