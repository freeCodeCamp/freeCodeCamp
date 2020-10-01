---
id: 5900f3841000cf542c50fe97
challengeType: 5
title: 'Problem 24: Lexicographic permutations'
forumTopicId: 301885
---

## Description
<section id='description'>

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

<div style='text-align: center;'>012   021   102   120   201   210</div>

What is the `n`th lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lexicographicPermutations(699999)</code> should return a number.
    testString: assert(typeof lexicographicPermutations(699999) === 'number');
  - text: <code>lexicographicPermutations(699999)</code> should return 1938246570.
    testString: assert(lexicographicPermutations(699999) == 1938246570);
  - text: <code>lexicographicPermutations(899999)</code> should return 2536987410.
    testString: assert(lexicographicPermutations(899999) == 2536987410);
  - text: <code>lexicographicPermutations(900000)</code> should return 2537014689.
    testString: assert(lexicographicPermutations(900000) == 2537014689);
  - text: <code>lexicographicPermutations(999999)</code> should return 2783915460.
    testString: assert(lexicographicPermutations(999999) == 2783915460);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function lexicographicPermutations(n) {

  return n;
}

lexicographicPermutations(999999);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
