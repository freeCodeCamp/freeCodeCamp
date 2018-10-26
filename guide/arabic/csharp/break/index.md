---
title: Break statement
localeTitle: بيان استراحة
---
# بيان استراحة

إنهاء بيان `break` في enclosing حلقة أو عبارة التبديل الذي يظهر. يتم تمرير عنصر التحكم إلى العبارة التي تتبع الحلقة أو كتلة التبديل.

في المثال الأول ، عندما تكون قيمة i هي 3 ، يتم تنفيذ كشف الفاصل ، مما يؤدي إلى إنهاء تنفيذ الحلقة.

## مثال

 `int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if(i == 3) 
  { 
    break; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
` 

## انتاج:

 `> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
` 

في المثال الثاني ، يتم تضمين بيان فاصل في نهاية كل حالة. هذا ينفذ البيانات في القضية دون الاستمرار في القضية القادمة. بدون بيان الاستراحة ، سيستمر البرنامج في تنفيذ الحالة التالية ولن يعمل على النحو المنشود.

## مثال

 `switch (exampleVariable) 
 { 
    case 1: 
        Console.WriteLine("case 1"); 
        Console.WriteLine("This only shows in example 1"); 
        break; 
    case 2: 
        Console.WriteLine("case 2"); 
        Console.WriteLine("This only shows in example 2"); 
    Console.WriteLine("This also only shows in example 2"); 
        break; 
    Console.WriteLine("This would not show anywhere, as it is after the break line and before the next case"); 
    default: 
        Console.WriteLine("default"); 
        Console.WriteLine("This only shows in the Default Example"); 
        break; 
 } 
` 

## انتاج:

 `> case 1 
 > This only shows in example 1 
 > 
 > case  2 
 > This only shows in example 2 
 > This also only shows in example 2 
 > 
 > default 
 > This only shows in the Default Example 
 > 
`