---
title: Use a Constructor to Create Objects
---
# Use a Constructor to Create Objects

---
## Problem Explanation

We saw in the last challenge how to create a constructor function. Now we can simply call this function to create a new object with the properties already defined in the constructor. Simply initialise a new variable `hound` calling the `Dog()` constructor.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();
```

</details>