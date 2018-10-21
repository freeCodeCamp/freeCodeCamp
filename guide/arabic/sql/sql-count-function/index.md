---
title: SQL COUNT Aggregate Function
localeTitle: COUNT COUNT Aggregate Function
---
## COUNT COUNT Aggregate Function

يتم استخدام عامل التشغيل COUNT عادةً مع جملة GROUP BY. وهي إحدى دالات SQL "التجميعية" التي تتضمن AVG (متوسط) و SUM.

ستحسب هذه الدالة عدد الصفوف والعائد الذي يتم حسابه كعمود في مجموعة النتائج.

في ما يلي أمثلة على ما ستستخدمه لـ COUNT من أجل:

*   حساب جميع الصفوف في جدول (لا توجد مجموعة حسب المطلوب)
*   حساب مجاميع مجموعات فرعية من البيانات (يتطلب قسم Group By من البيان)

كمرجع ، إليك البيانات الحالية لجميع الصفوف في قاعدة بيانات الطلاب الخاصة بنا.

 `select studentID, FullName, programOfStudy, sat_score from student; -- all records with fields of interest 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/count01.JPG?raw=true)

توفر عبارة SQL هذه حسابًا لكل الصفوف. لاحظ أنه يمكنك منح عمود COUNT الناتج اسمًا باستخدام "AS".

 `select count(*) AS studentCount from student; -- count of all records 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/count02.JPG?raw=true)

هنا نحصل على عدد الطلاب في كل مجال من مجالات الدراسة.

 ` select studentID, FullName, count(*) AS studentCount from the student table with a group by programOfStudy; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/count03.JPG?raw=true)

هنا نحصل على عدد الطلاب الذين يحملون نفس نتائج اختبار SAT.

 ` select studentID, FullName, count(*) AS studentCount from the student table with a group by sat_score; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/count04.JPG?raw=true)

في ما يلي مثال على ذلك باستخدام جدول أموال الحملة. هذا هو مجموع الدولارات في كل معاملة وعدد المساهمات لكل حزب سياسي خلال الحملة الرئاسية الأمريكية لعام 2016.

 `select Specific_Party, Election_Year, format(sum(Total_$),2) AS contribution$Total, count(*) AS numberOfContributions 
 from combined_party_data 
 group by Specific_Party,Election_Year 
 having Election_Year = 2016; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/count05.JPG?raw=true)

كما هو الحال مع كل هذه الأشياء ، يوجد الكثير منها ، لذا يرجى الاطلاع على الدليل الخاص بمدير قاعدة البيانات الخاص بك والتمتع بتجربة اختبارات مختلفة بنفسك.