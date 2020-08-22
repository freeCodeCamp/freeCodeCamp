---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Object Property Shorthand
challengeType: 1
isHidden: false
forumTopicId: 301225
---

## Description
<section id='description'>
ES6 adds some nice support for easily defining object literals.
Consider the following code:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

<code>getMousePosition</code> is a simple function that returns an object containing two properties.
ES6 provides the syntactic sugar to eliminate the redundancy of having to write <code>x: x</code>. You can simply write <code>x</code> once, and it will be converted to<code>x: x</code> (or something equivalent) under the hood.
Here is the same function from above rewritten to use this new syntax:

```js
const getMousePosition = (x, y) => ({ x, y });
```

</section>

## Instructions
<section id='instructions'>
Use object property shorthand with object literals to create and return an object with <code>name</code>, <code>age</code> and <code>gender</code> properties.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>createPerson("Zodiac Hasbro", 56, "male")</code> should return <code>{name: "Zodiac Hasbro", age: 56, gender: "male"}</code>.'
    testString: assert.deepEqual({name:"Zodiac Hasbro",age:56,gender:"male"}, createPerson("Zodiac Hasbro", 56, "male"));
  - text: Your code should not use <code>key:value</code>.
    testString: getUserInput => assert(!getUserInput('index').match(/:/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

</div>



</section>

## Solution
<section id='solution'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender
  };
};
```

</section>
