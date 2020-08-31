---
id: 5900f3ec1000cf542c50fefe
challengeType: 5
isHidden: false
title: 'Problem 127: abc-hits'
forumTopicId: 301754
---

## Description
<section id='description'>
The radical of n, rad(n), is the product of distinct prime factors of n. For example, 504 = 23 × 32 × 7, so rad(504) = 2 × 3 × 7 = 42.
We shall define the triplet of positive integers (a, b, c) to be an abc-hit if:
GCD(a, b) = GCD(a, c) = GCD(b, c) = 1
a < b
a + b = c
rad(abc) < c
For example, (5, 27, 32) is an abc-hit, because:
GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1
5 < 27
5 + 27 = 32
rad(4320) = 30 < 32
It turns out that abc-hits are quite rare and there are only thirty-one abc-hits for c < 1000, with ∑c = 12523.
Find ∑c for c < 120000.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler127()</code> should return 18407904.
    testString: assert.strictEqual(euler127(), 18407904);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler127() {
  // Good luck!
  return true;
}

euler127();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
