---
title: Modify an Object Nested Within an Object
---
## Modify an Object Nested Within an Object
Method:
- Remember the object you want to change is two levels deep, `dot-notation` is easier to use in this instance.
- Simply define the object and then use `dot-notation` to access the second object and finally the final element you wish to modify.

## Example:
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

## Solution:
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
