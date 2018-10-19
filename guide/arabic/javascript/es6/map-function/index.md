---
title: Map Function
localeTitle: وظيفة الخريطة
---## وظيفة الخريطة

يتم استخدام وظيفة `map()` لإنشاء صفيف جديد من صف واحد موجود ، وتطبيق وظيفة على كل عنصر من عناصر الصفيف الأول.

الصيغة الأصلية لدالة الخريطة هي:

 `  let new_arr = arr.map(function callback(currentValue, index, array) { 
                  // Do some stuff with currentValue (index and array are optionals) 
                }) 
` 

### مثال (ES6):

 `const myArray_1 = [1, 2, 3, 4]; 
 const myArray_2 = myArray_1.map(el => el * 2); 
` 

`myArray_2` على العناصر: `[2, 4, 6, 8]`

`map()` هي إحدى طرق كائن `Array` ، لذا لتمرير هذه الوظيفة إلى كائن متكرر ، من الضروري جعل الكائن مصفوفة.