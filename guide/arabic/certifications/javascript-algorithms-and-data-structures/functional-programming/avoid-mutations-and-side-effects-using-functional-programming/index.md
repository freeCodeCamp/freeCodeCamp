---
title: Avoid Mutations and Side Effects Using Functional Programming
localeTitle: تجنب الطفرات والآثار الجانبية باستخدام البرمجة الوظيفية
---
## تجنب الطفرات والآثار الجانبية باستخدام البرمجة الوظيفية

### شرح المشكلة

ملء رمز لوظيفة `incrementer` بحيث تقوم بإرجاع قيمة المتغير العالمي `fixedValue` بنسبة واحد. `fixedValue` يجب ألا يتغير ، بغض النظر عن عدد المرات التي يطلق عليها الدالة `incrememter` .

### تلميح 1

يؤدي استخدام عامل الزيادة ( `++` ) على `fixedValue` إلى `fixedValue` ، مما يعني أنها لن تعد تشير إلى نفس القيمة التي تم تعيينها لها.

### حل:

 `// the global variable 
 var fixedValue = 4; 
 
 function incrementer () { 
  // Add your code below this line 
  return fixedValue + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(); // Should equal 5 
 console.log(fixedValue); // Should print 4 
`