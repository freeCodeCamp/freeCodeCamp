---
title: Falsy Values
localeTitle: القيم الفارسية
---
## وصف

قيمة الخطأ هي التي يتم تقييمها على FALSE ، على سبيل المثال عند التحقق من متغير. هناك ستة قيم زائفة فقط في JavaScript: `undefined` ، `null` ، `NaN` ، `0` ، `""` (سلسلة فارغة) ، و `false` بالطبع.

## التحقق من وجود قيم كاذبة على المتغيرات

من الممكن التحقق من وجود قيمة كاذبة في متغير مع شرط بسيط:

 `if (!variable) { 
  // When the variable has a falsy value the condition is true. 
 } 
` 

## أمثلة عامة

 `var string = ""; // <-- falsy 
 
 var filledString = "some string in here"; // <-- truthy 
 
 var zero = 0; // <-- falsy 
 
 var numberGreaterThanZero // <-- truthy 
 
 var emptyArray = []; // <-- truthy, we'll explore more about this next 
 
 var emptyObject = {}; // <-- truthy 
` 

## المرح مع المصفوفات

 `if ([] == false) // <-- truthy, will run code in if-block 
 
 if ([]) // <-- truthy, will also run code in if-block 
 
 if ([] == true) // <-- falsy, will NOT run code in if-block 
 
 if (![]) // <-- falsy, will also NOT run code in if-block 
` 

## مذكرة قانونية

كن على دراية بنوع البيانات عند تقييم قيمة في سياق منطقي. إذا كان من المفترض أن يكون نوع البيانات من القيمة _رقمًا_ ، فيمكن أن يؤدي الإفراط الصادق / الخاطئ إلى نتيجة غير متوقعة:

 `const match = { teamA: 0, teamB: 1 } 
 if (match.teamA) 
  // The following won't run due to the falsy evaluation 
  console.log('Team A: ' + match.teamA); 
 } 
` 

بديل لحالة الاستخدام أعلاه هو تقييم القيمة باستخدام `typeof` :

 `const match = { teamA: 0, teamB: 1 } 
 if (typeof match.teamA === 'number') 
  console.log('Team A: ' + match.teamA); 
 } 
` 

## معلومات اكثر

*   **الصدق** [بلوق وظيفة - Truthy & Falsey](http://james.padolsey.com/javascript/truthy-falsey/)
    
*   [فلسي | مسرد MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
    
*   [Truthy and Falsy: When All is Not Equal in JavaScript](https://www.sitepoint.com/javascript-truthy-falsy/)