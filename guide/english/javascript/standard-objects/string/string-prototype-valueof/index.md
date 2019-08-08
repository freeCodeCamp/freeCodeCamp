---
title: String.prototype.valueOf
---
## String.prototype.valueOf

The `valueOf()` method returns the primitive string value of the given `String` object.

**Usage**
```js
var x = new String("hi");
console.log(x); // String {"hi"}
console.log(typeof x); // object
console.log(x.valueOf()); // hi
console.log(typeof x.valueOf()); // string
```

*Note*: For `String` objects, `valueOf()` and `toString()` return the same thing.

#### More Information:
- [String.prototype.valueOf() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf)
