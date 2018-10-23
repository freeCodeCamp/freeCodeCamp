---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
---

## Description
<section id='description'>
In the previous challenge, you created a <code>supertype</code> called <code>Animal</code> that defined behaviors shared by all animals:
<blockquote>function Animal() { }<br>Animal.prototype.eat = function() {<br>&nbsp;&nbsp;console.log("nom nom nom");<br>};</blockquote>
This and the next challenge will cover how to reuse <code>Animal's</code> methods inside <code>Bird</code> and <code>Dog</code> without defining them again. It uses a technique called <code>inheritance</code>.
This challenge covers the first step: make an instance of the <code>supertype</code> (or parent).
You already know one way to create an instance of <code>Animal</code> using the <code>new</code> operator:
<blockquote>let animal = new Animal();</blockquote>
There are some disadvantages when using this syntax for <code>inheritance</code>, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:
<blockquote>let animal = Object.create(Animal.prototype);</blockquote>
<code>Object.create(obj)</code> creates a new object, and sets <code>obj</code> as the new object's <code>prototype</code>. Recall that the <code>prototype</code> is like the "recipe" for creating an object. By setting the <code>prototype</code> of <code>animal</code> to be <code>Animal's</code> <code>prototype</code>, you are effectively giving the <code>animal</code> instance the same "recipe" as any other instance of <code>Animal</code>.
<blockquote>animal.eat(); // prints "nom nom nom"<br>animal instanceof Animal; // => true</blockquote>
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
    testString: assert(typeof duck !== "undefined", 'The <code>duck</code> variable should be defined.');
  - text: The <code>beagle</code> variable should be defined.
    testString: assert(typeof beagle !== "undefined", 'The <code>beagle</code> variable should be defined.');
  - text: <code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.
    testString: assert(duck instanceof Animal, '<code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.');
  - text: <code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.
    testString: assert(beagle instanceof Animal, '<code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.');

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

// Add your code below this line

let duck; // Change this line
let beagle; // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"
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
