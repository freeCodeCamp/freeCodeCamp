---
id: 5900f4291000cf542c50ff3c
title: 'Problem 189: Tri-colouring a triangular grid'
challengeType: 1
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

Consider the following configuration of 64 triangles:

<img class="img-responsive center-block" alt="64 triangles arranged to create larger triangle with side length of 8 triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;" />

We wish to colour the interior of each triangle with one of three colours: red, green or blue, so that no two neighbouring triangles have the same colour. Such a colouring shall be called valid. Here, two triangles are said to be neighbouring if they share an edge. Note: if they only share a vertex, then they are not neighbours.

For example, here is a valid colouring of the above grid:

<img class="img-responsive center-block" alt="colored grid of 64 triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;" />

A colouring C' which is obtained from a colouring C by rotation or reflection is considered distinct from C unless the two are identical.

How many distinct valid colourings are there for the above configuration?

# --hints--

`triangularGridColoring()` should return `10834893628237824`.

```js
assert.strictEqual(triangularGridColoring(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function triangularGridColoring() {

  return true;
}

triangularGridColoring();
```

# --solutions--

```js
// solution required
```
