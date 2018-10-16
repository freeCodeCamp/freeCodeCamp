---
title: Hello World
localeTitle: مرحبا بالعالم
---# مرحبا بالعالم

لكتابة بعض النص على وحدة التحكم ، نستخدم `Console.WriteLine()` . تأخذ هذه الطريقة سلسلة كإدخال.

## مثال

 `using System; 
 
 namespace HelloWorld 
 { 
    class Hello 
    { 
        static void Main() 
        { 
            // Write "Hello World!" on console 
            Console.WriteLine("Hello World!"); 
 
            // Keep the console window open in debug mode. 
            Console.WriteLine("Press any key to exit."); 
            Console.ReadKey(); 
        } 
    } 
 } 
` 

## انتاج:

 `> Hello World! 
 > Press any key to exit. 
`