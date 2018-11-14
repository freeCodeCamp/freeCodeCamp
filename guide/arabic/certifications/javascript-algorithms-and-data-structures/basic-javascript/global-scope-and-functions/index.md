---
title: Global Scope and Functions
localeTitle: النطاق العالمي والوظائف
---
## النطاق العالمي والوظائف

نطاق المتغير هو ظهوره. حيث في الرمز هي الوظيفة المتاحة؟ فيما يلي قائمة بالنطاقات المختلفة التي يمكن أن يحصل عليها المتغير.

*   **النطاق العالمي** : المتغير متاح في جميع أنحاء الكود
*   **النطاق المحلي** : متوفر في منطقة معينة فقط (على سبيل المثال فقط داخل الوظيفة)
*   **نطاق الحظر** : متاح داخل منطقة _أكثر_ تحديدًا (مثل if-statement)

مهمتك هي فهم كيفية إضافة `var` (وليس إضافة) قبل اسم المتغير ، يمكن تغيير نطاق المتغير.

عند إضافة `var` قبل اسم المتغير ، يتم تحديد نطاقه حسب مكان وضعه. مثل ذلك:

 `var num1 = 18; // Global scope 
 function fun() { 
  var num2 = 20; // Local (Function) Scope 
  if (true) { 
    var num3 = 22; // Block Scope (within an if-statement) 
  } 
 } 
` 

عندما لا تفعل ، هذه هي النتيجة:

 `num1 = 18; // Global scope 
 function fun() { 
  num2 = 20; // Global Scope 
  if (true) { 
    num3 = 22; // Global Scope 
  } 
 } 
` 

حسنًا ، إليك حل الشفرة الأساسية.

 `// Declare your variable here 
 var myGlobal = 10; 
 
 function fun1() { 
  oopsGlobal = 5; 
 
 } 
 
 // Only change code above this line 
 function fun2() { 
  var output = ""; 
  if (typeof myGlobal != "undefined") { 
    output += "myGlobal: " + myGlobal; 
  } 
  if (typeof oopsGlobal != "undefined") { 
    output += " oopsGlobal: " + oopsGlobal; 
  } 
  console.log(output); 
 } 
`