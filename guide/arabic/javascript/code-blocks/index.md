---
title: Code Block
localeTitle: كود بلوك
---
## المقدمة

في برمجة الكمبيوتر، ****وكتلة**** أو رمز هو جزء من التعليمات البرمجية التي يتم تجميعها معا. تتألف الكتل من واحد أو أكثر من الإعلانات والبيانات. وتسمى لغة البرمجة التي تسمح بإنشاء الكتل ، بما في ذلك الكتل المتداخلة ضمن كتل أخرى ، بلغة برمجة منظمة. JavaScript هي إحدى لغات البرمجة.

يتم استخدام بيان **كتلة** في JavaScript لتجميع بيانات صفر أو أكثر. يتم تحديد الكتلة بواسطة زوج من الأقواس المتعرجة.

 `{ 
  statement_1; 
  statement_2; 
  ... 
  statement_n; 
 } 
` 

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

## أمثلة

يُستخدم بيان **الكتلة** عادةً مع عبارات تدفق التحكم (على سبيل المثال ، `if...else` ، `for` ، `while` ) ووظائف.

 `while (x < 10) { 
  x++; 
 } 
 
 function addnums(num1, num2) { 
  var sum = 0; 
  sum = num1 + num2; 
  return sum; 
 } 
`