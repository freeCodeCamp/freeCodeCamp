---
title: Array.prototype.some
---
The JavaScript array method `.some()` will take a callback function to test each element in the array; once the callback returns `true` then `.some()` will return true immediately.

**Syntax**

```javascript
  var arr = [1, 2, 3, 4];
  arr.some(callback[, thisArg]);
```

## Callback Function

**Syntax**

```javascript
  var isEven = function isEven(currentElement, index, array) {
      if(currentElement % 2 === 0) {
          return true;
      } else {
          return false;
      }
  }
```
See wiki on <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators' target='_blank' rel='nofollow'>Arithmetic Operators</a> to see the remainder operator `%`

**Has 3 arguments**

*   currentElement
    *   this is a variable that represents the element that is being passed to the callback.

*   index

    *   this is the index value of the current element starting at 0

*   array

    *   the array that `.some()` was call on.

The callback function should implement a test case.

## thisArg

Is an optional parameter and more info can be found at the [MDN</a>

## Description

`.some()` will run the callback function for each element in the array. Once the callback returns true, `.some()` will return `true`. If the callback returns a <a href='https://developer.mozilla.org/en-US/docs/Glossary/Falsy' target='_blank' rel='nofollow'>falsy value</a> for _every_ element in the array then `.some()` returns false.

`.some()` will not change/mutate the array that called it.

## Examples

**Passing a function to `.some()`**

```javascript
  var isEven = function isEven(currentElement, index, array) {
      if(currentElement % 2 === 0) {
          return true;
      } else {
          return false;
      }
  }

  var arr1 = [1, 2, 3, 4, 5, 6];
  arr1.some(isEven);  // returns true
  var arr2 = [1, 3, 5, 7];
  arr2.some(isEven);  // returns false
```

**Anonymous function**

```javascript
  var arr3 = ['Free', 'Code', 'Camp', 'The Amazing'];
  arr3.some(function(curr, index, arr) {
      if (curr === 'The Amazing') {
          return true;
      } 
      }); // returns true

  var arr4 = [1, 2, 14, 5, 17, 9];
  arr4.some(function(curr, index, arr) {
      return curr > 20;
      });  // returns false

  // ES6 arrows functions
  arr4.some((curr) => curr >= 14)  // returns true
```
Source : <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some' target='_blank' rel='nofollow'>MDN</a>
