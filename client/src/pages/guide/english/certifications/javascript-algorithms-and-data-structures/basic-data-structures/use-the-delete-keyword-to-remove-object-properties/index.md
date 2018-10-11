---
title: Use the delete Keyword to Remove Object Properties
---
## Use the delete Keyword to Remove Object Properties

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) provides a comprehensive tutorial on the delete operator. 

### Solution:
```javascript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// change code below this line
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;
// change code above this line
console.log(foods);
```
