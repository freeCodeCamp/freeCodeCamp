---
title: String.prototype.valueOf
---
## String.prototype.valueOf

The `valueOf()` method returns the String object's primitive string value.

Examples:
```js
var x = new String("hi");
console.log(typeof x); // outputs 'object'
console.log(x);        // outputs 'String {"hi"}'
console.log(typeof x.valueOf()); // outputs 'string'
console.log(x.valueOf());        // outputs 'hi'
```

Note that `String.prototype.valueOf()` returns the same thing as [String.prototype.toString()](https://guide.freecodecamp.org/javascript/standard-objects/string/string-prototype-tostring/).

#### More Information:
- [String.prototype.valueOf() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf)
