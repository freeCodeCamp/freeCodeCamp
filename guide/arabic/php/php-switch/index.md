---
title: PHP Switch
localeTitle: تبديل PHP
---
## تبديل PHP

و `switch` بيان في PHP مشابه لسلسلة من `if` البيانات على نفس التعبير. يستخدم بيان `switch` لتنفيذ إجراءات مختلفة في ظروف مختلفة. يتبع جملة جملة `switch`

 `switch (expression) { 
 
    case label1: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label2: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label3: 
        // code block to be executed if there is a match with result of expression 
        break; 
    default: 
        // code block to be executed if there is no match with result of expression 
 
 } 
` 

عندما نقوم بتشغيل البرنامج ، يتم تقييم التعبير الموجود داخل بيان `switch` . يتم فحص نتيجة هذا التعبير بالتسميات المقابلة إذا كان هناك تطابق ثم يتم تنفيذ كتلة `case` المقابلة. إذا لم يتم العثور على أي تطابق مع أي من عبارات الحالة ، فسيتم تنفيذ كتلة الكود التي تتبع `default` .

شكل توضيحي لبيان `switch` مع مثال

 `<?php 
 
 $i = 1 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
        break; 
    case 1: 
        echo "i equals 1"; 
        break; 
    case 2: 
        echo "i equals 2"; 
        break; 
 } 
 
 ?> 
` 

يمكن أيضًا استخدام عبارة `switch` دون بيان `break` . في هذه الحالة ، سيتم تنفيذ العبارات بعد الحالات المتطابقة. أدناه هو استخدام بيان `switch` دون بيان `break` .

 `<?php 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
    case 1: 
        echo "i equals 1"; 
    case 2: 
        echo "i equals 2"; 
 } 
 ?> 
 
 /*output --> i equals 0i equals 1i equals 2 */ 
` 

#### معلومات اكثر:

[بيان التبديل - وثائق PHP](http://php.net/manual/en/control-structures.switch.php)

[PHP5 التبديل - W3Schools](https://www.w3schools.com/php/php_switch.asp)