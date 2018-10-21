---
id: 587d7b88367417b2b2512b47
title: Use the Rest Operator with Function Parameters
challengeType: 1
---

## Description
<section id='description'>
In order to help us create more flexible functions, ES6 introduces the <dfn>rest operator</dfn> for function parameters. With the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
Check out this code:
<blockquote>function howMany(...args) {<br>&nbsp;&nbsp;return "You have passed " + args.length + " arguments.";<br>}<br>console.log(howMany(0, 1, 2)); // You have passed 3 arguments<br>console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.</blockquote>
The rest operator eliminates the need to check the <code>args</code> array and allows us to apply <code>map()</code>, <code>filter()</code> and <code>reduce()</code> on the parameters array.
</section>

## Instructions
<section id='instructions'>
Modify the function <code>sum</code> so that it uses the rest operator and it works in the same way with any number of parameters.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The result of <code>sum(0,1,2)</code> should be 3
    testString: assert(sum(0,1,2) === 3, 'The result of <code>sum(0,1,2)</code> should be 3');
  - text: The result of <code>sum(1,2,3,4)</code> should be 10
    testString: assert(sum(1,2,3,4) === 10, 'The result of <code>sum(1,2,3,4)</code> should be 10');
  - text: The result of <code>sum(5)</code> should be 5
    testString: assert(sum(5) === 5, 'The result of <code>sum(5)</code> should be 5');
  - text: The result of <code>sum()</code> should be 0
    testString: assert(sum() === 0, 'The result of <code>sum()</code> should be 0');
  - text: The <code>sum</code> function uses the <code>...</code> spread operator on the <code>args</code> parameter.
    testString: getUserInput => assert(getUserInput('index').match(/function\s+sum\s*\(\s*...args\s*\)\s*{/g), 'The <code>sum</code> function uses the <code>...</code> spread operator on the <code>args</code> parameter.');

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
