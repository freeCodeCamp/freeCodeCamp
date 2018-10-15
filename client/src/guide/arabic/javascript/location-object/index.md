---
title: Location Object
localeTitle: كائن الموقع
---
## كائن الموقع

يوفر الكائن "الموقع" واجهة برمجة التطبيقات (واجهة برمجة التطبيقات) التي تمكن من استرداد عنوان URL أو إعداد عنوان URL أو الوصول إلى أجزاء من عنوان URL. يتم تنفيذه بالفعل لك بشكل افتراضي على كائنات النافذة والمستند. ملاحظة: لا يوجد معيار عام ينطبق على كائن الموقع ، ولكن جميع المتصفحات الرئيسية تدعمه.

### خصائص كائن الموقع

| الملكية الوصف | | ---------- | -------------------------------------- ------------------- | | التجزئة يعين أو إرجاع جزء الربط (#) من عنوان URL | | مضيف | يعين أو إرجاع اسم المضيف ورقم المنفذ الخاص بعنوان URL | | اسم المضيف يعين أو إرجاع اسم المضيف لعنوان URL | | href | يعين أو يرجع عنوان URL بالكامل | | أصل | لعرض البروتوكول واسم المضيف ورقم المنفذ الخاص بعنوان URL | | اسم المسار يعين أو إرجاع اسم مسار URL | ميناء يعين أو إرجاع رقم منفذ URL | بروتوكول | يعين أو يعيد بروتوكول عنوان URL | البحث | يعين أو إرجاع جزء querystring من URL

### طرق كائن الموقع

| الطريقة | الوصف | | ----------- | ------------------------------------- --------- | | تعيين () | يحمّل مستندًا جديدًا | إعادة تحميل () | يعيد تحميل الوثيقة الحالية | | استبدل () | يستبدل الوثيقة الحالية بآخر جديد

### أمثلة

يمكن الوصول إلى كائنات الموقع من خلال:

 `    console.log(window.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
    console.log(document.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
` 

يمكنك أيضًا تعيين كائن الموقع لعنصر HTML `<a>` أو عنصر HTML `<area>` برمجيًا مع JavaScript.

 `    var anchor = document.createElement('a'); 
    anchor.url = "https://guide.freecodecamp.org/javascript/location-object"; 
` 

بعد أن يكون لديك كائن به مجموعة عناوين URL (بما في ذلك النافذة) ، تتيح لك واجهة برمجة التطبيقات للموقع الوصول إلى أجزاء من عنوان URL.

 `    console.log(anchor.protocol); 
    // > https: 
    console.log(anchor.host); 
    // > guide.freecodecamp.org (includes port number if applicable. Example: guide.freecodecamp.org:8080) 
` 

خصائص أخرى من "الموقع" يمكنك الوصول إليها هي:

*   `anchor.hostname` - _guide.freecodecamp.org_
*   `anchor.port` - _8080_
*   `anchor.pathname` - _/ javascript / location-object_
*   `anchor.origin` - _https://developer.mozilla.org_

إذا كان عنوان URL يحتوي على معلمات أو عمليات تجزئة ، فيمكنك الوصول إليها مثل:

 `    // If your URL is https://guide.freecodecamp.org/javascript?param=location#other-properties 
    console.log(window.location.search); 
    // > "?param=location" 
    console.log(document.location.hash); 
    // > "#other-properties" 
` 

#### معلومات اكثر:

[W3C - كائن الموقع](https://www.w3schools.com/jsref/obj_location.asp) [موقعك](https://developer.mozilla.org/en-US/docs/Web/API/Location)