---
title: SQL Update Statement
localeTitle: SQL Update Statement
---
## SQL Update Statement

لتحديث سجل في جدول ، تستخدم `UPDATE` .

كن حذرا. يمكنك تحديث جميع سجلات الجدول أو عدد قليل فقط. استخدم شرط `WHERE` لتحديد السجلات التي تريد تحديثها. من الممكن تحديث عمود واحد أو أكثر في كل مرة. الصيغة هي:

 `UPDATE table_name 
 SET column1 = value1, 
    column2 = value2, ... 
 WHERE condition; 
` 

في ما يلي مثال على تحديث اسم السجل الذي يحمل الرقم التعريفي 4:

 `UPDATE Person 
 SET Name = “Elton John” 
 WHERE Id = 4; 
` 

يمكنك أيضًا تحديث الأعمدة في جدول باستخدام القيم من الجداول الأخرى. استخدم جملة `JOIN` للحصول على البيانات من جداول متعددة. الصيغة هي:

 `UPDATE table_name1 
 SET table_name1.column1 = table_name2.columnA 
    table_name1.column2 = table_name2.columnB 
 FROM table_name1 
 JOIN table_name2 ON table_name1.ForeignKey = table_name2.Key 
` 

في ما يلي مثال على تحديث مدير جميع السجلات:

 `UPDATE Person 
 SET Person.Manager = Department.Manager 
 FROM Person 
 JOIN Department ON Person.DepartmentID = Department.ID 
`