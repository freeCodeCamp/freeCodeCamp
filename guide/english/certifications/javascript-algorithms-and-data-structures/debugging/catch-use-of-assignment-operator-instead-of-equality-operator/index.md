---
title: Catch Use of Assignment Operator Instead of Equality Operator
---
# Catch Use of Assignment Operator Instead of Equality Operator


---
## Hints

### Hint 1
Only the if statement must be editied in this challenege.

### Hint 2
The `=` operator on its own is only used to assign values, not to compare them. 


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```
</details>
