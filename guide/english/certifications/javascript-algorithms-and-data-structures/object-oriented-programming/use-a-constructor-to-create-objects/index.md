---
title: Use a Constructor to Create Objects
---
## Use a Constructor to Create Objects

### Method:

We saw in the last challenge how to create a constructor function. Now we can simply call this function to create a new object with the properties already defined in the constructor. Simply initialise a new variable `hound` calling the `Dog()` constructor.

### Solution:

```javascript

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();

```
