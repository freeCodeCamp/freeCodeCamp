---
title: If
localeTitle: إذا
---
# إذا

بيان if تنفيذ كتل مختلفة من التعليمات البرمجية استناداً إلى الشروط.

 ``if (condition) 
 { 
    // Do something when `condition` is true 
 } 
 else 
 { 
    // Do something when `condition` is false 
 } 
`` 

عندما `condition` صحيحة، رمز داخل `if` قسم ينفذ، وإلا `else` ينفذ. في بعض الأحيان ، ستحتاج إلى إضافة شرط ثانٍ. للقراءة ، يجب عليك استخدام `else if` بدلا من التعشيش `if` البيانات. بدلا من الكتابة:

 ``if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else 
 { 
    if (anotherCondition) 
    { 
        // Do something if `anotherCondition` is true 
    } 
    else 
    { 
        // Do something if `condition` AND `anotherCondition` is false 
    } 
 } 
`` 

يمكنك استخدام الكتابة الأكثر اختصارًا:

 ``if (condition) 
 { 
    // Do something if `condition` is true 
 } 
 else if (anotherCondition) 
 { 
    // Do something if `anotherCondition` is ture 
 } 
 else 
 { 
    // Do something if `condition` AND `anotherCondition` is false 
 } 
`` 

من الممكن أيضًا التحقق مما إذا كان الشرط خاطئًا والتعامل معه دون الحاجة إلى الحصول على بيان آخر.

 `if(!condition) 
 { 
 //do something if the condition is false 
 } 
` 

 `int number = 3; 
 //!= implies that you wish to check if the object's value is not equal to the value next to it 
 if(number !=2) 
 { 
     Console.WriteLine("Number is not 2"); 
 } 
` 

ﻻﺣ Note أن `else` وﻣﺎ `else if` آﺎﻧﺖ اﻷﻗﺴﺎم ﻏﻴﺮ ﻣﻄﻠﻮﺑﺔ ، ﺑﻴﻨﻤﺎ `if` آﺎﻧﺖ إﻟﺰاﻣﻴﺔ.

## مثال

 `    Console.WriteLine("Who are you? "); 
    string name = Console.ReadLine(); 
 
    if (name == "John") 
    { 
        Console.WriteLine("Hi John!"); 
    } 
    else if (name == "Fabio") 
    { 
        Console.WriteLine("Oh, it's you Fabio :)"); 
    } 
    else 
    { 
        Console.WriteLine("Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!", name); 
    } 
 
    /* Run and type some names: 
        -> If name is "John", then output is "Hi John!" 
        -> If name is "Fabio", then output is "Oh, it's you Fabio :)" 
        -> If name is neither "John" nor "Fabio", output is "Oh! I thought you were John or Fabio. Anyway, nice to meet you {0}!" where {0} contains the name. 
    */ 
` 

إذا كانت العبارة تحتاج إلى نتيجة منطقية ، أي صواب أو خطأ. في بعض لغات البرمجة ، يمكن تحويل العديد من أنواع البيانات تلقائيًا إلى booleans ، ولكن في C # ، يجب أن تقوم بشكل منطقي بجعل النتيجة منطقية. على سبيل المثال ، لا يمكنك استخدام if (number) ، ولكن يمكنك مقارنة الرقم بشيء ما ، لتوليد true أو false.