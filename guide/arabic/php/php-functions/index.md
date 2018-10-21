---
title: PHP functions
localeTitle: وظائف PHP
---
تشبه وظائف PHP لغات البرمجة الأخرى. الدالة هي جزء من الكود يأخذ مدخلاً أكثر في شكل معلمة ويقوم ببعض المعالجة ويعيد قيمة.

لقد سبق لك أن شاهدت العديد من الوظائف مثل fopen () و fread () وما إلى ذلك. إنها وظائف مدمجة ولكن PHP يمنحك خيارًا لإنشاء وظائفك الخاصة أيضًا.

هناك جزئين يجب أن يكونا واضحين لك -

### خلق وظيفة PHP

استدعاء وظيفة PHP في الواقع لا تحتاج إلى إنشاء وظيفة PHP الخاصة بك لأن هناك بالفعل أكثر من 1000 من وظائف المكتبة المدمجة التي تم إنشاؤها لمنطقة مختلفة وتحتاج فقط إلى الاتصال بهم وفقا لمتطلباتكم.

يرجى الرجوع إلى PHP Function Reference للحصول على مجموعة كاملة من الوظائف المفيدة.

خلق وظيفة PHP من السهل جدا لخلق وظيفة PHP الخاصة بك. افترض أنك تريد إنشاء وظيفة PHP والتي ستقوم ببساطة بكتابة رسالة بسيطة على متصفحك عندما تسميها. المثال التالي يقوم بإنشاء دالة تسمى writeMessage () ثم يقوم باستدعائها فقط بعد إنشائها.

لاحظ أنه أثناء إنشاء دالة ، يجب أن يبدأ اسمها بوظيفة الكلمة الرئيسية ويجب وضع كل شفرة PHP داخل {و} الأقواس كما هو موضح في المثال التالي أدناه

 `<html> 
 
   <head> 
      <title>Writing PHP Function</title> 
   </head> 
 
   <body> 
 
      <?php 
         /* Defining a PHP Function */ 
         function writeMessage() { 
            echo "You are really a nice person, Have a nice time!"; 
         } 
 
         /* Calling a PHP Function */ 
         writeMessage(); 
      ?> 
 
   </body> 
 </html> 
` 

سيظهر هذا النتيجة التالية -

 `You are really a nice person, Have a nice time! 
` 

### وظائف PHP مع المعلمات

يمنحك PHP خيار تمرير المعلمات داخل إحدى الوظائف. يمكنك تمرير العديد من المعلمات مثل الخاص بك. تعمل هذه المعلمات مثل المتغيرات داخل وظيفتك. يأخذ المثال التالي معلمتين صحيحتين ويضيفانهما معاً ثم يطبعانهما.

 `<html> 
 
   <head> 
      <title>Writing PHP Function with Parameters</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            echo "Sum of the two numbers is : $sum"; 
         } 
 
         addFunction(10, 20); 
      ?> 
 
   </body> 
 </html> 
` 

سيظهر هذا النتيجة التالية -

 `Sum of the two numbers is : 30 
` 

### تمرير الحجج حسب المرجع

من الممكن تمرير الحجج إلى الوظائف حسب المرجع. وهذا يعني أن الإشارة إلى المتغير يتم معالجتها بواسطة الدالة بدلاً من نسخة من قيمة المتغير.

أي تغييرات يتم إجراؤها على وسيطة في هذه الحالات ستغير قيمة المتغير الأصلي. يمكنك تمرير وسيطة بالرجوع عن طريق إضافة علامة العطف إلى اسم المتغير إما في استدعاء الدالة أو تعريف الدالة.

المثال التالي يصور كلتا الحالتين.

 `<html> 
 
   <head> 
      <title>Passing Argument by Reference</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFive($num) { 
            $num += 5; 
         } 
 
         function addSix(&$num) { 
            $num += 6; 
         } 
 
         $orignum = 10; 
         addFive( $orignum ); 
 
         echo "Original Value is $orignum<br />"; 
 
         addSix( $orignum ); 
         echo "Original Value is $orignum<br />"; 
      ?> 
 
   </body> 
 </html> 
` 

سيظهر هذا النتيجة التالية -

 `Original Value is 10 
 Original Value is 16 
` 

### وظائف PHP العودة القيمة

يمكن أن تقوم الدالة بإرجاع قيمة باستخدام عبارة الإرجاع بالاقتران مع قيمة أو كائن. العودة توقف تنفيذ وظيفة ويرسل القيمة مرة أخرى إلى رمز الاتصال.

يمكنك إرجاع أكثر من قيمة واحدة من دالة باستخدام صفيف الإرجاع (1،2،3،4).

المثال التالي يأخذ معلمتين صحيحتين ويضيفانهما معاً ثم يعيدان مجموعهما إلى برنامج الاستدعاء. لاحظ أنه يتم استخدام الكلمة الرئيسية الإرجاع لإرجاع قيمة من دالة.

 `<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function addFunction($num1, $num2) { 
            $sum = $num1 + $num2; 
            return $sum; 
         } 
         $return_value = addFunction(10, 20); 
 
         echo "Returned value from the function : $return_value"; 
      ?> 
 
   </body> 
 </html> 
` 

سيظهر هذا النتيجة التالية -

 `Returned value from the function : 30 
` 

### ضبط القيم الافتراضية لمعلمات الدالة

يمكنك تعيين معلمة بحيث يكون لديك قيمة افتراضية إذا كان المتصل التابع للوظيفة لا يمررها.

طباعة الدالة التالية لا تستخدم قيمة NULL في حالة الاستخدام أي قيمة لهذه الوظيفة.

 `<html> 
 
   <head> 
      <title>Writing PHP Function which returns value</title> 
   </head> 
 
   <body> 
 
      <?php 
         function printMe($param = NULL) { 
            print $param; 
         } 
 
         printMe("This is test"); 
         printMe(); 
      ?> 
 
   </body> 
 </html> 
` 

هذا سينتج النتيجة التالية -

 `This is test 
` 

### المكالمات الديناميكية

من الممكن تعيين أسماء الدوال كسلاسل إلى المتغيرات ثم التعامل مع هذه المتغيرات تمامًا كما تفعل مع اسم الوظيفة نفسه. المثال التالي يصور هذا السلوك.

 `<html> 
 
   <head> 
      <title>Dynamic Function Calls</title> 
   </head> 
 
   <body> 
 
      <?php 
         function sayHello() { 
            echo "Hello<br />"; 
         } 
 
         $function_holder = "sayHello"; 
         $function_holder(); 
      ?> 
 
   </body> 
 </html> 
` 

سيظهر هذا النتيجة التالية -

 `Hello 
`