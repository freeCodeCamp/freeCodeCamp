---
title: Write Arrow Functions with Parameters
---
# Write Arrow Functions with Parameters

---
## Problem Explanation
Here is a [cool resource about anonymous functions in JavaScript](http://helephant.com/2008/08/23/javascript-anonymous-functions/), in case you are still wondering what they are, and their role.

Now, you are tasked at putting parameters inside arrow functions. 


---
## Hints

### Hint 1

Get rid of the `function` keyword. Put the arrow operator.

### Hint 2

Make sure you changed the `var` to a `const`.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```

</details>