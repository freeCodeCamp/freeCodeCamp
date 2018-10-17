---
title: Functions
localeTitle: المهام
---
## وظائف PHP مقدمة

الدالة هي كتلة من العبارات التي يمكن استخدامها بشكل متكرر في أحد البرامج.

### وظيفة بسيطة + دعوة

 `function say_hello() { 
  return "Hello!"; 
 } 
 
 echo say_hello(); 
` 

### وظيفة بسيطة + معلمة + مكالمة

 `function say_hello($friend) { 
  return "Hello " . $friend . "!"; 
 } 
 
 echo say_hello('Tommy'); 
` 

### strtoupper - يجعل جميع الشخصيات أكبر وأكبر!

 `function makeItBIG($a_lot_of_names) { 
  foreach($a_lot_of_names as $the_simpsons) { 
    $BIG[] = strtoupper($the_simpsons); 
  } 
  return $BIG; 
 } 
 
 $a_lot_of_names = ['Homer', 'Marge', 'Bart', 'Maggy', 'Lisa']; 
 var_dump(makeItBIG($a_lot_of_names)); 
` 

#### معلومات اكثر:

*   [دليل المستخدم php.net وظائف محددة](https://secure.php.net/manual/en/functions.user-defined.php)