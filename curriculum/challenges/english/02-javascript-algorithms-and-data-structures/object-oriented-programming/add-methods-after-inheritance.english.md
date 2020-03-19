---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
forumTopicId: 301315
---

## Description
<section id='description'>
A constructor function that inherits its <code>prototype</code> object from a supertype constructor function can still have its own methods in addition to inherited methods.
For example, <code>Bird</code> is a constructor that inherits its <code>prototype</code> from <code>Animal</code>:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

In addition to what is inherited from <code>Animal</code>, you want to add behavior that is unique to <code>Bird</code> objects. Here, <code>Bird</code> will get a <code>fly()</code> function. Functions are added to <code>Bird's</code> <code>prototype</code> the same way as any constructor function:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Now instances of <code>Bird</code> will have both <code>eat()</code> and <code>fly()</code> methods:

```js
let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"
```

</section>

## Instructions
<section id='instructions'>
Add all necessary code so the <code>Dog</code> object inherits from <code>Animal</code> and the <code>Dog's</code> <code>prototype</code> constructor is set to Dog. Then add a <code>bark()</code> method to the <code>Dog</code> object so that <code>beagle</code> can both <code>eat()</code> and <code>bark()</code>. The <code>bark()</code> method should print "Woof!" to the console.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal</code> should not respond to the <code>bark()</code> method.
    testString: assert(typeof Animal.prototype.bark == "undefined");
  - text: <code>Dog</code> should inherit the <code>eat()</code> method from <code>Animal</code>.
    testString: assert(typeof Dog.prototype.eat == "function");
  - text: <code>Dog</code> should have the <code>bark()</code> method as an <code>own</code> property.
    testString: assert(Dog.prototype.hasOwnProperty('bark'));
  - text: <code>beagle</code> should be an <code>instanceof</code> <code>Animal</code>.
    testString: assert(beagle instanceof Animal);
  - text: The constructor for <code>beagle</code> should be set to <code>Dog</code>.
    testString: assert(beagle.constructor === Dog);
  - text: <code>beagle.eat()</code> should log <code>"nom nom nom"</code>
    testString: |
      console.log = function(msg){throw msg;}
      assert.throws(() => beagle.eat(),"nom nom nom");
  - text: <code>beagle.bark()</code> should log <code>"Woof!"</code>
    testString: |
      console.log = function(msg){throw msg;}
      assert.throws(() => beagle.bark(),"Woof!");
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```

</section>
