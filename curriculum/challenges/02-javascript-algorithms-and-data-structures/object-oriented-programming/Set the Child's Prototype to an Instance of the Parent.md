---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
---

## Description
<section id='description'>
In the previous challenge you saw the first step for inheriting behavior from the <code>supertype</code> (or parent) <code>Animal</code>: making a new instance of <code>Animal</code>.
This challenge covers the next step: set the <code>prototype</code> of the <code>subtype</code> (or child)&mdash;in this case, <code>Bird</code>&mdash;to be an instance of <code>Animal</code>.
<blockquote>Bird.prototype = Object.create(Animal.prototype);</blockquote>
Remember that the <code>prototype</code> is like the "recipe" for creating an object. In a way, the recipe for <code>Bird</code> now includes all the key "ingredients" from <code>Animal</code>.
<blockquote>let duck = new Bird("Donald");<br>duck.eat(); // prints "nom nom nom"</blockquote>
<code>duck</code> inherits all of <code>Animal</code>'s properties, including the <code>eat</code> method.
</section>

## Instructions
<section id='instructions'>
Modify the code so that instances of <code>Dog</code> inherit from <code>Animal</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>Dog.prototype</code> should be an instance of <code>Animal</code>.
  testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'

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

function Dog() { }

// Add your code below this line


let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
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

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```

</section>
