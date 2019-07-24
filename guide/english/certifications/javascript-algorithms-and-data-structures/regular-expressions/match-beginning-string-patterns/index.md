---
title: Match Beginning String Patterns
---
# Match Beginning String Patterns

---
## Problem Explanation
Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal.


---
## Hints

### Hint 1
Try surrounding your regexp in slashes 
```javascript
let testExp = /^test/;
// returns true or false depending on whether test is found in the beginning of the string
```

### Hint 2
Try using the '^' character caret outside of brackets as seen in the above example



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```

</details>