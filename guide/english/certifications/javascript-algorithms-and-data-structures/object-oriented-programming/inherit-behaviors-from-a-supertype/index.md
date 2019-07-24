---
title: Inherit Behaviors from a Supertype
---
# Inherit Behaviors from a Supertype

---
## Problem Explanation

To pass this challenge simply create the new `duck` and `beagle` objects using the `Object.create()` method seen in the following example.

```javascript 

let animal = Object.create(Animal.prototype);

```


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"
```

</details>