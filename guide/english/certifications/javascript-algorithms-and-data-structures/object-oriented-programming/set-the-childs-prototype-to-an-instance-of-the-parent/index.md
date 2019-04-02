---
title: Set the Child's Prototype to an Instance of the Parent
---
## Set the Child's Prototype to an Instance of the Parent

### Method

This challenge is no different from the last challenge, in the fact that you must create an object which inherits from the `supertype`. Only this time the subtype `Dog` will inherit the `Animal` supertype.
Simply create a new instance of `Dog.prototype` like the following example.

```javascript

Bird.prototype = Object.create(Animal.prototype);

```

### Solution

```javascript

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

```
