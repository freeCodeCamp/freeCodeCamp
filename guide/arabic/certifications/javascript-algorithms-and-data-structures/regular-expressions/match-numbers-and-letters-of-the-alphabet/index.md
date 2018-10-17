---
title: Match Numbers and Letters of the Alphabet
localeTitle: أرقام المباراة ورسائل الأبجدية
---
## أرقام المباراة ورسائل الأبجدية

في هذا التحدي ، تتم مطالبتك بإرجاع مجموعة من الأرقام والحروف المستخرجة من سلسلة. هدفنا هو إنشاء regexp واحد يلتقط نطاق الحروف بين h و s ، والأرقام من 2 إلى 6.

### تلميح 1:

هل تستخدم طريقة match ()؟ إذا كان الأمر كذلك ، فهل تقوم باستدعاء الطريقة من المتغير المناسب؟ أي

 `  let input_string = "The string you are testing on" 
  let yourRegExp = /[hs]/; 
  let correct_result = input_string.match(yourRegExp); // passes - returns characters H to S 
 
  let incorrect_result = yourRegExp.match(input_string); // fails - .match() is not a function 
` 

### تلميح 2:

هل تذكر تمكين إشارات regexp مثل "i" لتجاهل الحالة و "g" لإرجاع قيم متعددة؟ إذا كان الأمر كذلك ، فهل تقوم بتضمين كل من مطابقة الأحرف للأرقام والحروف؟

 `let regexp = /[a-z1-100]/ig 
 // above code returns all characters from A to Z, along with all numbers from 1 to 100 
 // this includes the letter A and Z and the numbers 1 and 100 
` 

### تنبيه المفسد - الحل إلى الأمام

## حل

 `let quoteSample = "Blueberry 3.141592653s are delicious."; 
 let myRegex = /[h-s2-6]/ig; // Change this line 
 let result = quoteSample.match(myRegex); // Change this line 
`