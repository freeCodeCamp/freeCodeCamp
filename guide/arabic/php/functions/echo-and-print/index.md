---
title: Echo and Print
localeTitle: صدى وطباعة
---
## صدى وطباعة

توفر وظائف الارتداد والطباعة طريقة لكتابة قيمة متغير أو وسيطة إلى الشاشة.

### صدى صوت

يكتب الدالة `echo()` قيمة متغير أو وسيطة إلى الشاشة.

 `<?php 
 echo "freeCodeCamp"; 
` 

ملاحظة: طريقة قصيرة لفتح علامة PHP وصدى هو <؟ =

 `<?= "freeCodeCamp"; ?> 
` 

### طباعة

تعمل وظيفة `print()` خارج قيمة متغير أو وسيطة على الشاشة.

 `<?php 
 print "freeCodeCamp"; 
` 

### print\_r

تكتب الدالة `print_r()` قيمة أي متغير (مثل صفيف) أو وسيطة إلى الشاشة ، بخلاف وظائف الارتداد أو الطباعة التي تكون محدودة بشكل أكبر.

 `<?php 
 $freecodecamp = "freeCodeCamp"; 
 print_r($freecodecamp); 
` 

#### معلومات اكثر:

*   [php.net صدى () دليل](https://secure.php.net/manual/en/function.echo.php)
*   [طباعة php.net ()](https://secure.php.net/manual/en/function.print.php)
*   [php.net print\_r () دليل](https://secure.php.net/manual/en/function.print-r.php)