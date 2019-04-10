---
title: Immediately Invoked Functions Expressions(IIFEs)
localeTitle: تعبيرات الوظائف المستحثة على الفور (IIFEs)
---
## بيان الوظيفة

إن الدالة التي تم إنشاؤها باستخدام تعريف الدالة هي كائن دالة ولها كل خصائص وأساليب وسلوك كائنات الدالة. مثال:

 `  function statement(item){ 
    console.log('Function statement example '+ item); 
  } 
` 

## وظيفة التعبير

يشبه تعبير الدالة الدالة الدالة باستثناء أنه يمكن حذف اسم الدالة لإنشاء وظائف مجهولة. مثال:

 `  var expression = function (item){ 
    console.log('Function expression example '+ item); 
  } 
` 

## تعبيرات على الفور استدعاء التعابير

بمجرد إنشاء الدالة ، فإنها تستدعي أنها لا تحتاج إلى الاستدعاء صراحة. في المثال أدناه ، سوف يقوم iife المتغير بتخزين سلسلة يتم إرجاعها بواسطة تنفيذ الدالة.

 `  var iife = function (){ 
    return 'Immediately Invoked Function Expressions(IIFEs) example '; 
  }(); 
  console.log(iife); // 'Immediately Invoked Function Expressions(IIFEs) example ' 
` 

يجب أن ينتهي البيان قبل IIFE دائمًا بـ: أو سوف يرمي خطأ.

**مثال سيء** :

 `var x = 2 //no semicolon, will throw error 
 (function(y){ 
  return x; 
 })(x); //Uncaught TypeError: 2 is not a function 
` 

## لماذا استخدام تعبيرات الاستدلال على الفور؟

 `  (function(value){ 
    var greet = 'Hello'; 
    console.log(greet+ ' ' + value); 
  })('IIFEs'); 
` 

في المثال أعلاه عند تنفيذ مشغل javascript فوق الكود ، سيؤدي إلى إنشاء سياق تنفيذ عمومي عندما يرى الكود وإنشاء كائن دالة في الذاكرة لـ IIFE. وعندما تصل إلى السطر `46` بسبب الوظيفة التي يتم استدعاؤها ، يتم إنشاء سياق تنفيذ جديد على الطاير ، وبذلك ينتقل المتغير المتحمس إلى سياق تنفيذ الوظيفة هذا وليس في السياق العالمي ، وهذا ما يجعله فريدًا. `This ensures that code inside IIFE does not interfere with other code or be interfered by another code` ومن ثم تكون الشفرة آمنة.

#### معلومات اكثر

[تعبير الدالة المستدعى على الفور على ويكيبيديا](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) [ما الذي تفعله الفاصلة المنقوطة الرائدة في مكتبات JavaScript؟](https://stackoverflow.com/questions/1873983/what-does-the-leading-semicolon-in-javascript-libraries-do)