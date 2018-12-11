---
title: Testing Objects for Properties
localeTitle: اختبار كائنات للعقارات
---
## اختبار كائنات للعقارات

هنا هو المثال:

 `// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
 
 function checkObj(checkProp) { 
  // Your Code Here 
 
  return "Change Me!"; 
 } 
 
 // Test your code by modifying these values 
 checkObj("gift"); 
` 

وإليك الحل:

نحن لا نغير أي شيء هنا:

 `// Setup 
 var myObj = { 
  gift: "pony", 
  pet: "kitten", 
  bed: "sleigh" 
 }; 
` 

كذلك ، في الجسم من الدالة التي نستخدمها. `.hasOwnProperty(propname)` للكائنات لتحديد ما إذا كان هذا الكائن لديه اسم خاصية معينة. `if/else` العبارة `if/else` ذات القيم المنطقية ستساعدنا في هذا:

 ``function checkObj(checkProp) { 
  // Your Code Here 
  if (myObj.hasOwnProperty(checkProp) == true) { 
    return myObj[checkProp]; 
  } 
  else { 
 ``` 
 
 and change the value of `return` in `else` statement: 
`` 

جافا سكريبت العودة "غير موجود" } }

 ``Now, you can change `checkObj` values: 
`` 

جافا سكريبت // اختبار التعليمة البرمجية الخاصة بك عن طريق تعديل هذه القيم checkObj ( "هدية")؛

 `Here's a full solution: 
` 

جافا سكريبت وظيفة checkObj (checkProp) { // رمزك هنا if (myObj.hasOwnProperty (checkProp) == true) { return myObj \[checkProp\] ، } else { العودة "غير موجود" } } // اختبار التعليمة البرمجية الخاصة بك عن طريق تعديل هذه القيم checkObj ( "هدية")؛ \`\` \`