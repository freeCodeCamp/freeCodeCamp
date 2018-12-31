---
title: Modify an Array Stored in an Object
localeTitle: Modificar una matriz almacenada en un objeto
---
## Modificar una matriz almacenada en un objeto

### Método:

*   La función se puede escribir en sólo dos líneas de código.
*   La primera línea debería usar la función `push()` para agregar el parámetro `friend` a la matriz que se encuentra en `user.data.friend` . La segunda línea devolverá la matriz modificada.
*   Recuerde que se debe hacer referencia al `user` con el primer parámetro dado a la función `addFriend()` .

### Solución:

```javascript
let user = { 
  name: 'Kenneth', 
  age: 28, 
  data: { 
    username: 'kennethCodesAllDay', 
    joinDate: 'March 26, 2016', 
    organization: 'freeCodeCamp', 
    friends: [ 
      'Sam', 
      'Kira', 
      'Tomo' 
    ], 
    location: { 
      city: 'San Francisco', 
      state: 'CA', 
      country: 'USA' 
    } 
  } 
 }; 
 
 function addFriend(userObj, friend) { 
  // change code below this line 
  userObj.data.friends.push(friend); 
  return userObj.data.friends; 
  // change code above this line 
 } 
 
 console.log(addFriend(user, 'Pete')); 

```