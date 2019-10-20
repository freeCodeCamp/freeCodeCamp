---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
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
    testString: 'assert(arr2.every((v, i) => v === arr1[i]), "<code>arr2</code> is correct copy of <code>arr1</code>.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/\[\s*...arr1\s*\]/g),"<code>...</code> spread operator was used to duplicate <code>arr1</code>.");'
  - text: ''
    testString: 'assert((arr1, arr2) => {arr1.push("JUN"); return arr2.length < arr1.length},"<code>arr2</code> remains unchanged when <code>arr1</code> is changed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
