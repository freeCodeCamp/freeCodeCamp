---
title: Typeof
localeTitle: نوع من
---
## نوع من

`typeof` هي الكلمة الأساسية JavaScript التي ستقوم بإرجاع نوع متغير عند الاتصال به. يمكنك استخدام هذا للتحقق من صحة معلمات الدالة أو التحقق مما إذا تم تعريف المتغيرات. هناك استخدامات أخرى كذلك.

يعد عامل التشغيل `typeof` مفيدًا لأنه يعد طريقة سهلة للتحقق من نوع متغير في التعليمات البرمجية. هذا مهم لأن JavaScript هي [لغة مكتوبة ديناميكيًا](https://stackoverflow.com/questions/2690544/what-is-the-difference-between-a-strongly-typed-language-and-a-statically-typed) . هذا يعني أنك غير مطالب بتعيين أنواع للمتغيرات عند إنشائها. نظرًا لأن المتغير ليس مقيدًا بهذه الطريقة ، يمكن أن يتغير نوعه أثناء وقت تشغيل البرنامج.

فمثلا:

 `var x = 12345; // number 
 x = 'string'; // string 
 x = { key: 'value' }; // object 
` 

كما ترى من المثال أعلاه ، يمكن للمتغير في JavaScript تغيير الأنواع خلال تنفيذ البرنامج. يمكن أن يكون من الصعب تعقب كمبرمج ، وهذا هو المكان الذي يكون فيه عامل التشغيل `typeof` مفيدًا.

عامل التشغيل `typeof` بإرجاع سلسلة تمثل النوع الحالي للمتغير. يمكنك استخدامه عن طريق كتابة `typeof(variable)` أو `typeof variable` . بالعودة إلى المثال السابق ، يمكنك استخدامه للتحقق من نوع المتغير `x` في كل مرحلة:

 `var x = 12345; 
 console.log(typeof x) // number 
 x = 'string'; 
 console.log(typeof x) // string 
 x = { key: 'value' }; 
 console.log(typeof x) // object 
` 

هذا يمكن أن يكون مفيدا للتحقق من نوع متغير في وظيفة والاستمرار حسب الاقتضاء.

في ما يلي مثال لدالة يمكن أن تأخذ متغيرًا هو سلسلة أو رقم:

 `function doSomething(x) { 
  if(typeof(x) === 'string') { 
    alert('x is a string') 
  } else if(typeof(x) === 'number') { 
    alert('x is a number') 
  } 
 } 
` 

طريقة أخرى لمشغل `typeof` يمكن أن تكون مفيدة عن طريق التأكد من تحديد متغير قبل محاولة الوصول إليه في التعليمات البرمجية. يمكن أن يساعد هذا في منع الأخطاء في أحد البرامج التي قد تحدث في حالة محاولة الوصول إلى متغير لم يتم تعريفه.

 `function(x){ 
  if (typeof(x) === 'undefined') { 
    console.log('variable x is not defined'); 
    return; 
  } 
  // continue with function here... 
 } 
` 

قد لا يكون ناتج عامل التشغيل `typeof` دائمًا ما تتوقعه عند التحقق من وجود رقم.  
يمكن أن تتحول الأرقام إلى قيمة [NaN (ليس رقم)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) لأسباب متعددة.

 `console.log(typeof NaN); //"number" 
` 

ربما حاولت ضرب رقم مع كائن لأنك نسيت الوصول إلى الرقم داخل الكائن.

 `var x = 1; 
 var y = { number: 2 }; 
 console.log(x * y); // NaN 
 console.log(typeof (x * y)); // number 
` 

عند التحقق من وجود رقم ، لا يكفي التحقق من إخراج `typeof` لرقم ، لأن `NaN` أيضًا  
يمر هذا الاختبار.  
تحقق هذه الوظيفة من الأرقام ، ولا تسمح أيضًا لقيمة `NaN` بالمرور.

 `function isNumber(data) { 
  return (typeof data === 'number' && !isNan(data)); 
 } 
` 

حتى ظننا أن هذه طريقة تحقق مفيدة ، يجب أن نكون حذرين لأن javascript يحتوي على بعض الأجزاء الغريبة وأحدها هو نتيجة `typeof` على تعليمات معينة. على سبيل المثال ، في javascript ، هناك الكثير من الأشياء `objects` يمكنك العثور عليها فقط.

 `var x = [1,2,3,4]; 
 console.log(typeof x)  // object 
 
 console.log(typeof null)  // object 
` 

### معلومات اكثر:

[وثائق MDN لنوع](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)