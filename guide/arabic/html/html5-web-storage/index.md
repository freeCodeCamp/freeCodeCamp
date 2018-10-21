---
title: HTML5 Web Storage
localeTitle: تخزين HTML5 على الويب
---
## تخزين HTML5 على الويب

تخزين الويب يسمح لتطبيقات الويب بتخزين ما يصل إلى 5 ميغابايت من المعلومات في تخزين المتصفح لكل مصدر (لكل نطاق وبروتوكول).

### أنواع تخزين الويب

هناك نوعان من الأشياء لتخزين البيانات على العميل:

`window.localStorage` : يخزن البيانات بدون تاريخ انتهاء الصلاحية ويعيش حتى تتم إزالتها.

 `// Store Item 
 localStorage.setItem("foo", "bar"); 
 
 // Get Item 
 localStorage.getItem("foo"); //returns "bar" 
` 

`window.sessionStorage` : تخزين البيانات لجلسة واحدة ، حيث يتم فقدان البيانات عند إغلاق علامة تبويب المتصفح / المتصفح.

 `// Store Item 
 sessionStorage.setItem("foo", "bar"); 
 
 // Get Item 
 sessionStorage.getItem("foo"); //returns "bar" 
` 

نظرًا لأن التطبيق الحالي يعتمد فقط تعيينات سلسلة إلى سلسلة ، تحتاج إلى إجراء تسلسل وإزالة تسلسل هياكل البيانات الأخرى.

يمكنك القيام بذلك باستخدام JSON.stringify () و JSON.parse ().

على سبيل المثال لـ JSON المعطى

 `var jsonObject = { 'one': 1, 'two': 2, 'three': 3 }; 
` 

تم أولاً تحويل كائن JSON إلى سلسلة وحفظه في وحدة التخزين المحلية:

 `localStorage.setItem('jsonObjectString', JSON.stringify(jsonObject)); 
` 

للحصول على كائن JSON من السلسلة المخزنة في التخزين المحلي:

 `var jsonObject = JSON.parse(localStorage.getItem('jsonObjectString')); 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) [HTML5 Rocks](https://www.html5rocks.com/en/features/storage) [مدارس W3](https://www.w3schools.com/html/html5_webstorage.asp)