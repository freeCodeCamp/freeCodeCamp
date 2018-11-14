---
title: Array.prototype.includes
localeTitle: Array.prototype.includes
---
## Array.prototype.includes

تحدد الطريقة `includes()` ما إذا كان الصفيف يتضمن قيمة. تقوم بإرجاع true أو false.

يستغرق اثنين من الحجج:

1.  `searchValue` - العنصر المطلوب البحث عنه في المصفوفة.
2.  `fromIndex` - الموضع في المصفوفة لبدء البحث عن searchvalue `searchValue` . إذا تم توفير قيمة سالبة ، فإنها تبدأ من طول الصفيف مطروحًا منها القيمة سالبة.

### مثال

 `const a = [1, 2, 3]; 
 a.includes(2); // true 
 a.includes(4); // false 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)