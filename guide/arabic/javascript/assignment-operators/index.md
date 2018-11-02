---
title: Assignment Operators
localeTitle: مشغلي الواجبات
---
# مشغلي الواجبات

مشغلات التعيين ، كما يوحي الاسم ، تعيين (أو إعادة تخصيص) القيم لمتغير. وعلى الرغم من وجود بعض الاختلافات القليلة في مشغلي المهام ، فإنهم يبنون جميعاً على مشغِّل المهمة الأساسية.

## بناء الجملة

`x = y;` | الوصف | ضرورة : ---------: |: ---------------------: |: ---------:  
`x` | متغير مطلوب  
`=` | عامل التنازل | مطلوب  
`y` | قيمة لتعيين متغير مطلوب

## أمثلة

 `let initialVar = 5;   // Variable initialization requires the use of an assignment operator 
 
 let newVar = 5; 
 newVar = 6;   // Variable values can be modified using an assignment operator 
` 

## الاختلافات

مشغلات التخصيص الأخرى هي اختصار لأداء بعض العمليات باستخدام المتغير (المشار إليه بواسطة x أعلاه) والقيمة (المشار إليها بـ y أعلاه) ثم تخصيص النتيجة للمتغير نفسه.

على سبيل المثال ، أدناه هو بناء جملة عامل تعيين إضافة:

 `x += y; 
` 

هذا هو نفس تطبيق عامل الإضافة وإعادة تعيين المبلغ للمتغير الأصلي (أي ، x) ، والذي يمكن التعبير عنه بالرمز التالي:

 `x = x + y; 
` 

لتوضيح ذلك باستخدام القيم الفعلية ، إليك مثالاً آخر على استخدام مشغل تعيين الإضافة:

 `let myVar = 5;   // value of myVar: 5 
 myVar += 7;   // value of myVar: 12 = 5 + 7 
` 

## قائمة كاملة لمشغلي المهام في Javascript

المشغل | بناء الجملة نسخة طويلة  
\------------------------------- | --------- | -------------  
التنازل | س = ص | س = ص  
مهمة الجمع | س + = ذ | س = س + ذ  
مهمة الطرح | س - = ذ | س = س - ص  
مهمة الضرب | س \* = ذ | س = س \* ص  
مهمة القسم س / = ذ | س = س / ص  
مهمة الباقي | x٪ = y | x = x٪ y  
مهمة الأسي | س \*\* = ذ | س = س \*\* ص  
مهمة التحول الأيسر | x << = y | x = x << y تعيين نوبة اليمين | x >> = y | x = x >> y  
تعيين غير مناسب لليمين | x >>> = y | x = x >>> y  
Bitwise و التعيين | x & = y | x = x & y  
bitwise XOR assignment | س ^ = ذ | س = س ^ ص  
bitwise OR assignment | س | = ذ | س = س | ذ

### معلومات اكثر:

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment)

[رابط MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript)