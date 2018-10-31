---
title: Accumulator factory
id: 594810f028c0303b75339ace
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
    testString: 'assert(typeof accumulator === "function", "<code>accumulator</code> is a function.");'
  - text: ''
    testString: 'assert(typeof accumulator(0) === "function", "<code>accumulator(0)</code> should return a function.");'
  - text: ''
    testString: 'assert(typeof accumulator(0)(2) === "number", "<code>accumulator(0)(2)</code> should return a number.");'
  - text: ''
    testString: 'assert(testFn(5) === 5.5, "Passing in the values 3, -4, 1.5, and 5 should return 5.5.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function accumulator (sum) {
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
