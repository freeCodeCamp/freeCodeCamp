---
title: Copy an Array with the Spread Operator
localeTitle: نسخ صفيف مع المشغل انتشار
---
## نسخ صفيف مع المشغل انتشار

*   يخبرك التلميح الأخير في المثال باستخدام طريقة تم تعلمها مؤخرًا.
*   يقوم عامل توزيع النشر بنسخ جميع العناصر إلى كائن فارغ جديد.

\`\` \`جافا سكريبت بينما (عدد> = 1) { newArr = \[… arr\] num--. }

 ``- The code above will copy all of the elements into `newArr` but will also reinitialise `newArr` with every new iteration of the while loop. 
 - A new variable should first be initialised using the spread operator - `let obj = [...arr];` - then this variable should be added to the `newArr` for every iteration of the while loop. 
 
 ## Solution: 
`` 

جافا سكريبت وظيفة copyMachine (arr، num) { let newArr = \[\]؛ بينما (عدد> = 1) { // تغيير رمز أدناه هذا الخط newArr.push (\[... آر\])؛ // تغيير الكود فوق هذا الخط num--. } عودة newArr ؛ }

// تغيير الرمز هنا لاختبار الحالات المختلفة: console.log (copyMachine (\[true، false، true\]، 2))؛ \`\` \`