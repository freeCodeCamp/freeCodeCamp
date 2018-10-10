---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
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
    testString: 'assert(fixedValue === 4, "Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.");'
  - text: ''
    testString: 'assert(code.match(/function\s+?incrementer\s*?\(.+?\)/g), "Your <code>incrementer</code> function should take a parameter.");'
  - text: ''
    testString: 'assert(newValue === 5, "Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer () {


  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
