---
title: Modify an Object Nested Within an Object
localeTitle: Modificar um objeto aninhado em um objeto
---
## Modificar um objeto aninhado em um objeto

Método:

*   Lembre-se de que o objeto que você deseja alterar tem dois níveis de profundidade; `dot-notation` é mais fácil de usar nesta instância.
*   Simplesmente defina o objeto e, em seguida, use `dot-notation` para acessar o segundo objeto e, finalmente, o elemento final que você deseja modificar.

## Exemplo:

```javascript
let myObject = { 
  level_1: 'outside', 
  first_level_object: { 
    level_2: '2 levels deep', 
    second_level_object: { 
      level_3: '3 levels deep' 
      } 
   } 
 }; 
 //The following line of code will modify the data found in level_2. 
 myObject.first_level_object.level_2 = 'level-2 has been reached'; 
```

## Solução:

```javascript
let userActivity = { 
  id: 23894201352, 
  date: 'January 1, 2017', 
  data: { 
    totalUsers: 51, 
    online: 42 
  } 
 }; 
 
 // change code below this line 
 userActivity.data.online = 45; 
 // change code above this line 
 
 console.log(userActivity); 

```