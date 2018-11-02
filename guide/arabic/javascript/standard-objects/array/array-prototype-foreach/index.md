---
title: Array.prototype.forEach
localeTitle: Array.prototype.forEach
---
## Array.prototype.forEach

يتم استخدام أسلوب الصفيف 'forEach' للتكرار خلال كل عنصر في صفيف. يتم استدعاء الأسلوب على كائن الصفيف ويتم تمرير دالة تسمى على كل عنصر في الصفيف.

 `var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach(number => console.log(number * 2)); 
 
 // 2 
 // 4 
 // 6 
 // 8 
 // 10 
` 

يمكن أن تأخذ وظيفة رد الاتصال أيضًا معلمة ثانية للفهرس في حال كنت بحاجة إلى الرجوع إلى فهرس العنصر الحالي في الصفيف.

 ``var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach((number, i) => console.log(`${number} is at index ${i}`)); 
 
 // '1 is at index 0' 
 // '2 is at index 1' 
 // '3 is at index 2' 
 // '4 is at index 3' 
 // '5 is at index 4' 
`` 

#### معلومات اكثر:

[مقال MDN على Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)