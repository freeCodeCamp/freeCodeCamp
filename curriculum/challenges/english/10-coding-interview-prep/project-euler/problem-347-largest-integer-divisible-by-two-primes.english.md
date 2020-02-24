---
id: 5900f4c81000cf542c50ffd9
challengeType: 5
isHidden: false
title: 'Problem 347: Largest integer divisible by two primes'
forumTopicId: 302006
---

## Description
<section id='description'>
The largest integer ≤ 100 that is only divisible by both the primes 2 and 3 is 96, as 96=32*3=25*3.
For two distinct primes p and q let M(p,q,N) be the largest positive integer ≤N only divisible
by both p and q and M(p,q,N)=0 if such a positive integer does not exist.


E.g. M(2,3,100)=96.
M(3,5,100)=75 and not 90 because 90 is divisible by 2 ,3 and 5.
Also M(2,73,100)=0 because there does not exist a positive integer ≤ 100 that is divisible by both 2 and 73.


Let S(N) be the sum of all distinct M(p,q,N).
S(100)=2262.


Find S(10 000 000).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler347()</code> should return 11109800204052.
    testString: assert.strictEqual(euler347(), 11109800204052);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler347() {
  // Good luck!
  return true;
}

euler347();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
