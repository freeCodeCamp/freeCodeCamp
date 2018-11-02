---
title: SQL Update Query
localeTitle: استعلام تحديث SQL
---
## استعلام تحديث SQL

### ما الذي يمكن أن يفعله استعلام التحديث

يعطي استعلام تحديث للمبرمج DBA أو SQL باستخدام القدرة على تحديث العديد من السجلات بواسطة أمر واحد.

هام تلميح السلامة! دائما نسخة احتياطية من ما أنت على وشك تغييره قبل تغييره!

هذا الدليل سوف:

*   إضافة حقل جديد إلى جدول الطالب
*   اختبر المنطق لتحديث هذا الحقل من خلال عنوان البريد الإلكتروني المخصص للمدرسة
*   تحديث الحقل الجديد.

هذا هو جدول الطلاب ونحن نبدأ هذه العملية

 `SELECT * FROM student; 
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

### تغيير الجدول وإضافة حقل جديد

 ``    ALTER TABLE `fcc_sql_guides_database`.`student` 
    ADD COLUMN `schoolEmailAdr` VARCHAR(125) NULL AFTER `programOfStudy`; 
`` 

يتم تنفيذ جدول الطالب بعد التعديل.

 `mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+----------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr | 
 +------------------------+-----------+------------------+----------------+ 
 | Monique Davis          |       400 | Literature       | NULL           | 
 | Teri Gutierrez         |       800 | Programming      | NULL           | 
 | Spencer Pautier        |      1000 | Programming      | NULL           | 
 | Louis Ramsey           |      1200 | Programming      | NULL           | 
 | Alvin Greene           |      1200 | Programming      | NULL           | 
 | Sophie Freeman         |      1200 | Programming      | NULL           | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | NULL           | 
 | Donald D. Chamberlin   |      2400 | Computer Science | NULL           | 
 | Raymond F. Boyce       |      2400 | Computer Science | NULL           | 
 +------------------------+-----------+------------------+----------------+ 
 9 rows in set (0.00 sec) 
` 

### اختبار المنطق (خطوة مهمة جدا!)

 `SELECT FullName, instr(FullName," ") AS firstSpacePosition, 
 concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") AS schoolEmail 
 FROM student; 
` 

 `+------------------------+--------------------+------------------------+ 
 | FullName               | firstSpacePosition | schoolEmail            | 
 +------------------------+--------------------+------------------------+ 
 | Monique Davis          |                  8 | Monique@someSchool.edu | 
 | Teri Gutierrez         |                  5 | Teri@someSchool.edu    | 
 | Spencer Pautier        |                  8 | Spencer@someSchool.edu | 
 | Louis Ramsey           |                  6 | Louis@someSchool.edu   | 
 | Alvin Greene           |                  6 | Alvin@someSchool.edu   | 
 | Sophie Freeman         |                  7 | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |                  6 | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |                  7 | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |                  8 | Raymond@someSchool.edu | 
 +------------------------+--------------------+------------------------+ 
 9 rows in set (0.00 sec) 
` 

_ملاحظة حول concat (): في MySQL يتم استخدام هذا الأمر في سلاسل مدمجة ، وليس كذلك في إصدارات SQL الأخرى (راجع الدليل). في هذا الاستخدام يعمل مثل هذا: يتم دمج السلسلة الفرعية للحقل FullName مع عدم تضمين المساحة الأولى مع "@ someSchool.edu". في العالم الحقيقي سيكون هذا أكثر تعقيدًا وستحتاج إلى التأكد من أن عنوان البريد الإلكتروني فريد من نوعه._

### القيام بالتحديث

سنتظاهر بأن هذا ما نريده ونحدّث الجدول بهذه المعلومات:

 `UPDATE student SET schoolEmailAdr = concat(substring(FullName,1,instr(FullName," ")-1),"@someSchool.edu") 
 WHERE schoolEmailAdr is NULL; 
` 

نجاح!

 `mysql> SELECT FullName, sat_score, programOfStudy, schoolEmailAdr FROM student; 
 +------------------------+-----------+------------------+------------------------+ 
 | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +------------------------+-----------+------------------+------------------------+ 
 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
` 

كما هو الحال مع كل هذه الأشياء SQL هناك أكثر من ذلك بكثير من ما هو موجود في هذا الدليل التمهيدي.

آمل أن يمنحك هذا على الأقل ما يكفي للبدء.

يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.