---
id: 5900f37b1000cf542c50fe8e
challengeType: 5
title: 'Problem 15: Lattice paths'
forumTopicId: 301780
---

## Description
<section id='description'>

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

<img class="img-responsive center-block" alt="a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;">

How many such routes are there through a given `gridSize`?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>latticePaths(4)</code> should return a number.
    testString: assert(typeof latticePaths(4) === 'number');
  - text: <code>latticePaths(4)</code> should return 70.
    testString: assert.strictEqual(latticePaths(4), 70);
  - text: <code>latticePaths(9)</code> should return 48620.
    testString: assert.strictEqual(latticePaths(9), 48620);
  - text: <code>latticePaths(20)</code> should return 137846528820.
    testString: assert.strictEqual(latticePaths(20), 137846528820);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function latticePaths(gridSize) {

  return true;
}

latticePaths(4);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function latticePaths(gridSize) {
  let paths = 1;

  for (let i = 0; i < gridSize; i++) {
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
  }
  return paths;
}
```

</section>
