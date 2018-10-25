---
title: Images in HTML
localeTitle: الصور في HTML
---
## المقدمة

يمكنك تعريف الصور باستخدام العلامة `<img>` . لا يحتوي على علامة إغلاق لأنه يمكن أن يحتوي على سمات فقط. لإدراج صورة تقوم بتعريف المصدر ونص بديل يتم عرض النص عندما لا يمكن عرض الصورة.

`src` - توفر هذه السمة عنوان url لصورة موجودة على جهاز الكمبيوتر / الكمبيوتر المحمول أو لتضمينها من موقع ويب آخر. تذكر أن الرابط المقدم لا يجب أن ينكسر وإلا فإن الصورة لن يتم إنتاجها على صفحة الويب الخاصة بك.

`alt` - يتم استخدام هذه السمة للتغلب على مشكلة الصورة المكسورة أو عدم قدرة المتصفح على عدم القدرة على إنتاج صورة على صفحة الويب. تشير هذه السمة كاسم إلى توفير "بديل" للصورة وهو عبارة عن "TEXT" يصف الصورة

## مثال

 `
<img src="URL of the Image" alt="Descriptive Title" /> 
` 

### لتحديد ارتفاع وعرض صورة ، يمكنك استخدام سمة الارتفاع والعرض:

 `
<img src="URL of the Image" alt="Descriptive Title" height="100" width="150"/> 
` 

### يمكنك أيضًا تحديد سمك الحدود (0 يعني عدم وجود حد):

 `
<img src="URL of the Image" alt="Descriptive Title" border="2"/> 
` 

### محاذاة صورة:

 `
<img src="URL of the Image" alt="Descriptive Title" align="left"/> 
` 

### يمكنك أيضًا استخدام الأنماط في سمة نمط:

 `
<img src="URL of the Image" alt="Descriptive Title" style="width: 100px; height: 150px;"/> 
` 

#### معلومات اكثر

*   انظر صفحة freeCodeCamp على العلامة `<img>` [هنا](https://guide.freecodecamp.org/html/elements/img-tag) .
*   للحصول على مزيد من التفاصيل حول الصور في HTML ، راجع [محرر مستندات MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img)