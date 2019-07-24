---
title: Use the Conditional (Ternary) Operator
---

# Use the Conditional (Ternary) Operator

---
## Problem Explanation

* You need to write a function named `checkEqual`, which checks if the two parameters are equal.
* If the parameters are equal, `Equal` is to be returned else `Not Equal` should be returned.


---
## Hints

### Hint 1

Use ternary operator to check for equality.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```

#### Code Explanation

* A function `checkEqual` is declared, it accepts two parameters in variables `a` and `b`.
* The `return` statement would return the value of the evaluated ternary expression.
* The ternary expression checks if `a` and `b` are equal or not and returns `Equal` or `Not Equal` respectively.
</details>
