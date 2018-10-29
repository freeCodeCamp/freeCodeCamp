---
title: String.prototype.split
localeTitle: String.prototype.split
---
## String.prototype.split

تقوم الدالة `split()` بفصل السلسلة الأصلية إلى سلاسل فرعية ، استنادًا إلى _سلسلة فاصلة_ تمررها كمدخل.

إن ناتج الدالة `split()` هو `Array` من السلاسل ، التي تمثل الأجزاء الفرعية المنفصلة عن السلسلة الأصلية.

لا يتم تبديل السلسلة الأصلية بواسطة الدالة `split()` .

أمثلة:

 `// We have a regular string 
 "Hello. I am a string. You can separate me." 
 
 // Let's use the split function to separate the string by the period character: 
 "Hello. I am a string. You can separate me.".split("."); 
 // output is [ "Hello", " I am a string", " You can separate me", "" ] 
` 

بما أننا استخدمنا النقطة ( `.` ) _كسلسلة فاصلة_ ، فإن السلاسل في صفيف الخرج لا تحتوي على الفترة الموجودة فيها ؛ _لا تتضمن_ سلاسل فصل الإخراج _سلسلة سلسلة فاصل الإدخال نفسه_ .

ليس من الضروري أن يكون _فاصل السلسلة_ حرفًا واحدًا ، يمكن أن يكون أي سلسلة أخرى:

 `"Hello... I am another string... keep on learning!".split("..."); 
 // output is [ "Hello", " I am another string", " keep on learning!" ] 
 
 const names = "Kratos- Atreus- Freya- Hela- Thor- Odin"; 
 // notice separator is a dash and a space 
 names.split("- "); 
 // output is [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ] 
` 

#### معلومات اكثر:

*   [String.prototype.split على MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)