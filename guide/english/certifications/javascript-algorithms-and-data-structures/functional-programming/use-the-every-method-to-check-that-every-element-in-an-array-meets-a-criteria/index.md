---
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
---
## Use the every Method to Check that Every Element in an Array Meets a Criteria

<!-- This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/javascript-algorithms-and-data-structures/functional-programming/use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>. -->

<!-- <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>. -->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Problem Explanation:
Use the `every` method inside the `checkPositive` function to check if every element in `arr` is positive. The function should return a Boolean value.

#### Relevant Links:
  - [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
  
### Hint
Don't forget `return`.

## Solution
```javascript
function checkPositive(arr) {
  // Add your code below this line
  
  return arr.every(val => val > 0);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

## Alternative Solution

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
