---
title: Iterate Over All Properties
---
## Iterate Over All Properties

### Method

The method is to use a `for-in-loop` to iterate through every property in the object. Inside the loop you then check if the property is a `own-property` or a `prototype` and place it in the `ownProps[]` array or the `prototypeProps[]` array. Remember to `push` properties to the `beagle` object and not the `Dog` object to pass all test cases.

### Solution

```javascript

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let property in beagle) {
  if(Dog.hasOwnProperty(property)) {
    ownProps.push(property)
  }
  else {
    prototypeProps.push(property)
  }
}

```
 
