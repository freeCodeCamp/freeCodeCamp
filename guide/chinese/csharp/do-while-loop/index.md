---
title: Do while loop
localeTitle: 做循环
---
# 做循环

`do while`循环执行一次代码块，直到条件为假。它们是[`while`循环的](https://guide.freecodecamp.org/csharp/while-loop)一个特例：它们执行一次代码块，然后直到条件为假。 `do while`循环的常见用法是输入检查。

## 例
```
do 
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
```

## 输出：
```
> Type A to continue: b 
 > Type A to continue: g 
 > Type A to continue: A 
 > Bye! 
```

#### 更多信息：

*   [微软C＃ - 做](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/do)
*   [Dot Net Perls - 做](https://www.dotnetperls.com/do)