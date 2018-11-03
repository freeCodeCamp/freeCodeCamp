---
title: Array.prototype.some
localeTitle: Array.prototype.some
---
`.some()` طريقة مصفوفة جافا سكريبت `.some()` وظيفة رد اتصال لاختبار كل عنصر في الصفيف ؛ بمجرد إرجاع إرجاع `true` ثم `.some()` سيعود على الفور.

**بناء الجملة**

 `  var arr = [1, 2, 3, 4]; 
  arr.some(callback[, thisArg]); 
` 

## وظيفة رد الاتصال

**بناء الجملة**

 `  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
` 

انظر ويكي على [المشغّلات الحسابية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) لرؤية المشغل الباقي `%`

**لديه 3 الحجج**

*   currentElement
    
    *   هذا متغير يمثل العنصر الذي يتم تمريره إلى رد الاتصال.
*   فهرس
    
    *   هذه هي قيمة مؤشر العنصر الحالي بدءًا من 0
*   مجموعة مصفوفة
    
    *   المصفوفة التي تم استدعاء `.some()` عليها.

يجب أن تقوم وظيفة رد الاتصال بتنفيذ حالة اختبار.

## thisArg

هي معلمة اختيارية ويمكن العثور على مزيد من المعلومات على \[MDN

## وصف

`.some()` سيتم تشغيل وظيفة رد الاتصال لكل عنصر في الصفيف. بمجرد إرجاع الاستدعاء true ، `.some()` `true` . إذا كان رد الاتصال بإرجاع [قيمة كاذبة](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) _لكل_ عنصر في الصفيف ثم `.some()` بإرجاع false.

`.some()` لن يغير / `.some()` الصفيف الذي يطلق عليه.

## أمثلة

**تمرير وظيفة إلى `.some()`**

 `  var isEven = function isEven(currentElement, index, array) { 
      if(currentElement % 2 === 0) { 
          return true; 
      } else { 
          return false; 
      } 
  } 
 
  var arr1 = [1, 2, 3, 4, 5, 6]; 
  arr1.some(isEven);  // returns true 
  var arr2 = [1, 3, 5, 7]; 
  arr2.some(isEven);  // returns false 
` 

**وظيفة مجهولة**

 `  var arr3 = ['Free', 'Code', 'Camp', 'The Amazing']; 
  arr3.some(function(curr, index, arr) { 
      if (curr === 'The Amazing') { 
          return true; 
      } 
      }); // returns true 
 
  var arr4 = [1, 2, 14, 5, 17, 9]; 
  arr4.some(function(curr, index, arr) { 
      return curr > 20; 
      });  // returns false 
 
  // ES6 arrows functions 
  arr4.some((curr) => curr >= 14)  // returns true 
` 

المصدر: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)