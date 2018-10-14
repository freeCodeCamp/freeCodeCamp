---
title: Write Concise Object Literal Declarations Using Simple Fields
localeTitle: كتابة تعريفات كائن حرفي باستخدام حقول بسيطة
---
## كتابة تعريفات كائن حرفي باستخدام حقول بسيطة

هنا ، نحن مكلفون بإرجاع كائن يقبل معلمات الدالة كخصائصها.

# تلميح 1:

تخلص من النقطتين ، والكلمات المكررة.

## تنبيه المفسد - الحل إلى الأمام

## حل

 `const createPerson = (name, age, gender) => { 
  "use strict"; 
  // change code below this line 
  return { 
    name, 
    age, 
    gender 
  }; 
  // change code above this line 
 }; 
`