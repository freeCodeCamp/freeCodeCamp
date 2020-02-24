---
id: 5900f4141000cf542c50ff26
challengeType: 5
isHidden: false
title: 'Problem 167: Investigating Ulam sequences'
forumTopicId: 301801
---

## Description
<section id='description'>
For two positive integers a and b, the Ulam sequence U(a,b) is defined by U(a,b)1 = a, U(a,b)2 = b and for k > 2,
U(a,b)k is the smallest integer greater than U(a,b)(k-1) which can be written in exactly one way as the sum of two distinct previous members of U(a,b).
For example, the sequence U(1,2) begins with
1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8;
5 does not belong to it because 5 = 1 + 4 = 2 + 3 has two representations as the sum of two previous members, likewise 7 = 1 + 6 = 3 + 4.
Find ∑U(2,2n+1)k for 2 ≤ n ≤10, where k = 1011.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler167()</code> should return 3916160068885.
    testString: assert.strictEqual(euler167(), 3916160068885);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler167() {
  // Good luck!
  return true;
}

euler167();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
