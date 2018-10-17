---
title: PHP Syntax
localeTitle: بناء php
---
# قواعد PHP الأساسية

### بداية

يتم حفظ جميع ملفات PHP عن طريق الامتداد `.php` . يمكن إضافة نصوص PHP في أي مكان في المستند. يبدأ البرنامج النصي لـ PHP `<?php` وينتهي بـ `?>` .

`<?php //PHP code goes here ?>`

### طباعة

لطباعة أي عبارة في PHP نستخدم أمر `echo` .

#### عينة التعليمات البرمجية

 `<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>My first PHP page</h1> 
 
 <?php 
 echo "Hello World!"; 
 ?> 
 
 </body> 
 </html> 
` 

##### ملاحظة: تنتهي عبارات PHP بفاصلة منقوطة `;`

### اعلان المتغيرات

نعلن عن وجود متغيرات في PHP عن طريق إضافة علامة `$` قبلها.

 `<?php 
 $x = 5; 
 echo $x; 
 ?> 
` 

### تعليقات في PHP

لكتابة تعليق سطر واحد في PHP ، نضع hashtag `#` أو بوضع `//` قبل التعليق.

 `<?php 
 # This is a single line comment 
 // This is also a single line comment 
 ?> 
` 

لكتابة تعليق خط مزدوج ، نبدأ التعليق مع `/*` وننتهي بـ `*/` .

 `<?php 
 /* This is a 
 Double line comment. */ 
 ?> 
` 

يمكننا أيضًا التعليق على بعض أجزاء سطر الشفرة.

#### عينة الكود

 `<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // You can also use comments to leave out parts of a code line 
 $x = 5 /* + 15 */ + 5; 
 echo $x; 
 ?> 
 
 </body> 
 </html> 
` 

يمكنك معرفة المزيد عن هذا في [دليل PHP](http://php.net/manual/en/)