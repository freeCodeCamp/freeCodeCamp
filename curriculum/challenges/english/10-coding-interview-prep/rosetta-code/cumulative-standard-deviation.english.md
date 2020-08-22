---
id: 5a23c84252665b21eecc7e03
title: Cumulative standard deviation
challengeType: 5
isHidden: false
forumTopicId: 302240
---

## Description

<section id='description'>

Write a function that takes an array of numbers as parameter and returns the <a href="https://en.wikipedia.org/wiki/Standard Deviation">standard deviation</a> of the series.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>standardDeviation</code> should be a function.
    testString: assert(typeof standardDeviation == 'function');
  - text: <code>standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])</code> should return a number.
    testString: assert(typeof standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) == 'number');
  - text: <code>standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])</code> should return <code>2</code>.
    testString: assert.equal(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]), 2);
  - text: <code>standardDeviation([600, 470, 170, 430, 300])</code> should return <code>147.323</code>.
    testString: assert.equal(standardDeviation([600, 470, 170, 430, 300]), 147.323);
  - text: <code>standardDeviation([75, 83, 96, 100, 121, 125])</code> should return <code>18.239</code>.
    testString: assert.equal(standardDeviation([75, 83, 96, 100, 121, 125]), 18.239);
  - text: <code>standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82])</code> should return <code>16.87</code>.
    testString: assert.equal(standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]), 16.87);
  - text: <code>standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314])</code> should return <code>22.631</code>.
    testString: assert.equal(standardDeviation([271, 354, 296, 301, 333, 326, 285, 298, 327, 316, 287, 314]), 22.631);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function standardDeviation(arr) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function standardDeviation(arr) {
  var sum = 0,
    sum_sq = 0,
    n = arr.length;
  arr.forEach(function(e) {
    sum += e;
    sum_sq += e * e;
  });

  var std_dev = Math.sqrt(sum_sq / n - Math.pow(sum / n, 2));
  return Math.round(std_dev * 1000) / 1000;
}
```

</section>
