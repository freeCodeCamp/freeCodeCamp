---
title: Comparison with the Greater Than Or Equal To Operator
---
## Comparison with the Greater Than Or Equal To Operator

* `>=` (Greater Than or Equal To) is a logical operator that returns true case the value on the left is the **same or higher** than the one on the right.

## Basic Solution

```javascript
function testGreaterOrEqual(val) {
  if (val >= 20)
    return "20 or Over";
  
  if (val >= 10)
    return "10 or Over";

  return "Less than 10";
}
```