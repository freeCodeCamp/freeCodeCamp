---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
forumTopicId: 301324
---

## Description

<section id='description'>

When an object inherits its `prototype` from another object, it also inherits the supertype's constructor property.

Here's an example:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```

But `duck` and all instances of `Bird` should show that they were constructed by `Bird` and not `Animal`. To do so, you can manually set `Bird's` constructor property to the `Bird` object:

```js
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

</section>

## Instructions

<section id='instructions'>

Fix the code so `duck.constructor` and `beagle.constructor` return their respective constructors.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>Bird.prototype</code> should be an instance of <code>Animal</code>.
    testString: assert(Animal.prototype.isPrototypeOf(Bird.prototype));
  - text: <code>duck.constructor</code> should return <code>Bird</code>.
    testString: assert(duck.constructor === Bird);
  - text: <code>Dog.prototype</code> should be an instance of <code>Animal</code>.
    testString: assert(Animal.prototype.isPrototypeOf(Dog.prototype));
  - text: <code>beagle.constructor</code> should return <code>Dog</code>.
    testString: assert(beagle.constructor === Dog);

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

// Only change code below this line



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
