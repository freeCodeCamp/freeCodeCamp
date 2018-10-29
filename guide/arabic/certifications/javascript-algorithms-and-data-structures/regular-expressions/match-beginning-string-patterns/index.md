---
title: Match Beginning String Patterns
localeTitle: مباراة بداية أنماط سلسلة
---
## مباراة بداية أنماط سلسلة

## المشكلة

استخدم حرف الإقحام في تعبير منطقي للبحث عن "Cal" فقط في بداية السلسلة rickyAndCal.

### تلميح 1:

جرِّب محيطك المعتاد بالأشرطة المائلة

 `let testExp = /^test/; 
 // returns true or false depending on whether test is found in the beginning of the string 
` 

### تلميح 2:

حاول استخدام علامة الحرف '^' خارج الأقواس كما هو موضح في المثال أعلاه

### تنبيه المفسد - الحل إلى الأمام

## حل

 `let rickyAndCal = "Cal and Ricky both like racing."; 
 let calRegex = /^Cal/; // Change this line 
 let result = calRegex.test(rickyAndCal); 
`