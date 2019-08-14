---
title: Sort an Array Alphabetically using the sort Method
---
# Sort an Array Alphabetically using the sort Method


---
## Hints

Hint #1

You need to use a "compare function" as the callback function of the sort method.

For example, the following is how you would sort an array in reverse alphabetical order.

```js
function reverseAlphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
  // Add your code above this line
}
reverseAlphabeticalOrder(["l", "h", "z", "b", "s"]);
// Returns ['z', 's', 'l', 'h', 'b']
```


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```
</details>