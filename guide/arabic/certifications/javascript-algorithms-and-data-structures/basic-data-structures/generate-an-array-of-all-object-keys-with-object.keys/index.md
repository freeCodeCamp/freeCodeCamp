---
title: Generate an Array of All Object Keys with Object.keys()
localeTitle: إنشاء صفيف من كافة مفاتيح الكائنات مع Object.keys ()
---
## إنشاء صفيف من كافة مفاتيح الكائنات مع Object.keys ()

### طريقة:

*   لإرجاع صفيف المستخدمين يجب أن تأخذ أسلوب `Object.keys()` .
*   يمكن حل هذا التحدي باستخدام بيان إرجاع سطر واحد.

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
 
 function getArrayOfUsers(obj) { 
  // change code below this line 
  return Object.keys(obj); 
  // change code above this line 
 } 
 
 console.log(getArrayOfUsers(users)); 
`