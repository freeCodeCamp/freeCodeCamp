---
title: Identity matrix
id: 5a23c84252665b21eecc7eb1
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
    testString: 'assert(typeof idMatrix=="function","<code>idMatrix</code> should be a function.");'
  - text: ''
    testString: 'assert(Array.isArray(idMatrix(1)),"<code>idMatrix(1)</code> should return an array.");'
  - text: ''
    testString: 'assert.deepEqual(idMatrix(1),results[0],"<code>idMatrix(1)</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(idMatrix(2),results[1],"<code>idMatrix(2)</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(idMatrix(3),results[2],"<code>idMatrix(3)</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(idMatrix(4),results[3],"<code>idMatrix(4)</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function idMatrix (n) {
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
