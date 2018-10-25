---
title: String.prototype.substring
---
## String.prototype.substring

The `substring()` function _extracts_ a sequence of characters from another given string. It does not alter the original string.

You define the sequence to extract with a _start and end character index_. These indexes are passed into the `substring()` function as parameters. The substring is formed from the character of the start index all the way to the character of the end index. Both indexes are counted from the beginning of the string, starting from `0`.

Examples:

```js
"Hello, campers".substring(7, 14);
// output is "campers"

"Hello, world".substring(0, 5);
// output is "Hello"
```

You can also omit the last character index parameter, and the substring sequence will extract from the start index until the end of the string. Example:

```js
"Hello, campers!".substring(7);
// output is "campers!"
```

#### More Information:
- [String.prototype.substring() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)


