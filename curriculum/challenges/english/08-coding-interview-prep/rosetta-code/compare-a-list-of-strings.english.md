---
title: Compare a list of strings
id: 596e457071c35c882915b3e4
challengeType: 5
---

## Description
<section id='description'>
<p>Given a  <a href="https://en.wikipedia.org/wiki/List_(abstract_data_type)" title="wp: List_(abstract_data_type)">list</a>  of arbitrarily many strings, implement a function for each of the following conditions:</p> test if they are all lexically equal
 test if every string is lexically less than the one after it  (i.e. whether the list is in strict ascending order)
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>allEqual</code> is a function.
    testString: 'assert(typeof allEqual === ''function'', ''<code>allEqual</code> is a function.'');'
  - text: <code>azSorted</code> is a function.
    testString: 'assert(typeof azSorted === ''function'', ''<code>azSorted</code> is a function.'');'
  - text: '<code>allEqual(["AA", "AA", "AA", "AA"])</code> returns true.'
    testString: 'assert(allEqual(testCases[0]), ''<code>allEqual(["AA", "AA", "AA", "AA"])</code> returns true.'');'
  - text: '<code>azSorted(["AA", "AA", "AA", "AA"])</code> returns false.'
    testString: 'assert(!azSorted(testCases[0]), ''<code>azSorted(["AA", "AA", "AA", "AA"])</code> returns false.'');'
  - text: '<code>allEqual(["AA", "ACB", "BB", "CC"])</code> returns false.'
    testString: 'assert(!allEqual(testCases[1]), ''<code>allEqual(["AA", "ACB", "BB", "CC"])</code> returns false.'');'
  - text: '<code>azSorted(["AA", "ACB", "BB", "CC"])</code> returns true.'
    testString: 'assert(azSorted(testCases[1]), ''<code>azSorted(["AA", "ACB", "BB", "CC"])</code> returns true.'');'
  - text: '<code>allEqual([])</code> returns true.'
    testString: 'assert(allEqual(testCases[2]), ''<code>allEqual([])</code> returns true.'');'
  - text: '<code>azSorted([])</code> returns true.'
    testString: 'assert(azSorted(testCases[2]), ''<code>azSorted([])</code> returns true.'');'
  - text: '<code>allEqual(["AA"])</code> returns true.'
    testString: 'assert(allEqual(testCases[3]), ''<code>allEqual(["AA"])</code> returns true.'');'
  - text: '<code>azSorted(["AA"])</code> returns true.'
    testString: 'assert(azSorted(testCases[3]), ''<code>azSorted(["AA"])</code> returns true.'');'
  - text: '<code>allEqual(["BB", "AA"])</code> returns false.'
    testString: 'assert(!allEqual(testCases[4]), ''<code>allEqual(["BB", "AA"])</code> returns false.'');'
  - text: '<code>azSorted(["BB", "AA"])</code> returns false.'
    testString: 'assert(!azSorted(testCases[4]), ''<code>azSorted(["BB", "AA"])</code> returns false.'');'

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
function allEqual(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] === a[i]);
  } return out;
}

function azSorted(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] < a[i]);
  } return out;
}

```

</section>
