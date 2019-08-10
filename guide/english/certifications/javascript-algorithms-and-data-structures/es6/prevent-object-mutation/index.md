---
title: Prevent Object Mutation
---

# Prevent Object Mutation


---
## Hints

### Hint 1

*   _Use `Object.freeze()` to prevent mathematical constants from changing._



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
```
#### Code Explanation

* By using Object.freeze() on `MATH_CONSTANTS` we can avoid manipulating it.

#### Relevant Links
- ["Object.freeze()" - *MDN Javascript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
</details>

