---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
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
    testString: 'assert(increment(5, 2) === 7, "The result of <code>increment(5, 2)</code> should be <code>7</code>.");'
  - text: ''
    testString: 'assert(increment(5) === 6, "The result of <code>increment(5)</code> should be <code>6</code>.");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/value\s*=\s*1/g), "default parameter <code>1</code> was used for <code>value</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const increment = (function() {
  "use strict";
  return function increment(number, value) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
