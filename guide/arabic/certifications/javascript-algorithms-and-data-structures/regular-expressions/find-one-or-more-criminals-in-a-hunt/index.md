---
title: Find One or More Criminals in a Hunt
localeTitle: العثور على واحد أو أكثر من المجرمين في مطاردة
---
## العثور على واحد أو أكثر من المجرمين في مطاردة

## المشكلة

هربت مجموعة من المجرمين من السجن وهربت ، لكنك لا تعرف عددهم. ومع ذلك ، فأنت تعرف أنها تبقى قريبة من بعضها البعض عندما تكون حول أشخاص آخرين. أنت مسؤول عن العثور على جميع المجرمين في وقت واحد.

اكتب regex الجشع أن يجد واحد أو أكثر من المجرمين داخل مجموعة من الناس الآخرين. يمثل المجرم بحرف كبير.

### تلميح 1:

هل أنت محاطا بك regexp في مائلة؟

 `let regexp = /t.[az]*t/; 
` 

### تلميح 2:

هل تستخدم علامة "+" في تعبيرك العادي؟

 `let regexp = /E+/; // returns E, EE, EEE patterns 
` 

### تحذير المفسد - الحل إلى الأمام

## حل

 `let crowd = 'P1P2P3P4P5P6CCCP7P8P9'; 
 
 let reCriminals = /C+/; // Change this line 
 
 let matchedCriminals = crowd.match(reCriminals); 
 console.log(matchedCriminals); 
`