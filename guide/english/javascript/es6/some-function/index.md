---
title: Some Function
---

## The Some Function

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

`some()` is a method of the `Array` object, so to pass the `some()` function to an iterable object it is necessary that the object is an Array.
