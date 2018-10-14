---
title:  Iterate Through the Keys of an Object with a for...in Statement
localeTitle:  يتكرر عبر مفاتيح كائن مع لـ ... في بيان
---
## يتكرر عبر مفاتيح كائن مع لـ ... في بيان

طريقة:

*   ملاحظة: ستتسبب `dot-notation` حدوث أخطاء في هذا التحدي.
*   يجب استخدام الترميز `[square-bracket]` لاستدعاء اسم خاصية متغير.
*   التعليمة البرمجية التالية لن تعمل.

### مثال 1:

 `for (let user in obj) { 
    if(obj.user.online === true) { 
      //code 
    } 
  } 
` 

*   يوضح المثال 2 كيفية استخدام الترميز `[square-bracket]` في تنفيذ الشفرة.

### المثال 2:

 `for (let user in obj) { 
    if(obj[user]online === true) { 
      //code 
    } 
  } 
` 

### حل:

 `let users = { 
  Alan: { 
    age: 27, 
    online: false 
  }, 
  Jeff: { 
    age: 32, 
    online: true 
  }, 
  Sarah: { 
    age: 48, 
    online: false 
  }, 
  Ryan: { 
    age: 19, 
    online: true 
  } 
 }; 
 function countOnline(obj) { 
  // change code below this line 
  let result = 0; 
  for (let user in obj) { 
    if(obj[user].online === true) { 
      result++; 
    } 
  } 
  return result; 
  // change code above this line 
 } 
 console.log(countOnline(users)); 
`