---
title:  Iterate Through the Keys of an Object with a for...in Statement
localeTitle:  Iterar a través de las claves de un objeto con una for ... in Statement
---
## Iterar a través de las claves de un objeto con una for ... in Statement

Método:

*   Nota: `dot-notation` causará errores en este desafío.
*   `[square-bracket]` debe usar la notación `[square-bracket]` para llamar a un nombre de propiedad variable.
*   El siguiente código no funcionará.

### Ejemplo 1:

```javascript
for (let user in obj) { 
    if(obj.user.online === true) { 
      //code 
    } 
  } 
```

*   El ejemplo 2 demuestra cómo usar la notación `[square-bracket]` se ejecutará el código.

### Ejemplo 2:

```javascript
for (let user in obj) { 
    if(obj[user]online === true) { 
      //code 
    } 
  } 
```

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
 function countOnline(obj) { 
  // change code below this line 
  let result = 0; 
  for (let user in obj) { 
    if(obj[user].online === true) { 
      result++; 
    } 
  } 
  return result; 
  // change code above this line 
 } 
 console.log(countOnline(users)); 

```