---
id: 5900f38a1000cf542c50fe9d
challengeType: 5
title: 'Problem 30: Digit n powers'
forumTopicId: 301953
---

## Description
<section id='description'>

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

<div style='margin-left: 4em;'>
  1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br>
  8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br>
  9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup><br>
</div>

As 1 = 1<sup>4</sup> is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of `n` powers of their digits.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>digitnPowers(2)</code> should return a number.
    testString: assert(typeof digitnPowers(2) === 'number');
  - text: <code>digitnPowers(2)</code> should return 0.
    testString: assert(digitnPowers(2) == 0);
  - text: <code>digitnPowers(3)</code> should return 1301.
    testString: assert(digitnPowers(3) == 1301);
  - text: <code>digitnPowers(4)</code> should return 19316.
    testString: assert(digitnPowers(4) == 19316);
  - text: <code>digitnPowers(5)</code> should return 443839.
    testString: assert(digitnPowers(5) == 443839);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function digitnPowers(n) {

  return n;
}

digitnPowers(5);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
