---
title: Array.prototype.findIndex
localeTitle: Array.prototype.findIndex
---
## معلومات

`findIndex()` الأسلوب `findIndex()` فهرس العنصر الأول في الصفيف الذي يفي بوظيفة الاختبار المقدمة. وإلا يتم إرجاع -1.

لا تقوم طريقة `findIndex()` المصفوفة التي يطلق عليها.

بناء الجملة:

 `arr.findIndex(callback[, thisArg]) 
` 

##### المعلمات

*   `callback`
*   دالة يتم تنفيذها على كل قيمة في الصفيف ، مع أخذ ثلاث حجج:
*   `element`
    *   العنصر الحالي قيد المعالجة في الصفيف.
*   `index`
    *   فهرس العنصر الحالي الذي تتم معالجته في الصفيف.
*   `array`
    *   تم استدعاء في findIndex () مجموعة.
*   `thisArg` (اختياري)
*   كائن لاستخدامه كهذا عند تنفيذ رد الاتصال.

##### قيمة الإرجاع

فهرس في الصفيف إذا نجح عنصر في الاختبار ؛ خلاف ذلك ، -1.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## أمثلة

سيجد هذا المثال العنصر المناظر في المصفوفة ويعيد الفهرس منه.

 `let items = [ 
    {name: 'books', quantity: 2}, 
    {name: 'movies', quantity: 1}, 
    {name: 'games', quantity: 5} 
 ]; 
 
 function findMovies(item) { 
    return item.name === 'movies'; 
 } 
 
 console.log(items.findIndex(findMovies)); 
 
 // Index of 2nd element in the Array is returned, 
 // so this will result in '1' 
` 

يوضح المثال التالي إخراج كل معلمة اختيارية إلى وظيفة رد الاتصال. هذا سيعود `-1` لأن أي من العناصر سيعود true من وظيفة رد الاتصال.

 `function showInfo(element, index, array) { 
  console.log('element = ' + element + ', index = ' + index + ', array = ' + array); 
  return false; 
 } 
 
 console.log('return = ' + [4, 6, 8, 12].findIndex(showInfo)); 
 
 // Output 
 //  element = 4, index = 0, array = 4,6,8,12 
 //  element = 6, index = 1, array = 4,6,8,12 
 //  element = 8, index = 2, array = 4,6,8,12 
 //  element = 12, index = 3, array = 4,6,8,12 
 //  return = -1 
`