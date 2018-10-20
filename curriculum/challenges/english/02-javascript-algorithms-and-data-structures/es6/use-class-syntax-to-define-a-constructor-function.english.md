---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
---

## Description
<section id='description'>
ES6 provides a new syntax to help create objects, using the keyword <dfn>class</dfn>.
This is to be noted, that the <code>class</code> syntax is just a syntax, and not a full-fledged class based implementation of object oriented paradigm, unlike in languages like Java, or Python, or Ruby etc.
In ES5, we usually define a constructor function, and use the <code>new</code> keyword to instantiate an object.
<blockquote>var SpaceShuttle = function(targetPlanet){<br>&nbsp;&nbsp;this.targetPlanet = targetPlanet;<br>}<br>var zeus = new SpaceShuttle('Jupiter');</blockquote>
The class syntax simply replaces the constructor function creation:
<blockquote>class SpaceShuttle {<br>&nbsp;&nbsp;constructor(targetPlanet){<br>&nbsp;&nbsp;&nbsp;&nbsp;this.targetPlanet = targetPlanet;<br>&nbsp;&nbsp;}<br>}<br>const zeus = new SpaceShuttle('Jupiter');</blockquote>
Notice that the <code>class</code> keyword declares a new function, and a constructor was added, which would be invoked when <code>new</code> is called - to create a new object.
</section>

## Instructions
<section id='instructions'>
Use <code>class</code> keyword and write a proper constructor to create the <code>Vegetable</code> class.
The <code>Vegetable</code> lets you create a vegetable object, with a property <code>name</code>, to be passed to constructor.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.
    testString: assert(typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function', '<code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.');
  - text: <code>class</code> keyword was used.
    testString: getUserInput => assert(getUserInput('index').match(/class/g),'<code>class</code> keyword was used.');
  - text: <code>Vegetable</code> can be instantiated.
    testString: assert(() => {const a = new Vegetable("apple"); return typeof a === 'object';},'<code>Vegetable</code> can be instantiated.');
  - text: <code>carrot.name</code> should return <code>carrot</code>.
    testString: assert(carrot.name=='carrot','<code>carrot.name</code> should return <code>carrot</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
