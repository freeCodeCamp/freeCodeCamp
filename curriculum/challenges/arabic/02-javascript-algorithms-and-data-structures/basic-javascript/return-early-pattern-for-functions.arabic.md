---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
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
    testString: 'assert(typeof abTest(2,2) === "number" , "<code>abTest(2,2)</code> should return a number");'
  - text: ''
    testString: 'assert(abTest(2,2) === 8 , "<code>abTest(2,2)</code> should return <code>8</code>");'
  - text: ''
    testString: 'assert(abTest(-2,2) === undefined , "<code>abTest(-2,2)</code> should return <code>undefined</code>");'
  - text: ''
    testString: 'assert(abTest(2,-2) === undefined , "<code>abTest(2,-2)</code> should return <code>undefined</code>");'
  - text: ''
    testString: 'assert(abTest(2,8) === 18 , "<code>abTest(2,8)</code> should return <code>18</code>");'
  - text: ''
    testString: 'assert(abTest(3,3) === 12 , "<code>abTest(3,3)</code> should return <code>12</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
