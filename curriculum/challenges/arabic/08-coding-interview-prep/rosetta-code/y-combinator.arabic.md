---
title: Y combinator
id: 594810f028c0303b75339ad5
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
    testString: 'assert.equal(typeof Y(f => n => n), "function", "Y must return a function");'
  - text: ''
    testString: 'assert.equal(factorial(1), 1, "factorial(1) must return 1.");'
  - text: ''
    testString: 'assert.equal(factorial(2), 2, "factorial(2) must return 2.");'
  - text: ''
    testString: 'assert.equal(factorial(3), 6, "factorial(3) must return 6.");'
  - text: ''
    testString: 'assert.equal(factorial(4), 24, "factorial(4) must return 24.");'
  - text: ''
    testString: 'assert.equal(factorial(10), 3628800, "factorial(10) must return 3628800.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Y(f) {
  return function() {
  // Good luck!
  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});

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
