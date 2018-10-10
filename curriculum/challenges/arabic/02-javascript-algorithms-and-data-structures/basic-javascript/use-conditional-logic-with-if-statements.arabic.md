---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
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
    testString: 'assert(typeof trueOrFalse === "function", "<code>trueOrFalse</code> should be a function");'
  - text: ''
    testString: 'assert(typeof trueOrFalse(true) === "string", "<code>trueOrFalse(true)</code> should return a string");'
  - text: ''
    testString: 'assert(typeof trueOrFalse(false) === "string", "<code>trueOrFalse(false)</code> should return a string");'
  - text: ''
    testString: 'assert(trueOrFalse(true) === "Yes, that was true", "<code>trueOrFalse(true)</code> should return "Yes, that was true"");'
  - text: ''
    testString: 'assert(trueOrFalse(false) === "No, that was false", "<code>trueOrFalse(false)</code> should return "No, that was false"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.



  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
