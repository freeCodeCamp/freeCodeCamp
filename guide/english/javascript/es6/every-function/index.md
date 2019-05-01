---
title: Every Function
---

The `every()` function is used for verifying if all the elements of an array meet the given condition. The function returns `true` if the condition is met by all elements, and false at least one element did not meet the condition

The original syntax of the every function is:
```javascript
arr.every(function callback(currentValue, index, array) {
  // Do some stuff with currentValue (index and array are optionals)
}, [thisArg]);
```

### Example (ES6):

```javascript
const arr = [2, 4, 6, 8];
if (arr.every(el => el % 2 == 0)) {
  console.log("All numbers are even");
}
```

`every()` stops iterating over the array as soon as it finds an element that does not match the condition. In that case, it immediately returns false without inspecting the remaining elements.
Also note that the result of `every()` in an empty array will always return true, no matter what the condition is.

`every()` is a method of the `Array` object, so to pass that function to an iterable object it is necessary to be sure that the object is an Array.
