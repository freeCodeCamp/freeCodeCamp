---
title: Text Transform Property
localeTitle: خاصية تحويل النص
---
## خاصية تحويل النص

تتحكم خاصية `text-transform` في CSS في حالة النص والرسملة وتسمح بمثل هذا التحكم دون الاعتماد على النص الأصلي الذي تمت كتابته.

أكثر القيم استخدامًا لهذه الخاصية هي `lowercase` `uppercase` `capitalize` .

 `<style> 
 .lowercased { 
  text-transform: lowercase; 
 } 
 
 .uppercased { 
  text-transform: uppercase; 
 } 
 
 .capitalized { 
  text-transform: capitalize; 
 } 
 </style> 
 
 <p class="uppercased">this text was lowercase.</p> <!-- = THIS TEXT WAS LOWERCASE. --> 
 <p class="lowercased">THIS TEXT WAS UPPERCASE.</p> <!-- = this text was uppercase. --> 
 <p class="capitalized">this text wasn't capitalized.</p> <!-- = This Text Wasn't Capitalized. --> 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)

[CSS-الحيل](https://css-tricks.com/almanac/properties/t/text-transform/)