---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
forumTopicId: 301209
---

## Description

<section id='description'>

In order to help us create more flexible functions, ES6 introduces <dfn>default parameters</dfn> for functions.

Check out this code:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter `name` will receive its default value `"Anonymous"` when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

</section>

## Instructions

<section id='instructions'>

Modify the function `increment` by adding default parameters so that it will add 1 to `number` if `value` is not specified.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The result of <code>increment(5, 2)</code> should be <code>7</code>.
    testString: assert(increment(5, 2) === 7);
  - text: The result of <code>increment(5)</code> should be <code>6</code>.
    testString: assert(increment(5) === 6);
  - text: A default parameter value of <code>1</code> should be used for <code>value</code>.
    testString: assert(code.match(/value\s*=\s*1/g));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

</div>

</section>

## Solution

<section id='solution'>

```js
const increment = (number, value = 1) => number + value;
```

</section>
