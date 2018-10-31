---
title: Zig-zag matrix
id: 594810f028c0303b75339ad8
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
    testString: 'assert.equal(typeof ZigZagMatrix, "function", "ZigZagMatrix must be a function");'
  - text: ''
    testString: 'assert.equal(typeof ZigZagMatrix(1), "object", "ZigZagMatrix should return array");'
  - text: ''
    testString: 'assert.equal(typeof ZigZagMatrix(1)[0], "object", "ZigZagMatrix should return an array of nestes arrays");'
  - text: ''
    testString: 'assert.deepEqual(ZigZagMatrix(1), zm1, "ZigZagMatrix(1) should return [[0]]");'
  - text: ''
    testString: 'assert.deepEqual(ZigZagMatrix(2), zm2, "ZigZagMatrix(2) should return [[0, 1], [2, 3]]");'
  - text: ''
    testString: 'assert.deepEqual(ZigZagMatrix(5), zm5, "ZigZagMatrix(5) must return specified matrix");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function ZigZagMatrix(n) {
  // Good luck!
  return [[], []];
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
