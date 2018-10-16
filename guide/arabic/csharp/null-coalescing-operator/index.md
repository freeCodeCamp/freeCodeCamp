---
title: Null-coalescing Operator
localeTitle: Null-coalescing Operator
---
# Null-coalescing Operator

يتم استخدام عامل التوحيد للفرز في C # للمساعدة في تعيين متغير واحد إلى آخر وتحديد قيمة بديلة إذا كانت قيمة المصدر `null` . عامل التوليف في C # هو `??` .

## مثال 1

بما أن `name` `null` ، فسيتم تعيين `name` `clientName` "John Doe".

 `string name = null; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
` 

 `> John Doe 
` 

## مثال 2

نظرًا لأن `name` ليس `null` ، فسيتم تعيين `name` `clientName` ، وهو "Jane Smith".

 `string name = "Jane Smith"; 
 
 string clientName = name ?? "John Doe"; 
 
 Console.WriteLine(clientName); 
` 

 `> Jane Smith 
` 

## بديل إلى if… else Statement

يمكنك استخدام عبارة `if...else` لاختبار وجود `null` وتعيين قيمة مختلفة.

 `string clientName; 
 
 if (name != null) 
    clientName = name; 
 else 
    clientName = "John Doe"; 
` 

ومع ذلك ، يمكن تبسيط ذلك إلى حد كبير باستخدام مشغل التوليف الفارغ.

 `string clientName = name ?? "John Doe"; 
` 

## بديل لمشغل (شرطي) شرطي

من الممكن أيضًا استخدام المشغل الشرطي لاختبار وجود قيمة `null` وتعيين قيمة مختلفة.

 `string clientName = name != null ? name : "John Doe"; 
` 

مرة أخرى ، يمكن تبسيط ذلك باستخدام مشغل التوليف الفارغ.

 `string clientName = name ?? "John Doe"; 
` 

## المراجع

*   [؟؟ المشغل (C # مرجع)](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-conditional-operator)