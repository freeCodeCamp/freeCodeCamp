---
title: SQL Date Functions
localeTitle: دالات تاريخ SQL
---
## دالات تاريخ SQL

### المقدمة

هناك 61 دالات تاريخ محددة في MySQL. لا تقلق ، لن نراجعها جميعًا هنا. سيعطيك هذا الدليل مقدمة عن بعض العناصر الشائعة ، ويعرض لك ما يكفي لاستكشافه بنفسك بشكل مريح.

سوف نغطي:

*   الحصول على التاريخ الحالي
*   تاريخ الرياضيات
*   التواريخ في مكان أو وجود شرط

### الحصول على التاريخ الحالي

الحصول على التاريخ من النظام يمكن أن يكون سهل جدا لمعالجة البيانات باستخدام SQL.

 `-- current date 
 select now(), sysdate(), current_date(), current_time(), -- date and time from the system on execution 
 dayofyear(now()) as NumDaysSoFarThisYr, 
 EXTRACT(YEAR FROM now()) as theYearPart, 
 EXTRACT(YEAR_MONTH FROM now()) as theYrMonPart, 
 date_format(now(), '%W %M %Y') as oneOfManyFormats; 
 ; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions04.JPG)

في استعلام SQL ، نرى ما يلي:

*   أول عمودين في النتيجة هما طريقتان للحصول على نفس المعلومات: التاريخ على النظام في وقت تنفيذ SQL.
*   يقوم العمودان التاليان بتقسيم أجزاء التاريخ والوقت فقط من تاريخ النظام.
*   يعرض المثال التالي "رقم اليوم" من تاريخ النظام في هذا العام. ستلاحظ أن هذا هو يوم واحد أكثر من الرياضيات الموضحة في المثال التالي.
*   المقتطفان التاليان هما العام فقط ثم كل من العام والشهر
*   أخيرًا وليس آخرًا ، يوجد مثال واحد لإحدى الطرق العديدة لتنسيق هذه التواريخ.

### تاريخ الرياضيات

 `select now(), current_date(), 
 datediff(now(),'2017-01-01') as daysThisYear, 
 subdate(current_date(), interval 150 day) as '150DaysAgo', 
 adddate(now(), interval 7 day) as dateInA_Week -- date in a week 
 ; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions02.jpg)

هنا نرى:

*   أول عمودين هما فقط تاريخ النظام ووقته للرجوع إليه.
*   العمود الثاني هو اختلاف التاريخ (dateiff) بين الأول من يناير 2017 وتاريخ النظام.
*   آخر عمودين هما أمثلة على طرح وإضافة التواريخ.

### في مكان أو وجود شرط

فيما يلي مثالان على استخدام تاريخ الرياضيات في مكان جملة:

 `select * from student; - to show the current data being used for the example 
 select * from student where recordCreated < '2017-01-01'; 
 select * from student where recordCreated < subdate(current_date(), interval 225 day); 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/date-functions03.jpg)

بالنسبة للجزء HAVING: ضع في اعتبارك ، أن معظم منطق جملة WHERE سيعمل أيضًا في جملة HAVING من GROUP BY. الفرق بين الاثنين هو أن جملة WHERE تعمل مقابل البيانات الكاملة ، ويعمل HAVING على البيانات المجمعة بواسطة جملة GROUP BY.

_كما هو الحال مع كل هذه الأشياء ، هناك الكثير منها أكثر من ما هو موجود في هذا الدليل التمهيدي. آمل أن يمنحك هذا على الأقل ما يكفي للبدء. يرجى الاطلاع على دليل مدير قاعدة البيانات الخاص بك والمتعة محاولة خيارات مختلفة بنفسك._