---
title: SQL not Operator
localeTitle: SQL لا المشغل
---
## SQL لا المشغل

يمكنك استخدام عامل التشغيل `NOT` في `WHERE` من `SELECT` . يمكنك استخدامه عندما تريد تحديد شرط غير صحيح.

في ما يلي مثال يختار جميع الأشخاص غير الذكور:

 `SELECT Id, Name, DateOfBirth, Gender 
 FROM Person 
 WHERE NOT Gender = "M" 
`