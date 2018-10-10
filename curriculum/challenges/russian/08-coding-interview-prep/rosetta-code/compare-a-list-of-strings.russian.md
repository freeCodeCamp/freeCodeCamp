---
title: Compare a list of strings
id: 596e457071c35c882915b3e4
challengeType: 5
videoUrl: ''
localeTitle: Сравнить список строк
---

## Description
<section id="description"><p> Учитывая <a href="https://en.wikipedia.org/wiki/List_(abstract_data_type)" title="wp: List_ (abstract_data_type)">список</a> произвольно многих строк, реализуйте функцию для каждого из следующих условий: </p> если все они лексически равны, если каждая строка лексически меньше, чем одна после нее (т. е. является ли список в строгом порядке) </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>allEqual</code> - это функция.
    testString: 'assert(typeof allEqual === "function", "<code>allEqual</code> is a function.");'
  - text: <code>azSorted</code> - это функция.
    testString: 'assert(typeof azSorted === "function", "<code>azSorted</code> is a function.");'
  - text: '<code>allEqual([&quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;])</code> возвращает true.'
    testString: 'assert(allEqual(testCases[0]), "<code>allEqual(["AA", "AA", "AA", "AA"])</code> returns true.");'
  - text: '<code>azSorted([&quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;, &quot;AA&quot;])</code> возвращает false.'
    testString: 'assert(!azSorted(testCases[0]), "<code>azSorted(["AA", "AA", "AA", "AA"])</code> returns false.");'
  - text: '<code>allEqual([&quot;AA&quot;, &quot;ACB&quot;, &quot;BB&quot;, &quot;CC&quot;])</code> возвращает false.'
    testString: 'assert(!allEqual(testCases[1]), "<code>allEqual(["AA", "ACB", "BB", "CC"])</code> returns false.");'
  - text: '<code>azSorted([&quot;AA&quot;, &quot;ACB&quot;, &quot;BB&quot;, &quot;CC&quot;])</code> возвращает true.'
    testString: 'assert(azSorted(testCases[1]), "<code>azSorted(["AA", "ACB", "BB", "CC"])</code> returns true.");'
  - text: '<code>allEqual([])</code> возвращает true.'
    testString: 'assert(allEqual(testCases[2]), "<code>allEqual([])</code> returns true.");'
  - text: '<code>azSorted([])</code> возвращает true.'
    testString: 'assert(azSorted(testCases[2]), "<code>azSorted([])</code> returns true.");'
  - text: '<code>allEqual([&quot;AA&quot;])</code> возвращает true.'
    testString: 'assert(allEqual(testCases[3]), "<code>allEqual(["AA"])</code> returns true.");'
  - text: '<code>azSorted([&quot;AA&quot;])</code> возвращает true.'
    testString: 'assert(azSorted(testCases[3]), "<code>azSorted(["AA"])</code> returns true.");'
  - text: '<code>allEqual([&quot;BB&quot;, &quot;AA&quot;])</code> возвращает false.'
    testString: 'assert(!allEqual(testCases[4]), "<code>allEqual(["BB", "AA"])</code> returns false.");'
  - text: '<code>azSorted([&quot;BB&quot;, &quot;AA&quot;])</code> возвращает false.'
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
