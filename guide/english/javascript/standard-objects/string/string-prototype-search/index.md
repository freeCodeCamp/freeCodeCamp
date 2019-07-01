---
title: String.prototype.search
---
## String.prototype.search

The `search()` method searches for a match between a regular expression and the given String object. If a match is found, `search()` returns the index of the first match; if not found, `search()` returns -1.

**Syntax**
```javascript
str.search(regexp) // regexp is a RegExp object
```

**Example**
```js
var x = "Hello World";
var pattern1 = /[A-H][a-e]/; // first character between 'A' and 'H', second between 'a' and 'e'
var pattern2 = "world";      // the string 'world'
console.log(x.search(pattern1)); // 0
console.log(x.search(pattern2)); // -1
console.log(x.search("o"));      // 4
```

*Note*: `search()` implicitly converts a string argument to a RegExp object; in the example above, the string `world` in `pattern2` is converted to the regular expression `world` (and similarly for the string `o`).

#### More Information:
- [String.prototype.search() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
