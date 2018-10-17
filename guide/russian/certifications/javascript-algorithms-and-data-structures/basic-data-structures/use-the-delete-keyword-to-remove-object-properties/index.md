---
title: Use the delete Keyword to Remove Object Properties
localeTitle: Использование ключа удаления для удаления свойств объекта
---
## Использование ключа удаления для удаления свойств объекта

[Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) предоставляет исчерпывающее руководство по оператору удаления.

### Решение:

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