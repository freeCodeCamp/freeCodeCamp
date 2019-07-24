---
title: Extend Constructors to Receive Arguments
---
# Extend Constructors to Receive Arguments

---
## Problem Explanation

Just like in the `Bird()` example, the `Dog()` function must takle two parameters - `name` and `color`. The name and color must then be initialised within the function using the `this` keyword. The final property - `numLegs` is set to 4 as the function doesn't take in a numLegs parameter.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("George", "White");
```

</details>