---
title: Modify an Array Stored in an Object
localeTitle: تعديل صفيف مخزنة في كائن
---
## تعديل صفيف مخزنة في كائن

### طريقة:

*   يمكن كتابة الدالة في سطرين فقط من التعليمات البرمجية.
*   يجب أن يستخدم السطر الأول الدالة `push()` لإضافة معلمة `friend` إلى الصفيف الموجود في `user.data.friend` . السطر الثاني سيعيد الصفيف المعدل.
*   تذكر أن `user` mustb يمكن الرجوع إليها مع المعلمة الأولى المعطاة `addFriend()` .

### حل:

 `let user = { 
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
`