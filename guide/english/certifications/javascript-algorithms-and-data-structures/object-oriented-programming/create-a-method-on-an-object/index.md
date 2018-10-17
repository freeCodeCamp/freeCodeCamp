---
title: Create a Method on an Object
---
## Create a Method on an Object

### Method:

An objects function must be initialised within the object itself. This is demonstrated in the following code.

```javascript

let obj = {
  property1 = 1,
  
  function1: function() {
    //Code to be exectued
  }
};

```
### Solution:

```javascript

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();

```
