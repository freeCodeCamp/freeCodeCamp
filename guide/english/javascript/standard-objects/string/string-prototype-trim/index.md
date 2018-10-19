---
title: String.prototype.trim
---
## String.prototype.trim

The `trim()` function removes any whitespace characters from both the beginning and the end of a given string. It does not modify the original string; it outputs a new one.

Examples:
```js
"  Hello, campers. I have spaces on both ends!  ".trim();
// output is "Hello, campers. I have spaces on both ends!"
```

`trim()` not only removes space characters; it removes any whitespace character, such as tabs, line-breaks, no-break spaces, etc.

This is useful, for example, when you want to process a text input from a user and they might have submitted a string with spaces at the end that you might not want.

#### More Information:
- [String.prototype.trim() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

