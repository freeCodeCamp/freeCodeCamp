---
title: Check if an Object has a Property
localeTitle: تحقق مما إذا كان الكائن يحتوي على خاصية
---
## تحقق مما إذا كان الكائن يحتوي على خاصية

طريقة:

*   إن أبسط طريقة لإكمال هذا التحدي هي إنشاء عبارة `ìf-statement` للتحقق من الطقس أو عدم احتواء الكائن على جميع المستخدمين ، ثم إرجاع بيان صواب أو خطأ. الحل الأول يفعل هذا فقط.
*   يعمل الحل الثاني بالطريقة نفسها تمامًا ، فقط يستخدم سطرًا واحدًا من الشفرة - `Conditional(ternary)-Operator` - داخل الوظيفة.

يقدم [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) تحليلاً أكثر عمقًا للمشغل الثلاثي.

### حل 1:

 `let users = { 
  Alan: { 
    age: 27, 
    online: true 
  }, 
  Jeff: { 
    age: 32, 
    online: true 
  }, 
  Sarah: { 
    age: 48, 
    online: true 
  }, 
  Ryan: { 
    age: 19, 
    online: true 
  } 
 }; 
 
 function isEveryoneHere(obj) { 
  // change code below this line 
  if(users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) { 
    return true; 
  } 
  return false; 
  // change code above this line 
 } 
 
 console.log(isEveryoneHere(users)); 
` 

### حل 2:

 `function isEveryoneHere(obj) { 
  return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false; 
 } 
`