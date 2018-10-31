---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
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
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+myConcat/g), "<code>myConcat</code> should be a constant variable (by using <code>const</code>).");'
  - text: ''
    testString: 'assert(typeof myConcat === "function", "<code>myConcat</code> should be a function");'
  - text: ''
    testString: 'assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; }, "<code>myConcat()</code> returns the correct <code>array</code>");'
  - text: ''
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
