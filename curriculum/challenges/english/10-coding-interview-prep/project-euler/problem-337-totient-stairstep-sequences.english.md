---
id: 5900f4be1000cf542c50ffd0
challengeType: 5
title: 'Problem 337: Totient Stairstep Sequences'
forumTopicId: 301995
---

## Description
<section id='description'>
Let {a1, a2,..., an} be an integer sequence of length n such that:
a1 = 6
for all 1 ≤ i < n : φ(ai) < φ(ai+1) < ai < ai+11
Let S(N) be the number of such sequences with an ≤ N.
For example, S(10) = 4: {6}, {6, 8}, {6, 8, 9} and {6, 10}.
We can verify that S(100) = 482073668 and S(10 000) mod 108 = 73808307.

Find S(20 000 000) mod 108.

1 φ denotes Euler's totient function.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler337()</code> should return 85068035.
    testString: assert.strictEqual(euler337(), 85068035);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler337() {

  return true;
}

euler337();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
