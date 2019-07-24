---
title: Understand the Prototype Chain
---
# Understand the Prototype Chain

---
## Problem Explanation
Your code should show that Object.prototype is the prototype of Dog.prototype


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // => true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);
```

</details>