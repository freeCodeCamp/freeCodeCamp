---
title: Onload Event
localeTitle: حدث Onload
---
## حدث Onload

يتم استخدام حدث `onload` لتنفيذ وظيفة JavaScript فورًا بعد تحميل الصفحة.

### مثال:

 `<body onload="myFunction()"> 
 
 <script> 
  function myFunction() { 
    alert('Page finished loading'); 
  } 
 </script> 
` 

في المثال أعلاه ، بمجرد تحميل صفحة الويب ، سيتم استدعاء وظيفة `myFunction` ، مما يعرض تنبيه `Page finished loading` المنتهي إلى المستخدم.

يتم استخدام حدث `onload` أغلب الأحيان داخل عنصر `<body>` لتنفيذ البرنامج النصي. إذا تم إرفاقه بـ `<body>` ، فسيتم تشغيل النص البرمجي بمجرد أن تقوم صفحة الويب بتحميل كل المحتوى (صور وملفات برامج نصية وملفات CSS وما إلى ذلك).

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)

#### موارد آخرى

[jQuery .on () مرفق معالج الأحداث](https://api.jquery.com/on/) [Stack Overflow: window.onload ضد document.onload](https://stackoverflow.com/questions/588040/window-onload-vs-document-onload)