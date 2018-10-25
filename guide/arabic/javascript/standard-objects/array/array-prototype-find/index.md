---
title: Array.prototype.find
localeTitle: Array.prototype.find
---
## معلومات

ترجع طريقة `find()` قيمة العنصر الأول في المصفوفة التي تفي بوظيفة الاختبار المقدمة. على خلاف ذلك يتم إرجاع غير معروف. لا تقوم طريقة `find()` بتحويل المصفوفة التي يطلق عليها.

بناء الجملة:

 `arr.find(callback[, thisArg]) 
` 

##### المعلمات

*   `callback`
*   دالة يتم تنفيذها على كل قيمة في الصفيف ، مع أخذ ثلاث حجج:
*   `element`
    *   العنصر الحالي قيد المعالجة في الصفيف.
*   `index`
    *   فهرس العنصر الحالي الذي تتم معالجته في الصفيف.
*   `array`
    *   تم استدعاء البحث عن صفيف.
*   `thisArg` (اختياري)
*   كائن لاستخدامه كهذا عند تنفيذ رد الاتصال.

##### قيمة الإرجاع

قيمة في الصفيف إذا نجح عنصر في الاختبار ؛ خلاف ذلك ، غير محدد.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

## أمثلة

سيجد هذا المثال العنصر المناظر في الصفيف ويعيد الكائن منه.

 `let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.find(findMovies)); 
 
 // Output 
 //  { name: 'movies', quantity: 1 } 
` 

يوضح المثال التالي إخراج كل معلمة اختيارية إلى وظيفة رد الاتصال. سيؤدي ذلك إلى `undefined` نظرًا لأن أيًا من العناصر لن يعود صحيحًا من وظيفة رد الاتصال.

 `function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].find(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = undefined 
`