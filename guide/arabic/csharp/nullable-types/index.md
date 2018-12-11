---
title: Nullable Types
localeTitle: أنواع nullable
---
## أنواع nullable

أنواع nullable هي مثيلات من [System.Nullable \\](https://docs.microsoft.com/en-us/dotnet/api/system.nullable-1) البنية. يمكن أن يمثل نوع nullable نطاق القيم الصحيح لنوع القيمة الأساسي الخاص به ، بالإضافة إلى قيمة `null` إضافية. هذه القدرة مفيدة للغاية عند التعامل مع قواعد البيانات أو أنواع البيانات الأخرى التي قد تحتوي على عناصر بدون قيمة معينة.

#### كيفية استخدام نوع nullable

 `// Declare a variable of Nullable type (Nullable<int>) 
 int? i = null; 
 
 int  j = 0; 
 int defaultValue = 0; 
 
 // test for null and assign value to another variable 
 if (i.HasValue) 
 { 
    j = i.Value; 
 } 
 
 // get assigned value or default when current value is null 
 j = i.GetValueOrDefault(); // i.GetValueOrDefault(defaultValue) 
 
 //use coalescing operator to assign default value when current value is null 
 j = i ?? defaultValue; 
` 

لمزيد من المعلومات ، قم بزيارة الرابط التالي:

*   [C # Programming Guide: Nullable Types](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/nullable-types/)