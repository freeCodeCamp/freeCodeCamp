---
title: Php Arrays
localeTitle: صفائف Php
---
المصفوفة هي بنية بيانات تخزن نوعًا واحدًا أو أكثر من القيم المماثلة في قيمة واحدة. على سبيل المثال ، إذا كنت تريد تخزين 100 رقم ، فبدلاً من تحديد 100 متغير ، يسهل تعريف صفيف طوله 100.

يوجد ثلاثة أنواع مختلفة من المصفوفات ويتم الوصول إلى كل قيمة صفيف باستخدام معرف c الذي يسمى فهرس الصفيف.

مصفوفة رقمية - مصفوفة مع فهرس رقمي. يتم تخزين القيم والوصول إليها بطريقة خطية.

مصفوفة ترابطية - صفيف يحتوي على سلاسل كمؤشر. هذا يخزن قيم العناصر بالاقتران مع قيم المفتاح بدلاً من ترتيب فهرس خطي صارم.

الصفيف متعدد الأبعاد - يتم الوصول إلى مصفوفة تحتوي على صفيف أو قيم واحدة أو أكثر باستخدام مؤشرات متعددة

ملاحظة - يتم إعطاء وظائف المصفوفة المضمنة في وظيفة مرجع وظائف صفيف PHP

### مصفوفة عددية

يمكن لهذه المصفوفات تخزين الأرقام والسلاسل وأي كائن ولكن سيتم تمثيل الفهرس بالأرقام. افتراضيا مجموعة فهرس يبدأ من الصفر.

#### مثال

فيما يلي مثال يوضح كيفية إنشاء المصفوفات الرقمية والوصول إليها.

هنا قمنا باستخدام وظيفة array () لإنشاء مجموعة. يتم شرح هذه الوظيفة في مرجع الدالة.

 `<html> 
   <body> 
 
      <?php 
         /* First method to create array. */ 
         $numbers = array( 1, 2, 3, 4, 5); 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
 
         /* Second method to create array. */ 
         $numbers[0] = "one"; 
         $numbers[1] = "two"; 
         $numbers[2] = "three"; 
         $numbers[3] = "four"; 
         $numbers[4] = "five"; 
 
         foreach( $numbers as $value ) { 
            echo "Value is $value <br />"; 
         } 
      ?> 
 
   </body> 
 </html> 
` 

سيؤدي ذلك إلى النتيجة التالية -

 `Value is 1 
 Value is 2 
 Value is 3 
 Value is 4 
 Value is 5 
 Value is one 
 Value is two 
 Value is three 
 Value is four 
 Value is five 
` 

### صفيفات الارتباط

تتشابه الصفائف الترابطية إلى حد كبير مع المصفوفات الرقمية من حيث الوظيفة ولكنها تختلف من حيث مؤشرها. سيكون للمجموعة المصاحبة مؤشرها كسلسلة حتى تتمكن من إنشاء ارتباط قوي بين المفتاح والقيم.

لتخزين رواتب الموظفين في مصفوفة ، لن تكون المجموعة المفهرسة عدديًا هي الخيار الأفضل. بدلاً من ذلك ، كان بإمكاننا استخدام أسماء الموظفين كمفاتيح في صفنا النقابي ، وستكون القيمة هي الراتب الخاص بهم.

ملاحظة - لا تحتفظ بصفيف اقتران داخل عرض سعر مزدوج أثناء الطباعة وإلا لن يعيد أي قيمة.

 `Example 
 <html> 
   <body> 
 
      <?php 
         /* First method to associate create array. */ 
         $salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500); 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
 
         /* Second method to create array. */ 
         $salaries['mohammad'] = "high"; 
         $salaries['qadir'] = "medium"; 
         $salaries['zara'] = "low"; 
 
         echo "Salary of mohammad is ". $salaries['mohammad'] . "<br />"; 
         echo "Salary of qadir is ".  $salaries['qadir']. "<br />"; 
         echo "Salary of zara is ".  $salaries['zara']. "<br />"; 
      ?> 
 
   </body> 
 </html> 
` 

سيؤدي ذلك إلى النتيجة التالية -

 `Salary of mohammad is 2000 
 Salary of qadir is 1000 
 Salary of zara is 500 
 Salary of mohammad is high 
 Salary of qadir is medium 
 Salary of zara is low 
` 

### صفائف متعددة الأبعاد

مصفوفة متعددة الأبعاد يمكن أن يكون كل عنصر في المصفوفة الرئيسية مصفوفة. ويمكن أن يكون كل عنصر في المصفوفة الفرعية مصفوفة ، وهكذا. يتم الوصول إلى القيم في مجموعة متعددة الأبعاد باستخدام فهرس متعددة.

مثال في هذا المثال ، نخلق مصفوفة ثنائية الأبعاد لتخزين علامات ثلاثة طلاب في ثلاثة مواضيع -

هذا المثال عبارة عن مصفوفة ارتباطية ، يمكنك إنشاء صفيف رقمي بنفس الطريقة.

 `<html> 
   <body> 
 
      <?php 
         $marks = array( 
            "mohammad" => array ( 
               "physics" => 35, 
               "maths" => 30, 
               "chemistry" => 39 
            ), 
 
            "qadir" => array ( 
               "physics" => 30, 
               "maths" => 32, 
               "chemistry" => 29 
            ), 
 
            "zara" => array ( 
               "physics" => 31, 
               "maths" => 22, 
               "chemistry" => 39 
            ) 
         ); 
 
         /* Accessing multi-dimensional array values */ 
         echo "Marks for mohammad in physics : " ; 
         echo $marks['mohammad']['physics'] . "<br />"; 
 
         echo "Marks for qadir in maths : "; 
         echo $marks['qadir']['maths'] . "<br />"; 
 
         echo "Marks for zara in chemistry : " ; 
         echo $marks['zara']['chemistry'] . "<br />"; 
      ?> 
 
   </body> 
 </html> 
` 

سيؤدي ذلك إلى النتيجة التالية -

 `Marks for mohammad in physics : 35 
 Marks for qadir in maths : 32 
 Marks for zara in chemistry : 39 
`