---
title: SQL or Operator
localeTitle: SQL أو المشغل
---
## SQL أو المشغل

يمكنك استخدام عامل التشغيل `OR` في `WHERE` من `SELECT` . يمكنك استخدامه عندما تريد تحديد سجل يفي بواحد من الشروط في عبارة `OR` على الأقل.

في ما يلي مثال يحدد جميع السجلات من جدول "الأشخاص" الذين هم إما ذكور أو الذين لديهم اسم "ماري":

 `SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” OR Name = “Mary” 
` 

يمكنك دمج عوامل تشغيل أخرى في `WHERE` (استخدم الأقواس للإشارة إلى ترتيب العمليات) كما في هذا المثال:

 `SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE Gender = “M” AND (Name = “Peter” OR Name = “John”) 
` 

يختار هذا المثال جميع السجلات التي يكون فيها الجنس "M" والاسم "Peter" ، وكذلك الجنس حيث يكون "M" والاسم "John".