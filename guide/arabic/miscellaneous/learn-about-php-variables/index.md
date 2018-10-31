---
title: Learn About Php Variables
localeTitle: تعرف على متغيرات Php
---
المتغيرات هي حاويات لتخزين البيانات مثل `strings` ، `integers` ، `boolean` القيم، `array` والكائنات.

يتبع PHP قواعد معينة للإعلانات المتغيرة مثل:

*   يجب أن يبدأ المتغير بعلامة الدولار ($)

مثال:

`php <?php $var = 5; ?>`

*   يمكن أن يحتوي اسم المتغير على أحرف مثل AZ و az و 0-9 و \_ وحروف [ASCII](http://www.asciitable.com/ "ASCII Table") من 127-255.

مثال:

`php <?php $var = 5; //Valid $var_1 = "Foo"; //Valid $_var2 = 'Bar'; //Valid $var.3 = 'Baz'; //Invalid ?>`

*   يمكن أن يبدأ اسم المتغير بتسطير أسفل السطر (\_).

مثال:

`php <?php $_var2 = 'Bar'; //Valid ?>`

*   يجب ألا يبدأ اسم المتغير برقم 0-9.

مثال:

`php <?php $9var3 = 'Baz'; //Invalid ?>`

*   اسم المتغير حساس لحالة الأحرف.

مثال:

 `<?php 
    $var = 5; //Valid 
    $VAR = "Foo"; //Valid 
    echo $var; //Output 5 
    echo "<br>"; 
    echo $VAR; //Output Foo 
 ?> 
` 

لغة PHP هي لغة مكتوبة بشكل كبير ، وبالتالي لا نحتاج إلى إعلان نوع البيانات للمتغير عند التصريح عن المتغير. على عكس جافا أو C.

 `<?php 
    $var = 5; 
    $var2 = 4; 
    $sum = $var+$var2; 
    echo $sum; //Output 9 
    echo "<br>"; 
    echo $var+$var2; //Output 9 
 ?> 
` 

يمكن أيضا أن يتم تعيين المتغيرات عن طريق الرجوع. يسمح هذا للمتغيرين بالرجوع إلى نفس المحتوى. يتم وضع عامل التشغيل `&` قبل المتغير الذي يتم الرجوع إليه.

مثال:

 `<?php 
    $var1 = "foo"; 
    $var2 = "bar"; 
 
 myTest($var1, $var2); 
 
 echo $var1; //Output foo 
 echo $var2; //Output BAR 
 
 function myTest($var1, &$var2){ 
    $var1 = "FOO"; 
    $var2 = "BAR"; 
 } 
 ?> 
` 

لتعيين أسماء المتغيرات بشكل ديناميكي ، نستخدم المتغيرات المتغيرة. يمكن أن يكون هذا مفيدًا بشكل خاص عندما تكون هناك حاجة لإنشاء متغيرات متعددة.

مثال:

 `<?php 
 
    $var = 'Tom'; 
    echo $var;      //Output Tom 
    $$var = 'Cat'; //The value of $$var is the value of $var. So $$var and $Tom give the same output. 
    echo $$var;   //Output Cat 
    echo $Tom;   //Output Cat 
 ?> 
` 

# نطاق متغير

يشير نطاق المتغير إلى الأماكن التي يمكن الوصول إليها من المتغير.

*   النطاق العالمي للمتغيرات التي يتم تعريفها خارج دالة. يمكن الوصول إلى هذه المتغيرات من أي مكان ولكن ليس داخل وظيفة.
*   النطاق المحلي هو للمتغيرات التي تم تعريفها داخل وظيفة لا يمكن الوصول إليها من أي مكان خارج الدالة.

مثال:

 `<?php 
   $global = "Hello"; 
 
  function Test(){ 
   $local = "World"; 
   echo $global; //Error 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
` 

للوصول إلى المتغيرات العامة داخل وظيفة:

 `<?php 
   $global = "Hello"; 
 
 function Test(){ 
   global $global; 
   $local = "World"; 
   echo $global; //Output Hello 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
` 

# المتغيرات الثابتة

في كل مرة يتم إنشاء وظيفة يتم حذف جميع المتغيرات المحلية. للاحتفاظ بالقيمة الأخيرة للمتغير ، نعلن أنه `static` .

مثال:

 `<?php 
 
 function WithStatic(){ 
   static $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithStatic(); //Output 0 
   WithStatic(); //Output 1 
   WithStatic(); //Output 2 
 
 function WithoutStatic(){ 
   $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
 ?> 
`