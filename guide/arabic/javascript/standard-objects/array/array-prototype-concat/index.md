---
title: Array.prototype.concat
localeTitle: Array.prototype.concat
---
## Array.prototype.concat

ترجع طريقة "concat" إلى صفيف جديد يتألف من عناصر المصفوفة التي تسميها ، متبوعة بعناصر الوسيطات بالترتيب الذي تم تمريرها به.

يمكنك تمرير وسائط متعددة إلى طريقة 'concat'. يمكن أن تكون الوسيطات عبارة عن صفائف ، أو أنواع بيانات مثل booleans ، وسلاسل ، وأرقام.

### بناء الجملة

 `const newArray = array.concat(value1, value2, value3...); 
` 

### أمثلة

#### تسلسل صفيفتين

 `var cold = ['Blue', 'Green', 'Purple']; 
 var warm = ['Red', 'Orange', 'Yellow']; 
 
 var result = cold.concat(warm); 
 
 console.log(result); 
 // results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow']; 
` 

#### قيمة متسلسلة إلى صفيف

 `const odd = [1, 3, 5, 7, 9]; 
 const even = [0, 2, 4, 6, 8]; 
 
 const oddAndEvenAndTen = odd.concat(even, 10); 
 
 console.log(oddAndEvenAndTen); 
 // results in [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10]; 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)