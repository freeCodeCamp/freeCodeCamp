---
title: Hello World
localeTitle: 你好，世界
---
# 你好，世界

要在控制台上编写一些文本，我们使用`Console.WriteLine()` 。此方法将字符串作为输入。

## 例

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

## 输出：
```shell
> Hello World! 
 > Press any key to exit. 

```
