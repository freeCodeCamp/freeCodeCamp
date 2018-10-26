---
title: Delete Properties from a JavaScript Object
localeTitle: حذف الخصائص من كائن JavaScript
---
يمكننا أيضًا حذف الخصائص من كائنات مثل هذه:

 `delete ourDog.bark; 
` 

يقوم **عامل حذف** بإزالة خاصية من كائن.

## بناء الجملة

`delete expression` حيث يجب تقييم التعبير إلى مرجع خاصية ، على سبيل المثال:

 `delete object.property 
 delete object['property'] 
` 

## المعلمات

**موضوع**  
اسم كائن ، أو تعبير يتم تقييمه لكائن.

**خاصية**  
الخاصية لحذفها.

## مثال

 `var person = {name:'Jay', age:'52'}; 
 delete person['age']; 
 
 console.log(person); //{name:'Jay'} 
` 

## قيمة الإرجاع

يلقي في وضع صارم إذا كانت الخاصية هي خاصية غير قابلة للتكوين (إرجاع false في غير صارمة). يعود صحيح في جميع الحالات الأخرى.

[اقرأ أكثر](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)