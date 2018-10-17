---
title: Active
localeTitle: نشيط
---
## نشيط

يقوم CSS: select selector بتغيير نمط عنصر HTML عندما يقوم المستخدم بتنشيط العنصر. يوفر هذا المحدد عادةً تأكيد المستخدم بأنهم قد نقروا على عنصر. يتم استخدام المحدد النشط: الأكثر شيوعًا على عناصر `<a>` و `<button>` ولكن يمكن استخدامه على جميع العناصر.

في حالة استخدام العديد من محددات pseudo CSS ، يجب أن يأتي المحدد النشط: select the hover.

في المثال أدناه ، عندما ينقر مستخدم على رابط ، سيتغير لون النص من الأسود إلى الأحمر إلى أن يتوقف إجراء النقر.

 `a { 
  color: black; 
 } 
 
 a:active { 
  color: red; 
 } 
` 

#### معلومات اكثر:

*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
*   [مدارس W3](https://www.w3schools.com/cssref/sel_active.asp)