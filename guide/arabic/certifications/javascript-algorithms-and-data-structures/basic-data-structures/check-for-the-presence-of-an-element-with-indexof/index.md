---
title: Check For The Presence of an Element With indexOf()
localeTitle: التحقق من وجود عنصر مع indexOf ()
---
## التحقق من وجود عنصر مع indexOf ()

*   يمكن استخدام `if-statement` بسيطة للتحقق ما إذا كانت القيمة التي يتم إرجاعها بواسطة الدالة `indexOf()` أقل من 0.
*   بمجرد اكتشاف القيمة ، يمكنك إرجاع إما `true` أو `false` .
*   يوضح `Solution-1` كيف يمكن `if-statement` simple بسيطة إرجاع النتيجة الصحيحة.

## حل 1:

 `function quickCheck(arr, elem) { 
  if(arr.indexOf(elem)>=0) { 
    return true; 
  } 
  return false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
` 

*   يوضح `Solution-2` كيف يمكن حل المشكلة باستخدام `? : (conditional)` المشغل.

## حل 2:

 `function quickCheck(arr, elem) { 
 return arr.indexOf(elem) >= 0 ? true : false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
`