---
title: Check if an Object has a Property
localeTitle: Verificar se um objeto tem uma propriedade
---
## Verificar se um objeto tem uma propriedade

Método:

*   A maneira mais simples de completar esse desafio é criar uma `ìf-statement` para verificar se o objeto contém todos os usuários e, em seguida, retornar uma declaração verdadeira ou falsa. A primeira solução faz exatamente isso.
*   A segunda solução funciona exatamente da mesma maneira, apenas usa 1 linha de código - `Conditional(ternary)-Operator` - `Conditional(ternary)-Operator` - dentro da função.

[O developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) fornece uma análise mais aprofundada do operador ternário.

### Solução 1:

```javascript
let users = { 
  Alan: { 
    age: 27, 
    online: true 
  }, 
  Jeff: { 
    age: 32, 
    online: true 
  }, 
  Sarah: { 
    age: 48, 
    online: true 
  }, 
  Ryan: { 
    age: 19, 
    online: true 
  } 
 }; 
 
 function isEveryoneHere(obj) { 
  // change code below this line 
  if(users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) { 
    return true; 
  } 
  return false; 
  // change code above this line 
 } 
 
 console.log(isEveryoneHere(users)); 
```

### Solução 2:

```javascript
function isEveryoneHere(obj) { 
  return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false; 
 } 

```