---
title: Remember to Set the Constructor Property when Changing the Prototype
---
## Remember to Set the Constructor Property when Changing the Prototype

- Remember to define the constructor property when you set a prototype to a new object.

# Solution 
```javascript
Dog.prototype = {

  constructor: Dog, // Solution

  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```
