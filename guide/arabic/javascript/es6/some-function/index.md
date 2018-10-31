---
title: Some Function
localeTitle: بعض الوظائف
---## بعض الوظائف

يتم استخدام الدالة `some()` للتحقق مما إذا كان عنصر واحد على الأقل من صفيف يفي بشرط معين. تقوم الدالة بإرجاع `true` إذا تم استيفاء الشرط بواسطة عنصر واحد ، و false إذا استوفى أي من العناصر الشرط

الصيغة الأصلية لبعض الوظائف هي:

 `arr.some(function callback(currentValue, index, array) { 
  // Do some stuff with currentValue (index and array are optionals) 
 }, [thisArg]); 
` 

### مثال (ES6):

 `const arr = [1, 4, 5, 11]; 
 if (arr.some(el => el % 2 == 0)) { 
  console.log("There's at least one even number"); 
 } 
` 

`some()` هو أسلوب كائن `Array` ، بحيث لتمرير هذه الدالة إلى كائن iterable من الضروري التأكد من أن الكائن هو صفيف.