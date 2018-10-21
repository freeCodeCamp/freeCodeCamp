---
title: Global Variables
localeTitle: المتغيرات العالمية
---
يتم تعريف المتغيرات العالمية خارج وظيفة لسهولة الوصول في جميع أنحاء البرنامج، في حين يتم تخزين المتغيرات المحلية داخل دالة باستخدام `var` للاستخدام فقط في تلك الوظيفة في [نطاق](https://developer.mozilla.org/en-US/docs/Glossary/Scope) . إذا قمت بتعريف متغير بدون استخدام `var` ، حتى لو كان داخل دالة ، فسيظل ينظر إليه على أنه عالمي:

 `var x = 5; //global 
 function someThing(y) { 
 var z = x + y; 
 console.log(z); 
 } 
 
 function someThing(y) { 
 x = 5; //still global! 
 var z = x + y; 
 console.log(z); 
 } 
 
 
 function someThing(y) { 
 var x = 5; //local 
 var z = x + y; 
 console.log(z); 
 } 
` 

المتغير الشامل هو أيضًا كائن في النطاق الحالي ، مثل نافذة المتصفح:

 `var dog = “Fluffy”; 
 console.log(dog); //Fluffy; 
 
 var dog = “Fluffy”; 
 console.log(window.dog); //Fluffy 
` 

إنها أفضل الممارسات لتقليل المتغيرات العالمية. نظرًا لأنه يمكن الوصول إلى المتغير في أي مكان في البرنامج ، فقد يتسبب ذلك في حدوث سلوك غريب.

المراجع:

*   [var -Javascript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
*   [أنت لا تعرف JavaScript: النطاقات والإغلاق](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

معلومات اضافية:

*   [JavaScript Best Practices: Avoid Globals](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)

## \* [ما الفرق بين متغير شامل وإطار window.variable في javascript؟](https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript)

نطاق متغيرات جافا سكريبت إما عالمي أو محلي. يتم الإعلان عن المتغيرات العالمية خارج الوظيفة وقيمتها قابلة للوصول / للتغيير في جميع أنحاء البرنامج.

يجب دائمًا استخدام **var** لإعلام المتغيرات الخاصة بك (لإجراء محليًا) وإلا فسيتم تثبيتها على GLOBALLY

كن حذراً مع المتغيرات العالمية لأنها محفوفة بالمخاطر. معظم الوقت يجب عليك استخدام إغلاق لإعلان المتغيرات الخاصة بك. مثال:

 `    (function(){ 
      var myVar = true; 
    })(); 
` 

#### معلومات اكثر:

*   [JavaScript Best Practices: Avoid Globals](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)
*   [المتغيرات العالمية سيئة](http://c2.com/cgi/wiki?GlobalVariablesAreBad)
*   [MDN - المتغيرات العامة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)