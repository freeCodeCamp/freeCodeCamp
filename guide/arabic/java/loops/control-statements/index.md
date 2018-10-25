---
title: Jump Statements
localeTitle: بيانات القفز
---
# بيانات القفز

عبارات الانتقال هي نوع من بيانات [_تدفق التحكم_](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html) . في الأساس ، يمكنك استخدامها لتغيير الترتيب الذي يتم تنفيذ البيانات من مسار التنفيذ العادي. في الجوهر ، تتسبب هذه العبارات في أن "يتحكم البرنامج" بعيدًا عن نقطة التنفيذ المتوقعة التالية إلى مكان آخر في البرنامج.

تُستخدم عبارات الانتقال التالية بشكل شائع مع الحلقات:

*   [استراحة](http://forum.freecodecamp.com/t/java-loops-break-control-statement)
*   [استمر](http://forum.freecodecamp.com/t/java-loops-continue-control-statement)

تقسيم بيان التحكم "فاصل" خارج الحلقة عندما يتم استيفاء الشرط. هذا يعني أن بقية الحلقة لن تعمل. على سبيل المثال ، في الحلقة أدناه إذا وصلت إلى 5 ، فواصل الحلقة ، بحيث لا تستمر.

 `for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the loop. 
    break; 
  } 
 
 System.out.println(i); 
 } 
` 

انتاج:

 `    0 1 2 3 4 
` 

إن بيان التحكم 'continue' هو الإصدار الأقل كثافة من 'break'. إنه يخرج فقط من المثيل الحالي للحلقة ويستمر. في الحلقة أدناه ، إذا كان i هو 5 ، تستمر الحلقة ، لذا سوف تتخطى بيان الطباعة أدناه وتتحرك حتى تصل إلى 10 وتوقف الحلقة.

 `for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the current instance loop. 
    continue; 
  } 
 
 System.out.println(i); 
 } 
` 

انتاج:

 `    0 1 2 3 4 6 7 8 9 
`