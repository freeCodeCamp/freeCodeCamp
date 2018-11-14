---
title: For Loop
localeTitle: لحلقة
---# لحلقة

تقوم الحلقة for بتنفيذ كتلة من التعليمات البرمجية بشكل متكرر حتى يتم تقييم التعبير الشرطي المحدد إلى false.

تشريح للحلقة:

 `for (initialization; condition; iterator) 
 { 
    body 
 } 
` 

*   التهيئة - تعيّن عبارة (أو أغراض) التهيئة الحالة الأولية ويتم تشغيلها مرة واحدة فقط قبل إدخال نص الحلقة.
*   condition - Boolean expression الذي يحدد ما إذا كان يجب تنفيذ نص الحلقة مرة أخرى أو يجب إنهاء الحلقة.
*   iterator - ينفذ بعد كل تكرار لنطاق الحلقة.

### مثال 1

 `for (int i = 0; i < 5; i++) 
 { 
    Console.WriteLine("Number " + i); 
 } 
` 

### انتاج:

 `> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
` 

### مثال 2

 `int j = 0; 
 for (int i = 0; j < 5; i++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
    j++; 
 } 
` 

### انتاج:

 `> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
` 

### المثال 3 - تبسيط المثال 2

 `for (int i = 0, j = 0; i < 5 && j < 5; i++, j++) 
 { 
    Console.WriteLine("Numbers {0} {1}", i, j); 
 } 
` 

### انتاج:

 `> Numbers 0 0 
 > Numbers 1 1 
 > Numbers 2 2 
 > Numbers 3 3 
 > Numbers 4 4 
` 

### مثال 4

 `for (int i = 5; i > 0; i--) 
 { 
    Console.WriteLine("Number " + i); 
 } 
` 

### انتاج:

 `> Number 5 
 > Number 4 
 > Number 3 
 > Number 2 
 > Number 1 
` 

### مثال 5

 `// Infinite loop - The loop body is executed infinitely 
 for (; ;) 
 { 
    Console.WriteLine("The universe is infinite"); 
 } 
 
 // Anything after infinite loop is reported as "Unreachable code detected" in Visual Studio 
 Console.WriteLine("Never considered for execution"); 
` 

### انتاج:

 `> The universe is infinite 
 > The universe is infinite 
 > The universe is infinite 
 > .... 
 > .... 
` 

### مثال 6

 `int i = 0; 
 for (; i < 5;) 
 { 
    Console.WriteLine("Number " + i); 
    i++; 
 } 
` 

### انتاج:

 `> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
` 

### موارد آخرى

*   [وثائق مايكروسوفت](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for)

## النهاية