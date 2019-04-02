---
title: Array.prototype.findIndex
---
## Information

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. 

The `findIndex()` method does not mutate the array on which it is called.

Syntax:
```
arr.findIndex(callback[, thisArg])
```

##### Parameters
- `callback`
  - Function to execute on each value in the array, taking three arguments:
  - `element`
    - The current element being processed in the array.
  - `index`
    - The index of the current element being processed in the array.
  - `array`
    - The array findIndex() was called upon.
- `thisArg` (Optional)
  - Object to use as this when executing callback.
  
##### Return value
A index in the array if an element passes the test; otherwise, -1.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## Examples

This example will find the corresponding item in the array and return the index from it.

```javascript
let items = [
    {name: 'books', quantity: 2},
    {name: 'movies', quantity: 1},
    {name: 'games', quantity: 5}
];

function findMovies(item) { 
    return item.name === 'movies';
}

console.log(items.findIndex(findMovies));

// Index of 2nd element in the Array is returned,
// so this will result in '1'
```

The following example shows the output of each optional parameter to the callback function. This will return `-1` because none of the items will return true from the callback function.

```javascript
function showInfo(element, index, array) {
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array);
  return false;
}

console.log('return = ' + [4, 6, 8, 12].findIndex(showInfo));

// Output
//  element = 4, index = 0, array = 4,6,8,12
//  element = 6, index = 1, array = 4,6,8,12
//  element = 8, index = 2, array = 4,6,8,12
//  element = 12, index = 3, array = 4,6,8,12
//  return = -1
```

