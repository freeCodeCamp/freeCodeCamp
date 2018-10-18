---
title: Comparison with the Less Than Operator
---
## Comparison with the Less Than Operator

**`<`** (Less Than) is a logical operator that returns true case the value on the left is lower than the one on the right.

## Basic Solution

```javascript
function testLessThan(val) {
  if (val < 25)
    return "Under 25";
  
  if (val < 55)
    return "Under 55";

  return "55 or Over";
}
```