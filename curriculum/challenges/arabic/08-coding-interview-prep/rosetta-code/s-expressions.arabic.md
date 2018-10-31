---
title: S-Expressions
id: 59667989bf71cf555dd5d2ff
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
    testString: 'assert(typeof parseSexpr === "function", "<code>parseSexpr</code> is a function.");'
  - text: ''
    testString: 'assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return ["data1", "data2", "data3"]");'
  - text: ''
    testString: 'assert.deepEqual(parseSexpr(basicSExpr), basicSolution, "<code>parseSexpr("(data1 data2 data3)")</code> should return an array with 3 elements");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function parseSexpr(str) {
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
