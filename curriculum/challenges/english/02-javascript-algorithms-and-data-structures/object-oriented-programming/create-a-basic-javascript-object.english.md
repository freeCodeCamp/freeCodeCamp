---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
---

## Description
<section id='description'>
Think about things people see everyday, like cars, shops, and birds. These are all <code>objects</code>: tangible things people can observe and interact with.
What are some qualities of these <code>objects</code>? A car has wheels. Shops sell items. Birds have wings.
These qualities, or <code>properties</code>, define what makes up an <code>object</code>. Note that similar <code>objects</code> share the same <code>properties</code>, but may have different values for those <code>properties</code>. For example, all cars have wheels, but not all cars have the same number of wheels.
<code>Objects</code> in JavaScript are used to model real-world objects, giving them <code>properties</code> and behavior just like their real-world counterparts. Here's an example using these concepts to create a <code>duck</code> <code>object</code>:
<blockquote>let duck = {<br>&nbsp;&nbsp;name: "Aflac",<br>&nbsp;&nbsp;numLegs: 2<br>};</blockquote>
This <code>duck</code> <code>object</code> has two property/value pairs: a <code>name</code> of "Aflac" and a <code>numLegs</code> of 2.
</section>

## Instructions
<section id='instructions'>
Create a <code>dog</code> <code>object</code> with <code>name</code> and <code>numLegs</code> properties, and set them to a string and a number, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog</code> should be an <code>object</code>.
    testString: 'assert(typeof(dog) === "object", "<code>dog</code> should be an <code>object</code>.");'
  - text: <code>dog</code> should have a <code>name</code> property set to a <code>string</code>.
    testString: 'assert(typeof(dog.name) === "string", "<code>dog</code> should have a <code>name</code> property set to a <code>string</code>.");'
  - text: <code>dog</code> should have a <code>numLegs</code> property set to a <code>number</code>.
    testString: 'assert(typeof(dog.numLegs) === "number", "<code>dog</code> should have a <code>numLegs</code> property set to a <code>number</code>.");'

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
  name: ",
  numLegs: 4
};
```

</section>
