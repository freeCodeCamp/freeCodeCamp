---
title: Array Destructuring
localeTitle: Dray
---
# Dray

تعتبر عملية التصفية طريقة ملائمة لاستخلاص قيم متعددة من البيانات المخزنة في المصفوفات. يمكن استخدامه في المواقع التي تتلقى البيانات (مثل الجانب الأيسر من الواجب). يتم تقديم هذه الميزة في `ECMAScript 6` .

يتم تحديد كيفية استخراج القيم عبر الأنماط (اقرأ على سبيل المثال).

### الواجب الأساسي المتغير

 `var names = ['neel', 'meet', 'darshan']; 
 var [nameOne, nameTwo, nameThree] = names; 
 console.log(nameOne); // "neel" 
 console.log(nameTwo); // "meet" 
 console.log(nameThree); // "darshan" 
` 

### مهمة منفصلة عن الإعلان

يمكن تعيين متغير قيمته من خلال التدمير المنفصل عن تعريف المتغير.

 `var a, b; 
 
 [a, b] = [1, 2]; 
 console.log(a); // 1 
 console.log(b); // 2 
` 

### قيم افتراضية

يمكن تعيين متغير افتراضي ، في حالة أن القيمة unpacked من الصفيف غير `undefined` .

 `var a, b; 
 
 [a=5, b=7] = [1]; 
 console.log(a); // 1 
 console.log(b); // 7 
` 

### تحليل مجموعة من عاد من وظيفة

كان من الممكن دائمًا إرجاع صفيف من إحدى الوظائف. يمكن أن تجعل عملية التدمير العمل مع قيمة إرجاع صفيف أكثر إيجازًا.

في هذا المثال ، تقوم `getNames()` بارجاع القيم `['neel', 'meet']` `getNames()` لها ، والتي يمكن تحليلها في سطر واحد مع destructuring.

 `function getNames() { 
  return ['neel', 'meet']; 
 } 
 
 var neel, meet; 
 [nameOne, nameTwo] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameTwo); // meet 
` 

### تجاهل بعض القيم التي تم إرجاعها

يمكنك تجاهل قيم الإرجاع التي لا تهتم بها:

 `function getNames() { 
  return ['neel', 'meet', 'darshan']; 
 } 
 
 var [nameOne, , nameThree] = getNames(); 
 console.log(nameOne); // neel 
 console.log(nameThree); // darshan 
` 

يمكنك أيضًا تجاهل جميع القيم التي تم إرجاعها:

 `[,,] = getNames(); 
` 

### تعيين بقية صفيف إلى متغير

عند تدمير صفيف ، يمكنك فك وتعيين الجزء المتبقي منه إلى متغير باستخدام نمط الباقي:

 `var [a, ...b] = [1, 2, 3]; 
 console.log(a); // 1 
 console.log(b); // [2, 3] 
` 

لاحظ أنه سيتم طرح `SyntaxError` إذا تم استخدام فاصلة زائدة على الجانب الأيسر مع عنصر راحة:

 `var [a, ...b,] = [1, 2, 3]; 
 // SyntaxError: rest element may not have a trailing comma 
` 

انظر أيضا: **صفيف Destructuring** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)