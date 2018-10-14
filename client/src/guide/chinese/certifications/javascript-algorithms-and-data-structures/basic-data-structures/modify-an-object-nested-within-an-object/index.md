---
title: Modify an Object Nested Within an Object
localeTitle: 修改嵌套在对象中的对象
---
## 修改嵌套在对象中的对象

方法：

*   请记住，您想要更改的对象是两个级别， `dot-notation`在此实例中更容易使用。
*   只需定义对象，然后使用`dot-notation`访问第二个对象，最后使用您想要修改的最终元素。

## 例：

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

## 解：

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