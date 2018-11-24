---
title: Map Function
---

## The Map Function

The `map()` function is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

The original syntax of the map function is:
```javascript
  let new_arr = arr.map(function callback(currentValue, index, array) {
                  // Do some stuff with currentValue (index and array are optionals)
                })
```
* `new_arr` - the new array that is returned
* `ar`r - the array to run the map function on
* `currentValue` - the current value being processed
* `index` - the current index of the value being processed
* `array` - the original array

### Example (ES6):

```javascript
const myArray_1 = [1, 2, 3, 4];
const myArray_2 = myArray_1.map(el => el * 2);
```
`myArray_2` will contain the elements: `[2, 4, 6, 8]`

`map()` is a method of the `Array` object, so to pass that function to an iterable object it is necessary to make the object an Array.
