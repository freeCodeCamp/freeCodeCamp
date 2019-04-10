---
title: Array.prototype.indexOf
---

## Array.prototype.indexOf

The `indexOf()` method returns the first index at which a given element can be found in the array. If the element is not present, it returns -1.

**Syntax**
```javascript
  arr.indexOf(searchElement[, fromIndex])
```

## Parameters

*   **searchElement** Element for which you are looking

*   **fromIndex** Optional. The index at which you want to start the search at. Ifthe fromIndex is greater than or equal to the array's length, the array is not searched and the method returns -1. If the fromIndex is a negative number, it considered an offset from the end of the array (the array is still searched forwards from there). The default value is 0, which means the entire array is searched.


## Description

The `indexOf` method takes each array element in ascending index order and checks it against `searchElement` using strict equality (`===`). Once it finds an element that returns `true`, it returns its index.
## Examples
```javascript
var array = [1, 2, 4, 1, 7]

array.indexOf(1); // 0
array.indexOf(7); // 4
array.indexOf(6); // -1
array.indexOf('1'); // -1
array.indexOf('hello'); // -1
array.indexOf(1, 2); // 3
array.indexOf(1, -3); // 3
```

### More Information: 

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf' target='_blank' rel='nofollow'>MDN link</a>

<a href='https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript' target='_blank' rel='nofollow'>MSDN Link</a>
