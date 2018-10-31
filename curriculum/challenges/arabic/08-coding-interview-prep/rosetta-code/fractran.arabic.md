---
title: Fractran
id: 5a7dad05be01840e1778a0d1
challengeType: 3
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
    testString: 'assert(typeof fractran=="function","<code>fractran</code> should be a function.");'
  - text: ''
    testString: 'assert(Array.isArray(fractran(tests[0])),"<code>fractran(""+tests[0]+"")</code> should return an array.");'
  - text: ''
    testString: 'assert.deepEqual(fractran(tests[0]),results[0],"<code>fractran(""+tests[0]+"")</code> should return <code>"+JSON.stringify(results[0])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(fractran(tests[1]),results[1],"<code>fractran(""+tests[1]+"")</code> should return <code>"+JSON.stringify(results[1])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(fractran(tests[2]),results[2],"<code>fractran(""+tests[2]+"")</code> should return <code>"+JSON.stringify(results[2])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(fractran(tests[3]),results[3],"<code>fractran(""+tests[3]+"")</code> should return <code>"+JSON.stringify(results[3])+"</code>.");'
  - text: ''
    testString: 'assert.deepEqual(fractran(tests[4]),results[4],"<code>fractran(""+tests[4]+"")</code> should return <code>"+JSON.stringify(results[4])+"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fractran (progStr) {
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
