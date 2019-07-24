---
title: Understand Own Properties
---
# Understand Own Properties

---
## Problem Explanation

In the example code given you will see a new array `ownProps[]` intialised followed by a `for...in` statement to loop through the properties of `duck` and then use a `push()` statement to fill in the new array. The same method must be followed for the `canary` object. 

Simply replace the `duck` object in the 'for...in' statement with the `canary`object to pass all test cases.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
```

</details>