---
title: Combine an Array into a String Using the join Method
---
## Combine an Array into a String Using the join Method

### Problem Explanation

Use the `join` method (among others) inside the `sentensify` function to make a sentence from the words in the string `str`. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the `replace` method.

#### Relevant Links:
  - [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
  - [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
  - [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  
### Hint1
You may need to convert the string to an array first.

### Hint2
You may need to use regular expression to split the string.
  

### Solution:
```javascript
function sentensify(str) {
  // Add your code below this line
  return str.split(/\W/).join(' '); 
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
```
