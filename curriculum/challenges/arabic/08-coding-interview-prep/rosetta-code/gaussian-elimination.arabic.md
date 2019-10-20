---
title: Gaussian elimination
id: 5a23c84252665b21eecc7e77
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
    testString: 'assert(typeof gaussianElimination=="function","<code>gaussianElimination</code> should be a function.");'
  - text: ''
    testString: 'assert(Array.isArray(gaussianElimination(tests[0][0],tests[0][1])),"<code>gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")</code> should return an array.");'
  - text: ''
    testString: 'assert.deepEqual(gaussianElimination(tests[0][0],tests[0][1]),results[0],"<code>gaussianElimination("+JSON.stringify(tests[0][0])+","+JSON.stringify(tests[0][1])+")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(gaussianElimination(tests[1][0],tests[1][1]),results[1],"<code>gaussianElimination("+JSON.stringify(tests[1][0])+","+JSON.stringify(tests[1][1])+")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(gaussianElimination(tests[2][0],tests[2][1]),results[2],"<code>gaussianElimination("+JSON.stringify(tests[2][0])+","+JSON.stringify(tests[2][1])+")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(gaussianElimination(tests[3][0],tests[3][1]),results[3],"<code>gaussianElimination("+JSON.stringify(tests[3][0])+","+JSON.stringify(tests[3][1])+")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(gaussianElimination(tests[4][0],tests[4][1]),results[4],"<code>gaussianElimination("+JSON.stringify(tests[4][0])+","+JSON.stringify(tests[4][1])+")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gaussianElimination (A,b) {
  // Good luck!
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
