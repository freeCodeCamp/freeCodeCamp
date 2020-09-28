---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
forumTopicId: 301319
---

## Description
<section id='description'>
In the previous challenge, you created a <code>supertype</code> called <code>Animal</code> that defined behaviors shared by all animals:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

This and the next challenge will cover how to reuse <code>Animal's</code> methods inside <code>Bird</code> and <code>Dog</code> without defining them again. It uses a technique called inheritance.
This challenge covers the first step: make an instance of the <code>supertype</code> (or parent).
You already know one way to create an instance of <code>Animal</code> using the <code>new</code> operator:

```js
let animal = new Animal();
```

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

```js
let animal = Object.create(Animal.prototype);
```

<code>Object.create(obj)</code> creates a new object, and sets <code>obj</code> as the new object's <code>prototype</code>. Recall that the <code>prototype</code> is like the "recipe" for creating an object. By setting the <code>prototype</code> of <code>animal</code> to be <code>Animal's</code> <code>prototype</code>, you are effectively giving the <code>animal</code> instance the same "recipe" as any other instance of <code>Animal</code>.

```js
animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true
```

</section>

## Instructions
<section id='instructions'>
Use <code>Object.create</code> to make two instances of <code>Animal</code> named <code>duck</code> and <code>beagle</code>.
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
