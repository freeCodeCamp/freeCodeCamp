---
title: Use the delete Keyword to Remove Object Properties
localeTitle: Use a palavra-chave delete para remover propriedades do objeto
---
## Use a palavra-chave delete para remover propriedades do objeto

[O Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) fornece um tutorial abrangente sobre o operador delete.

### Solução:

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