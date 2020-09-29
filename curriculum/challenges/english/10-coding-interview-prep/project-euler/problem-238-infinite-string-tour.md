---
id: 5900f45b1000cf542c50ff6d
challengeType: 5
title: 'Problem 238: Infinite string tour'
forumTopicId: 301883
---

## Description
<section id='description'>
Create a sequence of numbers using the "Blum Blum Shub" pseudo-random number generator:

s0
    =
    14025256
  sn+1
    =
    sn2 mod 20300713


Concatenate these numbers  s0s1s2… to create a string w of infinite length.
Then, w = 14025256741014958470038053646…

For a positive integer k, if no substring of w exists with a sum of digits equal to k, p(k) is defined to be zero. If at least one substring of w exists with a sum of digits equal to k, we define p(k) = z, where z is the starting position of the earliest such substring.

For instance:

The substrings 1, 14, 1402, …
with respective sums of digits equal to 1, 5, 7, …
start at position 1, hence p(1) = p(5) = p(7) = … = 1.

The substrings 4, 402, 4025, …
with respective sums of digits equal to 4, 6, 11, …
start at position 2, hence p(4) = p(6) = p(11) = … = 2.

The substrings 02, 0252, …
with respective sums of digits equal to 2, 9, …
start at position 3, hence p(2) = p(9) = … = 3.

Note that substring 025 starting at position 3, has a sum of digits equal to 7, but there was an earlier substring (starting at position 1) with a sum of digits equal to 7, so p(7) = 1, not 3.

We can verify that, for 0 < k ≤ 103, ∑ p(k) = 4742.

Find ∑ p(k), for 0 < k ≤ 2·1015.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler238()</code> should return 9922545104535660.
    testString: assert.strictEqual(euler238(), 9922545104535660);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler238() {

  return true;
}

euler238();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
