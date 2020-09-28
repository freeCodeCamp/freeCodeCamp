---
title: Compare a list of strings
id: 596e457071c35c882915b3e4
challengeType: 5
forumTopicId: 302235
localeTitle: Сравнить список строк
---

## Description
<section id='description'>
<p> Учитывая <a href="https://en.wikipedia.org/wiki/List_(abstract_data_type)" title="wp: List_ (abstract_data_type)">список</a> произвольно многих строк, реализуйте функцию для каждого из следующих условий: </p> если все они лексически равны, если каждая строка лексически меньше, чем одна после нее (т. е. является ли список в строгом порядке)
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>allEqual</code> is a function.
    testString: assert(typeof allEqual === 'function');
  - text: <code>azSorted</code> is a function.
    testString: assert(typeof azSorted === 'function');
  - text: <code>allEqual(["AA", "AA", "AA", "AA"])</code> returns true.
    testString: assert(allEqual(testCases[0]));
  - text: <code>azSorted(["AA", "AA", "AA", "AA"])</code> returns false.
    testString: assert(!azSorted(testCases[0]));
  - text: <code>allEqual(["AA", "ACB", "BB", "CC"])</code> returns false.
    testString: assert(!allEqual(testCases[1]));
  - text: <code>azSorted(["AA", "ACB", "BB", "CC"])</code> returns true.
    testString: assert(azSorted(testCases[1]));
  - text: <code>allEqual([])</code> returns true.
    testString: assert(allEqual(testCases[2]));
  - text: <code>azSorted([])</code> returns true.
    testString: assert(azSorted(testCases[2]));
  - text: <code>allEqual(["AA"])</code> returns true.
    testString: assert(allEqual(testCases[3]));
  - text: <code>azSorted(["AA"])</code> returns true.
    testString: assert(azSorted(testCases[3]));
  - text: <code>allEqual(["BB", "AA"])</code> returns false.
    testString: assert(!allEqual(testCases[4]));
  - text: <code>azSorted(["BB", "AA"])</code> returns false.
    testString: assert(!azSorted(testCases[4]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function allEqual(arr) {
  // Good luck!
  return true;
}

function azSorted(arr) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
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
