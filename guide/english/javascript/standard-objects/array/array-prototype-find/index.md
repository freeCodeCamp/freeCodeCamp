---
title: Array.prototype.find
---
## Information

The `find()` method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned. The `find()` method does not mutate the array on which it is called.

Syntax:
```
arr.find(callback[, thisArg])
```

##### Parameters
- `callback`
  - Function to execute on each value in the array, taking three arguments:
  - `element`
    - The current element being processed in the array.
  - `index`
    - The index of the current element being processed in the array.
  - `array`
    - The array find was called upon.
- `thisArg` (Optional)
  - Object to use as this when executing callback.
  
##### Return value
A value in the array if an element passes the test; otherwise, undefined.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## Examples

This example will find the corresponding item in the array and return the object from it.

```javascript
let items = [
    {name: 'books', quantity: 2},
    {name: 'movies', quantity: 1},
    {name: 'games', quantity: 5}
];

function findMovies(item) { 
    return item.name === 'movies';
}

console.log(items.find(findMovies));

// Output
//  { name: 'movies', quantity: 1 }
```

The following example shows the output of each optional parameter to the callback function. This will return `undefined` because none of the items will return true from the callback function.

```javascript
function showInfo(element, index, array) {
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array);
  return false;
}

console.log('return = ' + [4, 6, 8, 12].find(showInfo));

// Output
//  element = 4, index = 0, array = 4,6,8,12
//  element = 6, index = 1, array = 4,6,8,12
//  element = 8, index = 2, array = 4,6,8,12
//  element = 12, index = 3, array = 4,6,8,12
//  return = undefined
```
