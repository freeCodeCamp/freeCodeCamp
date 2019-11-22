---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
forumTopicId: 301317
---

## Description
<section id='description'>
Think about things people see every day, like cars, shops, and birds. These are all <dfn>objects</dfn>: tangible things people can observe and interact with.
What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.
These qualities, or <dfn>properties</dfn>, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.
Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts. Here's an example using these concepts to create a <code>duck</code> object:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

This <code>duck</code> object has two property/value pairs: a <code>name</code> of "Aflac" and a <code>numLegs</code> of 2.
</section>

## Instructions
<section id='instructions'>
Create a <code>dog</code> object with <code>name</code> and <code>numLegs</code> properties, and set them to a string and a number, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog</code> should be an object.
    testString: assert(typeof(dog) === 'object');
  - text: <code>dog</code> should have a <code>name</code> property set to a <code>string</code>.
    testString: assert(typeof(dog.name) === 'string');
  - text: <code>dog</code> should have a <code>numLegs</code> property set to a <code>number</code>.
    testString: assert(typeof(dog.numLegs) === 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {

};
```

</div>



</section>

## Solution
<section id='solution'>


```js
let dog = {
  name: '',
  numLegs: 4
};
```

</section>
