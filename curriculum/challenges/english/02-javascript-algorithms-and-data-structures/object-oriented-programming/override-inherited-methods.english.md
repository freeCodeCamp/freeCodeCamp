---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
challengeType: 1
forumTopicId: 301322
---

## Description
<section id='description'>

In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its <code>prototype</code> object:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Then the <code>ChildObject</code> received its own methods by chaining them onto its <code>prototype</code>:

```js
ChildObject.prototype.methodName = function() {...};
```

It's possible to override an inherited method. It's done the same way - by adding a method to <code>ChildObject.prototype</code> using the same method name as the one to override.
Here's an example of <code>Bird</code> overriding the <code>eat()</code> method inherited from <code>Animal</code>:

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

If you have an instance <code>let duck = new Bird();</code> and you call <code>duck.eat()</code>, this is how JavaScript looks for the method on <code>duck’s</code> <code>prototype</code> chain:

1. duck => Is eat() defined here? No.
2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level.

</section>

## Instructions
<section id='instructions'>

Override the <code>fly()</code> method for <code>Penguin</code> so that it returns "Alas, this is a flightless bird."
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>penguin.fly()</code> should return the string "Alas, this is a flightless bird."
    testString: assert(penguin.fly() === "Alas, this is a flightless bird.");
  - text: The <code>bird.fly()</code> method should return "I am flying!"
    testString: assert((new Bird()).fly() === "I am flying!");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```

</section>
