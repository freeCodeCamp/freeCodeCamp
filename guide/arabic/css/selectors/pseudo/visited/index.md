---
title: Visited
localeTitle: زار
---
## زار

يقوم CSS: المحدد المحدد بتغيير نمط الارتباط الذي قام المستخدم بزيارته. يتم استخدام هذا المحدد لمساعدة المستخدمين على التمييز بين الروابط التي لديهم ولم يزوروها.

إذا تم استخدام العديد من محددات pseudo CSS ، يجب أن يأتي المحدد المحدد: select: link selector.

في المثال أدناه ، بعد قيام المستخدم بالنقر فوق ارتباط ، سيتغير لون النص من الأسود إلى الأخضر.

 ` a { 
   color: black; 
 } 
 
 a:visited { 
   color: green; 
 } 
` 

نظرًا لأسباب تتعلق بخصوصية المستخدم ، يقتصر المحدد: زيارة على تعديل أنماط خصائص CSS التالية:

*   اللون
*   لون الخلفية
*   لون الحدود (بما في ذلك لون الحدود لجوانب منفصلة)
*   العمود القاعدة لون
*   مخطط الألوان
*   التعبئة والسكتة الدماغية (لصور SVG)

#### معلومات اكثر:

*   [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
*   [مدارس W3](https://www.w3schools.com/cssref/sel_visited.asp)
*   [CSS الخدع دليل لفئات الزائفة وعناصر](https://www.smashingmagazine.com/2016/05/an-ultimate-guide-to-css-pseudo-classes-and-pseudo-elements/#visited)