---
title: Modify an Array Stored in an Object
localeTitle: 修改存储在对象中的数组
---
## 修改存储在对象中的数组

### 方法：

*   该函数只需两行代码即可编写。
*   第一行应该只使用`push()`函数将`friend`参数添加到`user.data.friend`的数组中。第二行将返回修改后的数组。
*   请记住，必须使用`addFriend()`函数的第一个参数引用`user` 。

### 解：

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