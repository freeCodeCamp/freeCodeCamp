---
id: 5900f4b91000cf542c50ffcc
challengeType: 5
isHidden: false
title: 'Problem 333: Special partitions'
forumTopicId: 301991
---

## Description
<section id='description'>
All positive integers can be partitioned in such a way that each and every term of the partition can be expressed as 2ix3j, where i,j ≥ 0.

Let's consider only those such partitions where none of the terms can divide any of the other terms.
For example, the partition of 17 = 2 + 6 + 9 = (21x30 + 21x31 + 20x32) would not be valid since 2 can divide 6. Neither would the partition 17 = 16 + 1 = (24x30 + 20x30) since 1 can divide 16. The only valid partition of 17 would be 8 + 9 = (23x30 + 20x32).

Many integers have more than one valid partition, the first being 11 having the following two partitions.
11 = 2 + 9 = (21x30 + 20x32)
11 = 8 + 3 = (23x30 + 20x31)

Let's define P(n) as the number of valid partitions of n. For example, P(11) = 2.

Let's consider only the prime integers q which would have a single valid partition such as P(17).

The sum of the primes q <100 such that P(q)=1 equals 233.

Find the sum of the primes q <1000000 such that P(q)=1.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler333()</code> should return 3053105.
    testString: assert.strictEqual(euler333(), 3053105);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler333() {
  // Good luck!
  return true;
}

euler333();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
