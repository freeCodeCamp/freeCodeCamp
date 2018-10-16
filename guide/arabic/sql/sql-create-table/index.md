---
title: SQL Create Table
localeTitle: SQL إنشاء جدول
---
# SQL إنشاء جدول

## المقدمة

هذا الدليل عبارة عن نظرة عامة حول أساسيات دالات SQL `CREATE TABLE` .

سوف نستخدم MySQL لجميع الأمثلة في جميع أنحاء أدلة SQL freeCodeCamp. MySQL يستخدم بشكل متكرر على مواقع الويب لقاعدة البيانات الخلفية ، 2) إنه مجاني ، وهو ممتع وسهل الاستخدام.

## مغطاة في هذا الدليل

*   إنشاء مخطط ، الحاوية لجميع كائنات قاعدة البيانات الخاصة بنا.
*   إنشاء جدول حتى يكون لدينا شيء لتغييره.
*   إنشاء جدول عن طريق استيراد ملف CSV وتعديل هذا الجدول
*   إنشاء جدول باستخدام أداة طاولة العمل MySQL

نقوم بمعظم هذا العمل باستخدام عبارات SQL في أداة البرمجة النصية لـ MySQL. سنرى أيضًا كيفية إنشاء جدول باستخدام واجهة طاولة العمل بدلاً من عبارات SQL.

## بنية عالية المستوى لقاعدة بيانات علائقية

1.  اعلى مستوى؛ قاعدة البيانات تثبيت نظام قاعدة البيانات. في هذه الحالة ، إنها MySQL. تسمى "الموجه المحلي" MySQL Router "" في لقطات الشاشة أعلاه.
2.  التالي هو المخطط حاوية للكائنات المطلوبة للبيانات المدارة في نظام قاعدة بيانات علائقية.
3.  كائنات نقوم بإنشائها (جداول ، فهارس ، إجراءات مخزنة ، وظائف) لإدارة النظام وبياناته

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/create_table01.JPG?raw=true)

## إنشاء مخطط MySQL

المخطط عبارة عن حاوية للكائنات المطلوبة لإدارة البيانات لموضوع أو عملية معينة. نعرض أمثلة أثناء تقدمنا ​​في هذا الدليل.

سنقوم بإنشاء المخطط للتعلم والاختبار باستخدام الأمر SQL ؛

 `create database fCC_alterTableGuide; 
` 

هذه الأمثلة بنية المخطط قبل تشغيل هذا الأمر

![صورة-2](https://github.com/SteveChevalier/guide-images/blob/master/create_table02.JPG?raw=true)

هذه الأمثلة بنية المخطط بعد تشغيل عبارة SQL

![صورة 3](https://github.com/SteveChevalier/guide-images/blob/master/create_table03.JPG?raw=true)

## إنشاء جدول ، إضافة بيانات اختبار مع "إدراج" ، إعادة تسمية الجدول (تغيير)

سنقوم بإنشاء جدول الطالب.

ستكون الخطوات:

1.  تأكد من عدم وجود الطاولة بالفعل
    
2.  إنشاء الجدول
    
3.  إدخال بيانات الاختبار.
    

*   أنواع البيانات: اسم الطالب هو حقل حرف محدد بـ 90 حرفًا
*   معرف الطالب هو رقم (عدد صحيح) (نطاق من -2147483648 إلى 2147483647). سيكون هذا هو المفتاح الأساسي للجدول وسيتم زيادته تلقائيًا عند إضافة سجل.
*   سيكون هناك أيضا حقلين "time-stamp" للعب مع كذلك

إنشاء بيان وعرض النتائج من التنفيذ ؛

![صورة 4](https://github.com/SteveChevalier/guide-images/blob/master/create_table04.JPG?raw=true)

باستخدام عبارة Select ، سنرى أن الجدول موجود ، ولكن تمت إضافة السجلات الآن.

![صورة 5](https://github.com/SteveChevalier/guide-images/blob/master/create_table05.JPG?raw=true)

الآن لإدخال بعض البيانات ونرى كيف يبدو جدولنا الجديد مع السجلات الموجودة فيه (وفهم إنشاء الطوابع الزمنية وتحديثها) ؛

![صورة 6](https://github.com/SteveChevalier/guide-images/blob/master/create_table06.JPG?raw=true)

أول ختم زمني هو بيانات الإنشاء والوقت والثاني هو تاريخ التحديث ووقته. تغيير سجل يجب تحديث ts2 ولكن لا ts1. لنلقي نظرة.

![صورة-7](https://github.com/SteveChevalier/guide-images/blob/master/create_table07.JPG?raw=true)

## إنشاء جدول مع MySql Workbench

انقر بزر الماوس الأيمن على "الجداول" أسفل المخطط الذي تريد وضع الملف الجديد فيه. حدد "إنشاء جدول".

![صورة-8](https://github.com/SteveChevalier/guide-images/blob/master/create_table08.JPG?raw=true)

أكمل النموذج كما ترغب وانقر فوق تطبيق

![صورة-9](https://github.com/SteveChevalier/guide-images/blob/master/create_table09.JPG?raw=true)

## إنشاء جدول باسم تحديد (CTAS)

طريقة سريعة لإنشاء نسخة من جدول ، بما في ذلك البيانات هي إنشاء جدول كمحدد.

CREATE TABLE my _table as (SELECT \* FROM orig_ tbl)؛

## قم بإنشاء جدول وملئه عن طريق استيراد ملف CSV

انقر بزر الماوس الأيمن على "الجداول" أسفل المخطط الذي تريد وضع الملف الجديد فيه. حدد استيراد بيانات الجدول.

![صورة 10](https://github.com/SteveChevalier/guide-images/blob/master/create_table10.JPG?raw=true)

حدد ملف CSV لاستيراد وانقر فوق NEXT عادة ما تقوم بإنشاء جدول جديد من البيانات ، حدد الخيارات المطلوبة وانقر فوق NEXT

![صورة-11](https://github.com/SteveChevalier/guide-images/blob/master/create_table11.JPG?raw=true)

اضبط أنواع البيانات حسب الحاجة وانقر فوق NEXT

![صورة 12](https://github.com/SteveChevalier/guide-images/blob/master/create_table12.JPG?raw=true)

انقر فوق NEXT (على هذه الشاشة والصفحة التالية التي يتم عرضها) لاستيراد البيانات إلى الجدول ستشاهد حالة الإكمال والمراجعة والنقر على "إنهاء"

![صورة-13](https://github.com/SteveChevalier/guide-images/blob/master/create_table13.JPG?raw=true)

![صورة 14](https://github.com/SteveChevalier/guide-images/blob/master/create_table14.JPG?raw=true)

## مواد أخرى

هناك الكثير من التفاصيل لتغطية هذا الموضوع حتى تثبيت MySQL والمتعة!

### أين يمكنني الحصول على MySQL

جرب \[هذا التنزيل لمستخدمي نظام تشغيل Windows \[(https://dev.mysql.com/downloads/windows/)

### مستندات MySQL

*   [صفحة دليل](https://dev.mysql.com/doc/refman/5.7/en/alter-table.html)
*   [أمثلة من دليل](https://dev.mysql.com/doc/refman/5.7/en/alter-table-examples.html)

### وثائق SQL Server

*   [مستندات Microsoft](https://docs.microsoft.com/en-us/sql/t-sql/statements/create-table-transact-sql)