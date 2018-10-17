---
title: Remove Items from an Array with pop() and shift()
localeTitle: إزالة العناصر من صفيف مع pop () و shift ()
---
## إزالة العناصر من صفيف مع pop () و shift ()

*   و `.pop()` طريقة و `.shift()` يجب استدعاء الأسلوب وinitialised باستخدام `popped` و `shifted` المتغيرات للعودة الإجابة الصحيحة من وظيفة.

## حل:

 `function popShift(arr) { 
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped]; 
 } 
 
 // do not change code below this line 
 console.log(popShift(['challenge', 'is', 'not', 'complete'])); 
`