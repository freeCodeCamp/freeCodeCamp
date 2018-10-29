---
title: Use Inheritance So You Don't Repeat Yourself
---
## Use Inheritance So You Don't Repeat Yourself

### Solution 
Remove the "eat" method from Cat.prototype and Bear.prototype and add it to the Animal.prototype.

```javascript
function Cat(name) {
  this.name = name; 
};

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name; 
};

Bear.prototype = {
  constructor: Bear
};

function Animal() { };

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
