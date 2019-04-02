---
title: Free Code Camp JavaScript Style Guide
localeTitle: الحر رمز مخيم جافاسكريب دليل الاسلوب
---
أو كيف يكتب الناس الباردون جافا سكريبت.

## المسافة البادئة

استخدم دومًا فضاءان  
لا علامات التبويب الصلبة ، من أي وقت مضى. لا حقا ، فقط لا تفعل ذلك.

## الأقواس المعقوفة

استخدم الأقواس المعقوفة دائمًا عند استخدام الكلمات الرئيسية `if/else/else if` . هذا يمنع الكثير من الغموض ويمنع الأخطاء النحوية في بعض حالات الحواف.

سيئة:

 `if (foo) bar(); 
` 

حسن:

 `if (foo) { bar(); } 
` 

## الأقواس مجعد في كل مكان!

الفضاء بعد `function` الكلمة الرئيسية ، ما عدا في الوظائف المجهولة

حسن:

 `function foo() { 
 } 
 
 var foo = function() { 
  // ... 
 }; 
` 

سيئة:

 `function foo () 
 { 
  // ... 
 } 
 
 var foo = function () { 
  // ... 
 }; 
` 

## تعليقات

*   لا تعليقات مضمنة
*   مساحة واحدة بعد `//`
*   لا تستخدم تعليقًا متعدد الأسطر `/* */` ، فإننا نحتفظ به للاستخدام مع jsDocs.

## الكلمات الدالة

*   الفضاء على الفور بعد إذا ، آخر ، في حين ، وما إلى ذلك
*   يجب أن يكون الدعامات المستديرة المفتوحة دائماً على نفس الخط.

حسن:

 `if (true) { 
 // do the thing 
 } 
` 

سيئة:

 `if(true) 
 { 
 // do the thing 
 } 
` 

## آخر

تجنب آخر و "في وقت مبكر". في جافا سكريبت غالبا ما يكون هناك الكثير من المسافات البادئة (عادة عند التعامل مع رمز التزامن وتسمية "callback hell"). يجب أن يتم أي شيء يمكنك القيام به تقليل عدد المسافات البادئة. شيء واحد هو [تجنب آخر](http://blog.timoxley.com/post/47041269194/avoid-else-return-early) الكلمة.

هذا أيضا له الأثر الجانبي لجعل نظافة الرمز وأسهل للقراءة.

سيئة:

 `someAsynFunc(function(err, data) { 
  if (err) { 
    callback(err); 
  } else { 
    // do stuff with data 
  } 
 }); 
` 

حسن:

 `someAsynFunc(function(err, data) { 
  if (err) { 
    return callback(err); 
  } 
  // do stuff with data 
  // saves one indent 
 }); 
` 

## سلاسل طويلة

يجب أن تكون السلاسل الطويلة متعددة الأسطر في أحد نموذجين:

 `var longString = 
  'long strings should ' + 
  'be in this form, with the ' + 
  'operator ending the line'; 
 
 var foo = 'bar'; 
 
 var longString = [ 
  'long strings with variables such as ', 
  foo, 
  'should ', 
  'be in this form, an array of strings ', 
  'that are joined with the join array instance method', 
 ].join(''); 
` 

…المزيد قادم