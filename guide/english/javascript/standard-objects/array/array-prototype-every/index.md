---
title: Array.prototype.every
---
The `every()` method tests whether all elements in the array pass the test implemented by the provided function.

**Syntax**
```javascript
  arr.every(callback[, thisArg])
```

## Parameters

*   **callback** Function to test for each element, taking three arguments:
    *   **currentValue** (required)
    
        The current element being processed in the array.
        
    *   **index** (optional)

        The index of the current element being processed in the array.

    *   **array** (optional)

        The array every was called upon.

*   **thisArg** Optional. Value to use as this when executing callback.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every' target='_blank' rel='nofollow'>MDN link</a> | <a href='https://msdn.microsoft.com/en-us/LIBRary/ff679981%28v=vs.94%29.aspx' target='_blank' rel='nofollow'>MSDN Link</a>

## Description

The `every` method calls the `callback` function one time for each array element, in ascending index order, until the `callback` function returns false. If an element that causes `callback` to return false is found, the every method immediately returns `false`. Otherwise, the every method returns `true`.

The callback function is not called for missing elements of the array.

In addition to array objects, the every method can be used by any object that has a length property and that has numerically indexed property names. `every` does not mutate the array on which it is called.

## Examples
```javascript
  function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true

  // Define the callback function.
  function CheckIfEven(value, index, ar) {
      document.write(value + " ");

      if (value % 2 == 0)
          return true;
      else
          return false;
  }

  // Create an array.
  var numbers = [2, 4, 5, 6, 8];

  // Check whether the callback function returns true for all of the
  // array values.
  if (numbers.every(CheckIfEven))
      document.write("All are even.");
  else
      document.write("Some are not even.");

  // Output:
  // 2 4 5 Some are not even.
```
