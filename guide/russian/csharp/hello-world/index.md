---
title: Hello World
localeTitle: Привет мир
---
# Привет мир

Чтобы написать текст на консоли, мы используем `Console.WriteLine()` . Этот метод принимает строку как ввод.

## пример

```csharp
using System; 
 
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
```

## Вывод:
```shell
> Hello World! 
 > Press any key to exit. 

```
