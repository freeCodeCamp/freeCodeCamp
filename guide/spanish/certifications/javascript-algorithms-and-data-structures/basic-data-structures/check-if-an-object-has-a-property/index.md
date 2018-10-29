---
title: Check if an Object has a Property
localeTitle: Compruebe si un objeto tiene una propiedad
---
## Compruebe si un objeto tiene una propiedad

Método:

*   La forma más sencilla de completar este desafío es crear una `ìf-statement` para verificar si el objeto contiene todos los usuarios, y luego devolver una declaración verdadera o falsa. La primera solución hace justamente esto.
*   La segunda solución funciona exactamente de la misma manera, solo que utiliza 1 línea de código - `Conditional(ternary)-Operator` - dentro de la función.

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) proporciona un análisis más profundo del operador ternario.

### Solución-1:

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

### Solución-2:

```javascript
function isEveryoneHere(obj) { 
  return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false; 
 } 

```