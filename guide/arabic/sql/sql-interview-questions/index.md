---
title: SQL Interview Questions
localeTitle: أسئلة مقابلة SQL
---
## أسئلة مقابلة SQL

### ما هو صلة داخلية في SQL؟

هذا هو نوع الارتباط الافتراضي إذا لم يتم تحديد صلة. تقوم بإرجاع كافة الصفوف التي توجد تطابق واحد على الأقل في كلا الجدولين.

 `SELECT * FROM A x JOIN B y ON y.aId = x.Id 
` 

### ما هو انضمام اليسار في SQL؟

يقوم الرابط الأيسر بإرجاع جميع الصفوف من الجدول الأيسر ، والصفوف المتطابقة من الجدول الصحيح. سيتم إرجاع الصفوف في الجدول الأيسر حتى في حالة عدم وجود تطابق في الجدول الصحيح. الصفوف من الجدول الأيسر بدون تطابق في الجدول الصحيح ستكون `null` لقيم الجدول الصحيح.

 `SELECT * FROM A x LEFT JOIN B y ON y.aId = x.Id 
` 

### ما هو الانضمام الصحيح في SQL؟

يقوم الربط الأيمن بإرجاع جميع الصفوف من الجدول الصحيح والصفوف المتطابقة من الجدول الأيسر. مقابل صلة اليسار ، سيؤدي هذا إلى إرجاع كافة الصفوف من الجدول الصحيح حتى عندما لا يوجد تطابق في الجدول الأيسر. الصفوف في الجدول الأيمن التي ليس لها أي تطابق في الجدول الأيسر سيكون لها قيم `null` الجدول الأيسر.

 `SELECT * FROM A x RIGHT JOIN B y ON y.aId = x.Id 
` 

### ما هو الانضمام الكامل في SQL؟

إرجاع صلة كاملة كافة الصفوف التي توجد تطابق في أي من الجداول. لذلك إذا كانت هناك صفوف في الجدول الأيسر لا تحتوي على تطابقات في الجدول الصحيح ، فسيتم تضمينها. وكذلك إذا كانت هناك صفوف في الجدول الأيمن لا تحتوي على تطابقات في الجدول الأيسر ، فسيتم تضمينها.

 `SELECT Customers.CustomerName, Orders.OrderID 
 FROM Customers 
 FULL OUTER JOIN Orders 
 ON Customers.CustomerID=Orders.CustomerID 
 ORDER BY Customers.CustomerName 
` 

### ما هي نتيجة الأمر التالي؟

\`\` \` إسقاط عرض view\_name

 `Here it'll be an error because we can't perform a DML operation on a view. 
 
 ### Can we perform a rollback after using ALTER command? 
 No, because ALTER is a DDL command and Oracle server performs an automatic COMMIT when the DDL statements are executed. 
 
 
 ### Which is the only constraint that enforces rules at column level? 
 NOT NULL is the only constraint that works at the column level. 
 
 
 ### What are the pseudocolumns in SQL? Give some examples? 
 A pseudocolumn is a function which returns a system generated value. The reason it is known as so because a pseudocolumn is an Oracle assigned value used in the same context as an Oracle database column but not stored on disk. 
` 

بعض الأمثلة على ذلك هي: ROWNUM، ROWID، USER، CURRVAL، NEXTVAL etc. \`\` \`

### إنشاء مستخدم my723acct بكلمة مرور kmd26pt. استخدم _بيانات_ المستخدم _و مساحات بيانات البيانات المؤقتة التي توفرها PO8 ووفر لهذا المستخدم 10M مساحة تخزين في_ بيانات _المستخدم_ و 5 M من مساحة التخزين في temporary\_data.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### إنشاء دور دور _الجداول_ and\_views.

`sql CREATE ROLE role_tables_and_views`

### منح لدور السؤال السابق امتيازات الاتصال بقاعدة البيانات والامتيازات لإنشاء الجداول وطرق العرض.

الامتياز للاتصال بقاعدة البيانات هو CREATE SESSION امتياز إنشاء الجدول هو CREATE TABLE امتياز إنشاء العرض هو CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### منح الدور السابق في السؤال للمستخدمين anny و rita

`sql GRANT role_tables_and_views TO anny, rita`

### إنشاء مستخدم my723acct بكلمة مرور kmd26pt. استخدم _بيانات_ المستخدم _و مساحات بيانات البيانات المؤقتة التي توفرها PO8 ووفر لهذا المستخدم 10M مساحة تخزين في_ بيانات _المستخدم_ و 5 M من مساحة التخزين في temporary\_data.

`sql CREATE USER my723acct IDENTIFIED BY kmd26pt DEFAULT TABLESPACE user_data TEMPORARY TABLESPACE temporary_data QUOTA 10M on user_data QUOTA 5M on temporary_data`

### إنشاء دور دور _الجداول_ and\_views.

`sql CREATE ROLE role_tables_and_views`

### منح لدور السؤال السابق امتيازات الاتصال بقاعدة البيانات والامتيازات لإنشاء الجداول وطرق العرض.

الامتياز للاتصال بقاعدة البيانات هو CREATE SESSION امتياز إنشاء الجدول هو CREATE TABLE امتياز إنشاء العرض هو CREATE VIEW `sql GRANT Create session, create table, create view TO role_tables_and_views`

### منح الدور السابق في السؤال للمستخدمين anny و rita

`sql GRANT role_tables_and_views TO anny, rita`

### اكتب أمرًا لتغيير كلمة مرور المستخدم rita من abcd إلى dfgh

`sql ALTER USER rita IDENTIFIED BY dfgh`

### ليس لدى المستخدمين rita و anny امتيازات SELECT على الجدول INVENTORY الذي تم إنشاؤه بواسطة SCOTT. اكتب أمرًا للسماح لـ SCOTT بمنح المستخدمين امتيازات SELECT على هذه الجداول.

`sql GRANT select ON inventory TO rita, anny`

### وقد تم نقل ريتا المستخدم ولم يعد بحاجة الامتياز الذي منح لها من خلال and\_views _الجداول_ دور الدور. اكتب أمرًا لإزالتها من الامتيازات التي قدمتها سابقًا باستثناء أنه ما زال بإمكانها الاتصال بقاعدة البيانات.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### انتقل الآن المستخدم ريتا الذي تم نقله إلى شركة أخرى. نظرًا لأن الكائنات التي أنشأتها لم تعد تستخدم ، اكتب commmand لإزالة هذا المستخدم وكافة الكائنات الخاصة به.

هنا خيار CASCADE ضروري لإزالة كافة كائنات المستخدم في قاعدة البيانات. \`\` \`sql  
انخفاض المستخدم ريتا CASCADE

### وقد تم نقل ريتا المستخدم ولم يعد بحاجة الامتياز الذي منح لها من خلال and\_views _الجداول_ دور الدور. اكتب أمرًا لإزالتها من الامتيازات التي قدمتها سابقًا باستثناء أنه ما زال بإمكانها الاتصال بقاعدة البيانات.

`sql REVOKE select ON scott.inventory FROM rita REVOKE create table, create view FROM rita`

### انتقل الآن المستخدم ريتا الذي تم نقله إلى شركة أخرى. نظرًا لأن الكائنات التي أنشأتها لم تعد تستخدم ، اكتب commmand لإزالة هذا المستخدم وكافة الكائنات الخاصة به.

هنا خيار CASCADE ضروري لإزالة كافة كائنات المستخدم في قاعدة البيانات. \`\` \`sql  
انخفاض المستخدم ريتا CASCADE

 `### Write SQL query to find the nth highest salary from table. 
` 

مزود  
SELECT TOP 1 الراتب من عند ( SELECT DISTINCT TOP N Salary من الموظف ORDER BY Salary DESC ) ORDER BY الراتب ASC \`\` \`