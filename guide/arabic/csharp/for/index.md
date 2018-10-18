---
title: For Loop
localeTitle: لحلقة
---
# لحلقة

تقوم الحلقة `for` بتنفيذ كتلة من التعليمة البرمجية حتى يكون الشرط المحدد خاطئًا. على الرغم من أن حلقة `for` تبدو وكأنها [حلقة في `while`](https://guide.freecodecamp.org/csharp/while-loop) ، يجب على المطورين استخدامها **بشكل صحيح** . استخدام `while` حلقات عندما يكون عدد التكرارات هي المتغير، وإلا استخدام `for` حلقات. استخدام شائع `for` حلقات التكرار هم مجموعة. 1

## بناء الجملة

 `for ((Initial variable); (condition); (step)) 
    { 
    (code) 
    } 
` 

يتكون C # للحلقة من ثلاثة تعبيرات وبعض التعليمات البرمجية.

## وصف

*   _المتغير الأولي_ : حالة البداية ، مثل int i = 0؛
*   _الحالة_ : على الرغم من أن هذا الشرط صحيح ، فسيستمر تشغيل الكود ، على سبيل المثال i <= 5؛
*   _الخطوة_ : زيادة أو إنقاص المتغير الأولي ، على سبيل المثال i ++ أو i- = 2.

## مثال

 `int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
` 

## انتاج:

 `> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
 > Item on index 3 is 4 
 > Item on index 4 is 5 
` 

### مصادر

1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for