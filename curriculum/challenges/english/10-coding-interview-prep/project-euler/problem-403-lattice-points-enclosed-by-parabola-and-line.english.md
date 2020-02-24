---
id: 5900f5001000cf542c510013
challengeType: 5
isHidden: false
title: 'Problem 403: Lattice points enclosed by parabola and line'
forumTopicId: 302071
---

## Description
<section id='description'>
For integers a and b, we define D(a, b) as the domain enclosed by the parabola y = x2 and the line y = a·x + b:D(a, b) = { (x, y) | x2 ≤ y ≤ a·x + b }.


L(a, b) is defined as the number of lattice points contained in D(a, b).
For example, L(1, 2) = 8 and L(2, -1) = 1.


We also define S(N) as the sum of L(a, b) for all the pairs (a, b) such that the area of D(a, b) is a rational number and |a|,|b| ≤ N.
We can verify that S(5) = 344 and S(100) = 26709528.


Find S(1012). Give your answer mod 108.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler403()</code> should return 18224771.
    testString: assert.strictEqual(euler403(), 18224771);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler403() {
  // Good luck!
  return true;
}

euler403();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
