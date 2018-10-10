---
id: 587d7b88367417b2b2512b47
title: Use the Rest Operator with Function Parameters
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
    testString: 'assert(sum(0,1,2) === 3, "The result of <code>sum(0,1,2)</code> should be 3");'
  - text: ''
    testString: 'assert(sum(1,2,3,4) === 10, "The result of <code>sum(1,2,3,4)</code> should be 10");'
  - text: ''
    testString: 'assert(sum(5) === 5, "The result of <code>sum(5)</code> should be 5");'
  - text: ''
    testString: 'assert(sum() === 0, "The result of <code>sum()</code> should be 0");'
  - text: ''
    testString: 'getUserInput => assert(getUserInput("index").match(/function\s+sum\s*\(\s*...args\s*\)\s*{/g), "The <code>sum</code> function uses the <code>...</code> spread operator on the <code>args</code> parameter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
