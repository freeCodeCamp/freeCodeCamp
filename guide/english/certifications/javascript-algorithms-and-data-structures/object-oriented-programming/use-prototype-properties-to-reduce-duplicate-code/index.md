---
title: Use Prototype Properties to Reduce Duplicate Code
---
## Use Prototype Properties to Reduce Duplicate Code

### Method:

The `prototype` property allows us you to add new properties to an object constructor from outside the original code block. The prototype property also allows you to add new functions to the objects constructor. The following code demonstrates how to use `.prototype` on an object to create a new property in the constructor. 

#### Example:

```javascript

Obj.prototype.newProperty = "New Property!";

```

Using this logic, simply create a new `prototype` property for `numLegs`. The test cases can be passed by replacing the `Bird` object with the `Dog` object in the example given - `Bird.prototype.numLegs = 2;`

### Solution:

```javascript

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");

```
