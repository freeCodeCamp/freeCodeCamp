---
title: Comparison with the Inequality Operator
---
## Comparison with the Inequality Operator

* `!=` (Inequality) is a logical operator that returns true case the value on the left is different from the one on the right.
* The inequality operator considers `7` and `"7"` to be the same because it doesn't compare the type of the variable.

## Basic Solution
```javascript
function testNotEqual(val) {
  if (val != 99) 
    return "Not Equal";
  
  return "Equal";
}
```