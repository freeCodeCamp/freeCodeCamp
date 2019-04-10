---
title: SQL Joins
localeTitle: ينضم SQL
---
## ينضم SQL

### مثال على الاستخدام

بالنسبة إلى هذا الدليل ، سنناقش قسم JOIN في عبارة SQL.

### بناء جملة SQL مع التركيز على الانضمام

 `SELECT col1, col2, col3, etc.... 
 FROM  tableNameOne AS a 
 JOIN tableNameTwo AS b ON a.primeKey = b.primeKey 
 etc... 
` 

يمكن أن يكون عبارة JOIN مجرد JOIN أو INNER JOIN ، والتي هي نفسها ، أو LEFT JOIN (الموضحة أدناه).

### أنواع مختلفة من JOINs

*   (صلة داخلية
*   إرجاع السجلات التي تحتوي على قيم متطابقة في كلا الجدولين
*   ترك صلة خارجية
*   إرجاع كافة السجلات من الجدول الأيسر ، والسجلات المتطابقة من الجدول الصحيح
*   اليمين (الخارج)
*   قم بإرجاع كافة السجلات من الجدول الصحيح ، والسجلات المتطابقة من الجدول الأيسر
*   ممتلئ (خارجي) انضم
*   إرجاع كافة السجلات عند وجود تطابق في أي من الجدول الأيسر أو الأيمن

### انضم

سيكون جدول الطالب في جملة FROM بحيث يكون جدول بدء أو يسار.

سننضم إلى جدول جهات اتصال الطلاب أو جدول RIGHT.

سترى أن جميع الطلاب يظهرون أيضًا في جدول جهات الاتصال.

كما هو موضح في الجداول أدناه ، فإن studentID 9 موجود في جدول الطالب ولكن ليس في جدول جهات الاتصال ، لذا لن يظهر في أحد الروابط.

بيان SQL

 ``SELECT a.studentID, a.FullName, a.programOfStudy, 
 b.`student-phone-cell`, b.`student-US-zipcode` 
 FROM student AS a 
 JOIN `student-contact-info` AS b ON a.studentID = b.studentID; 
`` 

بيانات "انضم": \`\` \`النص + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | studentID | FullName | programOfStudy | خلية هاتف الطالب student-US-zipcode | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- + | 1 | مونيك ديفيز الأدب | 555-555-5551 | 97111 | | 2 | تيري جوتيريز | برمجة | 555-555-5552 | 97112 | | 3 | سبنسر باوتير | برمجة | 555-555-5553 | 97113 | | 4 | لويس رمزي برمجة | 555-555-5554 | 97114 | | 5 | ألفين غرين | برمجة | 555-555-5555 | 97115 | | 6 | صوفي فريمان برمجة | 555-555-5556 | 97116 | | 7 | إدغار فرانك "تيد" كود علوم الكمبيوتر | 555-555-5557 | 97117 | | 8 | دونالد د. شامبرلين علوم الكمبيوتر | 555-555-5558 | 97118 | + ----------- + ------------------------ + ------------ ------ + -------------------- + -------------------- +

 `### Left Join 
 Using the keyword LEFT before JOIN causes the system to start with the student (LEFT) table but will return NULL from the RIGHT table if there are no rows for the LEFT table student. 
 
 Note that studentID 9 appears here but the data from the contact table is just shown as NULL. 
` 

مزود حدد a.studentID ، a.FullName ، a.programOfStudy ، ب. `student-phone-cell` ، ب. `student-US-zipcode` من الطالب ك LEFT JOIN `student-contact-info` AS b ON a.studentID = b.studentID؛

 ` ``` text 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 | studentID | FullName               | programOfStudy   | student-phone-cell | student-US-zipcode | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 |         1 | Monique Davis          | Literature       | 555-555-5551       |              97111 | 
 |         2 | Teri Gutierrez         | Programming      | 555-555-5552       |              97112 | 
 |         3 | Spencer Pautier        | Programming      | 555-555-5553       |              97113 | 
 |         4 | Louis Ramsey           | Programming      | 555-555-5554       |              97114 | 
 |         5 | Alvin Greene           | Programming      | 555-555-5555       |              97115 | 
 |         6 | Sophie Freeman         | Programming      | 555-555-5556       |              97116 | 
 |         7 | Edgar Frank "Ted" Codd | Computer Science | 555-555-5557       |              97117 | 
 |         8 | Donald D. Chamberlin   | Computer Science | 555-555-5558       |              97118 | 
 |         9 | Raymond F. Boyce       | Computer Science | NULL               |               NULL | 
 +-----------+------------------------+------------------+--------------------+--------------------+ 
 9 rows in set (0.00 sec) 
` 

### استكمال قوائم الجدول لتكون مرجعا

قوائم جدول الطلاب

 `SELECT a.studentID, a.FullName, sat_score, a.programOfStudy, schoolEmailAdr 
 FROM student AS a; 
` 

طالب أو يسار الجدول

 `+-----------+------------------------+-----------+------------------+------------------------+ 
 | studentID | FullName               | sat_score | programOfStudy   | schoolEmailAdr         | 
 +-----------+------------------------+-----------+------------------+------------------------+ 
 |         1 | Monique Davis          |       400 | Literature       | Monique@someSchool.edu | 
 |         2 | Teri Gutierrez         |       800 | Programming      | Teri@someSchool.edu    | 
 |         3 | Spencer Pautier        |      1000 | Programming      | Spencer@someSchool.edu | 
 |         4 | Louis Ramsey           |      1200 | Programming      | Louis@someSchool.edu   | 
 |         5 | Alvin Greene           |      1200 | Programming      | Alvin@someSchool.edu   | 
 |         6 | Sophie Freeman         |      1200 | Programming      | Sophie@someSchool.edu  | 
 |         7 | Edgar Frank "Ted" Codd |      2400 | Computer Science | Edgar@someSchool.edu   | 
 |         8 | Donald D. Chamberlin   |      2400 | Computer Science | Donald@someSchool.edu  | 
 |         9 | Raymond F. Boyce       |      2400 | Computer Science | Raymond@someSchool.edu | 
 +-----------+------------------------+-----------+------------------+------------------------+ 
 9 rows in set (0.00 sec) 
` 

مزود SELECT \* from `student-contact-info` AS b؛

 `student contact or RIGHT table 
` 

نص + ----------- + ---------------------------------- + - ------------------ + -------------------- + | studentID | studentEmailAddr | خلية هاتف الطالب student-US-zipcode | + ----------- + ---------------------------------- + - ------------------ + -------------------- + | 1 | Monique.Davis@freeCodeCamp.org | 555-555-5551 | 97111 | | 2 | Teri.Gutierrez@freeCodeCamp.org | 555-555-5552 | 97112 | | 3 | Spencer.Pautier@freeCodeCamp.org | 555-555-5553 | 97113 | | 4 | Louis.Ramsey@freeCodeCamp.org | 555-555-5554 | 97114 | | 5 | Alvin.Green@freeCodeCamp.org | 555-555-5555 | 97115 | | 6 | Sophie.Freeman@freeCodeCamp.org | 555-555-5556 | 97116 | | 7 | Maximo.Smith@freeCodeCamp.org | 555-555-5557 | 97117 | | 8 | Michael.Roach@freeCodeCamp.ort | 555-555-5558 | 97118 | + ----------- + ---------------------------------- + - ------------------ + -------------------- + 8 صفوف في مجموعة (0.00 ثانية) \`\` \`

كما هو الحال مع كل هذه الأشياء SQL هناك أكثر من ذلك بكثير من ما هو موجود في هذا الدليل التمهيدي.

آمل أن يمنحك هذا على الأقل ما يكفي للبدء.

يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك.