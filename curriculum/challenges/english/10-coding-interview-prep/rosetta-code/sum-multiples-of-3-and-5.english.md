---
id: 5a23c84252665b21eecc8040
title: Sum multiples of 3 and 5
challengeType: 5
isHidden: false
forumTopicId: 302332
---

## Description

<section id='description'>

The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below <i>n</i>.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>sumMults</code> should be a function.
    testString: assert(typeof sumMults == 'function');
  - text: <code>sumMults(10)</code> should return a number.
    testString: assert(typeof sumMults(10) == 'number');
  - text: <code>sumMults(10)</code> should return <code>23</code>.
    testString: assert.equal(sumMults(10), 23);
  - text: <code>sumMults(100)</code> should return <code>2318</code>.
    testString: assert.equal(sumMults(100), 2318);
  - text: <code>sumMults(1000)</code> should return <code>233168</code>.
    testString: assert.equal(sumMults(1000), 233168);
  - text: <code>sumMults(10000)</code> should return <code>23331668</code>.
    testString: assert.equal(sumMults(10000), 23331668);
  - text: <code>sumMults(100000)</code> should return <code>2333316668</code>.
    testString: assert.equal(sumMults(100000), 2333316668);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumMults(n) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function sumMults(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}
```

</section>
