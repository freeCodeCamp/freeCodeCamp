---
id: 5900f4071000cf542c50ff19
challengeType: 5
title: 'Problem 154: Exploring Pascal''s pyramid'
forumTopicId: 301785
---

## Description
<section id='description'>
A triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.

Then, we calculate the number of paths leading from the apex to each position:
A path starts at the apex and progresses downwards to any of the three spheres directly below the current position.
Consequently, the number of paths to reach a certain position is the sum of the numbers immediately above it (depending on the position, there are up to three numbers above it).
The result is Pascal's pyramid and the numbers at each level n are the coefficients of the trinomial expansion
(x + y + z)n.
How many coefficients in the expansion of (x + y + z)200000 are multiples of 1012?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler154()</code> should return 479742450.
    testString: assert.strictEqual(euler154(), 479742450);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler154() {

  return true;
}

euler154();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
