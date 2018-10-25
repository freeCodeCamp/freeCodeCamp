---
title: Some Function
---

## The Some Function

The `some()` function is used for verifying if at least one element of an array meets the given condition. The function returns `true` if the condition is met by one element, and false if none of the elements met the condition

The original syntax of the some function is:
```javascript
arr.some(function callback(currentValue, index, array) {
  // Do some stuff with currentValue (index and array are optionals)
}, [thisArg]);
```

### Example (ES6):

```javascript
const arr = [1, 4, 5, 11];
if (arr.some(el => el % 2 == 0)) {
  console.log("There's at least one even number");
}
```

Note that `some()` stops iterating over the array as soon as it finds an element that matches the condition. In that case, it immediately returns true without inspecting the remaining elements.
Also note that the result of `some()` in an empty array will always return false, no matter what the condition is.

## The Every Function

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

Similar to `some()`, `every()` stops iterating over the array as soon as it finds an element that does not match the condition. In that case, it immediately returns false without inspecting the remaining elements.
Also note that the result of `every()` in an empty array will always return true, no matter what the condition is.

`some()` and `every()` are methods of the `Array` object, so to pass that function to an iterable object it is necessary to be sure that the object is an Array.
