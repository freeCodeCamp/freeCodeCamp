---
id: 5900f3c61000cf542c50fed9
challengeType: 5
title: 'Problem 90: Cube digit pairs'
forumTopicId: 302207
---

## Description
<section id='description'>

Each of the six faces on a cube has a different digit (0 to 9) written on it; the same is done to a second cube. By placing the two cubes side-by-side in different positions we can form a variety of 2-digit numbers.

For example, the square number 64 could be formed:

<img class="img-responsive center-block" alt="two cubes, one with the number 6 and the other with number 4" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;">

In fact, by carefully choosing the digits on both cubes it is possible to display all of the square numbers below one-hundred: 01, 04, 09, 16, 25, 36, 49, 64, and 81.

For example, one way this can be achieved is by placing {0, 5, 6, 7, 8, 9} on one cube and {1, 2, 3, 4, 8, 9} on the other cube.

However, for this problem we shall allow the 6 or 9 to be turned upside-down so that an arrangement like {0, 5, 6, 7, 8, 9} and {1, 2, 3, 4, 6, 7} allows for all nine square numbers to be displayed; otherwise it would be impossible to obtain 09.

In determining a distinct arrangement we are interested in the digits on each cube, not the order.

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} is equivalent to {3, 6, 4, 1, 2, 5}<br>
  {1, 2, 3, 4, 5, 6} is distinct from {1, 2, 3, 4, 5, 9}
</div>

But because we are allowing 6 and 9 to be reversed, the two distinct sets in the last example both represent the extended set {1, 2, 3, 4, 5, 6, 9} for the purpose of forming 2-digit numbers.

How many distinct arrangements of the two cubes allow for all of the square numbers to be displayed?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>cubeDigitPairs()</code> should return a number.
    testString: assert(typeof cubeDigitPairs() === 'number');
  - text: <code>cubeDigitPairs()</code> should return 1217.
    testString: assert.strictEqual(cubeDigitPairs(), 1217);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function cubeDigitPairs() {

  return true;
}

cubeDigitPairs();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
