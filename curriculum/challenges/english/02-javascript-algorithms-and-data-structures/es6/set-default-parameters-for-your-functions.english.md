---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
---

## Description
<section id='description'>
In order to help us create more flexible functions, ES6 introduces <dfn>default parameters</dfn> for functions.
Check out this code:
<blockquote>function greeting(name = "Anonymous") {<br>&nbsp;&nbsp;return "Hello " + name;<br>}<br>console.log(greeting("John")); // Hello John<br>console.log(greeting()); // Hello Anonymous</blockquote>
The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter <code>name</code> will receive its default value <code>"Anonymous"</code> when you do not provide a value for the parameter. You can add default values for as many parameters as you want.
</section>

## Instructions
<section id='instructions'>
Modify the function <code>increment</code> by adding default parameters so that it will add 1 to <code>number</code> if <code>value</code> is not specified.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The result of <code>increment(5, 2)</code> should be <code>7</code>.'
    testString: 'assert(increment(5, 2) === 7, "The result of <code>increment(5, 2)</code> should be <code>7</code>.");'
  - text: The result of <code>increment(5)</code> should be <code>6</code>.
    testString: 'assert(increment(5) === 6, "The result of <code>increment(5)</code> should be <code>6</code>.");'
  - text: default parameter <code>1</code> was used for <code>value</code>.
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
