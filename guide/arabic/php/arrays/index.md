---
title: Arrays
localeTitle: المصفوفات
---
## المصفوفات

### أنواع المصفوفات

يوجد في PHP ثلاثة أنواع من المصفوفات: المصفوفات المفهرسة ، المصفوفات المرافقة ، والمصفوفات متعددة الأبعاد.

### مثال صفيف مفهرسة

صفيف مفهرسة يصل إلى الكائنات حسب رقم الفهرس.

 `<?php 
 $freecodecamp = array("free", "code", "camp"); 
` 

`$freecodecamp[0]` سيعود `"free"` ، `$freecodecamp[1]` سيعود `"code"` ، و `$freecodecamp[2]` سيعود `"camp"` .

### نموذج مجموعة الارتباطات

صفيف جمعية يصل إلى الكائنات عن طريق اسم المفتاح.

 `<?php 
 $freecodecamp = array("free"=>"0","code"=>"1","camp"=>"2"); 
` 

`$freecodecamp['free']` سيعود "0" ، `$freecodecamp['code']` سيعود "1" ، `$freecodecamp['camp']` سيعود "2" ،

### مثال صفيف متعدد الأبعاد

المصفوفة متعددة الأبعاد هي مصفوفة تحتوي على صفائف أخرى.

 `<?php 
 $freecodecamp = array(array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2")); 
` 

#### معلومات اكثر:

*   [صفائف php.net اليدوي](https://secure.php.net/manual/en/language.types.array.php)