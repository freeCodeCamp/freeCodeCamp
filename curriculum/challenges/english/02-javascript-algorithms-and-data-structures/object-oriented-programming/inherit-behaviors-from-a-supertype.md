---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
forumTopicId: 301319
---

## Description

<section id='description'>

In the previous challenge, you created a `supertype` called `Animal` that defined behaviors shared by all animals:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

This and the next challenge will cover how to reuse `Animal's` methods inside `Bird` and `Dog` without defining them again. It uses a technique called inheritance. This challenge covers the first step: make an instance of the `supertype` (or parent). You already know one way to create an instance of `Animal` using the `new` operator:

```js
let animal = new Animal();
```

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` creates a new object, and sets `obj` as the new object's `prototype`. Recall that the `prototype` is like the "recipe" for creating an object. By setting the `prototype` of `animal` to be `Animal's` `prototype`, you are effectively giving the `animal` instance the same "recipe" as any other instance of `Animal`.

```js
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```

</section>

## Instructions

<section id='instructions'>

Use `Object.create` to make two instances of `Animal` named `duck` and `beagle`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The <code>duck</code> variable should be defined.
    testString: assert(typeof duck !== "undefined");
  - text: The <code>beagle</code> variable should be defined.
    testString: assert(typeof beagle !== "undefined");
  - text: The <code>duck</code> variable should be initialised with <code>Object.create</code>.
    testString: assert(/(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(code));
  - text: The <code>beagle</code> variable should be initialised with <code>Object.create</code>.
    testString: assert(/(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(code));
  - text: <code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.
    testString: assert(duck instanceof Animal);
  - text: <code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.
    testString: assert(beagle instanceof Animal);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
```

</div>

</section>

## Solution

<section id='solution'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```

</section>
