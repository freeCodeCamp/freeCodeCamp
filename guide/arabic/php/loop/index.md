---
title: Loop
localeTitle: عقدة
---
# حلقة PHP

عندما تحتاج إلى تكرار نفس المهمة لعدة مرات ، يمكنك استخدام الحلقة بدلاً من الاستمرار في إضافة نفس التعليمة البرمجية مرارًا وتكرارًا. في PHP لديك العبارات التالية حلقة:

*   ل - حلقة من خلال كتلة من التعليمات البرمجية مع عدد محدد من المرات.
*   أثناء التكرار - من خلال كتلة من الكود إذا كان الشرط صحيحًا.
*   do… while - عرِّف من خلال كتلة من الكود الأول وتابع الحل إذا كان الشرط صحيحًا.
*   foreach - عرّف من خلال كتلة من الرمز لكل قيمة داخل صفيف.

يمكن أن يؤدي استخدام `break` داخل الحلقة إلى إيقاف تنفيذ الحلقة.

# لحلقة

التكرار من خلال كتلة من الكود مع عدد محدد من المرات.

## بناء الجملة

 `for (init counter; condition; counter increment or decrement) 
 { 
    // Code to be executed 
 } 
` 

## مثال

 `<?php 
 for($index = 0; $index < 5; $index ++) 
 { 
    echo "Current loop counter ".$index.".\n"; 
 } 
 ?> 
` 

## انتاج |

 `> Current loop counter 0. 
 > Current loop counter 1. 
 > Current loop counter 2. 
 > Current loop counter 3. 
 > Current loop counter 4. 
` 

# حائط اللوب

قم بالالتفاف من خلال كتلة من التعليمات البرمجية إذا كان الشرط صحيحًا.

## بناء الجملة

 `while (condition) 
 { 
    // Code to be executed 
 } 
` 

## مثال

 `<?php 
 $index = 10; 
 while ($index >= 0) 
 { 
    echo "The index is ".$index.".\n"; 
    $index--; 
 } 
 ?> 
` 

## انتاج |

 `> The index is 10. 
 > The index is 9. 
 > The index is 8. 
 > The index is 7. 
 > The index is 6. 
 > The index is 5. 
 > The index is 4. 
 > The index is 3. 
 > The index is 2. 
 > The index is 1. 
 > The index is 0. 
` 

# هل ... في حين حلقة

قم بالالتفاف من خلال كتلة من الكود الأول وتابع الحلقة إذا كان الشرط صحيحًا.

## بناء الجملة

 `do 
 { 
    // Code to be executed 
 } 
 while (condition); 
` 

## مثال

 `<?php 
 $index = 3; 
 do 
 { 
    // execute this at least 1 time 
    echo "Index: ".$index.".\n"; 
    $index --; 
 } 
 while ($index > 0); 
 ?> 
` 

## انتاج |

 `> Index: 3. 
 > Index: 2. 
 > Index: 1. 
` 

# حلقة foreach

قم بالالتفاف من خلال كتلة من التعليمات البرمجية لكل قيمة داخل صفيف.

## بناء الجملة

 `foreach ($array as $value) 
 { 
    // Code to be executed 
 } 
` 

## مثال

 `<?php 
 $array = ["Ali", "Ah Kao", "Muthu", "Gwen", "Lucida", "Cecily", "Arthur", "Flora"]; 
 foreach ($array as $name) 
 { 
    echo "Hi, my name is ".$name.".\n"; 
 
    if ($name == "Cecily") 
    { 
        echo "\"Hello, ".$name."!\""; 
 
        // stop the loop if name is Cecily 
        break; 
    } 
 } 
 ?> 
` 

## انتاج |

 `> Hi, my name is Ali. 
 > Hi, my name is Ah Kao. 
 > Hi, my name is Muthu. 
 > Hi, my name is Gwen. 
 > Hi, my name is Lucida. 
 > Hi, my name is Cecily. 
 > "Hello, Cecily!" 
`