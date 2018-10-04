---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
---

## Description
<section id='description'>
When an object inherits its <code>prototype</code> from another object, it also inherits the <code>supertype</code>'s constructor property.
Here's an example:
<blockquote>function Bird() { }<br>Bird.prototype = Object.create(Animal.prototype);<br>let duck = new Bird();<br>duck.constructor // function Animal(){...}</blockquote>
But <code>duck</code> and all instances of <code>Bird</code> should show that they were constructed by <code>Bird</code> and not <code>Animal</code>. To do so, you can manually set <code>Bird's</code> constructor property to the <code>Bird</code> object:
<blockquote>Bird.prototype.constructor = Bird;<br>duck.constructor // function Bird(){...}</blockquote>
</section>

## Instructions
<section id='instructions'>
Fix the code so <code>duck.constructor</code> and <code>beagle.constructor</code> return their respective constructors.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Bird.prototype</code> should be an instance of <code>Animal</code>.
    testString: 'assert(Animal.prototype.isPrototypeOf(Bird.prototype), ''<code>Bird.prototype</code> should be an instance of <code>Animal</code>.'');'
  - text: <code>duck.constructor</code> should return <code>Bird</code>.
    testString: 'assert(duck.constructor === Bird, ''<code>duck.constructor</code> should return <code>Bird</code>.'');'
  - text: <code>Dog.prototype</code> should be an instance of <code>Animal</code>.
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), ''<code>Dog.prototype</code> should be an instance of <code>Animal</code>.'');'
  - text: <code>beagle.constructor</code> should return <code>Dog</code>.
    testString: 'assert(beagle.constructor === Dog, ''<code>beagle.constructor</code> should return <code>Dog</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line



let duck = new Bird();
let beagle = new Dog();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```

</section>
