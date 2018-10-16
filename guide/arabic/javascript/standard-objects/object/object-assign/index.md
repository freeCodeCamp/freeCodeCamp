---
title: Object Assign
localeTitle: كائن التعيين
---
## كائن التعيين

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/object/object-assign/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .

يتم استخدام الأسلوب `Object.assign()` إلى 1) إضافة الخصائص والقيم إلى كائن موجود ، 2) إنشاء نسخة جديدة من كائن موجود ، أو 3) دمج كائنات موجودة متعددة في كائن واحد. يتطلب الأسلوب `Object.assign()` targetObject واحدًا كمعلمة ويمكن أن يقبل عددًا غير محدود من sourceObjects كمعلمات إضافية.

من المهم ملاحظة أن معلمة targetObject سيتم تعديلها دائمًا. إذا كانت المعلمة تشير إلى كائن موجود ، فسيتم تعديل هذا الكائن ونسخه. ومع ذلك ، إذا كنت ترغب في إنشاء نسخة من كائن بدون تعديل الكائن الأصلي ، فيمكنك تمرير كائن فارغ `{}` كمعلمة (أو targetObject) الأولى والكائن المطلوب نسخه كمعلمة ثانية (أو sourceObject).

إذا كانت الكائنات التي تم تمريرها كمعلمات في `Object.assign()` تتشارك في نفس الخصائص (أو المفاتيح) ، فإن قيم الخصائص التي تأتي لاحقًا في قائمة المعلمات ستحل محل تلك التي جاءت في وقت سابق.

**بناء الجملة**

 `Object.assign(targetObject, ...sourceObject) 
` 

**قيمة الإرجاع**

`Object.assign()` بإرجاع targetObject.

**أمثلة**

_تعديل ونسخ targetObject_

 `let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign(obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, coder: true } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
` 

_نسخ targetObject بدون تعديل_

 `let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign({}, obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30 } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
` 

_كائنات ذات خصائص مماثلة_

 `let obj = {name: 'Dave', age: 30, favoriteColor: 'blue'}; 
 
 let objCopy = Object.assign({}, obj, {coder: true, favoriteColor: 'red'}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, favoriteColor: 'blue' } 
 console.log(objCopy); // { name: 'Dave', age: 30, favoriteColor: 'red', coder: true } 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
[مقدمة في Object.assign في ES6 (فيديو)](https://youtu.be/vM7Tif98Dlo)