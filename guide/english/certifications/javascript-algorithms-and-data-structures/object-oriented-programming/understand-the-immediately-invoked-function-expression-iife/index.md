---
title: Understand the Immediately Invoked Function Expression (IIFE)
---
# Understand the Immediately Invoked Function Expression (IIFE)

---
## Problem Explanation 

The first test case asks you to make the function anonymous. To do this simply remove the name of the function as seen in the example. The function must then be wrapped in curly brackets with another set of curly brackets at the end to immediatly call the function.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
(function() {
  console.log("A cozy nest is ready");
})();
```

</details>