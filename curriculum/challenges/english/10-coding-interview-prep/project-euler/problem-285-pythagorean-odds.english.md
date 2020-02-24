---
id: 5900f48a1000cf542c50ff9c
challengeType: 5
isHidden: false
title: 'Problem 285: Pythagorean odds'
forumTopicId: 301936
---

## Description
<section id='description'>
Albert chooses a positive integer k, then two real numbers a, b are randomly chosen in the interval [0,1] with uniform distribution.
The square root of the sum (k·a+1)2 + (k·b+1)2 is then computed and rounded to the nearest integer. If the result is equal to k, he scores k points; otherwise he scores nothing.

For example, if k = 6, a = 0.2 and b = 0.85, then (k·a+1)2 + (k·b+1)2 = 42.05.
The square root of 42.05 is 6.484... and when rounded to the nearest integer, it becomes 6.
This is equal to k, so he scores 6 points.

It can be shown that if he plays 10 turns with k = 1, k = 2, ..., k = 10, the expected value of his total score, rounded to five decimal places, is 10.20914.

If he plays 105 turns with k = 1, k = 2, k = 3, ..., k = 105, what is the expected value of his total score, rounded to five decimal places?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler285()</code> should return 157055.80999.
    testString: assert.strictEqual(euler285(), 157055.80999);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler285() {
  // Good luck!
  return true;
}

euler285();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
