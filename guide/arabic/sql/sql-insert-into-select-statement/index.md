---
title: SQL Insert into Select Statement
localeTitle: إدراج SQL في تحديد البيان
---
## إدراج SQL في تحديد البيان

يمكنك إدراج سجلات في جدول باستخدام البيانات المخزنة بالفعل في قاعدة البيانات. هذه ليست سوى نسخة من البيانات ولا تؤثر على جدول المنشأ.

يجمع `INSERT INTO SELECT` بين `INSERT INTO` و `SELECT` ، ويمكنك استخدام أي شروط تريدها. الصيغة هي:

 `INSERT INTO table2 (column1, column2, column3, ...) 
 SELECT column1, column2, column3, ... 
 FROM table1 
 WHERE condition; 
` 

هنا مثال يحتذى به في الجدول الشخص كل الطلاب الذكور من الجدول الطلاب.

 `INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 SELECT Id, Name, DateOfBirth, Gender 
 FROM Students 
 WHERE Gender = 'M' 
`