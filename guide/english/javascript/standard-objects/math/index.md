---
title: Math
---
## Math

`Math` is a standard built-in object to JavaScript that contains mathematical constants and functions as properties and methods. Most notably it contains the constants &pi; and Euler's constant and functions such as `floor()`, `round()`, `ceil()` and many more.

### Example
The following example shows how to use the `Math` object to write a function that calculates the area of a circle:

```javascript
function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}
calculateCircleArea(1); // 3.141592653589793
```

### Other Resources
* [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
* [W3schools](https://www.w3schools.com/js/js_math.asp)
