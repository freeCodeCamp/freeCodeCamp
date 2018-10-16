---
title: Split a String into an Array Using the split Method
---
## Split a String into an Array Using the split Method
### Method
Simply split the string to create a new array of words. 

A simple regular expression can be used to achieve this result.

### Solution
```javascript
function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
splitify("Hello World,I-am code");
```
