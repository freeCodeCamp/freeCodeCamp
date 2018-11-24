---
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
---
## Use Closure to Protect Properties Within an Object from Being Modified Externally

### Method

Just like in the example given, rather than declaring the `weight` variable with the `this` keyword, the `let` keyword must be used to declare it as a private variable. This way it can only be accessed inside the `Bird` function. The `getWeight` method must then be added inside the `Bird` function to access the `weight` variable. 

### Solution

```javascript

function Bird() {
  let weight = 15;
  
  this.getWeight = function() {
    return weight;
  };
  
}

```
