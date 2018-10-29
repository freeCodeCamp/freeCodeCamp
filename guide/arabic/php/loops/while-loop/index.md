---
title: While Loop
localeTitle: حائط اللوب
---
## حائط اللوب

تعد `while loop` واحدة من أسهل أنواع الحلقات في PHP. ينفذ كتلة البيانات حتى يتم تقييم التعبير إلى **TRUE** . إذا تغيرت قيمة التعبير في وقت التنفيذ ، فستعمل الحلقة حتى يتم تقييم التعبير إلى **FALSE** . يتم إعطاء النموذج الأساسي لحلقة While أدناه:

 `while (expr) 
    statement 
` 

يمكن تضمين البيانات داخل الحلقة أثناء الأقواس المعقوفة أو يمكن استخدامها بناء على الصيغة التالية:

 `while (expr): 
    statement 
    ... 
 endwhile; 
` 

توضيح بناء الجملة البسيط والبديل من حلقة أثناء استخدام المثال:

 `<?php 
 
 /* using the simple form of while loop */ 
 
 $i = 1;  /* initialisation part */ 
 
 while ($i <= 100 && $i!=5 ) 
 { 
    echo $i++; 
 } 
 
 /*using the alternate synatx of while loop*/ 
 
 $i = 0; 
 
 while ($i <= 10): 
    echo $i++; 
 endwhile; 
 
 ?> 
` 

#### معلومات اكثر

[في حين حلقة - وثائق PHP](http://php.net/manual/en/control-structures.while.php)