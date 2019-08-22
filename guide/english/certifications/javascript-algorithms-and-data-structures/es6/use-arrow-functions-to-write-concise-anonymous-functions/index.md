---
title: Use Arrow Functions to Write Concise Anonymous Functions
---
# Use Arrow Functions to Write Concise Anonymous Functions

---
## Problem Explanation
Again, ES6 is all about making JavaScript more elegant, and for some, more readable. 

Anonymous functions, as stated, can be created when you are sure that the function will not be called by name anywhere else.


---
## Hints

### Hint 1

Get rid of the `function` key word, and plug in this `=>` arrow.

### Hint 2

Did you get rid of the `var` keyword?


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const magic = () => {
  "use strict";
  return new Date();
};
```

As long as you got rid of the `var` keyword, you're good.
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
const magic = () => new Date();
```
Since there is only a return value, this can be written in one line.
</details>
