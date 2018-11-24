---
title: SQL CREATE INDEX Statement
localeTitle: SQL CREATE INDEX Statement
---
يتم استخدام عبارة CREATE INDEX لإنشاء فهارس في الجداول.

يتم استخدام الفهارس لاسترداد البيانات من قاعدة البيانات بسرعة كبيرة. لا يمكن للمستخدمين رؤية الفهارس ، يتم استخدامها فقط لتسريع عمليات البحث / الاستعلامات.

> **ملاحظة:** يستغرق تحديث جدول به فهارس وقتًا أطول من تحديث جدول بدون (لأن الفهارس تحتاج أيضًا إلى تحديث). لذلك ، أنشئ الفهارس فقط على الأعمدة التي سيتم البحث عنها بشكل متكرر.

#### إنشاء بناء الجملة INDEX

ينشئ فهرس على جدول. القيم المكررة مسموح بها:

 `CREATE INDEX index_name 
 ON table_name (column1, column2, ...); 
` 

#### خلق فريدة من نوعها INDEX البناء

ينشئ فهرس فريد على جدول. القيم المكررة غير مسموح بها:

 `CREATE UNIQUE INDEX index_name 
 ON table_name (column1, column2, ...); 
` 

> **ملاحظة:** يختلف بناء جملة إنشاء الفهارس بين قواعد بيانات مختلفة. لذلك: تحقق من بناء الجملة لإنشاء فهارس في قاعدة البيانات الخاصة بك.

#### CREATE INDEX مثال

ينشئ عبارة SQL أدناه فهرس المسمى "idx\_lastname" على العمود "اسم العائلة" في جدول "الأشخاص":

 `CREATE INDEX idx_lastname 
 ON Persons (LastName); 
` 

إذا كنت تريد إنشاء فهرس على مجموعة من الأعمدة ، فيمكنك سرد أسماء الأعمدة داخل الأقواس ، مفصولة بفواصل: CREATE INDEX idx\_pname

 `ON Persons (LastName, FirstName); 
` 

#### DROP INDEX بيان

يتم استخدام عبارة DROP INDEX لحذف فهرس في جدول.

**MS Access:**

 `DROP INDEX index_name ON table_name; 
` 

**خادم قاعدة البيانات:**

 `DROP INDEX table_name.index_name; 
` 

**DB2 / أوراكل:**

 `DROP INDEX index_name; 
` 

**الخلية:**

 `ALTER TABLE table_name 
 DROP INDEX index_name; 
`