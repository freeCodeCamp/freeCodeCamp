---
title: SQL Delete Statement
localeTitle: SQL حذف بيان
---
## SQL حذف بيان

لحذف سجل في جدول تستخدم العبارة `DELETE` .

كن حذرا. يمكنك حذف جميع سجلات الجدول أو مجرد عدد قليل. استخدم شرط `WHERE` لتحديد السجلات التي تريد حذفها. الصيغة هي:

 `DELETE FROM table_name 
 WHERE condition; 
` 

إليك مثال على الحذف من الجدول Person the record with Id 3:

 `DELETE FROM Person 
 WHERE Id = 3; 
` 

باستخدام DELETE لإزالة كافة السجلات من جدول محدد

 `DELETE * FROM Person 
 ; 
` 

أو اعتمادًا على RDBMS الخاص بك ، يمكنك استخدام عبارة TRUNCATE TABLE التي تقوم بحذف كافة السجلات من جدول ، كما قد تسمح أو لا تسمح بالتراجع طبقًا لـ RDBMS الخاص بك. DELETE هو DML و TRUNCATE هو DDL.

 `TRUNCATE TABLE Person; 
`