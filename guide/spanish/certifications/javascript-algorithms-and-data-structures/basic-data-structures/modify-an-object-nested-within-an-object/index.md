---
title: Modify an Object Nested Within an Object
localeTitle: Modificar un objeto anidado dentro de un objeto
---
## Modificar un objeto anidado dentro de un objeto

Método:

*   Recuerde que el objeto que desea cambiar tiene dos niveles de profundidad, `dot-notation` es más fácil de usar en esta instancia.
*   Simplemente defina el objeto y luego use `dot-notation` para acceder al segundo objeto y finalmente el elemento final que desea modificar.

## Ejemplo:

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

## Solución:

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