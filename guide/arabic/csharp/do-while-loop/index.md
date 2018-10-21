---
title: Do while loop
localeTitle: هل في حين حلقة
---
# هل في حين حلقة

`do while` الحلقة `do while` بتطبيق كتلة من الكود مرة واحدة وحتى تصبح الحالة خاطئة. وهي حالة خاصة من [الحلقات `while`](https://guide.freecodecamp.org/csharp/while-loop) : تقوم بتنفيذ كتلة من الكود مرة واحدة ثم إلى أن تكون الحالة خاطئة. الاستخدام الشائع للعلاقة `do while` إجراء عمليات فحص الإدخال.

## مثال

 `do 
 { 
    //execute code block 
 
 
 } while(boolean expression); 
 
 
 string input = ""; 
 do 
 { 
    Console.WriteLine("Type A to continue: "); 
    input = Console.ReadLine(); 
 } while(input != "A"); 
 
 Console.WriteLine("Bye!"); 
` 

## انتاج:

 `> Type A to continue: b 
 > Type A to continue: g 
 > Type A to continue: A 
 > Bye! 
` 

#### معلومات اكثر:

*   [مايكروسوفت ج # - القيام به](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
*   [دوت نت بيرلز - افعل](https://www.dotnetperls.com/do)