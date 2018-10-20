---
title: Generate an Array of All Object Keys with Object.keys()
localeTitle: Generar una matriz de todas las claves de objeto con Object.keys ()
---
## Generar una matriz de todas las claves de objeto con Object.keys ()

### Método:

*   Para devolver la matriz de usuarios, el método `Object.keys()` debe tomar un argumento.
*   Este desafío se puede resolver utilizando una sola línea de declaración de retorno.

### Solución:

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