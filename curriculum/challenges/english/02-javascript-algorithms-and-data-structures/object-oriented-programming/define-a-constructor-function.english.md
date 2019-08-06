---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
forumTopicId: 16804
---

## Description
<section id='description'>
<code>Constructors</code> are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
Here is an example of a <code>constructor</code>:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

This <code>constructor</code> defines a <code>Bird</code> object with properties <code>name</code>, <code>color</code>, and <code>numLegs</code> set to Albert, blue, and 2, respectively.
<code>Constructors</code> follow a few conventions:
<ul><li><code>Constructors</code> are defined with a capitalized name to distinguish them from other functions that are not <code>constructors</code>.</li><li><code>Constructors</code> use the keyword <code>this</code> to set properties of the object they will create. Inside the <code>constructor</code>, <code>this</code> refers to the new object it will create.</li><li><code>Constructors</code> define properties and behaviors instead of returning a value as other functions might.</li></ul>
</section>

## Instructions
<section id='instructions'>
Create a <code>constructor</code>, <code>Dog</code>, with properties <code>name</code>, <code>color</code>, and <code>numLegs</code> that are set to a string, a string, and a number, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> should have a <code>name</code> property set to a string.
    testString: assert(typeof (new Dog()).name === 'string');
  - text: <code>Dog</code> should have a <code>color</code> property set to a string.
    testString: assert(typeof (new Dog()).color === 'string');
  - text: <code>Dog</code> should have a <code>numLegs</code> property set to a number.
    testString: assert(typeof (new Dog()).numLegs === 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```

</section>
