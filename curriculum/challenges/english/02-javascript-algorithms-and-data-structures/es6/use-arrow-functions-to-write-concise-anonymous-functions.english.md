---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
forumTopicId: 301211
---

## Description
<section id='description'>
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
To achieve this, we often use the following syntax:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use <strong>arrow function syntax</strong>:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword <code>return</code> as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

```js
const myFunc = () => "value";
```

This code will still return <code>value</code> by default.
</section>

## Instructions
<section id='instructions'>
Rewrite the function assigned to the variable <code>magic</code> which returns a <code>new Date()</code> to use arrow function syntax. Also, make sure nothing is defined using the keyword <code>var</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: User should replace <code>var</code> keyword.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>magic</code> should be a constant variable (by using <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+magic/g));
  - text: <code>magic</code> should be a <code>function</code>.
    testString: assert(typeof magic === 'function');
  - text: <code>magic()</code> should return correct date.
    testString: assert(magic().setHours(0,0,0,0) === new Date().setHours(0,0,0,0));
  - text: <code>function</code> keyword should not be used.
    testString: getUserInput => assert(!getUserInput('index').match(/function/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var magic = function() {
  "use strict";
  return new Date();
};
```

</div>



</section>

## Solution
<section id='solution'>

```js
const magic = () => {
  "use strict";
  return new Date();
};
```

</section>
