---
title: While Loop Statements
localeTitle: في حين لووب البيانات
---
## في حين لووب البيانات

تستخدم بايثون حلقة " `while` نحو مشابه للغات الشعبية الأخرى. تقوم حلقة `while` بتقييم حالة ثم تنفذ كتلة من الكود إذا كان الشرط صحيحًا. ينفذ كتلة التعليمة البرمجية بشكل متكرر حتى يصبح الشرط غير صحيح.

البنية الأساسية هي:

 `counter = 0 
 while counter < 10: 
   # Execute the block of code here as 
   # long as counter is less than 10 
` 

ويرد أدناه مثال على ذلك:

 `days = 0 
 week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] 
 while days < 7: 
   print("Today is " + week[days]) 
   days += 1 
` 

انتاج:

 `Today is Monday 
 Today is Tuesday 
 Today is Wednesday 
 Today is Thursday 
 Today is Friday 
 Today is Saturday 
 Today is Sunday 
` 

شرح سطر بواسطة سطر التعليمات البرمجية أعلاه:

1.  يتم تعيين "أيام" المتغير إلى قيمة 0.
2.  يتم تعيين أسبوع متغير إلى قائمة تحتوي على كافة أيام الأسبوع.
3.  بينما تبدأ حلقة
4.  سيتم تنفيذ كتلة الكود حتى تعود الحالة "true".
5.  الشرط هو 'أيام <7' التي يقول روجلي أثناء تشغيل حلقة حتى النقطة أيام المتغير أقل من 7
6.  لذلك عندما تكون الأيام = 7 تتوقف الحلقة أثناء التنفيذ.
7.  يتم تحديث متغير الأيام في كل تكرار.
8.  عندما يتم تشغيل حلقة while للمرة الأولى ، تتم طباعة السطر "Today is Monday" على وحدة التحكم ويصبح يوم المتغير مساويًا لـ 1.
9.  نظرًا لأن أيام المتغير تساوي 1 وهي أقل من 7 حتى يتم تنفيذ حلقة while مرة أخرى.
10.  ويمتد مرارًا وتكرارًا ، وعندما تطبع وحدة التحكم "اليوم هو الأحد" ، تساوي الأيام المتغيرة الآن 7 وتوقف تنفيذ الحلقة.

#### معلومات اكثر:

*   [بيثون `while` الوثائق البيان](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement)