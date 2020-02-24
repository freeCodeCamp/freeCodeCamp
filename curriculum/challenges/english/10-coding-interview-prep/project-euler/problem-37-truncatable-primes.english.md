---
id: 5900f3911000cf542c50fea4
challengeType: 5
isHidden: false
title: 'Problem 37: Truncatable primes'
forumTopicId: 302031
---

## Description
<section id='description'>

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only `n` (8 ≤ `n` ≤ 11) primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>truncatablePrimes(8)</code> should return a number.
    testString: assert(typeof truncatablePrimes(8) === 'number');
  - text: <code>truncatablePrimes(8)</code> should return 1986.
    testString: assert(truncatablePrimes(8) == 1986);
  - text: <code>truncatablePrimes(9)</code> should return 5123.
    testString: assert(truncatablePrimes(9) == 5123);
  - text: <code>truncatablePrimes(10)</code> should return 8920.
    testString: assert(truncatablePrimes(10) == 8920);
  - text: <code>truncatablePrimes(11)</code> should return 748317.
    testString: assert(truncatablePrimes(11) == 748317);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truncatablePrimes(n) {
  // Good luck!
  return n;
}

truncatablePrimes(11);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
