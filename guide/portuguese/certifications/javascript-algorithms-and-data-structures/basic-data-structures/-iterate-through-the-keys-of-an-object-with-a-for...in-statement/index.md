---
title:  Iterate Through the Keys of an Object with a for...in Statement
localeTitle:  Iterar através das chaves de um objeto com um para ... em declaração
---
## Iterar através das chaves de um objeto com um para ... em declaração

Método:

*   Nota: `dot-notation` causará erros neste desafio.
*   `[square-bracket]` notação `[square-bracket]` deve ser usada para chamar um nome de propriedade variável.
*   O código a seguir não funcionará.

### Exemplo 1:

```javascript
for (let user in obj) { 
    if(obj.user.online === true) { 
      //code 
    } 
  } 
```

*   O exemplo 2 demonstra como usar a notação `[square-bracket]` o código será executado.

### Exemplo 2:

```javascript
for (let user in obj) { 
    if(obj[user]online === true) { 
      //code 
    } 
  } 
```

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