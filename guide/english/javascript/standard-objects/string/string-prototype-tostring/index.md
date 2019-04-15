---
title: String.prototype.toString
---
## String.prototype.toString

The `toString()` method returns the String object's primitive string value.

Examples:
```js
var x = new String("hi");
console.log(typeof x); // outputs 'object'
console.log(x);        // outputs 'String {"hi"}'
console.log(typeof x.toString()); // outputs 'string'
console.log(x.toString());        // outputs 'hi'
```

Note that `String.prototype.toString()` returns the same thing as [String.prototype.valueOf()](https://guide.freecodecamp.org/javascript/standard-objects/string/string-prototype-valueof/).

#### More Information:
- [String.prototype.toString() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString)
