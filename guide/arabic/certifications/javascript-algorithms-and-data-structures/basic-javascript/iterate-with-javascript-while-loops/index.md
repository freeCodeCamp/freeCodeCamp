---
title: Iterate with JavaScript While Loops
localeTitle: تكررت مع جافا سكريبت في حين الحلقات
---
## تكررت مع جافا سكريبت في حين الحلقات

بينما سيتم تشغيل حلقات طالما أن الشرط الموجود داخل () صحيح. مثال:

 `while(condition){ 
 code... 
 } 
` 

## تلميح 1:

استخدم متغير مكرر مثل i في حالتك

 `var i = 0; 
 while(i <= 4){ 
 } 
` 

## Spoiler Alert Solution إلى الأمام!

## حل:

 `// Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 var i = 0; 
 while (i <= 4){ 
    myArray.push(i); 
    i++; 
 } 
`