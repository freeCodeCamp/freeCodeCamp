---
title: Closest-pair problem
id: 5951a53863c8a34f02bf1bdc
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof getClosestPair === "function", "<code>getClosestPair</code> is a function.");'
  - text: ''
    testString: 'assert.equal(getClosestPair(points1).distance, answer1.distance, "Distance should be the following.");'
  - text: ''
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points1))).pair, answer1.pair, "Points should be the following.");'
  - text: ''
    testString: 'assert.equal(getClosestPair(points2).distance, answer2.distance, "Distance should be the following.");'
  - text: ''
    testString: 'assert.deepEqual(JSON.parse(JSON.stringify(getClosestPair(points2))).pair, answer2.pair, "Points should be the following.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const Point = function (x, y) {
  this.x = x;
  this.y = y;
};
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};

function getClosestPair (pointsArr) {
  // Good luck!
  return true;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
