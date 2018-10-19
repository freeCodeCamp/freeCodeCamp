---
title: Sorting Arrays
localeTitle: فرز المصفوفات
---
## فرز المصفوفات

تقدم PHP العديد من الوظائف لفرز المصفوفات. تصف هذه الصفحة الوظائف المختلفة وتتضمن أمثلة.

### فرز()

تقوم الدالة `sort()` بفرز قيم صفيف بترتيب أبجدي / رقمي تصاعدي (على سبيل المثال A ، B ، C ، D ، E… 5 ، 4 ، 3 ، 2 ، 1 ...)

 `<?php 
 $freecodecamp = array("free", "code", "camp"); 
 sort($freecodecamp); 
 print_r($freecodecamp); 
` 

**انتاج:**

 `Array 
 ( 
    [0] => camp 
    [1] => code 
    [2] => free 
 ) 
` 

### rsort ()

تقوم `rsort()` بفرز قيم صفيف في ترتيب أبجدي / رقمي تنازلي (Eg Z، Y، X، W، V… 5، 4، 3، 2، 1…)

 `<?php 
 $freecodecamp = array("free", "code", "camp"); 
 rsort($freecodecamp); 
 print_r($freecodecamp); 
` 

**انتاج:**

 `Array 
 ( 
    [0] => free 
    [1] => code 
    [2] => camp 
 ) 
` 

### asort ()

تقوم الدالة `asort()` بفرز مصفوفة ارتباطية ، حسب قيمها ، بترتيب أبجدي / رقمي تصاعدي (على سبيل المثال A ، B ، C ، D ، E… 5 ، 4 ، 3 ، 2 ، 1 ...)

 `<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 asort($freecodecamp); 
 print_r($freecodecamp); 
` 

**انتاج:**

 `Array 
 ( 
    [two] => camp 
    [one] => code 
    [zero] => free 
 ) 
` 

### ksort ()

تقوم `ksort()` بترتيب مصفوفة `ksort()` ، حسب مفاتيحها ، بترتيب أبجدي / رقمي تصاعدي (على سبيل المثال A ، B ، C ، D ، E… 5 ، 4 ، 3 ، 2 ، 1 ...)

 `<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 ksort($freecodecamp); 
 print_r($freecodecamp); 
` 

**انتاج:**

 `Array 
 ( 
    [one] => code 
    [two] => camp 
    [zero] => free 
 ) 
` 

### arsort ()

تقوم `arsort()` بترتيب مصفوفة `arsort()` ، حسب قيمها ، بترتيب أبجدي / رقمي تنازلي (Eg Z ، Y ، X ، W ، V… 5 ، 4 ، 3 ، 2 ، 1 ...)

 `<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 arsort($freecodecamp); 
 print_r($freecodecamp); 
` 

**انتاج:**

 `Array 
 ( 
    [zero] => free 
    [one] => code 
    [two] => camp 
 ) 
` 

### krsort ()

تقوم `krsort()` بترتيب مصفوفة `krsort()` ، من خلال مفاتيحها في ترتيب أبجدي / رقمي تنازلي (Eg Z ، Y ، X ، W ، V… 5 ، 4 ، 3 ، 2 ، 1 ...)

 `<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 krsort($freecodecamp); 
 print_r($freecodecamp); 
` 

**انتاج:**

 `Array 
 ( 
    [zero] => free 
    [two] => camp 
    [one] => code 
 ) 
` 

#### معلومات اكثر:

*   [php.net sort () دليل](https://secure.php.net/manual/en/function.sort.php)
*   [php.net rsort () دليل](https://secure.php.net/manual/en/function.rsort.php)
*   [php.net asort () دليل](https://secure.php.net/manual/en/function.asort.php)
*   [php.net ksort () دليل](https://secure.php.net/manual/en/function.ksort.php)
*   [php.net arsort () دليل](https://secure.php.net/manual/en/function.arsort.php)
*   [php.net krsort () دليل](https://secure.php.net/manual/en/function.krsort.php)
*   [php.net print\_r () دليل](https://secure.php.net/manual/en/function.print-r.php)