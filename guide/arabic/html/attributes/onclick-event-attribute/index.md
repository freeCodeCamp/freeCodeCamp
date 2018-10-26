---
title: Onclick Event Attribute
localeTitle: Onclick Event Attribute
---
## Onclick Event Attribute

عندما يتم النقر فوق عنصر الحريق حدث.

وهي تعمل تمامًا مثل _طريقة onclick_ أو `addEventListener('click')` للعنصر.

 `
<element onclick="event"></element> 
` 

> يمكن أن يكون `event` عبارة عن وظيفة JavaScript أو يمكنك كتابة جافا سكريبت الخام

### أمثلة

تغيير لون عنصر `<p>` عند النقر عليه

 `
<p id="text" onclick="redify()">Change my color</p> 
 
 <script> 
 function redify(){ 
  let text = document.querySelector('#text'); 
  text.style.color = "red"; 
 } 
 </script> 
` 

باستخدام سمة raw onclick الأولية لجافا سكريبت:

 `
<button onclick="alert('Hello')">Hello World</button> 
` 

#### معلومات اكثر:

*   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)