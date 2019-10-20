---
title: Compare a list of strings
id: 596e457071c35c882915b3e4
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
    testString: 'assert(typeof allEqual === "function", "<code>allEqual</code> is a function.");'
  - text: ''
    testString: 'assert(typeof azSorted === "function", "<code>azSorted</code> is a function.");'
  - text: ''
    testString: 'assert(allEqual(testCases[0]), "<code>allEqual(["AA", "AA", "AA", "AA"])</code> returns true.");'
  - text: ''
    testString: 'assert(!azSorted(testCases[0]), "<code>azSorted(["AA", "AA", "AA", "AA"])</code> returns false.");'
  - text: ''
    testString: 'assert(!allEqual(testCases[1]), "<code>allEqual(["AA", "ACB", "BB", "CC"])</code> returns false.");'
  - text: ''
    testString: 'assert(azSorted(testCases[1]), "<code>azSorted(["AA", "ACB", "BB", "CC"])</code> returns true.");'
  - text: ''
    testString: 'assert(allEqual(testCases[2]), "<code>allEqual([])</code> returns true.");'
  - text: ''
    testString: 'assert(azSorted(testCases[2]), "<code>azSorted([])</code> returns true.");'
  - text: ''
    testString: 'assert(allEqual(testCases[3]), "<code>allEqual(["AA"])</code> returns true.");'
  - text: ''
    testString: 'assert(azSorted(testCases[3]), "<code>azSorted(["AA"])</code> returns true.");'
  - text: ''
    testString: 'assert(!allEqual(testCases[4]), "<code>allEqual(["BB", "AA"])</code> returns false.");'
  - text: ''
    testString: 'assert(!azSorted(testCases[4]), "<code>azSorted(["BB", "AA"])</code> returns false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function allEqual (arr) {
  // Good luck!
  return true;
}

function azSorted (arr) {
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
