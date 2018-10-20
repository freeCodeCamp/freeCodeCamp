---
title: SQL Insert Query
localeTitle: SQL إدراج الاستعلام
---
## SQL إدراج الاستعلام

إدراج الاستعلامات هي طريقة لإدراج البيانات في جدول. لنفترض أننا أنشأنا جدولًا باستخدام

`CREATE TABLE example_table ( name varchar(255), age int)`

**example\_table**

| الاسم | العمر | --- | --- |

الآن لإضافة بعض البيانات إلى هذا الجدول ، سنستخدم **INSERT** بالطريقة التالية:

`INSERT INTO example_table (column1,column2) VALUES ("Andrew",23)`

**example\_table**

| الاسم | العمر | --- | --- | | أندرو | 23 |

حتى ما يلي سيعمل ، ولكن دائمًا ما يكون من الممارسات الجيدة تحديد البيانات التي يجري فيها العمود.

`INSERT INTO table_name VALUES ("John", 28)`

**example\_table**

| الاسم | العمر | --- | --- | | أندرو | 23 | | جون 28 |