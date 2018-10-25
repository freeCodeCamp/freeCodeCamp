---
title: SQL Union Operator
localeTitle: مشغل اتحاد SQL
---
## مشغل اتحاد SQL

### وصف

بالنسبة لهذا الدليل ، سنناقش قسم UNION Operator في عبارة SQL.

يتم استخدام مشغل UNION لدمج نتائج عبارات التحديد المتعددة في مجموعة نتائج واحدة.

يجب أن تحتوي عبارات SQL على نفس عدد الأعمدة في "بيان التحديد" الخاص بهم.

### مثال اساسي

بيان SQL

 `SELECT 'aaaaa' 
 UNION 
 SELECT 'bbbbbbbbb'; 
` 

انتاج |

 `+-----------+ 
 | aaaaa     | 
 +-----------+ 
 | aaaaa     | 
 | bbbbbbbbb | 
 +-----------+ 
 2 rows in set (0.00 sec) 
` 

### مثال باستخدام جداول الطلاب

بيان SQL

 ``SELECT StudentID, FullName FROM student WHERE studentID BETWEEN 1 AND 5 
 UNION 
 SELECT studentID, studentEmailAddr FROM `student-contact-info` WHERE studentID BETWEEN 7 AND 8; 
`` 

انتاج |

\`\` \`النص + ----------- + -------------------------------- + | StudentID | FullName | + ----------- + -------------------------------- + | 1 | مونيك ديفيز | 2 | تيري جوتيريز | | 3 | سبنسر باوتير | | 4 | لويس رمزي | 5 | ألفين غرين | | 7 | Maximo.Smith@freeCodeCamp.org | | 8 | Michael.Roach@freeCodeCamp.ort | + ----------- + -------------------------------- + 7 صفوف في مجموعة (0.00 ثانية)

 `## SQL UNION ALL Operator 
 
 The UNION ALL operator is an extension to UNION operator where it should result you a A+B of rows in the ouptput assuming A and B is your input, in simple terms UNION ALL doesn't deduplicate. 
 
 
 ### Basic Syntax 
 
 SQL Statement 
` 

مزود SELECT expression1، expression2،… expression _n من الجداول \[حيث الظروف\] الاتحاد كله SELECT expression1، expression2،… expression_ n من الجداول \[حيث الظروف\] ؛ \`\` \`

كما هو الحال مع كل هذه الأشياء SQL هناك أكثر من ذلك بكثير من ما هو موجود في هذا الدليل التمهيدي.

آمل أن يمنحك هذا على الأقل ما يكفي للبدء.

يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.