---
title: Array.prototype.toString
localeTitle: Array.prototype.toString
---
يتم استخدام أسلوب مصفوفة جافا سكريبت. `.toString()` لتحويل مصفوفة إلى سلسلة واحدة ، مع كل عنصر `.toString()` بفاصلة. لا توجد معلمات للطريقة.

**بناء الجملة**

 `  var arr = [1, 2, 3, 4]; 
  arr.toString(); 
` 

## استعمال

 `  var str1 = [1, 2, 3, 4, 5].toString();  // str1 = '1,2,3,4,5'; 
  var str2 = ['1', '2', '3', '4'].toString();  // str2 = '1,2,3,4'; 
  var str3 = ['Free', 'Code', 'Camp'].toString();  // str3 = 'Free,Code,Camp'; 
  var str4 = ['phone', '555-6726'].toString();   // str4 = 'phone,555-6726'; 
  var str5 = ['August', 'September', 'October'].toString();  // str5 = 'August,September,October'; 
  var str6 = ['Words', 'and', 3, 4].toString();  // str6 = 'Words,and,3,4'; 
` 

المصدر: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)