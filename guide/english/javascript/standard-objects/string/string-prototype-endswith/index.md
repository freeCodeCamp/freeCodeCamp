---
title: String.prototype.endsWith
---
## String.prototype.endsWith

The `endsWith()` method checks if the string ends with your string input and returns a boolean value.

### For example
```js
let str = "Hello world";
let bool = str.endsWith("ld") // true
bool = str.endsWith("llo") // false
```

This method can also accept another parameter, the `length` that determines before what character to search the string.
```js
let str = "Hello world";
let bool = str.endsWith("ld", 5) // false, it's the same as "Hello".endsWith("ld")
bool = str.endsWith("llo", 5) // true, it's the same as "Hello".endsWith("llo")
```

