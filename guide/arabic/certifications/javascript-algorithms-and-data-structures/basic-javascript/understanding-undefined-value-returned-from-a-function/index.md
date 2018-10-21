---
title: Understanding Undefined Value returned from a Function
localeTitle: فهم قيمة غير محددة عاد من وظيفة
---
## فهم قيمة غير محددة عاد من وظيفة

وظيفة مع عدم وجود بيان `return` ، لديها خرج من `undefined` . لذلك ، إذا حاولت مساواة متغير إلى إخراج دالة مع عدم وجود عبارة `return` ، فسوف يساوي هذا المتغير `undefined` .

المضي قدما وتحديد `addFive()` مثل ذلك ...

 `function addFive() { 
  sum += 5; 
 } 
` 

كما ترى ، يتم إضافة `sum` ب 5 بدون مشاكل ، ولكن بما أنه لا يوجد بيان إرجاع ، فهناك مخرجات `undefined` .

 `var result = addFive(); // This is undefined 
`