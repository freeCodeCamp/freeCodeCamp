---
id: 587d7b8a367417b2b2512b4c
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
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
    testString: 'assert(arr.every((v, i) => v === i + 3) && arr.length === 8,"<code>arr</code> should be <code>[3,4,5,6,7,8,9,10]</code>");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/\[\s*\w*\s*,\s*\w*\s*,\s*...\w+\s*\]/g),"Destructuring should be used.");'
  - text: ''
    testString: 'getUserInput => assert(!getUserInput("index").match(/slice/g), "<code>Array.slice()</code> should not be used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  arr = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
