---
title: Use class Syntax to Define a Constructor Function
---
# Use class Syntax to Define a Constructor Function

---
## Problem Explanation

In this lesson, you are defining the Vegetable object using class syntax.


---
## Hints

### Hint 1

Create the class called `Vegetable`. It will contain the necessary details about the `Vegetable` object.

### Hint 2

Put a constructor with a parameter called `name`, and set it to `this.name`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function makeClass() {
  "use strict";
  /* Alter code below this line */

  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'
```

</details>
