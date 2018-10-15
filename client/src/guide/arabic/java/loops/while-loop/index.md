---
title: While Loop
localeTitle: حائط اللوب
---
# حائط اللوب

في `while` حلقة تنفيذ مرارا وتكرارا على كتلة من البيانات حتى الشرط المحدد داخل الأقواس بتقييم ل `false` . على سبيل المثال:

 `while (some_condition_is_true) 
 { 
    // do something 
 } 
` 

يتم تنفيذ كل "التكرار" (من تنفيذ كتلة البيانات) من قبل تقييم الشرط المحدد داخل الأقواس - يتم تنفيذ البيانات فقط إذا تم تقييم الشرط إلى `true` . إذا تم تقييمه إلى " `false` ، يتم استئناف تنفيذ البرنامج من العبارة الموجودة مباشرةً بعد المربع " `while` .

**ملاحظة** : بالنسبة إلى حلقة `while` لبدء التنفيذ ، يجب أن يكون الشرط `true` البداية. ومع ذلك ، للخروج من الحلقة ، يجب عليك القيام بشيء ما داخل كتلة العبارات للوصول في النهاية إلى التكرار عندما يتم تقييم الحالة إلى `false` (كما هو موضح أدناه). وإلا سيتم تنفيذ الحلقة إلى الأبد. (من الناحية العملية ، سيتم تشغيله حتى نفاد الذاكرة [JVM](https://guide.freecodecamp.org/java/the-java-virtual-machine-jvm) .)

## مثال

في المثال التالي ، يتم إعطاء `expression` بواسطة `iter_While < 10` . نحن زيادة `iter_While` بواسطة `1` كل مرة يتم تنفيذ الحلقة. حلقة `while` فواصل عندما تصل قيمة `iter_While` إلى `10` .

 `int iter_While = 0; 
 while (iter_While < 10) 
 { 
    System.out.print(iter_While + " "); 
    // Increment the counter 
    // Iterated 10 times, iter_While 0,1,2...9 
    iter_While++; 
 } 
 System.out.println("iter_While Value: " + iter_While); 
` 

انتاج:

 `0 1 2 3 4 5 6 7 8 9 
 iter_While Value: 10 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CJYj/0)