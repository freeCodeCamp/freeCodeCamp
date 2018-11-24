---
title: Array.prototype.every
localeTitle: Array.prototype.every
---
تختبر كل طريقة `every()` ما إذا كانت جميع العناصر في الصفيف تجتاز الاختبار الذي نفذته الوظيفة المقدمة.

**بناء الجملة**

 `  arr.every(callback[, thisArg]) 
` 

## المعلمات

*   **callback** وظيفة لاختبار كل عنصر ، مع أخذ ثلاث حجج:
    
    *   **currentValue** (مطلوب)
        
        العنصر الحالي قيد المعالجة في الصفيف.
        
    *   **مؤشر** (اختياري)
        
        فهرس العنصر الحالي الذي تتم معالجته في الصفيف.
        
    *   **صفيف** (اختياري)
        
        تم استدعاء الصفيف كل.
        
*   **thisArg** اختياري. قيمة لاستخدامه عند تنفيذ رد الاتصال.
    

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679981%28v=vs.94%29.aspx)

## وصف

تقوم `every` طريقة باستدعاء وظيفة `callback` مرة واحدة لكل عنصر صفيف ، بترتيب تصاعدي للفهرس ، إلى أن ترجع الدالة `callback` false. إذا تم العثور على عنصر يتسبب في `callback` كاذبة ، فإن كل طريقة تقوم بإرجاع `false` مباشرة. خلاف ذلك ، ترجع كل طريقة `true` .

لا يتم استدعاء وظيفة رد الاتصال للعناصر المفقودة من الصفيف.

بالإضافة إلى كائنات الصفيف ، يمكن استخدام كل أسلوب بواسطة أي كائن له خاصية طول ولديه أسماء خصائص فهرسة رقميًا. `every` لا يتحور الصفيف الذي يطلق عليه.

## أمثلة

 `  function isBigEnough(element, index, array) { 
    return element >= 10; 
  } 
  [12, 5, 8, 130, 44].every(isBigEnough);   // false 
  [12, 54, 18, 130, 44].every(isBigEnough); // true 
 
  // Define the callback function. 
  function CheckIfEven(value, index, ar) { 
      document.write(value + " "); 
 
      if (value % 2 == 0) 
          return true; 
      else 
          return false; 
  } 
 
  // Create an array. 
  var numbers = [2, 4, 5, 6, 8]; 
 
  // Check whether the callback function returns true for all of the 
  // array values. 
  if (numbers.every(CheckIfEven)) 
      document.write("All are even."); 
  else 
      document.write("Some are not even."); 
 
  // Output: 
  // 2 4 5 Some are not even. 
`