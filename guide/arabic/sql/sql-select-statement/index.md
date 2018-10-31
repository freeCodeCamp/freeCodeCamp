---
title: SQL Select Statement
localeTitle: تحديد بيان SQL
---
## تحديد بيان SQL

## اختر من جمل

عادةً ما يكون جزء SELECT من استعلام لتحديد أعمدة البيانات المراد إظهارها في النتائج. هناك أيضًا خيارات يمكنك تطبيقها لعرض البيانات التي لا تمثل عمودًا في الجدول.

يوضح هذا المثال ثلاثة أعمدة محددة من جدول "الطالب" وعمود واحد محسوب. تقوم قاعدة البيانات بتخزين الطالب ID ، و FirstName ، و LastName للطالب. يمكننا دمج الأعمدة الأول واسم العائلة لإنشاء العمود المحتسب لـ FullName.

 `select studentID, FirstName, LastName, FirstName + ' ' + LastName as FullName 
 from student; 
` 

 `+-----------+-------------------+------------+------------------------+ 
 | studentID | FirstName         | LastName   | FullName               | 
 +-----------+-------------------+------------+------------------------+ 
 |         1 | Monique           | Davis      | Monique Davis          | 
 |         2 | Teri              | Gutierrez  | Teri Gutierrez         | 
 |         3 | Spencer           | Pautier    | Spencer Pautier        | 
 |         4 | Louis             | Ramsey     | Louis Ramsey           | 
 |         5 | Alvin             | Greene     | Alvin Greene           | 
 |         6 | Sophie            | Freeman    | Sophie Freeman         | 
 |         7 | Edgar Frank "Ted" | Codd       | Edgar Frank "Ted" Codd | 
 |         8 | Donald D.         | Chamberlin | Donald D. Chamberlin   | 
 |         9 | Raymond F.        | Boyce      | Raymond F. Boyce       | 
 +-----------+-------------------+------------+------------------------+ 
 9 rows in set (0.00 sec) 
` 

\* كما هو الحال مع جميع هذه الأشياء SQL هناك أكثر من ذلك بكثير من ما هو موجود في هذا الدليل التمهيدي.

آمل أن يمنحك هذا على الأقل ما يكفي للبدء.

يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.