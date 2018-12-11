---
title: Modify an Array Stored in an Object
localeTitle: Измените массив, хранящийся в объекте
---
## Измените массив, хранящийся в объекте

### Метод:

*   Функция может быть записана только в двух строках кода.
*   Первая строка должна просто использовать функцию `push()` чтобы добавить параметр `friend` в массив, найденный в `user.data.friend` . Вторая строка вернет измененный массив.
*   Помните, что `user` должен ссылаться на первый параметр, присвоенный функции `addFriend()` .

### Решение:

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