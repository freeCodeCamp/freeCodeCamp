---
id: 5900f51d1000cf542c51002f
challengeType: 5
isHidden: false
title: 'Problem 433: Steps in Euclid''s algorithm'
forumTopicId: 302104
---

## Description
<section id='description'>
Let E(x0, y0) be the number of steps it takes to determine the greatest common divisor of x0 and y0 with Euclid's algorithm. More formally:x1 = y0, y1 = x0 mod y0xn = yn-1, yn = xn-1 mod yn-1
E(x0, y0) is the smallest n such that yn = 0.


We have E(1,1) = 1, E(10,6) = 3 and E(6,10) = 4.


Define S(N) as the sum of E(x,y) for 1 ≤ x,y ≤ N.
We have S(1) = 1, S(10) = 221 and S(100) = 39826.


Find S(5·106).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler433()</code> should return 326624372659664.
    testString: assert.strictEqual(euler433(), 326624372659664);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler433() {
  // Good luck!
  return true;
}

euler433();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
