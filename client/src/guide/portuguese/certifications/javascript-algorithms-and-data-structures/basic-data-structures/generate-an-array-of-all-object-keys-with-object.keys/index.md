---
title: Generate an Array of All Object Keys with Object.keys()
localeTitle: Gerar uma matriz de todas as chaves de objeto com Object.keys ()
---
## Gerar uma matriz de todas as chaves de objeto com Object.keys ()

### Método:

*   Para retornar a matriz de usuários, o método `Object.keys()` deve ter um argumento.
*   Esse desafio pode ser resolvido usando uma instrução de retorno de linha única.

### Solução:

```javascript
let users = { 
  Alan: { 
    age: 27, 
    online: false 
  }, 
  Jeff: { 
    age: 32, 
    online: true 
  }, 
  Sarah: { 
    age: 48, 
    online: false 
  }, 
  Ryan: { 
    age: 19, 
    online: true 
  } 
 }; 
 
 function getArrayOfUsers(obj) { 
  // change code below this line 
  return Object.keys(obj); 
  // change code above this line 
 } 
 
 console.log(getArrayOfUsers(users)); 

```