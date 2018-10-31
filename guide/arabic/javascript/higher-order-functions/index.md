---
title: Higher Order Functions
localeTitle: وظائف من الدرجة العليا
---
## وظائف من الدرجة العليا

دالة الترتيب العليا هي أي دالة تقوم بارجاع دالة عند تنفيذها ، تأخذ وظيفة كواحدة أو أكثر من الوسيطات الخاصة بها ، أو كلاهما. إذا كنت قد استخدمت أيًا من طرق `Array` مثل `map` أو `filter` ، أو قمت بتمرير وظيفة رد اتصال إلى jQuery's `$.get` ، فهذا `$.get` أنك قد عملت بالفعل مع وظائف الترتيب العالي.

عندما تستخدم `Array.map` ، فإنك تقدم دالة كوسيطة واحدة فقط ، والتي ينطبق عليها كل عنصر موجود في الصفيف.

 `var arr = [ 1, 2, 3 ]; 
 
 var arrDoubled = arr.map(function(num) { 
  return num * 2; 
 }); 
 
 console.log(arrDoubled); // [ 2, 4, 6 ] 
` 

يمكن لوظائف الترتيب الأعلى أيضًا إرجاع وظيفة. على سبيل المثال ، يمكنك إنشاء دالة تسمى `multiplyBy` تأخذ رقمًا وتقوم بإرجاع وظيفة تضاعف رقمًا آخر تقدمه من خلال الرقم الأول المقدم. يمكنك استخدام هذا الأسلوب لإنشاء وظيفة `multiplyByTwo` لتمريرها إلى `Array.map` . سيعطيك هذا النتيجة نفسها التي رأيتها أعلاه.

 `function multiplyBy(num1) { 
  return function(num2) { 
    return num1 * num2; 
  } 
 } 
 
 var multiplyByTwo = multiplyBy(2); 
 
 var arr = [ 1, 2, 3 ]; 
 
 var arrDoubled = arr.map(multiplyByTwo); 
 
 console.log(arrDoubled); // [ 2, 4, 6 ] 
` 

راجع دليل [الإغلاق](https://guide.freecodecamp.org/javascript/closures) للحصول على مزيد من المعلومات حول كيفية `multiplyByTwo` `num1` للإشارة إلى `num1` في المثال أعلاه.

[مزيد من المعلومات حول الإغلاق](https://eloquentjavascript.net/05_higher_order.html)