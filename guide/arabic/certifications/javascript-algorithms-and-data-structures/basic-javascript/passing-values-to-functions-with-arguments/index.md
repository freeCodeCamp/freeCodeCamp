---
title: Passing Values to Functions with Arguments
localeTitle: تمرير القيم إلى دالات مع الوسيطات
---
## تمرير القيم إلى دالات مع الوسيطات

مهمتنا هي إنشاء وظيفة لديها **معلمات** . هذه هي المدخلات التي تحدد إخراج الدالة. تضع المتابعين داخل `()` ، مثل:

 `function functionWithArgs(one, two) { 
  console.log(one + two); 
 } 
` 

لدينا الآن لإضافة رمز داخل الأقواس. مهمتنا هي إضافة `one` `two` ، وطباعة المجموع إلى وحدة التحكم. هنا هو الحل الأساسي رمز:

 `functionWithArgs(7, 3); 
 //This will console log 10. 
`