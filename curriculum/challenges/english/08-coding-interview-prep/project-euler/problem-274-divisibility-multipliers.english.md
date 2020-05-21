---
id: 5900f47f1000cf542c50ff91
challengeType: 5
isHidden: false
title: 'Problem 274: Divisibility Multipliers'
forumTopicId: 301924
---

## Description
<section id='description'>
For each integer p > 1 coprime to 10 there is a positive divisibility multiplier m < p which preserves divisibility by p for the following function on any positive integer, n:

f(n) = (all but the last digit of n) + (the last digit of n) * m

That is, if m is the divisibility multiplier for p, then f(n) is divisible by p if and only if n is divisible by p.

(When n is much larger than p, f(n) will be less than n and repeated application of f provides a multiplicative divisibility test for p.)

For example, the divisibility multiplier for 113 is 34.

f(76275) = 7627 + 5 * 34 = 7797 : 76275 and 7797 are both divisible by 113f(12345) = 1234 + 5 * 34 = 1404 : 12345 and 1404 are both not divisible by 113

The sum of the divisibility multipliers for the primes that are coprime to 10 and less than 1000 is 39517. What is the sum of the divisibility multipliers for the primes that are coprime to 10 and less than 107?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler274()</code> should return 1601912348822.
    testString: assert.strictEqual(euler274(), 1601912348822);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler274() {
  // Good luck!
  return true;
}

euler274();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
