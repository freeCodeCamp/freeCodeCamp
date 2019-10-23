---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
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
    testString: 'getUserInput => assert(getUserInput("index").match(/const/g), "Do not replace <code>const</code> keyword.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS/g), "<code>MATH_CONSTANTS</code> should be a constant variable (by using <code>const</code>).");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g), "Do not change original <code>MATH_CONSTANTS</code>.");'
  - text: ''
    testString: 'assert(PI === 3.14, "<code>PI</code> equals <code>3.14</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
