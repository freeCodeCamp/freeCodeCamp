---
title: Ternary operator
localeTitle: المشغل الثلاثي
---
# المشغل الثلاثي ( `?:` :)

يقوم المشغل الثلاثي بإرجاع أحد التعبيرين بناءً على الشرط. يمكن استخدامه كاختصار إذا كان ... عبارة أخرى.

## بناء الجملة

 `condition_expression ? expression_1 : expression_2 
` 

### معامل

`condition_expression` تعبير منطقي.

`expression_1` تمت إعادته إذا كان `condition_expression` صحيحًا.

`expression_2` تم الإرجاع إذا كان `condition_expression` غير صحيح.

## مثال

 `// initialize - set true or false here to view different result 
 bool hasFreeSweet = false; 
 
 string str = hasFreeSweet ? "Free sweet!" : "No free sweet."; 
 
 //output in console 
 Console.WriteLine(str); 
` 

## انتاج |

 `if hasFreeSweet == true 
 > Free sweet! 
 
 if hasFreeSweet == false 
 > No free sweet. 
`