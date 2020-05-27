---
id: 5a23c84252665b21eecc7edf
title: Least common multiple
challengeType: 5
isHidden: false
forumTopicId: 302301
---

## Description

<section id='description'>

The least common multiple of 12 and 18 is 36, because 12 is a factor (12 &times; 3 = 36), and 18 is a factor (18 &times; 2 = 36), and there is no positive integer less than 36 that has both factors. As a special case, if either <i>m</i> or <i>n</i> is zero, then the least common multiple is zero.
One way to calculate the least common multiple is to iterate all the multiples of <i>m</i>, until you find one that is also a multiple of <i>n</i>.
If you already have <i>gcd</i> for <a href="https://rosettacode.org/wiki/greatest common divisor" target="_blank">greatest common divisor</a>, then this formula calculates <i>lcm</i>.
\( \operatorname{lcm}(m, n) = \frac{|m \times n|}{\operatorname{gcd}(m, n)} \)

</section>

## Instructions

<section id='instructions'>

Compute the least common multiple of an array of integers.
Given <i>m</i> and <i>n</i>, the least common multiple is the smallest positive integer that has both <i>m</i> and <i>n</i> as factors.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>LCM</code> should be a function.
    testString: assert(typeof LCM == 'function');
  - text: <code>LCM([2, 4, 8])</code> should return a number.
    testString: assert(typeof LCM([2, 4, 8]) == 'number');
  - text: <code>LCM([2, 4, 8])</code> should return <code>8</code>.
    testString: assert.equal(LCM([2, 4, 8]), 8);
  - text: <code>LCM([4, 8, 12])</code> should return <code>24</code>.
    testString: assert.equal(LCM([4, 8, 12]), 24);
  - text: <code>LCM([3, 4, 5, 12, 40])</code> should return <code>120</code>.
    testString: assert.equal(LCM([3, 4, 5, 12, 40]), 120);
  - text: <code>LCM([11, 33, 90])</code> should return <code>990</code>.
    testString: assert.equal(LCM([11, 33, 90]), 990);
  - text: <code>LCM([-50, 25, -45, -18, 90, 447])</code> should return <code>67050</code>.
    testString: assert.equal(LCM([-50, 25, -45, -18, 90, 447]), 67050);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function LCM(A) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function LCM(A) {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
}
```

</section>
