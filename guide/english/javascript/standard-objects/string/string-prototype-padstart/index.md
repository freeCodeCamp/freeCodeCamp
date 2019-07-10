---
title: String.prototype.padStart
---
## String.prototype.padStart

The 'padStart()' method is a JavaScript string method that pads the start (left) of the current string with another string to the specified final string length.

**Syntax**
```javascript
string_to_be_padded.padStart(resulting_length, pad_string)
```

**Example**
```js
var str1 = '1';
var str2 = '2';
console.log(str1.padStart(2, '*'));   // expected output: "*1"
console.log(str2.padStart(5, '*#-')); // expected output: "*#-*2"
```

#### More Information:
- [String.prototype.padStart() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)


