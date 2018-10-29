---
title: Split
localeTitle: انشق، مزق
---# طريقة الانقسام

يوزع أسلوب `String.Split` سلسلة: كإدخال ، يأخذ حرف يشير إلى الفاصل ويقوم بإنشاء صفيف سلاسل فرعية.

## مثال

 `string myText = "I like pizza"; 
 
 // Split the string by ' '(space) character. 
 string[] splitResult = myText.Split(' '); 
 
 // The array splitResult, now contains three substrings. 
 
 // Now print the array of substrings 
 foreach(string x in splitResult) 
 { 
    // Write On Console 
    Console.WriteLine(x); 
 } 
` 

## انتاج:

 `> I 
 > like 
 > pizza 
`