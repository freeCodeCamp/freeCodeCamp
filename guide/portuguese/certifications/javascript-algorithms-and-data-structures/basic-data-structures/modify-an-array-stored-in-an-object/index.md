---
title: Modify an Array Stored in an Object
localeTitle: Modificar uma matriz armazenada em um objeto
---
## Modificar uma matriz armazenada em um objeto

### Método:

*   A função pode ser escrita em apenas duas linhas de código.
*   A primeira linha deve usar apenas a função `push()` para adicionar o parâmetro `friend` à matriz encontrada em `user.data.friend` . A segunda linha retornará a matriz modificada.
*   Lembre-se que o `user` deve ser referenciado com o primeiro parâmetro dado à função `addFriend()` .

### Solução:

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