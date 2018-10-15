---
title: Math Trunc
---
## Math Trunc

`Math.trunc()` is a method of the Math standard object that returns only the integer part of a given number by simply removing fractional units. This results in an overall rounding towards zero. Any input that is not a number will result in an output of NaN.

Careful: This method is an ECMAScript 2015 (ES6) feature and thus is not supported by older browsers.

### Examples
```javascript
Math.trunc(0.1)   //  0
Math.trunc(1.3)   //  1
Math.trunc(-0.9)  // -0
Math.trunc(-1.5)  // -1
Math.trunc('foo') // NaN
```

### More Information:
* [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
