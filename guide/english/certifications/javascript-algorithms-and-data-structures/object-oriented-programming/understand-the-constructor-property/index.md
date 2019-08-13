---
title: Understand the Constructor Property
---
# Understand the Constructor Property

---
## Problem Explanation

Simply finish the function like that of the example given. Use an `if-statement` to test whether or not the `candidate` is a `Dog`.  


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
```
</details>
 
