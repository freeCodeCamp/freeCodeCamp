---
title: Onclick Event
localeTitle: حدث Onclick
---
## حدث Onclick

يسمح لك الحدث `onclick` في JavaScript كمبرمج بتنفيذ وظيفة عند النقر فوق عنصر.

### مثال

 `<button onclick="myFunction()">Click me</button> 
 
 <script> 
  function myFunction() { 
    alert('Button was clicked!'); 
  } 
 </script> 
` 

في المثال البسيط أعلاه ، عندما ينقر المستخدم على الزر ، سيرى تنبيهًا في المتصفح يعرض `Button was clicked!` .

### إضافة `onclick` بشكل حيوي

يمكن أيضًا إضافة حدث `onclick` برمجيًا إلى أي عنصر باستخدام التعليمة البرمجية التالية في المثال التالي:

 `<p id="foo">click on this element.</p> 
 
 <script> 
  var p = document.getElementById("foo"); // Find the paragraph element in the page 
  p.onclick = showAlert; // Add onclick function to element 
 
  function showAlert(event) { 
    alert("onclick Event triggered!"); 
  } 
 </script> 
` 

### ملحوظة

من المهم ملاحظة أن استخدام onclick يمكننا إضافة وظيفة مستمع واحدة فقط. إذا كنت ترغب في إضافة المزيد ، فقط استخدم addEventListener () ، وهي الطريقة المفضلة لإضافة وحدة إصغاء الأحداث.

في المثال أعلاه ، عندما ينقر المستخدم على عنصر `paragraph` في `html` ، سيرى تنبيهًا يظهر `onclick Event triggered` .

### منع الفعل الافتراضي

ولكن إذا كان لنا أن نعلق `onclick` على وصلات (HTML هو `a` علامة) قد نرغب منع الإجراء الافتراضي إلى حدوث:

 `<a href="https://guide.freecodecamp.org" onclick="myAlert()">Guides</a> 
 
 <script> 
  function myAlert(event) { 
    event.preventDefault(); 
    alert("Link was clicked but page was not open"); 
  } 
 </script> 
` 

في المثال أعلاه يمكننا منع السلوك الافتراضي `a` عنصر (وصلة فتح) باستخدام `event.preventDefault()` داخل لدينا `onclick` ظيفة رد.

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

#### موارد آخرى

[jQuery .on () مرفق معالج الأحداث](https://api.jquery.com/on/)