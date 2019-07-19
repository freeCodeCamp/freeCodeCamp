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

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The class syntax simply replaces the constructor function creation:

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Notice that the <code>class</code> keyword declares a new function, and a constructor was added, which would be invoked when <code>new</code> is called - to create a new object.<br>
<strong>Notes:</strong><br><ul>
<li> UpperCamelCase should be used by convention for ES6 class names, as in <code>SpaceShuttle</code> used above.</li>
<li> The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.</li></ul>
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
    testString: assert(typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function');
  - text: <code>class</code> keyword should be used.
    testString: assert(code.match(/class/g));
  - text: <code>Vegetable</code> should be able to be instantiated.
    testString: assert(() => {const a = new Vegetable("apple"); return typeof a === 'object';});
  - text: <code>carrot.name</code> should return <code>carrot</code>.
    testString: assert(carrot.name=='carrot');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* Alter code below this line */

/* Alter code above this line */

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

</div>



</section>

## Solution
<section id='solution'>

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```

</section>
