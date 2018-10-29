---
title: SQL and Operator
localeTitle: مزود والمشغل
---
## SQL AND المشغل

ويتم استخدامه في جملة WHERE أو جملة GROUP BY HAVING للحد من الصفوف التي يتم إرجاعها من العبارة التي تم تنفيذها. استخدم AND عندما يكون مطلوبًا أن يتم استيفاء أكثر من شرط واحد.

سنستخدم جدول الطالب لتقديم أمثلة.

في ما يلي جدول الطالب بدون شرط WHERE:

 `select * from student; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator01.JPG?raw=true)

الآن تتم إضافة عبارة WHERE لعرض طلاب البرمجة فقط:

 `select * from student 
 where programOfStudy = 'Programming'; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator02.JPG?raw=true)

الآن يتم تحديث جملة WHERE بـ AND لعرض نتائج لطلاب البرمجة التي يكون لها أيضًا درجة SAT أكبر من 800:

 `select * from student 
 where programOfStudy = 'Programming' 
 and sat_score > 800; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator03.JPG?raw=true)

هذا مثال أكثر تعقيدًا من جدول مساهمات الحملة. يحتوي هذا المثال على جملة GROUP BY مع شرط HAVING باستخدام AND لتقييد السجلات التي تم إرجاعها ليتم استبعادها من عام 2016 بمساهمات تتراوح بين 3 ملايين و 18 مليون دولار أمريكي.

 `select Candidate, Office_Sought, Election_Year, FORMAT(sum(Total_$),2) from combined_party_data 
 where Office_Sought = 'PRESIDENT / VICE PRESIDENT' 
 group by Candidate, Office_Sought, Election_Year 
 having Election_Year = 2016 and sum(Total_$) between 3000000 and 18000000 
 order by sum(Total_$) desc; 
` 

![صورة 1](https://github.com/SteveChevalier/guide-images/blob/master/and_operator06.JPG?raw=true)