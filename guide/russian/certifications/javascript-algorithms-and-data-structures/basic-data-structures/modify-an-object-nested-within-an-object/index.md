---
title: Modify an Object Nested Within an Object
localeTitle: Изменение объекта, вложенного в объект
---
## Изменение объекта, вложенного в объект

Метод:

*   Помните, что объект, который вы хотите изменить, имеет два уровня глубины, `dot-notation` проще использовать в этом случае.
*   Просто определите объект, а затем используйте `dot-notation` для доступа ко второму объекту и, наконец, конечный элемент, который вы хотите изменить.

## Пример:

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

## Решение:

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