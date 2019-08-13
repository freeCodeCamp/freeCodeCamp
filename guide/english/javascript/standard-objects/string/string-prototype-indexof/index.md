---
title: String.prototype.indexOf
---
## String.prototype.indexOf

The `indexOf()` method returns the first index at which a specified string can be found in the given String object. If the string is not present, it returns -1.

**Syntax**
```javascript
str.indexOf(searchValue[, fromIndex])
```

### Parameters
*   **searchValue** Substring for which you are looking. If this is empty (`''`) and there is no `fromIndex` argument, `indexOf()` will return 0.

*   **fromIndex** Optional. The index at which you want to start the search from. The default value is 0.
    * If `fromIndex` is negative, the string will be searched from the beginning.
    * If `fromIndex` is less than the string's length:
        * If `searchValue` is not an empty string (`''`), the string will be searched from `fromIndex`.
        * If `searchValue` is an empty string (`''`), the method returns `fromIndex`.
    * If `fromIndex` is greater than or equal to the string's length:
        * If `searchValue` is not an empty string (`''`), the string is not searched and the method returns -1.
        * If `searchValue` is an empty string (`''`), the method returns the string's length.

### Description
The `indexOf()` method checks the string from left to right. The index of the first character is 0 and the index of the last character is ``string.length - 1``. The method checks each substring against `searchValue` using strict equality (`===`), which means that this method is case sensitive. Once it finds a substring that returns `true`, it returns the index of its first character.

### Examples
```javascript
'Blue Whale'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('blue');     // returns -1
'Blue Whale'.indexOf('Whale', 0); // returns  5
'Blue Whale'.indexOf('Whale', 5); // returns  5
'Blue Whale'.indexOf('Whale', 7); // returns -1
'Blue Whale'.indexOf('');         // returns  0
'Blue Whale'.indexOf('', 9);      // returns  9
'Blue Whale'.indexOf('', 10);     // returns 10
'Blue Whale'.indexOf('', 11);     // returns 10
```

### More Information:
- [String.prototype.indexOf() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
