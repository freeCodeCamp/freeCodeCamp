---
title: Script Tag
localeTitle: علامة البرنامج النصي
---
## علامة البرنامج النصي

يتم استخدام علامة HTML النصية إما لإدراج جافا سكريبت من جانب العميل أو الإشارة إلى ملف جافا سكريبت خارجي باستخدام السمة "src" البرمجية.

يتم استخدام العلامة / `<script>` لدمج جافا سكريبت من جانب العميل في ملف HTML الخاص بك والذي يمكن استخدامه لإضافة التفاعلية والمنطق إلى موقع الويب الخاص بك

 `<script> 
  //JavaScript code is written here 
 </script> 
 
 <script src="js/app.js"> 
` 

يمكن استخدام العلامة لتشمل شفرة جافا سكريبت الفعلية في HTML نفسها مثل هذا

 `<script> 
  alert('hello this is my Javascript doing things!'); 
 </script> 
` 

أو يمكنك استخدامه كطريقة للإشارة إلى ملف جافا سكريبت خارجي مثل هذا

 `<script src="main.js" /> 
` 

وهنا تأخذ خاصية `src` للعنصر مسارًا إلى ملف Javascript

يتم تحميل علامات البرنامج النصي في HTML الخاص بك في ترتيب و syncronously لذلك عادة ما يكون أفضل الممارسات لإضافة البرامج النصية الخاصة بك مباشرة قبل انتهاء العلامة `<body>` في HTML الخاص بك مثل ذلك

 `  <script src="main.js" /> 
  <script> 
    alert('hello this is my Javascript doing things!'); 
  </script> 
 </body> 
` 

يمكنك الاطلاع على الوثائق الرسمية لعنصر البرنامج النصي في [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)