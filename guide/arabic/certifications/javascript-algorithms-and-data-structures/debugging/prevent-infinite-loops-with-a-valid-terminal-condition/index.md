---
title: Prevent Infinite Loops with a Valid Terminal Condition
localeTitle: منع حلقات لا نهائية مع شرط محطة صالح
---
## منع حلقات لا نهائية مع شرط محطة صالح

*   لمنع حلقة لا نهائية، و `while-condition` يجب أن تصل إلى حالة محطة للخروج من الحلقة.
*   لذا يحدث الخطأ في هذا التحدي بسبب الشرط - `i != 4` - في حلقة for.
*   إذا ألقيت نظرة عن كثب على الرمز:

 `function myFunc() { 
  for (let i = 1; i != 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 
` 

*   سترى أن `i` هو initialised أولا ك 1 وبعد كل تكرار للحلقة، `i` يتزايد بنسبة 2.
*   باستخدام هذا المنطق ، بعد التكرار الأول - `i = 3` والتكرار الثاني `i = 5` ، لن يتم استيفاء الشرط `i != 4` وستحدث حلقة لا نهائية.

## حل:

 `function myFunc() { 
  for (let i = 1; i <= 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 
`