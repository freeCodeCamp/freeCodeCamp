---
title: Iterate with JavaScript Do...While Loops
---
# Iterate with JavaScript Do...While Loops

---
## Problem Explanation
`Do...While` loops makes sure that the code is executed at least once, and after the execution, if the condition inside the `while()` is **true**, it continues with the loop, otherwise it stop.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i <= 10);
```

</details>