---
title: Refactor Global Variables Out of Functions
---
## Refactor Global Variables Out of Functions

- If you're having trouble with changing bookList, try using a copy of the array in your functions. 

- Here's some more information about [how JavaScript handles function arguments](https://codeburst.io/javascript-passing-by-value-vs-  reference-explained-in-plain-english-8d00fd06a47c).

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":beginner:") Basic Code Solution:

## Solution 1
```javascript
function add (arr, bookName) {
  let newArr = [...arr];  // Copy the bookList array to a new array.
  newArr.push(bookName);  // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove (arr, bookName) {
  let newArr = [...arr];  // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {   // Check whether the bookName parameter is in new array.
    /.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
    }
}
```

## Solution 2
```javascript
function add (list,bookName) {
  return [...list, bookName];
}

function remove (list,bookName) {
  if (list.indexOf(bookName) >= 0) {
    return list.filter((item) => item !== bookName);
    }
}
```
