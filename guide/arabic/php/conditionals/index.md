---
title: Conditionals
localeTitle: الشرطية
---
## الشرطية

مكتوبة الشرطية في PHP باستخدام `if` ، `elseif` ، بناء الجملة `else` . يتيح لك استخدام الشروط الشرطية تنفيذ إجراءات مختلفة بناءً على المدخلات والقيم المختلفة المقدمة لصفحة في وقت التشغيل. في PHP الشرطي وغالبا ما يشار إليها باسم هياكل التحكم.

### إذا

 `<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } 
` 

### ELSEIF

 `<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } 
` 

### آخر

 `<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } else { 
  echo "You viewed a page that does not exist yet!"; 
 } 
` 

### ملحوظة

في الحالات التي يكون لديك فيها الكثير من الشروط المحتملة ، قد ترغب في استخدام [بيان التبديل](/php/switch) .

#### معلومات اكثر:

*   [دليل هياكل التحكم php.net](https://secure.php.net/manual/en/control-structures.elseif.php)