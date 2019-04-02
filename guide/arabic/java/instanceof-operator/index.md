---
title: instanceof Operator
localeTitle: exampleof المشغل
---
# `instanceof` المشغل

يسمح لك عامل التشغيل `instanceof` بالتحقق من صلاحية علاقة `IS A` . إذا لم نكن متأكدين من ذلك في أي وقت من الأوقات ، ونريد التحقق من ذلك في وقت التشغيل ، فيمكننا تنفيذ ما يلي:

 ``//assuming vehicle is an instance of Class `Car` the expression inside the 'if' will  return true 
 if(vehicle instanceof Car){ 
    //do something if vehicle is a Car 
 } 
`` 

**ملاحظة** : إذا قمت بتطبيق عامل التشغيل instanceof مع أي متغير له قيمة فارغة ، فسوف يقوم بإرجاع false.