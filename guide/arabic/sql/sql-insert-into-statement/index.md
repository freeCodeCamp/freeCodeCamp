---
title: SQL Insert into Statement
localeTitle: إدراج SQL في بيان
---
## إدراج SQL في بيان

لإدراج سجل في جدول ، استخدم بيان `INSERT INTO` .

يمكنك القيام بذلك بطريقتين ، إذا أردت إدراج قيم في بعض الأعمدة فقط ، فيجب عليك إدراج أسمائها بما في ذلك جميع الأعمدة الإلزامية. الصيغة هي:

 `INSERT INTO table_name (column1, column2, column3, ...) 
 VALUES (value1, value2, value3, ...); 
` 

والطريقة الأخرى هي إدراج قيم لجميع الأعمدة في الجدول ، وليس من الضروري تحديد أسماء الأعمدة. الصيغة هي:

 `INSERT INTO table_name 
 VALUES (value1, value2, value3, ...); 
` 

في ما يلي مثال على إدراج سجل في الجدول الشخص بطريقتين:

 `INSERT INTO Person 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
` 

و

 `INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'); 
` 

تدعم بعض إصدارات SQL (على سبيل المثال ، MySQL) إدراج صفوف متعددة في وقت واحد. فمثلا:

 `INSERT INTO Person(Id, Name, DateOfBirth, Gender) 
 VALUES (1, 'John Lennon', '1940-10-09', 'M'), (2, 'Paul McCartney', '1942-06-18', 'M'), 
 (3, 'George Harrison', '1943-02-25', 'M'), (4, 'Ringo Starr', '1940-07-07', 'M') 
` 

لاحظ أن الاستعلام الأصلي بأكمله لا يزال قائماً - نحن ببساطة نضيف على صفوف البيانات المشفرة بواسطة paranthesis ويفصل بينها بفواصل.