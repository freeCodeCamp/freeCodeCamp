---
title: Refactor Global Variables Out of Functions
---
# Refactor Global Variables Out of Functions


---
## Hints

### Hint 1
- If you're having trouble with changing bookList, try using a copy of the array in your functions. 

### Hint 2
- Here's some more information about [how JavaScript handles function arguments](https://codeburst.io/javascript-passing-by-value-vs-  reference-explained-in-plain-english-8d00fd06a47c).


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    //.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}
```
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function add(list, bookName) {
  return [...list, bookName];
}

function remove(list, bookName) {
  if (list.indexOf(bookName) >= 0) {
    return list.filter(item => item !== bookName);
  }
}
```
</details>
