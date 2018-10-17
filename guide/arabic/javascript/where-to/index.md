---
title: Where to
localeTitle: ألى أين
---
## ألى أين

JavaScript هي لغة برمجة HTML والويب. في HTML ، يجب إدراج JavaScript في علامة حاوية `<script>` .

### مثال

 `
<script> 
  window.alert("This JavaScript Works!"); 
 </script> 
` 

تذكر أيضًا أنه يمكنك وضع أي عدد من علامات `<script>` في مستند HTML.

### أين تذهب العلامة `<script>` ؟

يمكن وضع علامة `<script>` في `<head>` أو `<body>` .

### JavaScript في `<head>`

في هذا المثال ، يتم وضع JavaScript في قسم `<head>` من المستند. يتم إنشاء وظيفة **onClicked** ، والتي تسمى عند الضغط على زر.

 `
<!DOCTYPE html> 
 <html> 
 <head> 
 <script> 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 </head> 
 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" onclick="onClicked()">Try it</button> 
 
 </body> 
 </html> 
` 

### JavaScript في `<body>`

هنا ، يتم وضع جافا سكريبت في . يتم إنشاء الدالة **onClicked** ويتم **تعيينها ليتم تشغيلها** عند النقر فوق الزر.

 `
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" id="buttonClicked">Try it</button> 
 
 <script> 
 document.getElementById("buttonClicked").onclick = onClicked; 
 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 
 </body> 
 </html> 
` 

### البرامج النصية الخارجية

يمكن وضع البرامج النصية أيضًا في ملفات خارجية. دعونا إنشاء ملف **script.js** .

##### script.js

 `window.alert("Hi!"); 
` 

يمكن تضمين هذا البرنامج النصي في مستند HTML على النحو التالي:

 `
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <script src="script.js"></script> 
 
 </body> 
 </html> 
` 

_مرحبا!_ سيظل يتم تنبيهك عند عرض الصفحة. تذكر أنك لست بحاجة إلى تضمين علامات `<script>` في ملفات JavaScript (الملفات التي تحتوي على الامتداد **.js** ).

#### معلومات اكثر:

ياهو توصي بوضع مخطوطات في القاع. هذا موضح [هنا](https://developer.yahoo.com/performance/rules.html#js_bottom) ، مع سبب هذه التوصية.