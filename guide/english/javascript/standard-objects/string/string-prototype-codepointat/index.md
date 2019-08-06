---
title: String.prototype.codePointAt
---
## String.prototype.codePointAt

The `codePointAt()` method returns a non-negative integer representing the Unicode code point value of a specified character in the given string.

**Syntax**
```javascript
str.codePointAt(pos) // pos is the position of the character in str from which to return the code point value
```

**Example**
```js
var x = "AB12↑↓";
console.log(x.codePointAt(0)); // 65
console.log(x.codePointAt(1)); // 66
console.log(x.codePointAt(2)); // 49
console.log(x.codePointAt(3)); // 50
console.log(x.codePointAt(4)); // 8593
console.log(x.codePointAt(5)); // 8595
console.log(x.codePointAt(6)); // undefined
```

*Note*: if there is no character at `pos`, `codePointAt()` returns undefined.

#### More Information:
- [String.prototype.codePointAt() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt)
- [Unicode Lookup](https://unicodelookup.com/)
