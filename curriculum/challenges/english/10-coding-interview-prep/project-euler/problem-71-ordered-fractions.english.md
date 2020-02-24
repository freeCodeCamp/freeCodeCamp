---
id: 5900f3b31000cf542c50fec6
challengeType: 5
isHidden: false
title: 'Problem 71: Ordered fractions'
forumTopicId: 302184
---

## Description
<section id='description'>

Consider the fraction, <var>n</var>/<var>d</var>, where <var>n</var> and <var>d</var> are positive integers. If <var>n</var><<var>d</var> and HCF(<var>n</var>,<var>d</var>)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for <var>d</var> ≤ 8 in ascending order of size, we get:

<div style='text-align: center;'>1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, <strong>2/5</strong>, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</div>

It can be seen that 2/5 is the fraction immediately to the left of 3/7.

By listing the set of reduced proper fractions for <var>d</var> ≤ 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>orderedFractions()</code> should return a number.
    testString: assert(typeof orderedFractions() === 'number');
  - text: <code>orderedFractions()</code> should return 428570.
    testString: assert.strictEqual(orderedFractions(), 428570);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderedFractions() {
  // Good luck!
  return true;
}

orderedFractions();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
