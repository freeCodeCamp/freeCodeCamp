---
title: Background Opacity
localeTitle: تعتيم الخلفية
---
## تعتيم الخلفية

تحدد خاصية العتامة شفافية / شفافية عنصر ، أي الدرجة التي يكون فيها المحتوى خلف العنصر مرئيًا.

يمكن أن تأخذ خاصية العتامة قيمة من 0.0 - 1.0. القيمة الأقل ، وأكثر شفافية:

العثور على مزيد من التفاصيل [هنا](https://www.w3schools.com/css/css_image_transparency.asp)

يمكنك أن تختار إلى أي مدى تريد أن تجعل العنصر شفافًا. يجب عليك إضافة خاصية CSS التالية لتحقيق مستويات الشفافية.

**كامد بالكامل**

 `.class-name { 
  opacity:1; 
 } 
 
 OR 
 
 .class-name { 
  opacity:1.0; 
 } 
` 

**شفافي نصف شفاف**

 `.class-name { 
  opacity:0.5; 
 } 
 Opacity value can be anything between 0 and 1; 
` 

**شفاف**

 `.class-name { 
  opacity:0; 
 } 
 
 OR 
 
 .class-name { 
  opacity:0.0; 
 } 
` 

بدلا من ذلك يمكنك استخدام قيمة rgba شفافة مثل هذا: \`\` \`المغلق

. الطبقة اسم { background-color: rgba (0،0،0، .5)؛ } \`\` \` المثال أعلاه يضبط الخلفية ليكون أسود مع عتامة 50 ٪. القيمة الأخيرة لقيمة rgba هي قيمة alpha. قيمة ألفا 1 تساوي 100٪ ، و 0.5 (.5 للقصير)٪ 50. نستخدم هذه الطريقة لإضافة شفافية إلى عنصر دون التأثير على المحتوى في الداخل.

[مثال codepen لعرض نطاقات عتامة الخلفية](https://codepen.io/lvcoulter/full/dVrwmK/)

#### معلومات اكثر:

لمزيد من المعلومات ، قم بزيارة [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) [خاصية Opacity CSS في CSS-Tricks](https://css-tricks.com/almanac/properties/o/opacity/)

دعم المتصفح: [caniuse](https://caniuse.com/#search=opacity)