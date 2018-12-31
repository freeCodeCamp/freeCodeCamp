---
title: Understand the Prototype Chain
---
## Understand the Prototype Chain

### Solution
Your code should show that Object.prototype is the prototype of Dog.prototype

``` javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
```
