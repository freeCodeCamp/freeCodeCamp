---
title: RegExp.prototype.test
localeTitle: RegExp.prototype.test
---
## RegExp.prototype.test

في `test()` بإرجاع أسلوب `true` إذا سلسلة مباريات التعبير العادي، و `false` إذا لم يحدث ذلك.

## أمثلة

 `let str = 'freeCodeCamp'; 
 let regEx = /Code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints true 
` 

**ملاحظة:** التعبيرات العادية حساسة لحالة الأحرف. سيظهر المثال أعلاه `false` إذا كان `regEx` `/code/` بدلاً من `/Code/` . لجعل التعبير العادي غير حساس لحالة الأحرف ، يجب عليك إضافة علامة `i` إلى التعبير العادي.

 `let str = 'freeCodeCamp'; 
 let regEx = /code/; 
 let result = regEx.test(str); 
 
 console.log(result); // prints false 
 
 // Include the 'i' flag. 
 
 regEx = /code/i; 
 result = regEx.test(str); 
 console.log(result); // prints true 
` 

#### معلومات اكثر:

راجع صفحة [MDN الرسمية `RegExp.prototype.test()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) لمزيد من المعلومات.