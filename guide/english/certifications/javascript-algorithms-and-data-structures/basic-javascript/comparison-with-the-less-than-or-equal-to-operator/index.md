---
title: Comparison with the Less Than Or Equal To Operator
---
# Comparison with the Less Than Or Equal To Operator


---
## Hints

### Hint 1
**`<=`** (Less Than Or Equal To) is a logical operator that returns true case the value on the left is the **same or lower** than the one on the right.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function testLessOrEqual(val) {
  if (val <= 12) return "Smaller Than or Equal to 12";

  if (val <= 24) return "Smaller Than or Equal to 24";

  return "More Than 24";
}
```
</details>