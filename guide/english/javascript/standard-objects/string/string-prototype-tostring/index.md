---
title: String.prototype.toString
---
## String.prototype.toString

The `toString()` method returns a primitive string representing the given String object.

**Example**
```js
var x = new String("hi");
console.log(x);        // String {"hi"}
console.log(typeof x); // object
console.log(x.toString());        // hi
console.log(typeof x.toString()); // string
```

*Note*: for String objects, `toString()` and `valueOf()` return the same thing.

#### More Information:
- [String.prototype.toString() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString)
