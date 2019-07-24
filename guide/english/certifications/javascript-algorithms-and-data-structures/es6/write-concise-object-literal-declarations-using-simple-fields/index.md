---
title: Write Concise Object Literal Declarations Using Simple Fields
---
# Write Concise Object Literal Declarations Using Simple Fields

---
## Problem Explanation
Here, we are tasked at returning an object that accepts the function's parameters as its attributes. 


---
## Hints

### Hint 1

Get rid of the colons, and the duplicate words.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
```
</details>
