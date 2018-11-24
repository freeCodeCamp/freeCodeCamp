---
title: Catch Use of Assignment Operator Instead of Equality Operator
---
## Catch Use of Assignment Operator Instead of Equality Operator

- Only the if statement must be editied in this challenege.
- The `=` operator on its own is only used to assign values, not to compare them. 

## Solution
```javascript
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```
