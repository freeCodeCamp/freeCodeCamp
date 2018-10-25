---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Simple Fields
challengeType: 1
---

## Description
<section id='description'>
ES6 adds some nice support for easily defining object literals.
Consider the following code:
<blockquote>const getMousePosition = (x, y) => ({<br>&nbsp;&nbsp;x: x,<br>&nbsp;&nbsp;y: y<br>});</blockquote>
<code>getMousePosition</code> is a simple function that returns an object containing two fields.
ES6 provides the syntactic sugar to eliminate the redundancy of having to write <code>x: x</code>. You can simply write <code>x</code> once, and it will be converted to<code>x: x</code> (or something equivalent) under the hood.
Here is the same function from above rewritten to use this new syntax:
<blockquote>const getMousePosition = (x, y) => ({ x, y });</blockquote>
</section>

## Instructions
<section id='instructions'>
Use simple fields with object literals to create and return a <code>Person</code> object.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'the output is <code>{name: "Zodiac Hasbro", age: 56, gender: "male"}</code>.'
    testString: 'assert(() => {const res={name:"Zodiac Hasbro",age:56,gender:"male"}; const person=createPerson("Zodiac Hasbro", 56, "male"); return Object.keys(person).every(k => person[k] === res[k]);}, ''the output is <code>{name: "Zodiac Hasbro", age: 56, gender: "male"}</code>.'');'
  - text: No <code>:</code> were used.
    testString: getUserInput => assert(!getUserInput('index').match(/:/g), 'No <code>:</code> were used.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
