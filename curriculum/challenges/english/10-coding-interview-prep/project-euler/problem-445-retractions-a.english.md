---
id: 5900f52a1000cf542c51003c
challengeType: 5
isHidden: false
title: 'Problem 445: Retractions A'
forumTopicId: 302117
---

## Description
<section id='description'>
For every integer n>1, the family of functions fn,a,b  is defined
by fn,a,b(x)≡ax+b mod n for a,b,x integer and  0<a<n, 0≤b<n, 0≤x<n.
We will call fn,a,b a retraction if fn,a,b(fn,a,b(x))≡fn,a,b(x) mod n for every 0≤x<n.
Let R(n) be the number of retractions for n.


You are given that
∑ R(c) for c=C(100 000,k), and 1 ≤ k ≤99 999 ≡628701600 (mod 1 000 000 007).
(C(n,k) is the binomial coefficient).

Find ∑ R(c) for c=C(10 000 000,k), and 1 ≤k≤ 9 999 999.
Give your answer modulo 1 000 000 007.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler445()</code> should return 659104042.
    testString: assert.strictEqual(euler445(), 659104042);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler445() {
  // Good luck!
  return true;
}

euler445();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
