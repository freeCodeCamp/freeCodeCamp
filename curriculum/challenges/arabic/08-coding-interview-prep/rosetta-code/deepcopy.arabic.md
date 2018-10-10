---
title: Deepcopy
id: 596a8888ab7c01048de257d5
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
    testString: 'assert(typeof deepcopy === "function", "<code>deepcopy</code> should be a function.");'
  - text: ''
    testString: 'assert(typeof deepcopy(obj1) === "object", "<code>deepcopy({test: "test"})</code> should return an object.");'
  - text: ''
    testString: 'assert(deepcopy(obj2) != obj2, "Should not return the same object that was provided.");'
  - text: ''
    testString: 'assert.deepEqual(deepcopy(obj2), obj2, "When passed an object containing an array, should return a deep copy of the object.");'
  - text: ''
    testString: 'assert.deepEqual(deepcopy(obj3), obj3, "When passed an object containing another object, should return a deep copy of the object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function deepcopy (obj) {
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
