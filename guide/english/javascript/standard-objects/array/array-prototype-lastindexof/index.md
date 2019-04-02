---
title: Array.prototype.lastIndexOf
---
## Array.prototype.lastIndexof

The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at `fromIndex`.

**Syntax**
```javascript
  arr.lastIndexOf(searchElement, fromIndex = arr.length - 1])
```

## Parameters

*   **searchElement**
    *   Element to locate in the array.

*   **fromIndex**

    *   _Optional_. The index at which to start searching backwards. Defaults to the array's length minus one, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/ff679972%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN link</a>

## Returns

The index of the last occurrence of `searchElement` in the array, or -1 if `searchElement` is not found.

## Description

`lastIndexOf` compares `searchElement` to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).

## Remarks

The search occurs in descending index order (last member first). To search in ascending order, use the `indexOf` method.

The optional `fromIndex` argument specifies the array index at which to begin the search. If `fromIndex` is greater than or equal to the array length, the whole array is searched. If `fromIndex` is negative, the search starts at the array length plus `fromIndex`. If the computed index is less than 0, -1 is returned.

## Examples
```javascript
  var array = [2, 5, 9, 2];
  array.lastIndexOf(2);     // 3
  array.lastIndexOf(7);     // -1
  array.lastIndexOf(2, 3);  // 3
  array.lastIndexOf(2, 2);  // 0
  array.lastIndexOf(2, -2); // 0
  array.lastIndexOf(2, -1); // 3

  // Create an array.
  var ar = ["ab", "cd", "ef", "ab", "cd"];

  // Determine the first location, in descending order, of "cd".
  document.write(ar.lastIndexOf("cd") + "<br/>");

  // Output: 4

  // Find "cd" in descending order, starting at index 2.
  document.write(ar.lastIndexOf("cd", 2) + "<br/>");

  // Output: 1

  // Search for "gh" (which is not found).
  document.write(ar.lastIndexOf("gh")+ "<br/>");

  // Output: -1

  // Find "ab" with a fromIndex argument of -3.
  // The search in descending order starts at index 3,
  // which is the array length minus 2.
  document.write(ar.lastIndexOf("ab", -3) + "<br/>");
  // Output: 0
```
