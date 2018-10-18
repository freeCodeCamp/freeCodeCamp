---
title: Continue statement
localeTitle: متابعة البيان
---
# متابعة البيان

و `continue` بيان يمر السيطرة على التكرار التالي داخل حلقة.

في هذا المثال ، عندما تكون قيمة i هي 2 ، يتم تخطي العبارة التالية داخل الحلقة.

## مثال

 `int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
  if( i == 2) 
  { 
    continue; 
  } 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
` 

## انتاج:

 `> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 3 is 4 
 > Item on index 4 is 5 
`