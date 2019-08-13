---
title: Comparison with the Less Than Operator
---
# Comparison with the Less Than Operator


---
## Hints

### Hint 1
**`<`** (Less Than) is a logical operator that returns true case the value on the left is lower than the one on the right.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function testLessThan(val) {
  if (val < 25) return "Under 25";

  if (val < 55) return "Under 55";

  return "55 or Over";
}
```
</details>