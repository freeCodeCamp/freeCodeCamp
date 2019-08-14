---
title: String.prototype.startsWith
---
## String.prototype.startsWith

The `startsWith()` method checks if the given string begins with the characters of a specified string; if it does, `startsWith()` returns `true`, otherwise `startsWith()` returns `false`.

**Syntax**
```javascript
str.startsWith(searchStr[, pos]) // pos is the position in str at which to begin searching for searchStr
```

**Example**
```js
var x = "Hi Hilbert";
console.log(x.startsWith("Hi"));    // true
console.log(x.startsWith("Hi", 0)); // true
console.log(x.startsWith("Hi", 3)); // true
console.log(x.startsWith("Hi", 4)); // false
```

*Note*: if the second argument to `startsWith()` is not provided, the start position defaults to 0 (the beginning of the string).

#### More Information:
- [String.prototype.startsWith() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
