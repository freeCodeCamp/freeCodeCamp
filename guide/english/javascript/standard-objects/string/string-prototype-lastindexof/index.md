---
title: String.prototype.lastIndexOf
---
## String.prototype.lastIndexOf

The `lastIndexOf()` method returns the first index at which the last occurrence of a specified string can be found in the given String object. If the string is not present, it returns -1.

**Syntax**
```javascript
str.lastIndexOf(searchValue[, fromIndex])
```

### Parameters
*   **searchValue** Substring for which you are looking. If this is empty (`''`) and there is no `fromIndex` argument, `lastIndexOf()` will return the string's length.

*   **fromIndex** Optional. The index at which you want to start the search backwards from. The default value is the string's length.
    * If `fromIndex` is negative, the method will behave as though it were 0.
    * If `fromIndex` is less than the string's length:
        * If `searchValue` is not an empty string (`''`), the string will be searched backwards from `fromIndex`.
        * If `searchValue` is an empty string (`''`), the method returns `fromIndex`.
    * If `fromIndex` is greater than or equal to the string's length:
        * If `searchValue` is not an empty string (`''`), the method will behave as though it were the string's length.
        * If `searchValue` is an empty string (`''`), the method returns the string's length.

### Description
The `lastIndexOf()` method checks the string from right to left. The index of the first character is 0 and the index of the last character is ``string.length - 1``. The method checks each substring against `searchValue` using strict equality (`===`), which means that this method is case sensitive. Once it finds a substring that returns `true`, it returns the index of its first character.

### Examples
```javascript
'Blue Whale'.lastIndexOf('Blue');     // returns  0
'Blue Whale'.lastIndexOf('Blute');    // returns -1
'Blue Whale'.lastIndexOf('blue');     // returns -1
'Blue Whale'.lastIndexOf('Whale', 0); // returns -1
'Blue Whale'.lastIndexOf('Whale', 5); // returns  5
'Blue Whale'.lastIndexOf('Whale', 7); // returns  5
'Blue Whale'.lastIndexOf('');         // returns 10
'Blue Whale'.lastIndexOf('', 9);      // returns  9
'Blue Whale'.lastIndexOf('', 10);     // returns 10
'Blue Whale'.lastIndexOf('', 11);     // returns 10
```

### More Information:
- [String.prototype.lastIndexOf() on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
