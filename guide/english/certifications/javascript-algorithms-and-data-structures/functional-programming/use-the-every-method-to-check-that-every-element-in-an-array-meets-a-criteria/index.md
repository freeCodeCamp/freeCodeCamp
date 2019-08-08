---
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
---
# Use the every Method to Check that Every Element in an Array Meets a Criteria

---
## Problem Explanation
Use the `every` method inside the `checkPositive` function to check if every element in `arr` is positive. The function should return a Boolean value.

#### Relevant Links
  - [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


---
## Hints

### Hint
Don't forget `return`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function checkPositive(arr) {
  // Add your code below this line

  return arr.every(val => val > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function checkPositive(arr) {
  // Add your code below this line
  return arr.every(function(value) {
    return value > 0;
  });
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```
</details>
