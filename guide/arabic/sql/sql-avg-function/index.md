---
title: SQL Avg Function
localeTitle: دالة Avg SQL
---
## دالة SQL متوسط ​​(AVG)

"Average" هي دالة تجميع (تجميع حسب). يتم استخدامه لحساب متوسط ​​عمود رقمي من مجموعة الصفوف التي تم إرجاعها بواسطة عبارة SQL.

هنا هو بناء الجملة لاستخدام الوظيفة:

 `select groupingField, avg(num_field) 
 from table1 
 group by groupingField 
` 

إليك مثال على ذلك باستخدام جدول الطالب:

 `select studentID, FullName, avg(sat_score) 
 from student 
 group by studentID, FullName; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/avg_function01.JPG?raw=true)