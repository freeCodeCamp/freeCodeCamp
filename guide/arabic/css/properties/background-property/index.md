---
title: Background Property
localeTitle: خاصية الخلفية
---
## خاصية الخلفية

تسمح خاصية خلفية CSS لأحدها بالإعلان عن جميع خصائص الخلفية الثمانية دفعة واحدة باستخدام هذا الإعلان المختصر 1 .

تم تحديد خاصية الخلفية كطبقة خلفية واحدة أو أكثر ، مفصولة بفواصل للخصائص التالية 2 :

*   لون الخلفية
*   الصورة الخلفية
*   خلفية موقف
*   خلفية الحجم
*   تكرار الخلفية
*   خلفية الأصل
*   خلفية كليب
*   مرفق الخلفية

التركيب 1 :

 `body { 
  /* Using a <background-color> */ 
  background: green; 
 } 
 
 .error { 
  /* Using a <bg-image> and <repeat-style> */ 
  background: url("test.jpg") repeat-y; 
 } 
 
 header { 
  /* Using a <box> and <background-color> */ 
  background: border-box red; 
 } 
 
 .topbanner { 
  /* A single image, centered and scaled */ 
  background: no-repeat center/80% url("../img/image.png"); 
 } 
` 

### مصادر

1.  [تفضل بزيارة صفحة الخلفية الخاصة بـ MDN للحصول على مزيد من المعلومات.](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
2.  [تفضل بزيارة صفحة خصائص خلفية CSS الخاصة بـ W3School لمزيد من المعلومات.](https://www.w3schools.com/cssref/css3_pr_background.asp)