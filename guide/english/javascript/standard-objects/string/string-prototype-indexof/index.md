---
title: String.prototype.indexOf
---
## String.prototype.indexOf
The `indexOf()` method returns the first index at which a given element can be found in the array. If the element is not present, it returns -1.

**Syntax**
```javascript
str.indexOf(searchValue[, fromIndex])
```

### Parameters
*   **searchValue** Substring for which you are looking. If this is empty (`''`) and there is no `fromIndex` parameter, this will return 0.

*   **fromIndex** Optional. The index at which you want to start the search. If the `fromIndex` value is greater than or equal to the string's length, the string is not searched and the method returns -1. If the `searchValue` is an empty string (`''`) and the `fromIndex` is less than the string's length, it will return the `fromIndex`; otherwise, it will return the string's length. (A negative number will be treated as though there is no argument.)

### Description
The `indexOf()` method checks the string from left to right. The index of the first character is 0; the index of the last character is ``string.length - 1``. The method checks each substring against `searchValue` using strict equality (`===`), which means this method is case sensitive. Once it finds a substring that returns `true`, it returns the index of its first character.

### Examples
```javascript
'Blue Whale'.indexOf('Blue');     // returns  0
'Blue Whale'.indexOf('Blute');    // returns -1
'Blue Whale'.indexOf('Whale', 0); // returns  5
'Blue Whale'.indexOf('Whale', 5); // returns  5
'Blue Whale'.indexOf('Whale', 7); // returns -1
'Blue Whale'.indexOf('');         // returns  0
'Blue Whale'.indexOf('', 9);      // returns  9
'Blue Whale'.indexOf('', 10);     // returns 10
'Blue Whale'.indexOf('', 11);     // returns 10
'Blue Whale'.indexOf('blue');     // returns -1
```

### More Information:
- MDN documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf' target='_blank' rel='nofollow'>MDN</a>
- MSDN documentation: <a href='https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript' target='_blank' rel='nofollow'>MSDN</a>
