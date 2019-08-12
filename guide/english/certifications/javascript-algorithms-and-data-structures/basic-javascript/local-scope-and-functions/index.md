---
title: Local Scope and Functions
---
# Local Scope and Functions

---
## Problem Explanation
Local scope means that the variable is available within a certain area. In the case of this exercise, `myVar` is only available within the function, and not anywhere outside. 


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function myLocalScope() {
  var myVar;
  console.log(myVar);
}
myLocalScope();
```

#### Code Explanation
* The variable only exists in the function. Outside the function, it is non-existent.
</details>
