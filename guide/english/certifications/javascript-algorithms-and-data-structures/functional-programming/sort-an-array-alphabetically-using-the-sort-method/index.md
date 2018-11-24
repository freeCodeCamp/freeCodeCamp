---
title: Sort an Array Alphabetically using the sort Method
---
## Sort an Array Alphabetically using the sort Method

### Method

In the example given we see how to write a function which will return a new array in reverse alphabetical order. 

```javascript

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

```

Using this logic, simply reverse engineer the function to return a new array in alphabetical order. 

### Solution

```javascript

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a,b) {
    return a > b;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

```
