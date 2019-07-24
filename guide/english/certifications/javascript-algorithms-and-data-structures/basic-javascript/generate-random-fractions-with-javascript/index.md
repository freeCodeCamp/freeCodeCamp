---
title: Generate Random Fractions with JavaScript
---
# Generate Random Fractions with JavaScript


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function randomFraction() {
  // Only change code below this line.
  var result = 0;
  // Math.random() can generate 0. We don't want to     return a 0,
  // so keep generating random numbers until we get one     that isn't 0
  while (result === 0) {
    result = Math.random();
  }

  return result;
  // Only change code above this line.
}
```
</details>