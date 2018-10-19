---
title: New String Functions
localeTitle: وظائف السلسلة الجديدة
---## وظائف السلسلة الجديدة

بعد أربع وظائف تضاف جديدة إلى سلاسل في ES6.

*   ابدا ب
*   endsWith
*   يشمل
*   كرر

## ابدا ب:

هذه وظيفة حساسة لحالة الأحرف تساعدنا على معرفة ما إذا كانت سلسلة معينة تبدأ ببعض السلسلة الفرعية.

يبدأ في استخدام الوسيطة الاختيارية الثانية المسماة الموضع الذي يمكننا استخدامه في حالة ما إذا كنا نريد تخطي عدد معين من الأحرف من بداية السلسلة قبل البحث.

 `const str ='Rachna'; 
 str.startsWith('Rad') //false 
 str.startsWith('ra') //false as it is case sensitive 
 str.startsWith('Ra') //true 
 str.startsWith('ch',2) //true as we are searching from the second position 
 str.startsWith('ch',3) //false 
` 

## endsWith

هذه وظيفة حساسة لحالة الأحرف تساعدنا على معرفة ما إذا كانت سلسلة معينة تنتهي ببعض السلسلة الفرعية.

ينتهي الأمر مع وسيطة اختيارية ثانية تسمى endPosition والتي يمكننا استخدامها لتضمين عدد الأحرف قبل البحث.

 `const city= 'Delhi'; 
 city.endsWith('Hi'); //false as it is case sensitive 
 city.endsWith('hi');//true 
 city.endsWith('l',3);//true - include only first three characters before searching 
 city.endsWith('l',4);//false 
` 

## يشمل

يتضمن الدالة أيضًا دالة تحسس حالة تتحقق مما إذا كانت searchString موجودة في أي مكان في السلسلة.

 `const name='John Doe'; 
 name.includes('do'); //false 
 name.includes('D'); //true 
 name.includes('Do'); //true 
` 

## كرر

يتيح لنا تكرار إجراء سلسلة وتكرارها عدة مرات.

 `const str = 'This is repeated'; 
 str.repeat(3); //"This is repeatedThis is repeatedThis is repeated" 
` 

يمكن استخدام وظيفة تكرار لوحة السلسلة من اليسار مع عدد من المسافات.