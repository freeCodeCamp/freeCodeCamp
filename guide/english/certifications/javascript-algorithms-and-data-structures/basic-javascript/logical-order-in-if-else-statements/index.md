---
title: Logical Order in If Else Statements
---
# Logical Order in If Else Statements

---
## Hints

### Hint 1
So be careful while using the `if`, `else if` and `else` statements and always remember that these are executed from top to bottom. Keep this in mind placing your statements accordingly so that you get the desired output.

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```

</details>
