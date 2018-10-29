---
title: Object isFrozen
localeTitle: الكائن هو المجمدة
---
## الكائن هو المجمدة

يمكنك استخدام **`Object.isFrozen()`** لمعرفة ما إذا تم تجميد كائن أم لا. تقوم بإرجاع قيمة منطقية **`true`** أو **`false`** .

#### **بناء الجملة**

 `Object.isFrozen(obj) 
` 

**فمثلا:**

 `var foods = { 
    grain : "wheat", 
    dairy  : "milk", 
    vegetable : "carrot", 
    fruit  : "grape" 
 }; 
 
 var frozenFoods = Object.freeze(foods); 
 
 var areMyFoodsFrozen = Object.isFrozen(frozenFoods); 
 
 \\ returns true 
` 

تذكر ، **لا يمكن أن** يكون له خاصية مجمدة تغير خصائصها.  
  
إذا حاولت استخدام **`Object.isFrozen()`** على وسيطة غير كائن ، فسوف ترجع `true` .

#### معلومات اكثر:

[MDN Object.isFrozen ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)  
[MDN Object.freeze ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)