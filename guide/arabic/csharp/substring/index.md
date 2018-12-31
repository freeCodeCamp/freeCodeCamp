---
title: Substring
localeTitle: فرعية
---# فرعية

مقتطفات `Substring` جزء من قيمة سلسلة. يتم استخدامه مع معلمتين صحيحتين ، الأول هو موقع الحرف الأول (يبدأ بالمؤشر 0) والثاني هو طول الحرف المطلوب.

## مثال

 `string firstSentence = "Apple, I have."; 
 string secondSentence = "I have a Pen."; 
 
 string apple = firstSentence.Substring(0,5); 
 string pen = secondSentence.Substring(9,3); 
 
 Console.WriteLine(apple); 
 Console.WriteLine(pen); 
` 

## انتاج:

 `>Apple 
 >Pen 
`