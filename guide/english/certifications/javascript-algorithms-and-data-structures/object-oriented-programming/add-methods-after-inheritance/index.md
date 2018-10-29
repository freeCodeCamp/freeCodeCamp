---
title: Add Methods After Inheritance
---
## Add Methods After Inheritance

### Method

Just like the following example, a new instance of an object - `Dog` - must be created and the `prototype` must be set. 

```javascript

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

```

Then a new function - `bark()` - must be added to the Dog prototype. 

### Solution

```javascript

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof woof!");
};
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

```
