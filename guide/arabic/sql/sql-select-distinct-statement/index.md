---
title: SQL Select Distinct Statement
localeTitle: SQL حدد بيان مميز
---
## SQL حدد بيان مميز

### المقدمة

تتيح لنا هذه الكلمة الرئيسية الحصول على قوائم بالقيم الفريدة في عمود. سيوضح هذا الدليل ذلك.

### عرض كامل للبيانات في جدول الطالب

 `USE fcc_sql_guides_database; 
 SELECT studentID, FullName, sat_score, programOfStudy, rcd_Created, rcd_Updated FROM student; 
` 

 `+-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 | studentID | FullName               | sat_score | programOfStudy   | rcd_Created         | rcd_Updated         | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 |         1 | Monique Davis          |       400 | Literature       | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         2 | Teri Gutierrez         |       800 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         3 | Spencer Pautier        |      1000 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         4 | Louis Ramsey           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         5 | Alvin Greene           |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         6 | Sophie Freeman         |      1200 | Programming      | 2017-08-16 15:34:50 | 2017-08-16 15:34:50 | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         8 | Donald D. Chamberlin   |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 |         9 | Raymond F. Boyce       |      2400 | Computer Science | 2017-08-16 15:35:33 | 2017-08-16 15:35:33 | 
 +-----------+------------------------+-----------+------------------+---------------------+---------------------+ 
 9 rows in set (0.00 sec) 
` 

### الحصول على قائمة من مجالات الدراسة

 `SELECT DISTINCT programOfStudy FROM student; 
` 

 `+------------------+ 
 | programOfStudy   | 
 +------------------+ 
 | Literature       | 
 | Programming      | 
 | Computer Science | 
 +------------------+ 
 3 rows in set (0.00 sec) 
` 

كما هو الحال مع كل هذه الأشياء SQL هناك أكثر من ذلك بكثير من ما هو موجود في هذا الدليل التمهيدي.

آمل أن يمنحك هذا على الأقل ما يكفي للبدء.

يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.