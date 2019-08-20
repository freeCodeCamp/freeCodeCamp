---
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
---
# Use Destructuring Assignment to Pass an Object as a Function's Parameters

---
## Problem Explanation

You could pass the entire object and then pick the specific attributes you want by using the `.` operator, but ES6 offers a more elegant option!


---
## Hints

### Hint 1

Get rid of the `stats` and see if you can destructure it. We need the `max` and `min` of `stats`.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return function half({ max, min }) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line
})();
```

Notice that we are destructuring `stats` to pass two of its attributes - `max` and `min` - to the function. Don't forget to the modify the second return statement. Change `stats.max` to just `max`, and change `stats.min` to just `min`.
</details>


<details><summary>Solution 2 (Click to Show/Hide)</summary>

Here is another solution that works. Not much of a difference, other than the fact that the function doesn't have a name.

```javascript
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  return ({ max, min }) => {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line
})();
```
</details>
