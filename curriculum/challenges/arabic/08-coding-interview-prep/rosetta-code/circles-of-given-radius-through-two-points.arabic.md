---
title: Circles of given radius through two points
id: 5951815dd895584b06884620
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
    testString: 'assert(typeof getCircles === "function", "<code>getCircles</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(getCircles(...testCases[0]), answers[0], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> should return <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code>.");'
  - text: ''
    testString: 'assert.deepEqual(getCircles(...testCases[1]), answers[1], "<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> should return <code>[0, 1]</code>");'
  - text: ''
    testString: 'assert.deepEqual(getCircles(...testCases[2]), answers[2], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> should return <code>Coincident point. Infinite solutions</code>");'
  - text: ''
    testString: 'assert.deepEqual(getCircles(...testCases[3]), answers[3], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> should return <code>No intersection. Points further apart than circle diameter</code>");'
  - text: ''
    testString: 'assert.deepEqual(getCircles(...testCases[4]), answers[4], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> should return <code>Radius Zero</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getCircles (...args) {
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
