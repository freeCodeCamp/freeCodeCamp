---
title: String.prototype.includes
localeTitle: String.prototype.includes
---
## String.prototype.includes

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/string/string-prototype-includes/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .

يتم استخدام الأسلوب `includes()` لتحديد ما إذا كان يمكن العثور على سلسلة واحدة في سلسلة أخرى أم لا. تقوم هذه الطريقة بإرجاع قيمة منطقية (إما `true` أو `false` ).

من المهم ملاحظة أن هذه الطريقة حساسة لحالة الأحرف.

**بناء الجملة**

 `string.includes(searchString[, position]) 
` 

**المعلمات**

تتطلب هذه الطريقة معلمة واحدة فقط (searchString). ومع ذلك ، من خلال تضمين معلمة ثانية (الموضع) ، يمكنك بدء البحث عن سلسلة داخل سلسلة من موضع معين (أو فهرس) في searchString.

**أمثلة**

 `let string = "Roses are red, violets are blue."; 
 
 string.includes('red'); // returns true 
` 

 `let string = "Roses are red, violets are blue."; 
 
 string.includes('Red'); // returns false 
` 

 `let string = "Roses are red, violets are blue."; 
 
 string.includes('red',12); // returns false because 'red' starts at position 9, and our search begins at position 12. 
` 

 `let string = "Roses are red, violets are blue."; 
 
 string.includes('blue',12); // returns true because 'blue' starts after our search begins at position 12. 
` 

 `let string = "Roses are red, violets are blue."; 
 
 string.includes('violets are blue'); // returns true 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)