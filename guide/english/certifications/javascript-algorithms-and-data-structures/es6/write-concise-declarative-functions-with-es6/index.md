---
title: Write Concise Declarative Functions with ES6
---
# Write Concise Declarative Functions with ES6

---
## Problem Explanation
ES6 makes it easy, and fancy, to write declarative functions! In this lesson, you are tasked at changing the function to follow ES6 standards.


---
## Hints

### Hint 1

Get rid of the `function` keyword.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
```

</details>