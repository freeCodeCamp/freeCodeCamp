---
id: 5900f4ff1000cf542c510011
challengeType: 5
isHidden: false
title: 'Problem 402: Integer-valued polynomials'
forumTopicId: 302070
---

## Description
<section id='description'>
It can be shown that the polynomial n4 + 4n3 + 2n2 + 5n is a multiple of 6 for every integer n. It can also be shown that 6 is the largest integer satisfying this property.


Define M(a, b, c) as the maximum m such that n4 + an3 + bn2 + cn is a multiple of m for all integers n. For example, M(4, 2, 5) = 6.


Also, define S(N) as the sum of M(a, b, c) for all 0 < a, b, c ≤ N.


We can verify that S(10) = 1972 and S(10000) = 2024258331114.


Let Fk be the Fibonacci sequence:
F0 = 0, F1 = 1 and
Fk = Fk-1 + Fk-2 for k ≥ 2.


Find the last 9 digits of Σ S(Fk) for 2 ≤ k ≤ 1234567890123.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler402()</code> should return 356019862.
    testString: assert.strictEqual(euler402(), 356019862);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler402() {
  // Good luck!
  return true;
}

euler402();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
