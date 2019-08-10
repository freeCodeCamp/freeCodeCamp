---
title: For Loop
localeTitle: 对于循环
---
# 对于循环

`for`循环执行代码块，直到指定的条件为false。虽然`for`循环看起来像[`while`循环](https://guide.freecodecamp.org/csharp/while-loop) ，但开发人员应该**正确**使用它们。当迭代次数可变时使用`while`循环，否则使用`for`循环。 `for`循环的常见用途是数组迭代。 1

## 句法

```csharp
for ((Initial variable); (condition); (step)) 
    { 
    (code) 
    } 
```

C＃for循环由三个表达式和一些代码组成。

## 描述

*   _初始变量_ ：您的起始状态，例如int i = 0;
*   _条件_ ：当此条件为真时，代码将继续运行，例如i <= 5;
*   _步骤_ ：初始变量的增量或减量，例如i ++或i- = 2。

## 例

```csharp
int[] array = { 1, 2, 3, 4, 5 }; 
 for (int i = 0; i < array.Length; i++) 
 { 
    Console.WriteLine("Item on index {0} is {1}", i, array[i]); 
 } 
```

## 输出：
```
> Item on index 0 is 1 
 > Item on index 1 is 2 
 > Item on index 2 is 3 
 > Item on index 3 is 4 
 > Item on index 4 is 5 
```

### 来源

1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/for