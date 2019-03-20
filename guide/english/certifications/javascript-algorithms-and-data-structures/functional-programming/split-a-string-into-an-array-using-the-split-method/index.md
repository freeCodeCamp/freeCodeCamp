---
title: Split a String into an Array Using the split Method
---
## Split a String into an Array Using the split Method
### Method
Simply split the string to create a new array of words. 

A simple regular expression can be used to achieve this result.

`/\W/`	Matches any non-word character. This includes spaces and punctuation, but not underscores. It's equivalent to `/[^A-Za-z0-9_]/`. For more information about Regular Expressions, see the official [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

### Solution
```javascript
function splitify(str) {
  // Add your code below this line
  return str.split(/\W/);
  // Add your code above this line
}
splitify("Hello World,I-am code");
```
