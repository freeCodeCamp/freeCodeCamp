---
title: Comparison with the Greater Than Operator
---
## Comparison with the Greater Than Operator

`>` (Greater Than) is a logical operator that returns true case the value on the left is higher than the one on the right.

## Basic Solution

```javascript
function testGreaterThan(val) {
  if (val > 100) 
    return "Over 100";
  
  if (val > 10) 
    return "Over 10";

  return "10 or Under";
}
```
