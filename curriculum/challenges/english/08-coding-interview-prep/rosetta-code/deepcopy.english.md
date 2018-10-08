---
title: Deepcopy
id: 596a8888ab7c01048de257d5
challengeType: 5
---

## Description
<section id='description'>
Task:
<p>Write a function that returns a deep copy of a given object.</p>
<p>The copy must not be the same object that was given.</p>
<p>This task will not test for: </p>
Objects with properties that are functions
Date objects or object with properties that are Date objects
RegEx or object with properties that are RegEx objects
Prototype copying
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>deepcopy</code> should be a function.
    testString: 'assert(typeof deepcopy === "function", "<code>deepcopy</code> should be a function.");'
  - text: '<code>deepcopy({test: "test"})</code> should return an object.'
    testString: 'assert(typeof deepcopy(obj1) === "object", "<code>deepcopy({test: "test"})</code> should return an object.");'
  - text: Should not return the same object that was provided.
    testString: 'assert(deepcopy(obj2) != obj2, "Should not return the same object that was provided.");'
  - text: 'When passed an object containing an array, should return a deep copy of the object.'
    testString: 'assert.deepEqual(deepcopy(obj2), obj2, "When passed an object containing an array, should return a deep copy of the object.");'
  - text: 'When passed an object containing another object, should return a deep copy of the object.'
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
function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}


```

</section>
