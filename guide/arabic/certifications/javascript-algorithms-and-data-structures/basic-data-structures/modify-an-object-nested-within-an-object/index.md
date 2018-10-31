---
title: Modify an Object Nested Within an Object
localeTitle: تعديل كائن متداخل داخل كائن
---
## تعديل كائن متداخل داخل كائن

طريقة:

*   تذكر أن الكائن الذي تريد تغييره هو مستويين عميقين ، ومن السهل استخدام `dot-notation` في هذه الحالة.
*   ببساطة ، قم بتعريف الكائن ثم استخدم `dot-notation` للوصول إلى الكائن الثاني وأخيرًا العنصر الأخير الذي ترغب في تعديله.

## مثال:

 `let myObject = { 
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
` 

## حل:

 `let userActivity = { 
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
`