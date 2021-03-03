---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

A constructor function that inherits its `prototype` object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, `Bird` is a constructor that inherits its `prototype` from `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

In addition to what is inherited from `Animal`, you want to add behavior that is unique to `Bird` objects. Here, `Bird` will get a `fly()` function. Functions are added to `Bird's` `prototype` the same way as any constructor function:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Now instances of `Bird` will have both `eat()` and `fly()` methods:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` would display the string `nom nom nom` in the console, and `duck.fly()` would display the string `I'm flying!`.

# --instructions--

Add all necessary code so the `Dog` object inherits from `Animal` and the `Dog`'s `prototype` constructor is set to `Dog`. Then add a `bark()` method to the `Dog` object so that `beagle` can both `eat()` and `bark()`. The `bark()` method should print `Woof!` to the console.

# --hints--

`Animal` should not respond to the `bark()` method.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` should inherit the `eat()` method from `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

`Dog` should have the `bark()` method as an `own` property.

```js
assert(Dog.prototype.hasOwnProperty('bark'));
```

`beagle` should be an `instanceof` `Animal`.

```js
assert(beagle instanceof Animal);
```

The constructor for `beagle` should be set to `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` should log the string `nom nom nom`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.eat(), 'nom nom nom');
```

`beagle.bark()` should log the string `Woof!`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.bark(), 'Woof!');
```

# --seed--

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

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
