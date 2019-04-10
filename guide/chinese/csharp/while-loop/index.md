---
title: While Loop
localeTitle: 而Loop
---# 而Loop

while循环执行代码块，直到指定的条件为false。因为while表达式的测试是在每次执行循环之前进行的，所以while循环执行零次或多次。这与do循环不同，do循环执行一次或多次，因为表达式的测试发生在循环执行之后。 1

## 例

```csharp
int i = 0; 
 while (i < 5) 
 { 
    Console.WriteLine("Number " + i); 
    i++; 
 } 
```

### 输出：
```
> Number 0 
 > Number 1 
 > Number 2 
 > Number 3 
 > Number 4 
```

## 其他用途

while循环通常通过使用（例如） `while (true)`用于无限的iterrations，仅通过与循环的初始条件无关的条件结束。

```csharp
int i = 0; 
 while (true) 
 { 
    if(i<50){ 
        Console.WriteLine("Number " + i); 
        i++; 
    } 
    else{ 
        Console.WriteLine("End of loop"); 
        break; 
    } 
 } 
```

## 与`for`循环的差异

`for`和`while`循环之间的最大区别在于， `while`通常在开发人员不确定循环的确切迭代次数时使用，而`for`用于清楚迭代代码的次数时使用。

### 来源

*   [微软C＃ - 同时](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while)