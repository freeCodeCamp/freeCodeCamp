---
id: 5900f5241000cf542c510037
challengeType: 5
title: 'Problem 440: GCD and Tiling'
forumTopicId: 302112
---

## Description
<section id='description'>
We want to tile a board of length n and height 1 completely, with either 1 × 2 blocks or 1 × 1 blocks with a single decimal digit on top:

For example, here are some of the ways to tile a board of length n = 8:

Let T(n) be the number of ways to tile a board of length n as described above.

For example, T(1) = 10 and T(2) = 101.

Let S(L) be the triple sum ∑a,b,c gcd(T(ca), T(cb)) for 1 ≤ a, b, c ≤ L.
For example:
S(2) = 10444
S(3) = 1292115238446807016106539989
S(4) mod 987 898 789 = 670616280.

Find S(2000) mod 987 898 789.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler440()</code> should return 970746056.
    testString: assert.strictEqual(euler440(), 970746056);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler440() {

  return true;
}

euler440();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
