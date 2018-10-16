---
title: Use the delete Keyword to Remove Object Properties
localeTitle: 使用删除关键字删除对象属性
---
## 使用删除关键字删除对象属性

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)提供了有关delete运算符的综合教程。

### 解：

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