---
title: SQL Replace VIEW Statement
localeTitle: SQL استبدال بيان VIEW
---
## SQL استبدال بيان VIEW

## المقدمة

A View هو كائن قاعدة بيانات يقدم البيانات من جدول واحد أو أكثر. يمكن استخدام نفس عبارة SQL المستخدمة لإنشاء طريقة عرض لاستبدال طريقة عرض موجودة.

سيعمل هذا الدليل على تحديث (استبدال) العرض الحالي "programming-students-v" بواحد مختلف قليلاً وله اسم مختلف.

نصيحة الأمان: احرص دائمًا على إجراء نسخ احتياطي للمخطط قبل إجراء تغييرات عليه.

### Sytax العام

 `CREATE OR REPLACE VIEW view_name AS 
 SELECT column1, column2, ... 
 FROM table_name 
 WHERE condition; 
` 

### يستخدم SQL لإنشاء العرض والبيانات الحالية

 ``create view `programming-students-v` as 
 select FullName, programOfStudy 
 from student 
 where programOfStudy = 'Programming'; 
`` 

 ``select * from `programming-students-v`; 
`` 

البيانات الحالية:

 `+-----------------+----------------+ 
 | FullName        | programOfStudy | 
 +-----------------+----------------+ 
 | Teri Gutierrez  | Programming    | 
 | Spencer Pautier | Programming    | 
 | Louis Ramsey    | Programming    | 
 | Alvin Greene    | Programming    | 
 | Sophie Freeman  | Programming    | 
 +-----------------+----------------+ 
 5 rows in set (0.00 sec) 
` 

قائمة من وجهات النظر الحالية:

 `SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
` 

 `+-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
` 

### استبدال العرض

 ``create or replace view `programming-students-v` as 
 select FullName, programOfStudy, sat_score 
 from student 
 where programOfStudy = 'Programming'; 
`` 

 ``select * from `programming-students-v`; 
`` 

ملاحظة: تعرض طريقة العرض الآن sat\_score.

 `+-----------------+----------------+-----------+ 
 | FullName        | programOfStudy | sat_score | 
 +-----------------+----------------+-----------+ 
 | Teri Gutierrez  | Programming    |       800 | 
 | Spencer Pautier | Programming    |      1000 | 
 | Louis Ramsey    | Programming    |      1200 | 
 | Alvin Greene    | Programming    |      1200 | 
 | Sophie Freeman  | Programming    |      1200 | 
 +-----------------+----------------+-----------+ 
` 

ملاحظة: قائمة وجهات النظر لم تتغير ، يتم استبدال وجهة نظرنا.

 `mysql>  SHOW FULL TABLES IN fcc_sql_guides_database WHERE TABLE_TYPE LIKE 'VIEW'; 
 +-----------------------------------+------------+ 
 | Tables_in_fcc_sql_guides_database | Table_type | 
 +-----------------------------------+------------+ 
 | programming-students-v            | VIEW       | 
 | students-contact-info_v           | VIEW       | 
 | students_dropme_v                 | VIEW       | 
 +-----------------------------------+------------+ 
 3 rows in set (0.00 sec) 
` 

\* كما هو الحال مع جميع هذه الأشياء SQL هناك أكثر من ذلك بكثير من ما هو موجود في هذا الدليل التمهيدي. آمل أن يمنحك هذا على الأقل ما يكفي للبدء. يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.