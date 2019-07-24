---
title: Use the parseInt Function
---
# Use the parseInt Function

---
## Problem Explanation
The ```parseInt()``` function will take any ```string``` parameter representing a number and return its integer value. 


---
## Hints

### Hint 1 
```parseInt()``` should be used inside your function and return whatever ```str``` is, assuming that ```str``` is a string representing some number.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");
```

</details>