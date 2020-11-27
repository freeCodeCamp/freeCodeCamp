---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
forumTopicId: 301212
---

## Description

<section id='description'>

ES6 provides a new syntax to create objects, using the <dfn>class</dfn> keyword.

It should be noted that the `class` syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the `new` keyword to instantiate an object.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

The `class` syntax simply replaces the constructor function creation:

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

It should be noted that the `class` keyword declares a new function, to which a constructor is added. This constructor is invoked when `new` is called to create a new object.  
**Notes:**  

-   UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above.
-   The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

</section>

## Instructions

<section id='instructions'>

Use the `class` keyword and write a constructor to create the `Vegetable` class.

The `Vegetable` class allows you to create a vegetable object with a property `name` that gets passed to the constructor.

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
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
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
