---
title: Logical Operators
localeTitle: العوامل المنطقية
---
# العوامل المنطقية

تقارن المعاملات المنطقية القيم المنطقية وترجع استجابة منطقية. هناك نوعان من عوامل التشغيل المنطقية - منطقي AND و OR المنطقية. غالبًا ما يتم كتابة هؤلاء المشغلين كـ && لـ AND و || لـ OR.

#### منطقي و (&&)

عامل التشغيل AND يقارن بين تعبيرين. إذا كان التقييم الأول هو ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) ، [فستعرض](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) العبارة قيمة التعبير الثاني. إذا كان التقييم الأول هو ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) ، [فستعرض](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) العبارة قيمة التعبير الأول.

عند تضمين قيم منطقية فقط (سواء كانت `true` أو `false` ) ، فإنها ترجع true فقط إذا كان كلا التعبيرين صحيحين. إذا كان تعبير واحد أو كلاهما غير صحيح ، فستظهر العبارة بالكامل false.

 `true && true //returns  the second value, true 
 true && false //returns the second value, false 
 false && false //returns the first value, false 
 123 && 'abc' // returns the second value, 'abc' 
 'abc' && null //returns the second value, null 
 undefined && 'abc' //returns the first value, undefined 
 0 && false //returns the first value, 0 
` 

#### منطقية أو (||

عامل التشغيل OR يقارن بين تعبيرين. إذا كان التقييم الأول هو "falsy" ، فستعرض العبارة قيمة التعبير الثاني الثاني. إذا كان التقييم الأول هو "صوابي" ، فستعرض العبارة قيمة التعبير الأول.

عند تضمين قيم منطقية فقط (سواء كانت `true` أو `false` ) ، فإنها ترجع true إذا كان التعبير صحيحًا. يمكن أن يكون كلا التعبيرين صحيحًا ، لكن هناك حاجة إلى تعبير واحد فقط للحصول على النتيجة الحقيقية.

 `true || true //returns the first value, true 
 true || false //returns the first value, true 
 false || false //returns the second value, false 
 123 || 'abc' // returns the first value, 123 
 'abc' || null //returns the first value, 'abc' 
 undefined || 'abc' //returns the second value, 'abc' 
 0 || false //returns the second value, false 
` 

#### تقييم دائرة قصر

&& و || تتصرف كمشغلي ماس كهربائى.

في حالة AND المنطقية ، إذا كان المعامل الأول يرجع خطأ ، لا يتم تقييم المعامل الثاني ويتم إرجاع المعامل الأول.

في حالة OR المنطقية ، إذا كانت القيمة الأولى ترجع true ، فلن يتم تقييم القيمة الثانية أبداً ويتم إرجاع المعامل الأول.

#### منطقي NOT (!)

لا يقوم المشغل NOT بعمل أي مقارنة مثل مشغلي AND و OR.More يتم تشغيله فقط على 1 معامل.

و "!" (علامة تعجب) يستخدم لتمثيل عامل التشغيل NOT.

###### استخدام المشغلين NOT

1.  تحويل التعبير إلى منطقي.
2.  إرجاع معكوس القيمة المنطقية التي تم الحصول عليها في الخطوة الأخيرة.

 `var spam = 'rinki'; //spam may be equal to any non empty string 
 var booSpam = !spam; 
 /*returns false 
  since when a non-empty string when converted to boolean returns true 
  inverse of which is evaluated to false. 
 */ 
 
 var spam2 = ''; //spam2 here is equal to empty string 
 var booSpam2 = !spam2; 
 /*returns true 
  since when a empty string when converted to boolean returns false 
  inverse of which is evaluated to true. 
 */ 
` 

#### نصائح:

كلا المشغلين المنطقيين سيعودون قيمة آخر تعبير تم تقييمه. فمثلا:

 `"cat" && "dog" //returns "dog" 
 "cat" && false //returns false 
 0 && "cat"  //returns 0 (which is a falsy value) 
 
 "cat" || "dog" //returns "cat" 
 "cat" || false //returns "cat" 
 0 || "cat" //returns "cat" 
` 

لاحظ أن where `&&` تُرجع القيمة الأولى ، `||` يعيد القيمة الثانية والعكس صحيح.

#### معلومات اكثر:

*   [جدول جافا سكريبت الحقيقة](https://guide.freecodecamp.org/javascript/truth-table)
    
*   [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Logical_Operators)