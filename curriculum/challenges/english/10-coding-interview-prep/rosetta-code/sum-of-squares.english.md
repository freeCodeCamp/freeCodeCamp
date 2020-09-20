---
id: 5a23c84252665b21eecc8042
title: Sum of squares
challengeType: 5
forumTopicId: 302334
---

## Description

<section id='description'>

Write a function to find the sum of squares of an array of integers.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>sumsq</code> should be a function.
    testString: assert(typeof sumsq == 'function');
  - text: <code>sumsq([1, 2, 3, 4, 5])</code> should return a number.
    testString: assert(typeof sumsq([1, 2, 3, 4, 5]) == 'number');
  - text: <code>sumsq([1, 2, 3, 4, 5])</code> should return <code>55</code>.
    testString: assert.equal(sumsq([1, 2, 3, 4, 5]), 55);
  - text: <code>sumsq([25, 32, 12, 7, 20])</code> should return <code>2242</code>.
    testString: assert.equal(sumsq([25, 32, 12, 7, 20]), 2242);
  - text: <code>sumsq([38, 45, 35, 8, 13])</code> should return <code>4927</code>.
    testString: assert.equal(sumsq([38, 45, 35, 8, 13]), 4927);
  - text: <code>sumsq([43, 36, 20, 34, 24])</code> should return <code>5277</code>.
    testString: assert.equal(sumsq([43, 36, 20, 34, 24]), 5277);
  - text: <code>sumsq([12, 33, 26, 18, 1, 16, 3])</code> should return <code>2499</code>.
    testString: assert.equal(sumsq([12, 33, 26, 18, 1, 16, 3]), 2499);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumsq(array) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function sumsq(array) {
  var sum = 0;
  var i, iLen;

  for (i = 0, iLen = array.length; i < iLen; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}
```

</section>
