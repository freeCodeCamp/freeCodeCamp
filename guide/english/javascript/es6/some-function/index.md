---
title: Some Function
---

## Some Function

The `some()` function is used for verifying if at least one element of an array meets a given condition. The function returns `true` if the condition is met by one element, and `false` if none of the elements met the condition.

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

`some()` is a method of the `Array` object, so to pass that function to an iterable object it is necessary to be sure that the object is an Array.

For more information, please visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
