---
title: Compare a list of strings
id: 596e457071c35c882915b3e4
challengeType: 5
forumTopicId: 302235
---

## Description
<section id='description'>
Given a <a href="https://en.wikipedia.org/wiki/List_(abstract_data_type)" title="wp: List_(abstract_data_type)" target="_blank">list</a> of arbitrarily many strings, implement a function for each of the following conditions:
<ul>
  <li>test if they are all lexically equal</li>
  <li>test if every string is lexically less than the one after it  (i.e. whether the list is in strict ascending order)</li>
</ul>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>allEqual</code> should be a function.
    testString: assert(typeof allEqual === 'function');
  - text: <code>azSorted</code> should be a function.
    testString: assert(typeof azSorted === 'function');
  - text: <code>allEqual(["AA", "AA", "AA", "AA"])</code> should return true.
    testString: assert(allEqual(testCases[0]));
  - text: <code>azSorted(["AA", "AA", "AA", "AA"])</code> should return false.
    testString: assert(!azSorted(testCases[0]));
  - text: <code>allEqual(["AA", "ACB", "BB", "CC"])</code> should return false.
    testString: assert(!allEqual(testCases[1]));
  - text: <code>azSorted(["AA", "ACB", "BB", "CC"])</code> should return true.
    testString: assert(azSorted(testCases[1]));
  - text: <code>allEqual([])</code> should return true.
    testString: assert(allEqual(testCases[2]));
  - text: <code>azSorted([])</code> should return true.
    testString: assert(azSorted(testCases[2]));
  - text: <code>allEqual(["AA"])</code> should return true.
    testString: assert(allEqual(testCases[3]));
  - text: <code>azSorted(["AA"])</code> should return true.
    testString: assert(azSorted(testCases[3]));
  - text: <code>allEqual(["BB", "AA"])</code> should return false.
    testString: assert(!allEqual(testCases[4]));
  - text: <code>azSorted(["BB", "AA"])</code> should return false.
    testString: assert(!azSorted(testCases[4]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function allEqual(arr) {

  return true;
}

function azSorted(arr) {

  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testCases = [['AA', 'AA', 'AA', 'AA'], ['AA', 'ACB', 'BB', 'CC'], [], ['AA'], ['BB', 'AA']];
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
