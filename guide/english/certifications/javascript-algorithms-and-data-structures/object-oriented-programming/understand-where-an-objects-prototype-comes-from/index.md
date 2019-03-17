---
title: Understand Where an Object’s Prototype Comes From
---
## Understand Where an Object’s Prototype Comes From

### Hint 1

* You should use isPrototypeOf() to complete this challenge.

### Solution

``` javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line
Dog.prototype.isPrototypeOf(beagle);

```
