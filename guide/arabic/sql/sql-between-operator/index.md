---
title: SQL Between Operator
localeTitle: مزود بين المشغل
---
## مزود بين المشغل

يعتبر مشغل BETWEEN مفيدًا بسبب "مُحسِّن استعلام SQL". على الرغم من أن BETWEEN يعمل بشكل وظيفي مثل: x <= element <= y ، سيتعرف "مُحسِّن استعلام SQL" على هذا الأمر بشكل أسرع ، ولديه كود محسّن لتشغيله.

يتم استخدام عامل التشغيل هذا في جملة WHERE أو في جملة GROUP BY HAVING.

يتم تحديد الصفوف التي لها قيمة أكبر من الحد الأدنى للقيمة وأقل من الحد الأقصى للقيمة.

من المهم أن تضع في اعتبارك أن القيم المدخلة في الأمر **مستبعدة** من النتيجة. نحصل فقط على ما بينهما.

هنا هو بناء الجملة لاستخدام الدالة في جملة WHERE:

 `select field1, testField 
 from table1 
 where testField between min and max 
` 

في ما يلي مثال على استخدام جدول الطالب وعبارة WHERE:

 `-- no WHERE clause 
 select studentID, FullName, studentID 
 from student; 
 
 -- WHERE clause with between 
 select studentID, FullName, studentID 
 from student 
 where studentID between 2 and 7; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/between01.JPG?raw=true)

في ما يلي مثال على ذلك باستخدام جدول أموال الحملة والعبارة الفرعية. سيؤدي هذا إلى إرجاع صفوف يتراوح فيها مجموع التبرعات للمرشح بين 3 ملايين و 18 مليون دولار استنادًا إلى شرط HAVING في الجزء GROUP BY من البيان. المزيد عن التجميع في هذا الدليل.

 `select Candidate, Office_Sought, Election_Year, format(sum(Total_$),2) 
 from combined_party_data 
 where Election_Year = 2016 
 group by Candidate, Office_Sought, Election_Year 
 having sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/between02.JPG?raw=true)